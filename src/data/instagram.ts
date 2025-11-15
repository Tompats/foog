export interface InstagramPost {
  url: string;
  label?: string;
}

// Ενημερώστε τη λίστα με μόνιμους συνδέσμους (permalinks) από το @f.o.o.giannitson
// Παράδειγμα μορφής: https://www.instagram.com/p/XXXXXXXXXXX/
export const instagramPosts: InstagramPost[] = [
  {
    url: 'https://www.instagram.com/p/CwExample1234/',
    label: 'Χειμερινή εκπαίδευση στο Καϊμάκτσαλαν'
  },
  {
    url: 'https://www.instagram.com/p/CxExample5678/',
    label: 'Πεζοπορία στο Πάικο με καθαρισμό μονοπατιού'
  }
];
