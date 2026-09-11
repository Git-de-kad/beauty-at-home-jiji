# 02 — Site Odoo One App Free : guide de déploiement

## 1. Le plan gratuit Odoo en bref

**Odoo One App Free** ([odoo.com/app/website](https://www.odoo.com/app/website)) :

- Site web **gratuit à vie** : hébergement, support, maintenance inclus, sans pub.
- **1 an de nom de domaine offert** (à la première souscription annuelle du domaine ;
  le renouvellement suivant est payant, ~12–15 €/an — prévoir le rappel).
- Accès au Website Builder (thèmes, éditeur drag & drop, configurateur IA 2026),
  banque d'images libres de droits.

⚠️ **Contrainte clé : une seule app.** Le plan gratuit vaut tant que l'instance
n'utilise qu'un seul module (Website). Installer **Appointments** (prise de RDV) ou
**eCommerce** ajoute une 2e app → **bascule en payant** (Odoo Standard).
[Retour d'expérience forum Odoo](https://www.odoo.com/forum/help-1/is-odoo-website-builder-for-free-or-we-need-to-subscribe-248342).

**Décision** : site vitrine pur. La réservation passe par un **bouton WhatsApp**
(`https://wa.me/213XXXXXXXXX?text=...`) — gratuit, c'est déjà le réflexe des
clientes algériennes, et ça ne consomme aucune app supplémentaire.

## 2. Choix du nom de domaine

Critères : court, mémorisable, en .com ou .dz (le .dz nécessite un passeur/agrément
et est plus lourd à obtenir → recommander .com pour démarrer vite).

Idées à proposer à la coiffeuse (à valider avec son nom de marque) :

- `coiffeuse-oran.com`
- `[prenom]-coiffure-oran.com` (ex. `samira-coiffure-oran.com`)
- `[marque].com` si elle a déjà un nom commercial (Instagram…)

## 3. Arborescence du site (4 pages, mobile-first)

```
Accueil
├── Hero : « Coiffeuse à domicile à Oran » + CTA WhatsApp
├── Preuves : 3 photos avant/après + note de confiance
└── Zones desservies (Oran, Bir El Djir, Es Sénia…)
Prestations & Tarifs
├── Tableau simple : prestation / durée / prix
├── Mentions : déplacement inclus ou non, suppléments
└── CTA WhatsApp
Galerie
├── Grille photos réelles (avant/après, mariées, brushings)
└── Mention « photos de mon travail, pas de banque d'images »
Contact
├── Bouton WhatsApp (CTA principal)
├── Lien Instagram / TikTok
├── Formulaire Odoo (email — 2e canal, fallback)
└── Horaires + préavis de réservation (ex. 48 h)
```

Règles de contenu :

- **Un seul objectif par page** : pousser vers WhatsApp.
- **Titres SEO** : chaque page avec un H1 contenant « coiffeuse à domicile Oran »
  varianté (ex. « Tarifs coiffeuse à domicile à Oran »).
- **Photos réelles obligatoires** — demander à la coiffeuse 15–20 photos de son
  travail (avec l'accord des clientes, visages floutés si besoin).
- Mobile-first : 95 %+ du trafic attendu sur téléphone.

## 4. Étapes de mise en place (checklist)

1. Créer la base Odoo Online (essai → plan One App Free, **n'installer QUE Website** ;
   ne pas activer CRM/eCommerce/Appointments).
2. Acheter le domaine via l'offre Odoo (1 an offert) ou le connecter si acheté
   ailleurs (CNAME/A → gérés par Odoo automatiquement en interne).
3. Choisir un thème beauté/one-page, adapter couleurs (palette sobre : rose poudré /
   doré / blanc).
4. Construire les 4 pages ci-dessus.
5. Configurer le bouton WhatsApp avec message prérempli :
   `Bonjour, je souhaite prendre rendez-vous (coiffure à domicile)`.
6. Formulaire Odoo → email de la coiffeuse (tester la réception).
7. Métadonnées SEO par page (titre ≤ 60 car., description ≤ 155 car. contenant
   « coiffeuse à domicile Oran »).
8. Créer **Google Business Profile** :
   - Catégorie : service de coiffure à domicile / « Hairdresser ».
   - Zone de service : Oran (sans adresse publique — option « zone desservie »).
   - Photos, horaires, lien site + WhatsApp.
   - C'est le levier n°1 pour apparaître dans Maps / le pack local Google.
9. Tester le site sur mobile, mesurer (Lighthouse), recueillir les retours de la
   coiffeuse.
10. Soumettre le sitemap à Google Search Console.

## 5. Option multilingue

Français seul recommandé pour la v1 (simplicité de maintenance). Odoo supporte le
multi-langue nativement si besoin plus tard d'ajouter l'arabe — mais doubler le
contenu coûte du temps à une exploitante solo ; reporter à la v2.

## 6. Ce que le site n'est pas

- Pas une boutique (pas d'eCommerce → plan gratuit préservé).
- Pas un agenda en ligne (pas d'app Appointments → WhatsApp fait le travail).
- Pas un moteur de trafic autonome → voir doc 03 pour l'acquisition RS.
