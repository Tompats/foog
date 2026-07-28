import type { Announcement } from '../types';

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
