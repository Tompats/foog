export type TripType = 'hiking' | 'mountaineering' | 'ski';

export type TripStatus = 'active' | 'canceled';

export interface Trip {
  slug: string;
  title: string;
  startDate: string;
  endDate?: string;
  type: TripType;
  difficulty: 1 | 2 | 3 | 4 | 5;
  elevationGain: number;
  distanceKm: number;
  leader: string;
  status: TripStatus;
  shortDescription: string;
  location: string;
  activities: string[];
  gear: string[];
  itinerary: TripItineraryDay[];
}

export interface TripItineraryDay {
  label: string;
  entries: string[];
}

export type TripTimelineStatus = 'upcoming' | 'past';

const getReferenceDate = (referenceDate?: Date) => referenceDate ?? new Date();

const compareWithReference = (
  date: string,
  referenceDate?: Date
): TripTimelineStatus => {
  const tripDate = new Date(date).getTime();
  const now = getReferenceDate(referenceDate).getTime();
  return tripDate >= now ? 'upcoming' : 'past';
};

export const getTripTimelineStatus = (
  trip: Pick<Trip, 'startDate'>,
  referenceDate?: Date
): TripTimelineStatus => compareWithReference(trip.startDate, referenceDate);

export const isTripUpcoming = (trip: Pick<Trip, 'startDate'>, referenceDate?: Date) =>
  getTripTimelineStatus(trip, referenceDate) === 'upcoming';

export const isTripPast = (trip: Pick<Trip, 'startDate'>, referenceDate?: Date) =>
  getTripTimelineStatus(trip, referenceDate) === 'past';

export interface Coach {
  name: string;
  role: string;
  photoUrl?: string;
  certifications?: string[];
  bio: string;
  specialties: string[];
}

export interface BoardMember {
  name: string;
  role: string;
  photoUrl?: string;
  bio: string;
}
