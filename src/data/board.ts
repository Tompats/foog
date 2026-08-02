import type { BoardMember } from '../types';
import { localizeItem } from '../utils/i18n-content';
import type { Locale } from '../i18n/ui';

export const board: BoardMember[] = [
  {
    name: 'Γιώργος Ξανθόπουλος',
    role: 'Πρόεδρος',
    bio: 'Συντονίζει τις συνεργασίες του Ομίλου με φορείς και χορηγούς και φροντίζει την ασφάλεια σε κάθε δράση.'
  },
  {
    name: 'Ελένη Ιγγλίζογλου',
    role: 'Μέλος',
    bio: 'Επιβλέπει το πρόγραμμα εξορμήσεων, φροντίζοντας κάθε σεζόν να έχει δράσεις για όλα τα επίπεδα.'
  },
  {
    name: 'Φωτεινή Αρχαγγελίδου',
    role: 'Ταμίας',
    bio: 'Διαχειρίζεται τα οικονομικά του Ομίλου με διαφάνεια, από τη συνδρομή μέχρι κάθε έξοδο εξόρμησης.'
  },
  {
    name: 'Γρηγόριος Πατσάνης',
    role: 'Γραμματέας',
    bio: 'Φροντίζει τον έλεγχο εξοπλισμού και κρατά την ομάδα έτοιμη για κάθε απρόοπτο.'
  },
  {
    name: 'Αναστασία Παπαδοπούλου',
    role: 'Μέλος',
    bio: 'Συμμετέχει στην οργάνωση δράσεων και στην υποστήριξη της καθημερινής λειτουργίας του Ομίλου.'
  }
];

type BoardMemberTranslation = Partial<Pick<BoardMember, 'role' | 'bio'>>;

// English overrides, keyed by name (board members don't have a slug).
export const boardTranslations: Record<string, BoardMemberTranslation> = {
  'Γιώργος Ξανθόπουλος': {
    role: 'President',
    bio: "Coordinates the Club's partnerships with organizations and sponsors, and oversees safety on every activity.",
  },
  'Ελένη Ιγγλίζογλου': {
    role: 'Member',
    bio: 'Oversees the trip calendar, making sure every season includes activities for all levels.',
  },
  'Φωτεινή Αρχαγγελίδου': {
    role: 'Treasurer',
    bio: "Manages the Club's finances transparently, from membership dues to every trip expense.",
  },
  'Γρηγόριος Πατσάνης': {
    role: 'Secretary',
    bio: 'Handles equipment checks and keeps the team ready for the unexpected.',
  },
  'Αναστασία Παπαδοπούλου': {
    role: 'Member',
    bio: "Helps organize activities and supports the Club's day-to-day operations.",
  },
};

export const getLocalizedBoardMember = (
  member: BoardMember,
  locale: Locale
): BoardMember => localizeItem(member, boardTranslations[member.name], locale);
