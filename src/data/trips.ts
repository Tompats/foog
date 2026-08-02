import type { Trip } from '../types';
import { localizeItem } from '../utils/i18n-content';
import type { Locale } from '../i18n/ui';

export const trips: Trip[] = [
  {
    slug: 'athamania-tzoumerka-oreivasia',
    title: 'Ορειβασία στην Αθαμανία των Τζουμέρκων',
    startDate: '2024-06-08',
    endDate: '2024-06-09',
    type: 'hiking',
    difficulty: 3,
    elevationGain: 1000,
    distanceKm: 14,
    leader: 'Αναστασία Παπαδοπούλου',
    status: 'active',
    shortDescription: 'Ανοιξιάτικη ορειβατική έξοδος στα Αθαμανικά Όρη, με αφετηρία το χωριό Αθαμανία και διαδρομή μέσα από δάση οξιάς.',
    location: 'Αθαμανία, Τζουμέρκα, Άρτα',
    activities: ['Ανάβαση μέσα από δάσος οξιάς', 'Πεζοπορία στις πλαγιές των Τζουμέρκων', 'Στάση σε πηγή για ανεφοδιασμό νερού'],
    gear: ['Σακίδιο 35L', 'Μπατόν πεζοπορίας', 'Καπέλο & αντηλιακό', 'Παπούτσια πεζοπορίας', 'Παγούρι / σύστημα φιλτραρίσματος νερού'],
    itinerary: [
      {
        label: 'Ημέρα 1',
        entries: ['Συνάντηση στο χωριό Αθαμανία και ενημέρωση διαδρομής', 'Ανάβαση μέσα από δάσος οξιάς', 'Κατασκήνωση σε ορεινό λιβάδι']
      },
      {
        label: 'Ημέρα 2',
        entries: ['Πεζοπορία στις κορυφογραμμές των Τζουμέρκων', 'Κατάβαση προς το χωριό και κλείσιμο εξόρμησης']
      }
    ]
  },
  {
    slug: 'grammos-aetomilitsa-pezoporia',
    title: 'Πεζοπορία στον Γράμμο από την Αετομιλίτσα',
    startDate: '2024-09-14',
    endDate: '2024-09-15',
    type: 'hiking',
    difficulty: 3,
    elevationGain: 1200,
    distanceKm: 16,
    leader: 'Αναστασία Παπαδοπούλου',
    status: 'active',
    shortDescription: 'Διήμερη ορειβατική έξοδος στον Γράμμο, με αφετηρία το ορεινό χωριό Αετομιλίτσα και θέα ως τη Βόρειο Πίνδο.',
    location: 'Γράμμος, Αετομιλίτσα, Καστοριά',
    activities: ['Ανάβαση Αετομιλίτσα - Γράμμος', 'Παρατήρηση χλωρίδας οροσειράς', 'Βραδινό στο ορεινό καταφύγιο'],
    gear: ['Σακίδιο 40L', 'Μπατόν πεζοπορίας', 'Αδιάβροχα στρώματα', 'Παπούτσια πεζοπορίας υψηλού λαιμού', 'Χάρτης περιοχής & πυξίδα'],
    itinerary: [
      {
        label: 'Ημέρα 1',
        entries: ['Άφιξη στην Αετομιλίτσα και σύντομη ξενάγηση στο χωριό', 'Ανάβαση προς το ορεινό καταφύγιο', 'Δείπνο και ξεκούραση']
      },
      {
        label: 'Ημέρα 2',
        entries: ['Πρωινή ανάβαση προς την κορυφή του Γράμμου', 'Θέα ως τη Βόρειο Πίνδο και σύντομο διάλειμμα φαγητού', 'Κατάβαση στην Αετομιλίτσα']
      }
    ]
  },
  {
    slug: 'voras-profitis-ilias-cheimerini-anavasi',
    title: 'Χειμερινή Ανάβαση στον Προφήτη Ηλία του Βόρα',
    startDate: '2025-02-15',
    endDate: '2025-02-16',
    type: 'mountaineering',
    difficulty: 3,
    elevationGain: 450,
    distanceKm: 8,
    leader: 'Αναστασία Παπαδοπούλου',
    status: 'active',
    shortDescription: 'Χειμερινή ανάβαση από το χιονοδρομικό του Βόρα στην κορυφή Προφήτης Ηλίας, με κραμπόν και σχοινί σε παγωμένα σημεία.',
    location: 'Βόρας (Καϊμακτσαλάν), Πέλλα',
    activities: ['Ανάβαση με κραμπόν στον Προφήτη Ηλία', 'Βασικές τεχνικές αυτοασφάλειας σε χιόνι', 'Φωτογράφιση ομάδας στην κορυφή'],
    gear: ['Σακίδιο 30L', 'Κραμπόν & μπατόν', 'Θερμικά στρώματα & γάντια', 'Γυαλιά ηλίου / χιονιού', 'Θερμός με ζεστό ρόφημα'],
    itinerary: [
      {
        label: 'Ημέρα 1',
        entries: ['Συνάντηση στο χιονοδρομικό κέντρο Βόρα και έλεγχος εξοπλισμού', 'Ανάβαση προς το καταφύγιο με στάσεις προσαρμογής', 'Διανυκτέρευση και βραδινό briefing για την κορυφή']
      },
      {
        label: 'Ημέρα 2',
        entries: ['Πρωινή ανάβαση στον Προφήτη Ηλία με κραμπόν', 'Φωτογραφίες στη χιονισμένη κορυφή', 'Κατάβαση και επιστροφή στα Γιαννιτσά']
      }
    ]
  },
  {
    slug: 'katharismos-paiko-2025',
    title: 'Δράση Καθαρισμού στο Πάικο',
    startDate: '2025-04-26',
    type: 'hiking',
    difficulty: 1,
    elevationGain: 300,
    distanceKm: 8,
    leader: 'Αναστασία Παπαδοπούλου',
    status: 'active',
    shortDescription: 'Εθελοντική δράση καθαρισμού μονοπατιών και χώρων αναψυχής στο Πάικο, σε συνεργασία με το δασαρχείο.',
    location: 'Πάικο, Πέλλα',
    activities: ['Καθαρισμός μονοπατιού', 'Συλλογή απορριμμάτων σε σημεία αναψυχής', 'Ενημέρωση για την προστασία του δάσους'],
    gear: ['Γάντια εργασίας', 'Σακούλες απορριμμάτων', 'Αδιάβροχα παπούτσια', 'Καπέλο', 'Νερό & πρόχειρο φαγητό'],
    itinerary: [
      {
        label: 'Ημέρα 1',
        entries: ['Συνάντηση στην είσοδο του Πάικου και διανομή εξοπλισμού καθαρισμού', 'Καθαρισμός μονοπατιού και χώρων αναψυχής σε ομάδες', 'Ζύγισμα απορριμμάτων και κλείσιμο δράσης με κέρασμα']
      }
    ]
  },
  {
    slug: 'borovets-voulgaria-2025',
    title: 'Ορειβατική Απόδραση στο Μπόροβετς Βουλγαρίας',
    startDate: '2025-07-04',
    endDate: '2025-07-06',
    type: 'hiking',
    difficulty: 2,
    elevationGain: 400,
    distanceKm: 10,
    leader: 'Αναστασία Παπαδοπούλου',
    status: 'active',
    shortDescription: 'Τριήμερη εξόρμηση στο Μπόροβετς της Βουλγαρίας, με ανάβαση με τελεφερίκ και πεζοπορία στην κορυφή Γιάστρεμπετς στα 2550μ.',
    location: 'Μπόροβετς, Όρος Ρίλα, Βουλγαρία',
    activities: ['Ανάβαση με τελεφερίκ', 'Πεζοπορία στην κορυφή Γιάστρεμπετς (2550μ)', 'Βόλτα στο χιονοδρομικό θέρετρο'],
    gear: ['Σακίδιο 25L', 'Μπατόν πεζοπορίας', 'Αδιάβροχο μπουφάν', 'Διαβατήριο / ταυτότητα', 'Ευρωπαϊκή κάρτα ασφάλισης'],
    itinerary: [
      {
        label: 'Ημέρα 1',
        entries: ['Αναχώρηση από τα Γιαννιτσά και άφιξη στο Μπόροβετς', 'Τακτοποίηση και βραδινή βόλτα στο θέρετρο']
      },
      {
        label: 'Ημέρα 2',
        entries: ['Ανάβαση με τελεφερίκ προς τα 2100μ', 'Πεζοπορία στην κορυφή Γιάστρεμπετς στα 2550μ', 'Φωτογραφίες ομάδας και κατάβαση']
      },
      {
        label: 'Ημέρα 3',
        entries: ['Ελεύθερος χρόνος στο θέρετρο', 'Επιστροφή στα Γιαννιτσά']
      }
    ]
  },
  {
    slug: 'cheimerino-camp-ski-voras-2026',
    title: 'Χειμερινό Camp Σχολής Σκι στον Βόρα',
    startDate: '2026-01-24',
    endDate: '2026-01-25',
    type: 'ski',
    difficulty: 2,
    elevationGain: 300,
    distanceKm: 5,
    leader: 'Αναστασία Παπαδοπούλου',
    status: 'active',
    shortDescription: 'Διήμερο camp της σχολής σκι του ομίλου στο χιονοδρομικό του Βόρα, με μαθήματα για παιδιά και ενήλικες σε σκι και snowboard.',
    location: 'Χιονοδρομικό Βόρα (Καϊμακτσαλάν)',
    activities: ['Μαθήματα σκι για αρχάριους', 'Μαθήματα snowboard για junior αθλητές', 'Παιχνίδια στο χιόνι & ομαδική φωτογραφία'],
    gear: ['Σκι ή snowboard εξοπλισμός', 'Κράνος & γυαλιά χιονιού', 'Αδιάβροχη φόρμα σκι', 'Θερμικά ρούχα', 'Γάντια σκι'],
    itinerary: [
      {
        label: 'Ημέρα 1',
        entries: ['Άφιξη στο χιονοδρομικό και χωρισμός σε ομάδες επιπέδου', 'Μαθήματα σκι και snowboard στις πλαγιές', 'Βραδινό παιχνίδι στο χιόνι με χιονάγγελους']
      },
      {
        label: 'Ημέρα 2',
        entries: ['Πρωινή προθέρμανση και ελεύθερη κατάβαση', 'Μικρός αγωνιστικός διαγωνισμός σκι για τα παιδιά', 'Απονομές και επιστροφή στα Γιαννιτσά']
      }
    ]
  },
  {
    slug: 'vardousia-diaschisi-sykies-athanasios-diakos',
    title: 'Διάσχιση Βαρδουσίων: Συκιές - Αθανάσιος Διάκος',
    startDate: '2026-04-25',
    endDate: '2026-04-26',
    type: 'hiking',
    difficulty: 3,
    elevationGain: 1100,
    distanceKm: 17,
    leader: 'Αναστασία Παπαδοπούλου',
    status: 'active',
    shortDescription: 'Διάσχιση από το χωριό Συκιές στον Αθανάσιο Διάκο, στην καρδιά των Βαρδουσίων, με διανυκτέρευση σε παραδοσιακούς ξενώνες.',
    location: 'Βαρδούσια, Συκιές - Αθανάσιος Διάκος, Φωκίδα',
    activities: ['Διάσχιση Συκιές - Αθανάσιος Διάκος', 'Παραδοσιακό δείπνο με κοντοσούβλι και κοκορέτσι', 'Πρωινή αναχώρηση για τα Βαρδούσια'],
    gear: ['Ορειβατικά μποτάκια', 'Ορειβατικό μπατόν', 'Σακίδιο με νερό, σνακ, φρούτο, σάντουιτς', 'Αδιάβροχο υποχρεωτικά', 'Ξεχωριστός σάκος με ρούχα ανοιξιάτικα'],
    itinerary: [
      {
        label: 'Ημέρα 1',
        entries: ['Αναχώρηση από τον σύλλογο στις 6:00 το πρωί', 'Άφιξη στις Συκιές με το λεωφορείο και έναρξη διάσχισης προς τον Αθανάσιο Διάκο', 'Διανυκτέρευση σε δύο ξενώνες με παραδοσιακό δείπνο (κοντοσούβλι, κοκορέτσι, αρνάκι γάστρας)']
      },
      {
        label: 'Ημέρα 2',
        entries: ['Πρωινό νωρίς στους ξενώνες', 'Αναχώρηση για τα Βαρδούσια']
      }
    ]
  },
  {
    slug: 'papigko-drakolimni-diimero',
    title: 'Μικρό Πάπιγκο - Καταφύγιο Αστράκας - Δρακόλιμνη',
    startDate: '2026-06-06',
    endDate: '2026-06-07',
    type: 'hiking',
    difficulty: 3,
    elevationGain: 1100,
    distanceKm: 20,
    leader: 'Αναστασία Παπαδοπούλου',
    status: 'active',
    shortDescription: 'Διήμερη πεζοπορία στο Ζαγόρι: πρώτη μέρα το μονοπάτι από το Βίκος στις πηγές του Βοϊδομάτη, δεύτερη μέρα ανάβαση στο καταφύγιο της Αστράκας και στη Δρακόλιμνη στα 2050μ.',
    location: 'Μικρό Πάπιγκο, Ζαγόρι, Ήπειρος',
    activities: ['Μονοπάτι Βίκου προς τις πηγές του Βοϊδομάτη', 'Ανάβαση Μικρό Πάπιγκο - Καταφύγιο Αστράκας', 'Δρακόλιμνη μέσω ξερολίμνης και αλπικών λιβαδιών'],
    gear: ['Ορειβατικά μποτάκια', 'Ορειβατικό μπατόν', 'Σακίδιο με νερό για τις δύο μέρες, σνακ, φρούτο, σάντουιτς', 'Αδιάβροχο υποχρεωτικά', 'Ξεχωριστός σάκος με ανοιξιάτικα / καλοκαιρινά ρούχα'],
    itinerary: [
      {
        label: 'Ημέρα 1',
        entries: ['Αναχώρηση από τον σύλλογο το Σάββατο στις 6:00 το πρωί', 'Κατηφορικό μονοπάτι (καλντερίμι) από το χωριό Βίκος στις πηγές του Βοϊδομάτη, περίπου 40 λεπτά', 'Διανυκτέρευση στο Πάπιγκο (η διαμονή είναι χωρίς πρωινό)']
      },
      {
        label: 'Ημέρα 2',
        entries: ['Πρωινή αναχώρηση για το Μικρό Πάπιγκο (930μ)', 'Ανάβαση στο καταφύγιο της Αστράκας (1900μ), 2:30-3:00 ώρες', 'Διαδρομή μέσω ξερολίμνης και αλπικών λιβαδιών στη Δρακόλιμνη (2050μ), περίπου 1+ ώρα']
      }
    ]
  },
  {
    slug: 'tzoumerka-syrrako-kalarrytes-2026',
    title: 'Τζουμέρκα: Συρράκο - Καλαρρύτες',
    startDate: '2026-09-19',
    endDate: '2026-09-20',
    type: 'hiking',
    difficulty: 2,
    elevationGain: 500,
    distanceKm: 10,
    leader: 'Αναστασία Παπαδοπούλου',
    status: 'active',
    shortDescription: 'Εξόρμηση στα ορεινά χωριά Συρράκο και Καλαρρύτες των Τζουμέρκων, με μεταφορά με 35θέσιο λεωφορείο και διανυκτέρευση σε δύο τοπικούς ξενώνες.',
    location: 'Συρράκο - Καλαρρύτες, Τζουμέρκα, Άρτα',
    activities: ['Βόλτα στα καλντερίμια του Συρρακού', 'Επίσκεψη στους Καλαρρύτες', 'Γνωριμία με την τοπική αρχιτεκτονική των Τζουμέρκων'],
    gear: ['Σακίδιο ημέρας', 'Παπούτσια πεζοπορίας', 'Ελαφρύ αδιάβροχο', 'Άνετα ρούχα για βόλτα σε χωριό', 'Φωτογραφική μηχανή'],
    itinerary: [
      {
        label: 'Ημέρα 1',
        entries: ['Αναχώρηση με 35θέσιο λεωφορείο από τα Γιαννιτσά', 'Άφιξη στο Συρράκο και βόλτα στο χωριό', 'Διανυκτέρευση σε ξενώνα του Συρρακού']
      },
      {
        label: 'Ημέρα 2',
        entries: ['Επίσκεψη στους Καλαρρύτες', 'Επιστροφή στα Γιαννιτσά']
      }
    ]
  },
  {
    slug: 'valia-calda-diaschisi-2026',
    title: 'Βάλια Κάλντα - Διάσχιση',
    startDate: '2026-10-10',
    endDate: '2026-10-11',
    type: 'hiking',
    difficulty: 3,
    elevationGain: 800,
    distanceKm: 18,
    leader: 'Αναστασία Παπαδοπούλου',
    status: 'active',
    shortDescription: 'Διάσχιση του Εθνικού Δρυμού Βάλια Κάλντα, με μεταφορά με 35θέσιο λεωφορείο και διανυκτέρευση στο καταφύγιο-ξενώνα της Βοβούσας.',
    location: 'Βάλια Κάλντα - Βοβούσα, Πίνδος',
    activities: ['Διάσχιση Εθνικού Δρυμού Βάλια Κάλντα', 'Διανυκτέρευση στο καταφύγιο της Βοβούσας', 'Φωτογράφιση στο δάσος της μαύρης πεύκης'],
    gear: ['Σακίδιο 40L', 'Ορειβατικό μπατόν', 'Αδιάβροχα στρώματα', 'Παπούτσια πεζοπορίας υψηλού λαιμού', 'Φακός κεφαλής'],
    itinerary: [
      {
        label: 'Ημέρα 1',
        entries: ['Αναχώρηση με 35θέσιο λεωφορείο από τα Γιαννιτσά', 'Διάσχιση στον Εθνικό Δρυμό Βάλια Κάλντα', 'Διανυκτέρευση στο καταφύγιο-ξενώνα της Βοβούσας']
      },
      {
        label: 'Ημέρα 2',
        entries: ['Πρωινή βόλτα στη Βοβούσα', 'Επιστροφή στα Γιαννιτσά']
      }
    ]
  }
];

