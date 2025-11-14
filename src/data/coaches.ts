import type { Coach } from '../types';

export const coaches: Coach[] = [
  {
    name: 'Maya Chen',
    role: 'Επικεφαλής Οδηγός Σκι',
    photoUrl: 'https://via.placeholder.com/300x300.png?text=Maya+Chen',
    certifications: ['ACMG Ski Guide', 'Avalanche Pro 2'],
    bio: 'Η Maya καθοδηγεί επί δύο δεκαετίες σε όλη τη Βορειοδυτική Ακτή με έμφαση στην συμπεριληπτική εκπαίδευση backcountry.',
    specialties: ['Σκι Ορειβατικό', 'Χιονολογία', 'Μέντορινγκ']
  },
  {
    name: 'Lars Nyberg',
    role: 'Τεχνικός Αλπικός Προπονητής',
    photoUrl: 'https://via.placeholder.com/300x300.png?text=Lars+Nyberg',
    certifications: ['IFMGA Guide', 'Wilderness First Responder'],
    bio: 'Σουηδός αλπινιστής με αναβάσεις σε έξι ηπείρους που αγαπά να μοιράζεται συστήματα σχοινιών και τεχνικές διάσωσης.',
    specialties: ['Μικτό πεδίο', 'Ταξίδι σε παγετώνα', 'Διαχείριση ρίσκου']
  },
  {
    name: 'Priya Anand',
    role: 'Υπεύθυνη Πεζοπορίας & Φυσικής Κατάστασης',
    photoUrl: 'https://via.placeholder.com/300x300.png?text=Priya+Anand',
    certifications: ['Leave No Trace Master Educator', 'NASM Trainer'],
    bio: 'Η Priya σχεδιάζει προγράμματα ενδυνάμωσης και ήπιες διαδρομές γνωριμίας για όσους μπαίνουν για πρώτη φορά στο αλπικό περιβάλλον.',
    specialties: ['Αντοχή', 'Πλοήγηση', 'Νεανικά προγράμματα']
  },
  {
    name: 'Silvia Prado',
    role: 'Μέντορας Βράχου & Πάγου',
    photoUrl: 'https://via.placeholder.com/300x300.png?text=Silvia+Prado',
    certifications: ['AMGA Rock Guide', 'SPI Provider'],
    bio: 'Η Silvia ηγείται των κύκλων mentoring βοηθώντας τους αναρριχητές να εξελιχθούν από sport διαδρομές σε απαιτητικούς αλπικούς στόχους.',
    specialties: ['Παραδοσιακή αναρρίχηση', 'Συστήματα διάσωσης', 'Γυναικείες+ ομάδες']
  }
];
