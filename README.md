# Φ.Ο.Ο.Γ – Φυσιολατρικός Ορειβατικός Όμιλος Γιαννιτσών

Στατικός ιστότοπος σε [Astro](https://astro.build/) + [TypeScript](https://www.typescriptlang.org/) με [Tailwind CSS](https://tailwindcss.com/). Το design βασίζεται στην παλέτα Mountain Pine (#356859), Cloud White (#FDFAF6), Terracotta Peak (#E26D5A), River Rock Grey (#4C6A6D) και Moss Green (#A7C957) με κύριο κείμενο Rocky Black (#1C1C1C).

## Τεχνολογίες
- Astro 5 (static output έτοιμο για GitHub Pages)
- TypeScript με δομημένα αρχεία δεδομένων (εκδρομές, προπονητές, διοίκηση)
- Tailwind CSS + plugins Forms/Typograpy για γυάλινα panels και micro-interactions
- HTML φόρμα επικοινωνίας έτοιμη για υπηρεσίες τύπου Formspree

## Εκκίνηση
```bash
npm install
npm run dev
```
Άνοιξε το `http://localhost:4321` για προεπισκόπηση.

### Build παραγωγής
```bash
npm run build
```
Το αποτέλεσμα βρίσκεται στον φάκελο `dist/`.

## Δομή περιεχομένου
- `src/data/` – τυποποιημένα δεδομένα για εξορμήσεις, προπονητές, μέλη Δ.Σ.
- `src/components/` – κάρτες και headers που επαναχρησιμοποιούνται
- `src/pages/` – διαδρομές: `/`, `/trips`, `/history`, `/winter-sports`, `/board`, `/join`, `/gallery`, `/contact`
- `src/layouts/BaseLayout.astro` – κοινό layout με navigation & footer

Ενημέρωσε εικόνες, συνδρομές, διευθύνσεις και το action της φόρμας πριν τη δημοσίευση.

## Deploy
Η ροή εργασίας `.github/workflows/deploy.yml` εκτελεί build και ανεβάζει το `dist/` στο GitHub Pages. Προσαρμόστε το branch/ repo name στις ρυθμίσεις σας.
