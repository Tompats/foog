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
    name: 'Βασίλης Κοντίδης',
    role: 'Αντιπρόεδρος',
    bio: 'Στηρίζει τον πρόεδρο στον συντονισμό του Ομίλου και αναλαμβάνει πρωτοβουλία όποτε χρειάζεται.'
  },
  {
    name: 'Γρηγόριος Πατσάνης',
    role: 'Γραμματέας',
    bio: 'Φροντίζει τον έλεγχο εξοπλισμού και κρατά την ομάδα έτοιμη για κάθε απρόοπτο.'
  },
  {
    name: 'Φωτεινή Αρχαγγελίδου',
    role: 'Ταμίας',
    bio: 'Διαχειρίζεται τα οικονομικά του Ομίλου με διαφάνεια, από τη συνδρομή μέχρι κάθε έξοδο εξόρμησης.'
  },
  {
    name: 'Βασιλική Παπαδοπούλου',
    role: 'Έφορος Χιονοδρομίας',
    bio: 'Οργανώνει το πρόγραμμα χιονοδρομίας του Ομίλου, από τα μαθήματα σκι μέχρι τις εξορμήσεις στα χιονοδρομικά.'
  },
  {
    name: 'Σωτήρης Αρτεμιάδης',
    role: 'Έφορος Ορειβασίας',
    bio: 'Σχεδιάζει τις ορειβατικές διαδρομές του Ομίλου και φροντίζει την ασφάλεια σε κάθε ανάβαση.'
  },
  {
    name: 'Ελένη Ιγγλίζογλου',
    role: 'Δημόσιες Σχέσεις',
    bio: 'Φροντίζει την επικοινωνία του Ομίλου με μέλη, φορείς και κοινό.'
  },
  {
    name: 'Χρυσή Κοροσίδου',
    role: 'Μέλος ΔΣ',
    bio: 'Συμμετέχει στην οργάνωση δράσεων και στηρίζει την καθημερινή λειτουργία του Ομίλου.'
  },
  {
    name: 'Ελένη Λυσίτσα',
    role: 'Μέλος ΔΣ',
    bio: 'Βοηθά στην οργάνωση των δράσεων του Ομίλου και στηρίζει τα νέα μέλη.'
  }
];

type BoardMemberTranslation = Partial<Pick<BoardMember, 'role' | 'bio'>>;

// English overrides, keyed by name (board members don't have a slug).
export const boardTranslations: Record<string, BoardMemberTranslation> = {
  'Γιώργος Ξανθόπουλος': {
    role: 'President',
    bio: "Coordinates the Club's partnerships with organizations and sponsors, and oversees safety on every activity.",
  },
  'Βασίλης Κοντίδης': {
    role: 'Vice President',
    bio: "Supports the president in coordinating the Club and steps in wherever needed.",
  },
  'Γρηγόριος Πατσάνης': {
    role: 'Secretary',
    bio: 'Handles equipment checks and keeps the team ready for the unexpected.',
  },
  'Φωτεινή Αρχαγγελίδου': {
    role: 'Treasurer',
    bio: "Manages the Club's finances transparently, from membership dues to every trip expense.",
  },
  'Βασιλική Παπαδοπούλου': {
    role: 'Winter Sports Officer',
    bio: "Organizes the Club's winter sports program, from ski lessons to resort trips.",
  },
  'Σωτήρης Αρτεμιάδης': {
    role: 'Mountaineering Officer',
    bio: "Plans the Club's mountaineering routes and looks after safety on every ascent.",
  },
  'Ελένη Ιγγλίζογλου': {
    role: 'Public Relations',
    bio: "Handles the Club's communication with members, partners, and the public.",
  },
  'Χρυσή Κοροσίδου': {
    role: 'Board Member',
    bio: "Helps organize activities and supports the Club's day-to-day operations.",
  },
  'Ελένη Λυσίτσα': {
    role: 'Board Member',
    bio: 'Helps organize Club activities and supports new members.',
  },
};

export const getLocalizedBoardMember = (
  member: BoardMember,
  locale: Locale
): BoardMember => localizeItem(member, boardTranslations[member.name], locale);
