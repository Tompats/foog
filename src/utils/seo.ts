import { siteMetadata } from "../data/site";
import type { Trip } from "../types";

const siteUrl = new URL(siteMetadata.siteUrl);
const siteOrigin = siteUrl.origin;
const siteBasePath = siteUrl.pathname.replace(/\/$/, "") || "";

const normalizePath = (path: string) =>
  path.startsWith("/") ? path : `/${path}`;

export const absoluteUrl = (path = "/") => {
  try {
    const url = new URL(path);
    return url.href;
  } catch (error) {
    const normalized = normalizePath(path);
    const needsBase =
      siteBasePath &&
      !normalized.startsWith(`${siteBasePath}/`) &&
      normalized !== siteBasePath;
    const pathWithBase = needsBase ? `${siteBasePath}${normalized}` : normalized;
    return new URL(pathWithBase, siteOrigin).href;
  }
};

export const createTripJsonLd = (trip: Trip, pageUrl: string) => {
  const startDate = new Date(trip.startDate).toISOString();
  const endDate = new Date(trip.endDate ?? trip.startDate).toISOString();
  const eventStatus =
    trip.status === "upcoming"
      ? "https://schema.org/EventScheduled"
      : "https://schema.org/EventCompleted";

  return {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    name: trip.title,
    url: pageUrl,
    description: trip.shortDescription,
    startDate,
    endDate,
    eventStatus,
    image: absoluteUrl(siteMetadata.defaultSocialImage),
    inLanguage: siteMetadata.locale,
    tourType: trip.type,
    itinerary: trip.activities.map((activity, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: activity,
    })),
    performer: {
      "@type": "Person",
      name: trip.leader,
    },
    areaServed: {
      "@type": "AdministrativeArea",
      name: "Greece",
    },
    location: {
      "@type": "Place",
      name: trip.location,
      address: {
        "@type": "PostalAddress",
        addressCountry: "GR",
      },
    },
    provider: {
      "@type": "SportsClub",
      name: siteMetadata.name,
      url: absoluteUrl("/"),
    },
  };
};

export const createCollectionPageJsonLd = (name: string, pageUrl: string) => ({
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name,
  url: pageUrl,
  inLanguage: siteMetadata.locale,
  isPartOf: absoluteUrl("/"),
});
