import { trips } from "../data/trips";
import type { Trip } from "../types";
import { isTripUpcoming, isTripPast } from "../types";

export const PAST_TRIPS_PAGE_SIZE = 6;

const sortUpcomingTrips = (list: Trip[]) =>
  [...list]
    .filter((trip) => isTripUpcoming(trip))
    .sort((a, b) => new Date(a.startDate).getTime() - new Date(b.startDate).getTime());

const sortPastTrips = (list: Trip[]) =>
  [...list]
    .filter((trip) => isTripPast(trip))
    .sort((a, b) => new Date(b.startDate).getTime() - new Date(a.startDate).getTime());

export const getPastTripTotalPages = () => {
  const totalPastTrips = sortPastTrips(trips).length;
  return Math.max(1, Math.ceil(totalPastTrips / PAST_TRIPS_PAGE_SIZE));
};

export const getTripListingData = (pageNumber: number) => {
  const upcomingTrips = sortUpcomingTrips(trips);
  const pastTripsOrdered = sortPastTrips(trips);
  const totalPastTrips = pastTripsOrdered.length;
  const totalPages = Math.max(1, Math.ceil(totalPastTrips / PAST_TRIPS_PAGE_SIZE));

  if (pageNumber < 1 || pageNumber > totalPages) {
    throw new Error(`Page ${pageNumber} is out of range`);
  }

  const startIndex = (pageNumber - 1) * PAST_TRIPS_PAGE_SIZE;
  const endIndex = startIndex + PAST_TRIPS_PAGE_SIZE;
  const pagedPastTrips = pastTripsOrdered.slice(startIndex, endIndex);

  return {
    upcomingTrips,
    pastTrips: pagedPastTrips,
    pagination: {
      currentPage: pageNumber,
      totalPages,
      totalPastTrips,
      pageSize: PAST_TRIPS_PAGE_SIZE,
    },
  };
};
