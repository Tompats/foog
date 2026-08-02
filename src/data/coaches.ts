import type { Coach } from '../types';
import { localizeItem } from '../utils/i18n-content';
import type { Locale } from '../i18n/ui';

export const coaches: Coach[] = [
  {
    name: 'Νίκος Σαμαράς',
    role: 'Επικεφαλής Αγωνιστικού Τμήματος',
    bio: 'Πάνω από 30 χρόνια προπονητικής εμπειρίας. Team leader και προπονητής του αγωνιστικού τμήματος.',
    specialties: ['Αλπικό Σκι', 'Αγωνιστικό Σκι']
  },
  {
    name: 'Παναγιώτης Παπαδόπουλος',
    role: 'Προπονητής snowboard',
    bio: 'Πρώην αθλητής snowboard, με εμπειρία σε freestyle και freeride. Διδάσκει τεχνικές ασφαλούς κατάβασης.',
    specialties: ['Snowboard', 'Αγωνιστική χιονοσανίδα']
  },
  {
    name: 'Θωμάς Πατσάνης',
    role: 'Προπονητής Ski',
    certifications: ['EOXA Certified'],
    bio: 'Πρώην αθλητής χιονοδρομίας. Προπονεί παιδιά 5 έως 12 ετών τα τελευταία 10 χρόνια.',
    specialties: ['Αλπικό Ski', 'Μαθήματα σε παιδιά']
  },
  {
    name: 'Θεοδώρα Σαμαρά',
    role: 'Προπονήτρια Ski',
    bio: 'Πανελλαδική διάκριση στο σκι. Διδάσκει τα μικρότερα μέλη μας από τα πρώτα τους γλιστρήματα.',
    specialties: ['Αλπικό Ski', 'Μαθήματα απο 4 χρονών']
  },
  {
    name: 'Αντώνης Σαμαράς',
    role: 'Προπονητής Ski',
    bio: 'Αγωνίστηκε σε πανελλήνιους αγώνες σκι. Προπονεί το προεφηβικό τμήμα.',
    specialties: ['Αλπικό Ski', 'Freestyle Ski', 'Αγωνιστικό Ski']
  },
  {
    name: 'Δημήτρης Καπουσούζης',
    role: 'Προπονητής Ski',
    bio: 'Ο νεότερος προπονητής μας. Αγωνίστηκε σε σκι και κωπηλασία, προπονεί το τμήμα ενηλίκων.',
    specialties: ['Αλπικό Ski', 'Νεανικά προγράμματα']
  },
  {
    name: 'Χαρά Καραφιλιά',
    role: 'Προπονήτρια Ski',
    bio: 'Μεγάλωσε στις ακαδημίες σκι του συλλόγου. Σήμερα προπονεί τα παιδικά μας τμήματα.',
    specialties: ['Αλπικό Ski', 'Νεανικά προγράμματα']
  }
];

type CoachTranslation = Partial<
  Pick<Coach, 'role' | 'bio' | 'specialties' | 'certifications'>
>;

// English overrides, keyed by name (coaches don't have a slug).
export const coachTranslations: Record<string, CoachTranslation> = {
  'Νίκος Σαμαράς': {
    role: 'Head of the Competitive Team',
    bio: 'Over 30 years of coaching experience. Team leader and coach of the competitive ski team.',
    specialties: ['Alpine skiing', 'Competitive skiing'],
  },
  'Παναγιώτης Παπαδόπουλος': {
    role: 'Snowboard coach',
    bio: 'A former snowboard athlete with experience in freestyle and freeride. Teaches safe descent technique.',
    specialties: ['Snowboard', 'Competitive snowboarding'],
  },
  'Θωμάς Πατσάνης': {
    role: 'Ski coach',
    bio: 'A former alpine ski racer. Has coached children aged 5 to 12 for the past 10 years.',
    specialties: ['Alpine skiing', 'Lessons for children'],
  },
  'Θεοδώρα Σαμαρά': {
    role: 'Ski coach',
    bio: 'A national-level competitive skier. Teaches our youngest members from their very first turns.',
    specialties: ['Alpine skiing', 'Lessons from age 4'],
  },
  'Αντώνης Σαμαράς': {
    role: 'Ski coach',
    bio: 'Competed in national ski races. Coaches the pre-teen team.',
    specialties: ['Alpine skiing', 'Freestyle skiing', 'Competitive skiing'],
  },
  'Δημήτρης Καπουσούζης': {
    role: 'Ski coach',
    bio: 'Our youngest coach. Competed in skiing and rowing, now coaches the adult team.',
    specialties: ['Alpine skiing', 'Youth programs'],
  },
  'Χαρά Καραφιλιά': {
    role: 'Ski coach',
    bio: "Grew up in the club's ski academies. Now coaches our junior teams.",
    specialties: ['Alpine skiing', 'Youth programs'],
  },
};

export const getLocalizedCoach = (coach: Coach, locale: Locale): Coach =>
  localizeItem(coach, coachTranslations[coach.name], locale);
