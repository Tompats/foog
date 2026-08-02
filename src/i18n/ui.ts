export type Locale = "el" | "en";

export const defaultLocale: Locale = "el";
export const locales: Locale[] = ["el", "en"];

export const languageNames: Record<Locale, string> = {
  el: "Ελληνικά",
  en: "English",
};

export const otherLocale = (locale: Locale): Locale =>
  locale === "el" ? "en" : "el";

// Short, reused-in-multiple-places UI chrome only. Page-specific long-form
// prose lives directly in each locale's page file, not here.
const el = {
  "nav.brandMark": "Φ.Ο.Ο.Γ",
  "nav.tagline": "Φυσιολατρικός Ορειβατικός Όμιλος Γιαννιτσών",
  "nav.home": "Αρχική",
  "nav.trips": "Εξορμήσεις",
  "nav.history": "Ποιοι είμαστε",
  "nav.winterSports": "Χιονοδρομία",
  "nav.join": "Γίνε μέλος",
  "nav.gallery": "Γκαλερί",
  "nav.contact": "Επικοινωνία",
  "nav.menuToggle": "Μενού",
  "nav.ariaLabel": "Κύρια πλοήγηση",
  "nav.skipLink": "Μετάβαση στο κύριο περιεχόμενο",
  "nav.languageSwitcherAriaLabel": "Επιλογή γλώσσας",

  "footer.heading": "Πάντα έτοιμοι για περιπέτεια.",
  "footer.subtitle":
    "Ανακαλύπτουμε το βουνό, μοιραζόμαστε στιγμές, αφήνουμε μόνο τα ίχνη μας.",
  "footer.linksAriaLabel": "Σύνδεσμοι υποσέλιδου",
  "footer.trips": "Εξορμήσεις",
  "footer.announcements": "Ανακοινώσεις",
  "footer.join": "Γίνε μέλος",
  "footer.contact": "Επικοινωνία",
  "footer.training": "Εκπαίδευση",
  "footer.board": "Διοίκηση",
  "footer.emailLabel": "Ηλ. ταχυδρομείο:",
  "footer.socialLabel": "Social Media:",
  "footer.disclaimer":
    "Τα ορεινά σπορ ενέχουν κινδύνους· συμμετέχετε εντός των ορίων σας και σύμφωνα με τα πρωτόκολλα του Φ.Ο.Ο.Γ.",
  "footer.rightsReserved": "Όλα τα δικαιώματα διατηρούνται.",
  "footer.madeWith": "Made with",
  "footer.madeBy": "by Thomas Patsanis",

  "common.details": "Λεπτομέρειες",
  "common.detailsAriaPrefix": "Λεπτομέρειες για",
  "common.difficulty": "Δυσκολία",
  "common.distance": "Απόσταση",
  "common.elevation": "Υψομετρική",
  "common.leader": "Αρχηγός",
  "common.location": "Τοποθεσία",
  "common.status": "Κατάσταση",
  "common.difficultyLevelAriaPrefix": "Επίπεδο δυσκολίας",
  "common.difficultyOutOf": "από 5",

  "tripTypes.hiking": "Πεζοπορία",
  "tripTypes.mountaineering": "Ορειβασία",
  "tripTypes.ski": "Ski & Snowboard",

  "tripStatus.upcomingBadge": "Διαθέσιμες θέσεις",
  "tripStatus.pastBadge": "Ολοκληρωμένη",
  "tripStatus.canceledBadge": "Ακυρωμένη",
  "tripStatus.upcomingTimeline": "Επόμενη",
  "tripStatus.pastTimeline": "Παλαιότερη",

  "announcementCategories.elections": "Εκλογές",
  "announcementCategories.schedule": "Πρόγραμμα",
  "announcementCategories.general": "Γενικά",
  "announcementCard.urgent": "Επείγον",

  "announcementBanner.viewAll": "Όλες οι ανακοινώσεις",
  "announcementBanner.dismissAria": "Απόρριψη ανακοίνωσης",

  "tripsPage.heroEyebrow": "Ημερολόγιο",
  "tripsPage.heroTitle": "Χάρτης εξορμήσεων",
  "tripsPage.heroSubtitle": "Διάλεξε εποχή, στόχο ή κύκλο καθοδήγησης",
  "tripsPage.filtersLabel": "Φίλτρα (ενδεικτικά)",
  "tripsPage.allActivities": "Όλες οι δραστηριότητες",
  "tripsPage.allDifficulties": "Όλες οι δυσκολίες",
  "tripsPage.difficultyPrefix": "Δυσκολία",
  "tripsPage.emptyFilterState":
    "Καμία εξόρμηση δεν ταιριάζει με τα επιλεγμένα φίλτρα. Δοκίμασε άλλο συνδυασμό.",
  "tripsPage.upcomingHeading": "Επόμενες εξορμήσεις",
  "tripsPage.upcomingCountSuffix": "διαδρομές",
  "tripsPage.noUpcomingTitle": "Δεν υπάρχουν επόμενες εξορμήσεις στο ημερολόγιο.",
  "tripsPage.noUpcomingBody":
    "Επιστρέψτε σύντομα ή εξερευνήστε τις προηγούμενες αναφορές για να δείτε τι ακολουθεί συνήθως το πρόγραμμά μας.",
  "tripsPage.pastHeading": "Αναφορές προηγούμενων",
  "tripsPage.pastCountSuffix": "αναφορές",
  "tripsPage.noPastTitle": "Δεν υπάρχουν προηγούμενες εξορμήσεις προς το παρόν.",
  "tripsPage.noPastBody": "Μείνε συντονισμένος για νέες αναφορές από την κοινότητά μας.",
  "tripsPage.pagePrefix": "Σελίδα",
  "tripsPage.pageOfConnector": "από",
  "tripsPage.prevPage": "Προηγούμενη",
  "tripsPage.nextPage": "Επόμενη",

  "tripDetail.itineraryHeading": "Σενάριο ημέρας",
  "tripDetail.gearHeading": "Τι να έχεις μαζί",
  "tripDetail.relatedEyebrow": "Συγγενείς προτάσεις",
  "tripDetail.relatedTitle": "Παρόμοιες διαδρομές",
  "tripDetail.relatedSubtitle":
    "Αν σου άρεσε αυτή η εξόρμηση, ρίξε μια ματιά και στις παρακάτω",
  "tripDetail.registerCta": "Δήλωσε συμμετοχή",
  "tripDetail.backCta": "Πίσω στις εξορμήσεις",
  "tripDetail.canceledMessage":
    "Η εξόρμηση ακυρώθηκε και δεν δέχεται νέες συμμετοχές.",
  "tripDetail.pastMessage":
    "Η εξόρμηση ολοκληρώθηκε. Μείνε συντονισμένος για τις επόμενες περιπέτειες!",

  "boardCard.noPhotoAlt": "Φωτογραφία μέλους δεν είναι διαθέσιμη",
  "coachCard.noPhotoAlt": "Φωτογραφία προπονητή δεν είναι διαθέσιμη",
};

