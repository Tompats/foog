# Ρύθμιση CMS (Decap CMS)

Το site απέκτησε μια σελίδα διαχείρισης στο `/admin/`, φτιαγμένη με το
[Decap CMS](https://decapcms.org/). Δίνει μια φόρμα για να προσθέτεις/
επεξεργάζεσαι εξορμήσεις χωρίς να αγγίζεις κώδικα.

Υπάρχουν δύο τρόποι να το τρέξεις:

1. **Τοπικά, χωρίς OAuth** (τώρα, όσο μόνο εσύ το χρησιμοποιείς).
2. **Μέσω του δημόσιου `/admin/`**, με login μέσω GitHub (αργότερα, αν
   θελήσετε να δώσετε πρόσβαση και σε άλλα μέλη του δ.σ.).

## 1. Τοπική χρήση (χωρίς OAuth) — τρέξιμο τώρα

Δεν χρειάζεται κανένας λογαριασμός Netlify ή GitHub OAuth App. Το CMS γράφει
απευθείας τα αρχεία στον υπολογιστή σου, ακριβώς όπως θα το έκανες εσύ με το
χέρι· μετά κάνεις commit/push όπως πάντα.

1. Άνοιξε ένα τερματικό και τρέξε: `npm run cms`
   (ξεκινάει τον τοπικό διακομιστή του Decap στο `http://localhost:8081`,
   τον οποίο χρησιμοποιεί το CMS για να διαβάζει/γράφει αρχεία).
2. Σε δεύτερο τερματικό, τρέξε το κανονικό `npm run dev`.
3. Πήγαινε στο `http://localhost:4321/admin/`. Το CMS θα ανιχνεύσει
   αυτόματα ότι τρέχεις τοπικά και θα παρακάμψει εντελώς το login —
   θα δεις κατευθείαν τη λίστα "Εξορμήσεις".
4. Πρόσθεσε/επεξεργάσου μια εξόρμηση και πάτα "Save" (ή "Publish", ανάλογα
   την έκδοση). Το αρχείο `.md` ενημερώνεται μέσα στο `src/content/trips/`.
5. Έλεγξε τις αλλαγές (`git status` / `git diff`) και κάνε commit/push όπως
   κάνεις συνήθως — το τοπικό CMS δεν κάνει commit από μόνο του.

Όσο δεν έχει γίνει το βήμα 2 παρακάτω, το `/admin/` στο πραγματικό
`foog.gr` δεν λειτουργεί για κανέναν (θα εμφανίζει κουμπί "Login with
GitHub" που δεν έχει πού να συνδεθεί) — που ταιριάζει με το "μόνο εγώ έχω
πρόσβαση προς το παρόν", αφού η μόνη πρόσβαση είναι τοπικά, στον δικό σου
υπολογιστή.

## 2. Δημόσιο `/admin/` με login GitHub (αργότερα, προαιρετικό)

Όποτε θελήσετε να μπορεί να προσθέτει/επεξεργάζεται εξορμήσεις κι άλλο μέλος
του δ.σ. από το κινητό/browser του, χωρίς να τρέχει τίποτα τοπικά, θα
χρειαστεί ένα μικρό "OAuth proxy" — το GitHub Pages είναι static και δεν
μπορεί να κάνει το token exchange μόνο του. Η πιο απλή λύση είναι το δωρεάν
OAuth provider του Netlify (**δεν χρειάζεται να μεταφέρεις το site εκεί**,
το GitHub Pages παραμένει όπως είναι).

### Βήμα 1 — Δημιούργησε ένα δωρεάν Netlify site (μόνο για το login)

1. Πήγαινε στο https://app.netlify.com/signup και κάνε εγγραφή (π.χ. με τον
   ίδιο λογαριασμό GitHub).
2. "Add new site" → "Deploy manually" και ανέβασε έναν οποιονδήποτε κενό
   φάκελο (δεν έχει σημασία το περιεχόμενο — το site αυτό δεν εξυπηρετεί
   τίποτα, χρησιμεύει μόνο για το OAuth).
3. Σημείωσε τη διεύθυνση που σου δίνει, π.χ. `random-name-123.netlify.app`.
   Μπορείς να το μετονομάσεις από Site settings → General → Site details →
   Change site name, π.χ. σε `foog-cms-auth.netlify.app`.

### Βήμα 2 — Δημιούργησε ένα GitHub OAuth App

1. GitHub → Settings (προσωπικό προφίλ, όχι το repo) → Developer settings →
   OAuth Apps → New OAuth App.
2. Συμπλήρωσε:
   - **Application name**: π.χ. `Φ.Ο.Ο.Γ. CMS`
   - **Homepage URL**: η διεύθυνση Netlify από το Βήμα 1
     (π.χ. `https://foog-cms-auth.netlify.app`)
   - **Authorization callback URL**: `https://api.netlify.com/auth/done`
3. Μετά τη δημιουργία, αντέγραψε το **Client ID** και δημιούργησε ένα
   **Client secret**.

### Βήμα 3 — Σύνδεσε τα δύο στο Netlify

1. Στο Netlify site από το Βήμα 1: Site settings → Access control (ή "Site
   configuration" → "Identity" ανάλογα την έκδοση) → OAuth → Install
   provider → GitHub.
2. Επικόλλησε το Client ID και το Client secret από το Βήμα 2.

### Βήμα 4 — Ενημέρωσε το `public/admin/config.yml`

Άλλαξε τη γραμμή:

```yaml
base_url: https://REPLACE-WITH-YOUR-NETLIFY-SITE.netlify.app
```

ώστε να δείχνει στο πραγματικό Netlify site του Βήματος 1, κάνε commit/push,
και περίμενε να τρέξει το deploy.

### Βήμα 5 — Δώσε πρόσβαση στο repo σε όσους θα το χρησιμοποιούν

Το Decap CMS κάνει commit σαν τον χρήστη GitHub που κάνει login. Άρα κάθε
άτομο που θα προσθέτει εξορμήσεις πρέπει να έχει **write access** στο repo
`Tompats/foog` (Settings → Collaborators, στο ίδιο το repo).

### Χρήση μετά τη ρύθμιση

Πήγαινε στο `https://foog.gr/admin/`, πάτα "Login with GitHub", και θα δεις
τη λίστα "Εξορμήσεις" έτοιμη για προσθήκη/επεξεργασία. Κάθε αποθήκευση κάνει
άμεσα commit στο `master`.

Αν αργότερα θέλετε ένα ενδιάμεσο βήμα έγκρισης πριν δημοσιευτεί κάτι
(δηλαδή draft → review → merge αντί για απευθείας commit), άλλαξε στο
`config.yml`:

```yaml
publish_mode: editorial_workflow
```

Αυτό κάνει το CMS να ανοίγει pull requests αντί να κάνει commit κατευθείαν
στο `master`.