type TripTranslation = Partial<
  Pick<Trip, 'title' | 'shortDescription' | 'location' | 'activities' | 'gear' | 'itinerary'>
>;

// English overrides, keyed by slug. Add an entry here whenever a new trip is
// added to the array above. Dates, numbers, type, difficulty, and the
// leader's name are shared across locales and don't need an override.
export const tripTranslations: Record<string, TripTranslation> = {
  'athamania-tzoumerka-oreivasia': {
    title: 'Mountaineering in Athamania, Tzoumerka',
    shortDescription:
      'A spring mountaineering trip in the Athamanika Mountains, starting from the village of Athamania and running through beech forests.',
    location: 'Athamania, Tzoumerka, Arta',
    activities: [
      'Ascent through a beech forest',
      'Hiking on the slopes of Tzoumerka',
      'Stop at a spring to refill water',
    ],
    gear: [
      '35L backpack',
      'Trekking poles',
      'Hat & sunscreen',
      'Hiking shoes',
      'Water bottle / filtration system',
    ],
    itinerary: [
      {
        label: 'Day 1',
        entries: [
          'Meet in the village of Athamania and route briefing',
          'Ascent through a beech forest',
          'Camp in a mountain meadow',
        ],
      },
      {
        label: 'Day 2',
        entries: [
          'Hike along the ridgelines of Tzoumerka',
          'Descent to the village and end of the trip',
        ],
      },
    ],
  },
  'grammos-aetomilitsa-pezoporia': {
    title: 'Hiking Mount Grammos from Aetomilitsa',
    shortDescription:
      'A two-day mountaineering trip on Mount Grammos, starting from the mountain village of Aetomilitsa with views reaching the Northern Pindus.',
    location: 'Grammos, Aetomilitsa, Kastoria',
    activities: [
      'Ascent from Aetomilitsa to Grammos',
      'Observing the local flora of the range',
      'Dinner at the mountain refuge',
    ],
    gear: [
      '40L backpack',
      'Trekking poles',
      'Waterproof layers',
      'High-ankle hiking boots',
      'Area map & compass',
    ],
    itinerary: [
      {
        label: 'Day 1',
        entries: [
          'Arrival in Aetomilitsa and a short tour of the village',
          'Ascent to the mountain refuge',
          'Dinner and rest',
        ],
      },
      {
        label: 'Day 2',
        entries: [
          'Morning ascent to the summit of Grammos',
          'Views reaching the Northern Pindus and a short food break',
          'Descent to Aetomilitsa',
        ],
      },
    ],
  },
  'voras-profitis-ilias-cheimerini-anavasi': {
    title: 'Winter Ascent of Profitis Ilias, Mount Voras',
    shortDescription:
      'A winter ascent from the Voras ski resort to the Profitis Ilias summit, using crampons and rope on icy sections.',
    location: 'Voras (Kaimaktsalan), Pella',
    activities: [
      'Crampon ascent to Profitis Ilias',
      'Basic self-arrest techniques on snow',
      'Group photos at the summit',
    ],
    gear: [
      '30L backpack',
      'Crampons & ice axe',
      'Thermal layers & gloves',
      'Sunglasses / snow goggles',
      'Thermos with a hot drink',
    ],
    itinerary: [
      {
        label: 'Day 1',
        entries: [
          'Meet at the Voras ski resort and gear check',
          'Ascent to the refuge with acclimatization stops',
          'Overnight stay and evening briefing for the summit push',
        ],
      },
      {
        label: 'Day 2',
        entries: [
          'Morning crampon ascent to Profitis Ilias',
          'Photos at the snow-capped summit',
          'Descent and return to Giannitsa',
        ],
      },
    ],
  },
  'katharismos-paiko-2025': {
    title: 'Trail Cleanup on Mount Paiko',
    shortDescription:
      'A volunteer cleanup of trails and recreation areas on Mount Paiko, in partnership with the local forestry department.',
    location: 'Paiko, Pella',
    activities: [
      'Trail cleanup',
      'Litter collection at recreation spots',
      'Briefing on forest protection',
    ],
    gear: [
      'Work gloves',
      'Trash bags',
      'Waterproof shoes',
      'Hat',
      'Water & a packed snack',
    ],
    itinerary: [
      {
        label: 'Day 1',
        entries: [
          'Meet at the entrance to Paiko and hand out cleanup gear',
          'Trail and recreation area cleanup in groups',
          'Weighing the collected litter and wrapping up with refreshments',
        ],
      },
    ],
  },
  'borovets-voulgaria-2025': {
    title: 'Mountain Getaway to Borovets, Bulgaria',
    shortDescription:
      'A three-day trip to Borovets, Bulgaria, with a cable car ride up and a hike to the summit of Yastrebets at 2550m.',
    location: 'Borovets, Rila Mountains, Bulgaria',
    activities: [
      'Cable car ascent',
      'Hike to the Yastrebets summit (2550m)',
      'Stroll around the ski resort',
    ],
    gear: [
      '25L backpack',
      'Trekking poles',
      'Waterproof jacket',
      'Passport / ID card',
      'European Health Insurance Card',
    ],
    itinerary: [
      {
        label: 'Day 1',
        entries: [
          'Departure from Giannitsa and arrival in Borovets',
          'Check-in and an evening stroll around the resort',
        ],
      },
      {
        label: 'Day 2',
        entries: [
          'Cable car ascent to 2100m',
          'Hike to the Yastrebets summit at 2550m',
          'Group photos and descent',
        ],
      },
      {
        label: 'Day 3',
        entries: ['Free time at the resort', 'Return to Giannitsa'],
      },
    ],
  },
  'cheimerino-camp-ski-voras-2026': {
    title: 'Winter Ski School Camp on Mount Voras',
    shortDescription:
      "A two-day camp run by the club's ski school at the Voras ski resort, with ski and snowboard lessons for both children and adults.",
    location: 'Voras Ski Resort (Kaimaktsalan)',
    activities: [
      'Beginner ski lessons',
      'Snowboard lessons for junior athletes',
      'Games in the snow & group photo',
    ],
    gear: [
      'Ski or snowboard equipment',
      'Helmet & snow goggles',
      'Waterproof ski suit',
      'Thermal clothing',
      'Ski gloves',
    ],
    itinerary: [
      {
        label: 'Day 1',
        entries: [
          'Arrival at the resort and split into level groups',
          'Ski and snowboard lessons on the slopes',
          'Evening snow games making snow angels',
        ],
      },
      {
        label: 'Day 2',
        entries: [
          'Morning warm-up and free skiing',
          'A small ski race for the kids',
          'Awards and return to Giannitsa',
        ],
      },
    ],
  },
  'vardousia-diaschisi-sykies-athanasios-diakos': {
    title: 'Crossing the Vardousia Mountains: Sykies - Athanasios Diakos',
    shortDescription:
      'A crossing from the village of Sykies to Athanasios Diakos, in the heart of the Vardousia Mountains, with an overnight stay at traditional guesthouses.',
    location: 'Vardousia, Sykies - Athanasios Diakos, Fokida',
    activities: [
      'Crossing from Sykies to Athanasios Diakos',
      'Traditional dinner with kontosouvli and kokoretsi',
      'Morning departure for the Vardousia range',
    ],
    gear: [
      'Hiking boots',
      'Trekking pole',
      'Backpack with water, snacks, fruit, sandwich',
      'Rain jacket mandatory',
      'Separate bag with spring clothing',
    ],
    itinerary: [
      {
        label: 'Day 1',
        entries: [
          'Departure from the club at 6:00 am',
          'Arrival in Sykies by bus and start of the crossing to Athanasios Diakos',
          'Overnight stay at two guesthouses with a traditional dinner (kontosouvli, kokoretsi, oven-roasted lamb)',
        ],
      },
      {
        label: 'Day 2',
        entries: [
          'Early breakfast at the guesthouses',
          'Departure for the Vardousia range',
        ],
      },
    ],
  },
  'papigko-drakolimni-diimero': {
    title: 'Mikro Papigko - Astraka Refuge - Drakolimni',
    shortDescription:
      'A two-day hike in Zagori: on day one, the trail from Vikos to the springs of the Voidomatis River; on day two, an ascent to the Astraka refuge and Drakolimni lake at 2050m.',
    location: 'Mikro Papigko, Zagori, Epirus',
    activities: [
      'Vikos trail to the springs of the Voidomatis River',
      'Ascent from Mikro Papigko to the Astraka refuge',
      'Drakolimni via a dry lakebed and alpine meadows',
    ],
    gear: [
      'Hiking boots',
      'Trekking pole',
      'Backpack with water for both days, snacks, fruit, sandwich',
      'Rain jacket mandatory',
      'Separate bag with spring / summer clothing',
    ],
    itinerary: [
      {
        label: 'Day 1',
        entries: [
          'Departure from the club on Saturday at 6:00 am',
          'Downhill cobblestone trail from the village of Vikos to the springs of the Voidomatis River, about 40 minutes',
          'Overnight stay in Papigko (accommodation does not include breakfast)',
        ],
      },
      {
        label: 'Day 2',
        entries: [
          'Morning departure for Mikro Papigko (930m)',
          'Ascent to the Astraka refuge (1900m), 2:30-3:00 hours',
          'Route via a dry lakebed and alpine meadows to Drakolimni (2050m), about 1+ hour',
        ],
      },
    ],
  },
  'tzoumerka-syrrako-kalarrytes-2026': {
    title: 'Tzoumerka: Syrrako - Kalarrytes',
    shortDescription:
      'A trip to the mountain villages of Syrrako and Kalarrytes in Tzoumerka, traveling by 35-seat coach with an overnight stay at two local guesthouses.',
    location: 'Syrrako - Kalarrytes, Tzoumerka, Arta',
    activities: [
      'Stroll along the cobblestone streets of Syrrako',
      'Visit to Kalarrytes',
      'Getting to know the local architecture of Tzoumerka',
    ],
    gear: [
      'Day pack',
      'Hiking shoes',
      'Light rain jacket',
      'Comfortable clothes for walking around the village',
      'Camera',
    ],
    itinerary: [
      {
        label: 'Day 1',
        entries: [
          'Departure by 35-seat coach from Giannitsa',
          'Arrival in Syrrako and a stroll around the village',
          'Overnight stay at a guesthouse in Syrrako',
        ],
      },
      {
        label: 'Day 2',
        entries: ['Visit to Kalarrytes', 'Return to Giannitsa'],
      },
    ],
  },
  'valia-calda-diaschisi-2026': {
    title: 'Valia Calda - Crossing',
    shortDescription:
      'A crossing of the Valia Calda National Park, traveling by 35-seat coach with an overnight stay at the refuge-guesthouse in Vovousa.',
    location: 'Valia Calda - Vovousa, Pindus',
    activities: [
      'Crossing of the Valia Calda National Park',
      'Overnight stay at the Vovousa refuge',
      'Photos in the black pine forest',
    ],
    gear: [
      '40L backpack',
      'Trekking pole',
      'Waterproof layers',
      'High-ankle hiking boots',
      'Headlamp',
    ],
    itinerary: [
      {
        label: 'Day 1',
        entries: [
          'Departure by 35-seat coach from Giannitsa',
          'Crossing through the Valia Calda National Park',
          'Overnight stay at the refuge-guesthouse in Vovousa',
        ],
      },
      {
        label: 'Day 2',
        entries: ['Morning stroll around Vovousa', 'Return to Giannitsa'],
      },
    ],
  },
};

export const getLocalizedTrip = (trip: Trip, locale: Locale): Trip =>
  localizeItem(trip, tripTranslations[trip.slug], locale);
