import type { Trip } from '../types';

export const trips: Trip[] = [
  {
    slug: 'sunrise-ridge-tour',
    title: 'Κορυφογραμμή Γεροντόβραχου Παρνασσού',
    startDate: '2025-02-08',
    endDate: '2025-02-10',
    type: 'ski',
    difficulty: 3,
    elevationGain: 1200,
    distanceKm: 14,
    leader: 'Maya Chen',
    status: 'active',
    shortDescription: 'Ski touring στην κορυφογραμμή Γεροντόβραχου Παρνασσού με φώκιες, παγωμένους λούκιες και powder κατάβαση προς Καρπενήσι.',
    location: 'Χιονοδρομικό Παρνασσού',
    activities: ['Ski tour Mt. Gerontovrachos', 'Avalanche refreshers', 'Κατάβαση Καρπενήσιου'],
    gear: ['Σακίδιο 40L', 'Σετ φώκιες / splitboard', 'Beacon - φτυάρι - προμνήμα', 'Θερμικά στρώματα', 'Κράνος & γυαλιά χιονιού'],
    itinerary: [
      {
        label: 'Ημέρα 1',
        entries: ['Συνάντηση στο Λιβάδι Παρνασσού και έλεγχος εξοπλισμού', 'Ανάβαση προς Γεροντόβραχο με στάσεις τεχνικής ski touring', 'Νυχτερινό briefing και stretching στο σαλέ']
      },
      {
        label: 'Ημέρα 2',
        entries: ['Πρωινό ζέσταμα, session διάσωσης σε χιονοστιβάδα', 'Κατάβαση προς Καρπενήσι με συνοδεία προπονητών', 'Retrospective και αποχώρηση']
      }
    ]
  },
  {
    slug: 'midnight-alpine-classic',
    title: 'Μεσονύχτια Ανάβαση Μύτικα Ολύμπου',
    startDate: '2025-03-15',
    endDate: '2025-03-17',
    type: 'mountaineering',
    difficulty: 4,
    elevationGain: 1800,
    distanceKm: 18,
    leader: 'Lars Nyberg',
    status: 'active',
    shortDescription: 'Αλπικό νυχτερινό push στον Μύτικα Ολύμπου με μικτό πεδίο, bivouac στα Πριόνια και ανατολή πάνω από τις κορυφές Σκολιό και Λαιμός.',
    location: 'Μύτικας, Όλυμπος',
    activities: ['Ανάβαση Λιβαδάκι - Σκολιό', 'Camp στα Πριόνια', 'Αντίσκηνα στον Λαιμό'],
    gear: ['Τεχνικό σακίδιο 45L', 'Κράνος - μποντριέ - 2 καραμπίνερ', 'Σετ χειμερινού bivy', 'Ζώνη ασφαλείας και prusik', 'Τσεκούρι πάγου & κραμπόν'],
    itinerary: [
      {
        label: 'Ημέρα 1',
        entries: ['Αναχώρηση από Λιτόχωρο, άνοδος προς Πριόνια', 'Στήσιμο camp και μεσοβραδινή ανάβαση για προσαρμογή', 'Νυχτερινή διάσχιση ridge με υποστήριξη φακών']
      },
      {
        label: 'Ημέρα 2',
        entries: ['Summit push προς Σκολιό/Μύτικα τα ξημερώματα', 'Τεχνικές ραπέλ σε μικτό πεδίο', 'Επιστροφή και αποσυναρμολόγηση camp']
      },
      {
        label: 'Ημέρα 3',
        entries: ['Προαιρετική παράκαμψη στον Λαιμό', 'Αξιολόγηση δεξιοτήτων & brunch αποχαιρετισμού']
      }
    ]
  },
  {
    slug: 'carrie-pass-late-winter',
    title: 'Μονοπάτι Μακρυνόρεμα Πηλίου',
    startDate: '2025-04-05',
    endDate: '2025-04-06',
    type: 'hiking',
    difficulty: 2,
    elevationGain: 900,
    distanceKm: 16,
    leader: 'Priya Anand',
    status: 'active',
    shortDescription: 'Snowshoeing στο μονοπάτι Μακρυνόρεμα Πηλίου με ήπιες κλίσεις, τρεχούμενα νερά και θέα στον Παγασητικό.',
    location: 'Μακρυνόρεμα, Πήλιο',
    activities: ['Διαδρομή Μακρυνόρεμα', 'Εργαστήριο χάρτη & πυξίδας'],
    gear: ['Σακίδιο 30L', 'Snowshoes ή microspikes', 'Μπατόν πεζοπορίας', 'Αδιάβροχα στρώματα', 'Θερμός με ζεστό ρόφημα'],
    itinerary: [
      {
        label: 'Ημέρα 1',
        entries: ['Εισαγωγή στο shelter και διανομή χάρτη', 'Πεζοπορία δίπλα στο ρέμα με στάσεις ανάγνωσης εδάφους', 'Βραδινό workshop προσανατολισμού']
      },
      {
        label: 'Ημέρα 2',
        entries: ['Σύντομη ανάβαση σε πανοραμικό σημείο', 'Ασκήσεις team navigation & επιστροφή']
      }
    ]
  },
  {
    slug: 'granite-arete-mentorship',
    title: 'Μέντορινγκ στη Δούπι των Μετεώρων',
    startDate: '2024-09-18',
    type: 'mountaineering',
    difficulty: 5,
    elevationGain: 500,
    distanceKm: 6,
    leader: 'Silvia Prado',
    status: 'active',
    shortDescription: 'Μέντορινγκ πάνω στους πύργους Δούπι των Μετεώρων με multi-pitch ασκήσεις, τοποθέτηση friends και coaching σε κάθε ρελέ.',
    location: 'Μετέωρα, Καλαμπάκα',
    activities: ['Multi-pitch στο Δούπι', 'Σεμινάριο τοποθέτησης friends'],
    gear: ['Σακίδιο 35L', 'Σετ friends & nuts', 'Διπλά σχοινιά 60m', 'Κράνος - μποντριέ', 'Παπούτσια αναρρίχησης & γάντια'],
    itinerary: [
      {
        label: 'Ημέρα 1',
        entries: ['Συνάντηση στη βάση των Μετεώρων', 'Επαναληπτική θεωρία τοποθέτησης προστασιών', 'Ανάβαση 3 σχοινιών και coaching σε κάθε ρελέ']
      }
    ]
  },
  {
    slug: 'solstice-glacier-glide',
    title: 'Διάσχιση Σμόλικα - Βασιλίτσας',
    startDate: '2024-12-20',
    endDate: '2024-12-22',
    type: 'ski',
    difficulty: 4,
    elevationGain: 1400,
    distanceKm: 20,
    leader: 'Aaron Wells',
    status: 'active',
    shortDescription: 'Διάσχιση Σμόλικα - Βασιλίτσας με couloirs, crevasse rescue στο χιονοδρομικό και γιορτή στο φωτεινό ηλιοστάσιο.',
    location: 'Χιονοδρομικό Βασιλίτσας',
    activities: ['Ski & snowboard park sessions', 'Χιονοδρομία προς Σμόλικα'],
    gear: ['Σκι ή splitboard', 'Beacon - φτυάρι - προμνήμα', 'Ισοθερμικά', 'Κράνος & μάσκα', 'Power bank & φακός κεφαλής'],
    itinerary: [
      {
        label: 'Ημέρα 1',
        entries: ['Check-in στο καταφύγιο Βασιλίτσας', 'Προθέρμανση στο park και ασκήσεις ισορροπίας', 'Βραδινό masterclass διάσωσης σε κρεβάς']
      },
      {
        label: 'Ημέρα 2',
        entries: ['Διαδρομή προς Σμόλικα με διαδοχικά couloirs', 'Αποθεραπεία και stretching στη βάση']
      }
    ]
  },
  {
    slug: 'ember-peak-linkup',
    title: 'Σύνδεση Κορυφών Δρακόλιμνης Τύμφης',
    startDate: '2024-07-12',
    endDate: '2024-07-14',
    type: 'mountaineering',
    difficulty: 3,
    elevationGain: 1500,
    distanceKm: 19,
    leader: 'Noah Delaroche',
    status: 'active',
    shortDescription: 'Σύνδεση κορυφών γύρω από τη Δρακόλιμνη Τύμφης με bivouac στη ράχη, βραχώδεις κόψεις και λούκια γεμάτα χιόνι.',
    location: 'Τύμφη, Δρακόλιμνη',
    activities: ['Διάσχιση Κακαρδίτσα', 'Loop στη Δρακόλιμνη'],
    gear: ['Σακίδιο 45L', 'Σκηνή ελαφριά', 'Σετ φίλτρανσης νερού', 'Μπατόν & κράνος', 'Σετ πρώτων βοηθειών ομάδας'],
    itinerary: [
      {
        label: 'Ημέρα 1',
        entries: ['Ανάβαση προς Κακαρδίτσα με ενδιάμεσες στάσεις φωτογραφίας', 'Εγκατάσταση bivouac στη ράχη και workshop διατροφής']
      },
      {
        label: 'Ημέρα 2',
        entries: ['Πρωινό τρέξιμο γύρω από τη Δρακόλιμνη', 'Τεχνικές skimountaineering στην επιστροφή', 'Κατάβαση προς Μικρό Πάπιγκο']
      }
    ]
  },
  {
    slug: 'orliakas-alpine-sprint',
    title: 'Ταχεία Διάσχιση Ράχης Ορλιάκα',
    startDate: '2026-06-21',
    endDate: '2026-06-22',
    type: 'mountaineering',
    difficulty: 3,
    elevationGain: 1100,
    distanceKm: 15,
    leader: 'Eleni Marantou',
    status: 'active',
    shortDescription: 'Ταχύ ridge running πάνω από τον Ορλιάκα στα Γρεβενά με bivy στο διάσελο και προπονήσεις νυχτερινής πλοήγησης.',
    location: 'Ορλιάκας, Γρεβενά',
    activities: ['Ridge traverse', 'Night navigation clinic'],
    gear: ['Σακίδιο 32L', 'Ελαφρύ bivy', 'Κράνος & μποντριέ', 'Αντιανεμικό shell', 'GPS tracker & VHF'],
    itinerary: [
      {
        label: 'Ημέρα 1',
        entries: ['Πορεία προς το διάσελο και εγκατάσταση bivy', 'Απογευματινό ridge run με focus στην ταχύτητα', 'Νυχτερινή πλοήγηση με headlamps']
      },
      {
        label: 'Ημέρα 2',
        entries: ['Τεχνικές ασφάλισης σε εκτεθειμένο μονοπάτι', 'Κατάβαση και κλείσιμο με feedback κύκλου']
      }
    ]
  },
  {
    slug: 'axelos-skyline-retreat',
    title: 'Ορίζοντας Άξελου στον Αξιό',
    startDate: '2026-08-09',
    endDate: '2026-08-10',
    type: 'hiking',
    difficulty: 2,
    elevationGain: 700,
    distanceKm: 12,
    leader: 'Giannis Koufos',
    status: 'canceled',
    shortDescription: 'Ήρεμο retreat στον Άξελο πάνω από τον Αξιό με ανατολή, outdoor yoga και bushcraft εργαστήρια στο τοπικό μονοπάτι (αναβλήθηκε).',
    location: 'Αξιός, Άξελος',
    activities: ['Sunrise hike', 'Outdoor yoga', 'Bushcraft basics'],
    gear: ['Σακίδιο 28L', 'Χαλάκι yoga', 'Αδιάβροχο poncho', 'Εργαλεία bushcraft (μαχαίρι, σκοινί)', 'Ελαφριά κουβέρτα'],
    itinerary: [
      {
        label: 'Ημέρα 1',
        entries: ['Άφιξη στο basecamp και καλωσόρισμα', 'Απογευματινό μάθημα bushcraft', 'Βραδινό κύκλος αναπνοών κάτω από τα αστέρια']
      },
      {
        label: 'Ημέρα 2',
        entries: ['Sunrise yoga στην κορυφή Άξελου', 'Χαλαρή κατάβαση και ενημέρωση για νέα ημερομηνία (trip canceled)']
      }
    ]
  },
  {
    slug: 'pindos-ridge-classic',
    title: 'Βάλια Κάλντα - Ράχη Πίνδου',
    startDate: '2023-10-05',
    endDate: '2023-10-08',
    type: 'hiking',
    difficulty: 3,
    elevationGain: 1600,
    distanceKm: 42,
    leader: 'Katerina Stogiannidou',
    status: 'active',
    shortDescription: 'Τετραήμερη διάσχιση από Βάλια Κάλντα ως τις ράχες Πίνδου με camp σε ρυάκια, Μαυροβούνι και ιστορίες δίπλα στη φωτιά.',
    location: 'Πίνδος',
    activities: ['Valia Calda trek', 'Μικρά Πίνδος ridgeline', 'Campfire stories'],
    gear: ['Σακίδιο 55L', 'Τετραήμερο σετ bivy', 'Μπατόν & αδιάβροχα', 'Φίλτρο νερού', 'Προμήθειες υψηλής ενέργειας'],
    itinerary: [
      {
        label: 'Ημέρα 1',
        entries: ['Είσοδος στη Βάλια Κάλντα και ανάβαση προς Λούτσα', 'Στήσιμο κατασκήνωσης και δείπνο σε φωτιά']
      },
      {
        label: 'Ημέρα 2',
        entries: ['Διάσχιση ράχης με θέα Σμόλικα', 'Εργαστήριο διαχείρισης ενέργειας σε πολύημερη πορεία']
      },
      {
        label: 'Ημέρα 3',
        entries: ['Κατάβαση στο ποτάμι για επανατροφοδοσία', 'Ανάβαση προς Μαυροβούνι και βραδινό camp']
      },
      {
        label: 'Ημέρα 4',
        entries: ['Πρωινό stretching, φωτογραφίες κορυφής', 'Επιστροφή στο χωριό και κλείσιμο εξόρμησης']
      }
    ]
  },
  {
    slug: 'verias-winter-ascent',
    title: 'Χειμερινή Couloir Πιερίων Βεροίας',
    startDate: '2023-12-12',
    endDate: '2023-12-13',
    type: 'mountaineering',
    difficulty: 4,
    elevationGain: 1300,
    distanceKm: 18,
    leader: 'Charis Papamichael',
    status: 'active',
    shortDescription: 'Χειμερινό διήμερο στα couloirs Πιερίων πάνω από Βέροια με αυτοασφάλειες, ανατολή κορυφής και κατάβαση σε παγωμένο δάσος.',
    location: 'Βέροια, Πιέρια',
    activities: ['Night cramponing', 'Self arrest clinic', 'Summit sunrise'],
    gear: ['Κράνος, μποντριέ, 2 ιμάντες', 'Τεχνικό τσεκούρι', 'Κραμπόν', 'Down jacket', 'Θερμός & ενεργειακές μπάρες'],
    itinerary: [
      {
        label: 'Ημέρα 1',
        entries: ['Ανάβαση μέσα από το δάσος μέχρι την αλπική ζώνη', 'Νυχτερινό εργαστήριο αυτοασφάλειας σε πλαγιά']
      },
      {
        label: 'Ημέρα 2',
        entries: ['Πολύ πρωινή ανάβαση couloir με χρήση σχοινιού', 'Κατάβαση και ζεστό ρόφημα στη βάση']
      }
    ]
  }
];