const en: Record<keyof typeof el, string> = {
  "nav.brandMark": "F.O.O.G.",
  "nav.tagline": "Nature-loving Mountaineering Club of Giannitsa",
  "nav.home": "Home",
  "nav.trips": "Trips",
  "nav.history": "About us",
  "nav.winterSports": "Winter sports",
  "nav.join": "Join us",
  "nav.gallery": "Gallery",
  "nav.contact": "Contact",
  "nav.menuToggle": "Menu",
  "nav.ariaLabel": "Main navigation",
  "nav.skipLink": "Skip to main content",
  "nav.languageSwitcherAriaLabel": "Language selection",

  "footer.heading": "Always ready for adventure.",
  "footer.subtitle":
    "We discover the mountain, share moments, and leave only our footprints.",
  "footer.linksAriaLabel": "Footer links",
  "footer.trips": "Trips",
  "footer.announcements": "Announcements",
  "footer.join": "Join us",
  "footer.contact": "Contact",
  "footer.training": "Training",
  "footer.board": "Board",
  "footer.emailLabel": "Email:",
  "footer.socialLabel": "Social Media:",
  "footer.disclaimer":
    "Mountain sports carry inherent risks · take part within your limits and follow F.O.O.G.'s safety protocols.",
  "footer.rightsReserved": "All rights reserved.",
  "footer.madeWith": "Made with",
  "footer.madeBy": "by Thomas Patsanis",

  "common.details": "Details",
  "common.detailsAriaPrefix": "Details for",
  "common.difficulty": "Difficulty",
  "common.distance": "Distance",
  "common.elevation": "Elevation gain",
  "common.leader": "Leader",
  "common.location": "Location",
  "common.status": "Status",
  "common.difficultyLevelAriaPrefix": "Difficulty level",
  "common.difficultyOutOf": "out of 5",

  "tripTypes.hiking": "Hiking",
  "tripTypes.mountaineering": "Mountaineering",
  "tripTypes.ski": "Ski & Snowboard",

  "tripStatus.upcomingBadge": "Spots available",
  "tripStatus.pastBadge": "Completed",
  "tripStatus.canceledBadge": "Canceled",
  "tripStatus.upcomingTimeline": "Upcoming",
  "tripStatus.pastTimeline": "Past",

  "announcementCategories.elections": "Elections",
  "announcementCategories.schedule": "Schedule",
  "announcementCategories.general": "General",
  "announcementCard.urgent": "Urgent",

  "announcementBanner.viewAll": "All announcements",
  "announcementBanner.dismissAria": "Dismiss announcement",

  "tripsPage.heroEyebrow": "Calendar",
  "tripsPage.heroTitle": "Trip map",
  "tripsPage.heroSubtitle": "Pick a season, a goal, or a coaching track",
  "tripsPage.filtersLabel": "Filters (illustrative)",
  "tripsPage.allActivities": "All activities",
  "tripsPage.allDifficulties": "All difficulties",
  "tripsPage.difficultyPrefix": "Difficulty",
  "tripsPage.emptyFilterState":
    "No trip matches the selected filters. Try a different combination.",
  "tripsPage.upcomingHeading": "Upcoming trips",
  "tripsPage.upcomingCountSuffix": "trips",
  "tripsPage.noUpcomingTitle": "No upcoming trips on the calendar right now.",
  "tripsPage.noUpcomingBody":
    "Check back soon, or browse past trip reports to see what our schedule usually looks like.",
  "tripsPage.pastHeading": "Past trip reports",
  "tripsPage.pastCountSuffix": "reports",
  "tripsPage.noPastTitle": "No past trips to show yet.",
  "tripsPage.noPastBody": "Stay tuned for new reports from our community.",
  "tripsPage.pagePrefix": "Page",
  "tripsPage.pageOfConnector": "of",
  "tripsPage.prevPage": "Previous",
  "tripsPage.nextPage": "Next",

  "tripDetail.itineraryHeading": "Day-by-day itinerary",
  "tripDetail.gearHeading": "What to bring",
  "tripDetail.relatedEyebrow": "You might also like",
  "tripDetail.relatedTitle": "Similar trips",
  "tripDetail.relatedSubtitle":
    "If you liked this trip, take a look at these too",
  "tripDetail.registerCta": "Sign up",
  "tripDetail.backCta": "Back to trips",
  "tripDetail.canceledMessage":
    "This trip has been canceled and is no longer accepting sign-ups.",
  "tripDetail.pastMessage":
    "This trip has already taken place. Stay tuned for the next adventure!",

  "boardCard.noPhotoAlt": "Member photo not available",
  "coachCard.noPhotoAlt": "Coach photo not available",
};

export const ui: Record<Locale, Record<keyof typeof el, string>> = { el, en };

export const useTranslations = (locale: Locale) => {
  const dictionary = ui[locale] ?? ui[defaultLocale];
  return (key: keyof typeof el): string => dictionary[key] ?? ui[defaultLocale][key] ?? key;
};
