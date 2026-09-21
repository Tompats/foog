import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const itineraryDaySchema = z.object({
  label: z.string(),
  entries: z.array(z.string()),
});

// Translatable fields only, mirroring `TripTranslation` in src/data/trips.ts.
const tripTranslationSchema = z.object({
  title: z.string().optional(),
  shortDescription: z.string().optional(),
  location: z.string().optional(),
  activities: z.array(z.string()).optional(),
  gear: z.array(z.string()).optional(),
  itinerary: z.array(itineraryDaySchema).optional(),
});

const trips = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/trips' }),
  schema: z.object({
    title: z.string(),
    startDate: z.string(),
    endDate: z.string().optional(),
    type: z.enum(['hiking', 'mountaineering', 'ski']),
    difficulty: z.union([
      z.literal(1),
      z.literal(2),
      z.literal(3),
      z.literal(4),
      z.literal(5),
    ]),
    elevationGain: z.number(),
    distanceKm: z.number(),
    leader: z.string(),
    status: z.enum(['active', 'canceled']),
    shortDescription: z.string(),
    location: z.string(),
    activities: z.array(z.string()),
    gear: z.array(z.string()),
    itinerary: z.array(itineraryDaySchema),
    // English overrides for this trip. Leave a field out to fall back to the
    // Greek (default) value above.
    en: tripTranslationSchema.optional(),
  }),
});

export const collections = { trips };
