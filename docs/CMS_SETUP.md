# Ρύθμιση CMS (Decap CMS)

Το site απέκτησε μια σελίδα διαχείρισης στο `/admin/`, φτιαγμένη με το
[Decap CMS](https://decapcms.org/). Δίνει μια φόρμα για να προσθέτεις/
επεξεργάζεσαι εξορμήσεις χωρίς να αγγίζεις κώδικα — κάθε αποθήκευση κάνει
commit απευθείας στο `master`, άρα δημοσιεύεται αυτόματα μέσω του υπάρχοντος
GitHub Pages workflow.

Επειδή το GitHub Pages είναι static (δεν τρέχει server), το login με GitHub
μέσα από το CMS χρειάζεται έναν μικρό "OAuth proxy". Η πιο απλή λύση είναι να
χρησιμοποιήσεις το δωρεάν OAuth provider του Netlify — **δεν χρειάζεται να
μεταφέρεις το site στο Netlify**, το GitHub Pages παραμένει όπως είναι.

## Βήμα 1 — Δημιούργησε ένα δωρεάν Netlify site (μόνο για το login)

1. Πήγαινε στο https://app.netlify.com/signup και κάνε εγγραφή (π.χ. με τον
   ίδιο λογαριασμό GitHub).
2. "Add new site" → "Deploy manually" και ανέβασε έναν οποιονδήποτε κενό
   φάκελο (δεν έχει σημασία το περιεχόμενο — το site αυτό δεν εξυπηρετεί
   τίποτα, χρησιμεύει μόνο για το OAuth).
3. Σημείωσε τη διεύθυνση που σου δίνει, π.χ. `random-name-123.netlify.app`.
   Μπορείς να το μετονομάσεις από Site settings → General → Site details →
   Change site name, π.χ. σε `foog-cms-auth.netlify.app`.

## Βήμα 2 — Δημιούργησε ένα GitHub OAuth App

1. GitHub → Settings (προσωπικό προφίλ, όχι το repo) → Developer settings →
   OAuth Apps → New OAuth App.
2. Συμπλήρωσε:
   - **Application name**: π.χ. `Φ.Ο.Ο.Γ. CMS`
   - **Homepage URL**: η διεύθυνση Netlify από το Βήμα 1
     (π.χ. `https://foog-cms-auth.netlify.app`)
   - **Authorization callback URL**: `https://api.netlify.com/auth/done`
3. Μετά τη δημιουργία, αντέγραψε το **Client ID** και δημιούργησε ένα
   **Client secret**.

## Βήμα 3 — Σύνδεσε τα δύο στο Netlify

1. Στο Netlify site από το Βήμα 1: Site settings → Access control (ή "Site
   configuration" → "Identity" ανάλογα με την έκδοση) → OAuth → Install
   provider → GitHub.
2. Επικόλλησε το Client ID και το Client secret από το Βήμα 2.

## Βήμα 4 — Ενημέρωσε το `public/admin/config.yml`

Άλλαξε τη γραμμή:

```yaml
base_url: https://REPLACE-WITH-YOUR-NETLIFY-SITE.netlify.app
```

ώστε να δείχνει στο πραγματικό Netlify site του Βήματος 1, κάνε commit/push,
και περίμενε να τρέξει το deploy.

## Βήμα 5 — Δώσε πρόσβαση στο repo σε όσους θα το χρησιμοποιούν

Το Decap CMS κάνει commit σαν τον χρήστη GitHub που κάνει login. Άρα κάθε
άτομο που θα προσθέτει εξορμήσεις πρέπει να έχει **write access** στο repo
`Tompats/foog` (Settings → Collaborators, στο ίδιο το repo).

## Χρήση

Μόλις γίνει deploy η αλλαγή, πήγαινε στο `https://foog.gr/admin/`, πάτα
"Login with GitHub", και θα δεις τη λίστα "Εξορμήσεις" έτοιμη για προσθήκη/
επεξεργασία. Κάθε αποθήκευση κάνει άμεσα commit στο `master` — ό,τι θα
έκανε κανονικά ένα PR εδώ, το κάνει η φόρμα.

Αν αργότερα θέλετε ένα ενδιάμεσο βήμα έγκρισης πριν δημοσιευτεί κάτι
(δηλαδή draft → review → merge αντί για απευθείας commit), άλλαξε στο
`config.yml`:

```yaml
publish_mode: editorial_workflow
```

Αυτό κάνει το CMS να ανοίγει pull requests αντί να κάνει commit κατευθείαν
στο `master`.
