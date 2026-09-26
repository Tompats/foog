import { getCollection } from 'astro:content';
import { localizeItem } from '../utils/i18n-content';
import type { Locale } from '../i18n/ui';
import type { Trip } from '../types';

// The `en` field from each trip's frontmatter travels along with the rest of
// the data so `getLocalizedTrip` can apply it without a second lookup.
interface TripEntry extends Trip {
  readonly translation?: Partial<Trip>;
}

export const getTrips = async (): Promise<TripEntry[]> => {
  const entries = await getCollection('trips');
  return entries.map((entry): TripEntry => {
    const { en, ...data } = entry.data;
    return { slug: entry.id, ...data, translation: en };
  });
};

export const getLocalizedTrip = (trip: TripEntry, locale: Locale): Trip =>
  localizeItem(trip, trip.translation, locale);
