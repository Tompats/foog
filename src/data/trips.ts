import type { Trip } from '../types';

export const trips: Trip[] = [
  {
    slug: 'sunrise-ridge-tour',
    title: 'Περιήγηση Σκι στην Κορυφογραμμή Sunrise',
    date: '2025-02-08',
    type: 'ski',
    difficulty: 3,
    elevationGain: 1200,
    distanceKm: 14,
    leader: 'Maya Chen',
    status: 'upcoming',
    shortDescription: 'Ανάβαση με φώκιες δίπλα σε παγετώνες και κατηφόρα σε ανάλαφρο χιόνι με υποστήριξη από τους προπονητές μας.',
    location: 'Χιονοδρομικό Παρνασσού'
  },
  {
    slug: 'midnight-alpine-classic',
    title: 'Μεσονύκτια Αλπική Κλασική Διαδρομή',
    date: '2025-03-15',
    type: 'mountaineering',
    difficulty: 4,
    elevationGain: 1800,
    distanceKm: 18,
    leader: 'Lars Nyberg',
    status: 'upcoming',
    shortDescription: 'Δεμένα σχοινιά διασχίζουν μικτό πεδίο προς την κορυφή Ivory με ροζ ανατολές στις κορυφογραμμές.',
    location: 'Μύτικας, Όλυμπος'
  },
  {
    slug: 'carrie-pass-late-winter',
    title: 'Χειμερινή Διάσχιση του Περάσματος Carrie',
    date: '2025-04-05',
    type: 'hiking',
    difficulty: 2,
    elevationGain: 900,
    distanceKm: 16,
    leader: 'Priya Anand',
    status: 'upcoming',
    shortDescription: 'Ήπια διαδρομή με snowshoe και πεζοπορία μέσα από αλπικά λιβάδια και παγωμένες λίμνες.',
    location: 'Μακρυνόρεμα, Πήλιο'
  },
  {
    slug: 'granite-arete-mentorship',
    title: 'Μέρα Μέντορινγκ στη Γρανιτένια Ακρώρεια',
    date: '2024-09-18',
    type: 'mountaineering',
    difficulty: 5,
    elevationGain: 500,
    distanceKm: 6,
    leader: 'Silvia Prado',
    status: 'past',
    shortDescription: 'Προχωρημένες ομάδες τοποθετούν ασφάλειες στη Βόρεια Ακρώρεια ενώ καθοδηγούν νέα στελέχη ανάβασης.',
    location: 'Μετέωρα, Καλαμπάκα'
  },
  {
    slug: 'solstice-glacier-glide',
    title: 'Παγετώνας του Θερινού Ηλιοστασίου',
    date: '2024-12-20',
    type: 'ski',
    difficulty: 4,
    elevationGain: 1400,
    distanceKm: 20,
    leader: 'Aaron Wells',
    status: 'upcoming',
    shortDescription: 'Ταχύτατη περιοδεία σε παγετώνα με στόχο την πιο φωτεινή μέρα και ανανέωση δεξιοτήτων διάσωσης σε κρεβάς.',
    location: 'Χιονοδρομικό Βασιλίτσας'
  },
  {
    slug: 'ember-peak-linkup',
    title: 'Σύνδεση Κορυφών Ember',
    date: '2024-07-12',
    type: 'mountaineering',
    difficulty: 3,
    elevationGain: 1500,
    distanceKm: 19,
    leader: 'Noah Delaroche',
    status: 'past',
    shortDescription: 'Κλασικός συνδυασμός βράχου και χιονιού με χρυσαφένια ανατολή πάνω από την οροσειρά Coast.',
    location: 'Τύμφη, Δρακόλιμνη'
  }
];
