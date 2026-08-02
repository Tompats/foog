import type { Announcement } from '../types';
import { localizeItem } from '../utils/i18n-content';
import type { Locale } from '../i18n/ui';

// Order doesn't affect display (components sort by urgency/date), but seed
// newest-published-first for readability when editing this file.
export const announcements: Announcement[] = [
  {
    slug: 'kalokairino-diakopes-2026',
    title: 'Καλοκαιρινό διάλειμμα - Κλειστά μέχρι τον Σεπτέμβριο',
    body: 'Ο Όμιλος παραμένει κλειστός για το καλοκαιρινό διάλειμμα. Οι εβδομαδιαίες συναντήσεις και οι δραστηριότητές μας θα επανέλθουν κανονικά τον Σεπτέμβριο. Καλό καλοκαίρι σε όλους!',
    category: 'schedule',
    publishedDate: '2026-07-28',
    expiresDate: '2026-09-01',
  },
];

type AnnouncementTranslation = Partial<Pick<Announcement, 'title' | 'body'>>;

// English overrides, keyed by slug. Add an entry here whenever a new
// announcement is added to the array above.
export const announcementTranslations: Record<string, AnnouncementTranslation> = {
  'kalokairino-diakopes-2026': {
    title: 'Summer break - Closed until September',
    body: 'The club is closed for our summer break. Weekly meetups and activities resume as usual in September. Have a great summer, everyone!',
  },
};

export const getLocalizedAnnouncement = (
  announcement: Announcement,
  locale: Locale
): Announcement =>
  localizeItem(announcement, announcementTranslations[announcement.slug], locale);
