export type TripType = 'hiking' | 'mountaineering' | 'ski';

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
  status: 'upcoming' | 'past';
  shortDescription: string;
  location: string;
  activities: string[];
}

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
