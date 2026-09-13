# site-v2 — Site final (refonte anti-« template IA »)

**Site retenu** : hybride des deux concepts préférés —
**mode clair = Éditorial magazine** (lin crème, grande serif Fraunces, accent terracotta),
**mode sombre = Noir & or champagne** (esprit bridal cinéma, variante B).
Bilingue **Français / عربي (RTL, Tajawal)** avec bascule instantanée et persistance.

## Pages (une page = un mot-clé)

| Page | Mot-clé cible | Contenu |
|---|---|---|
| `index.html` | coiffeuse à domicile Oran | hero éditorial, carte des 9 prestations, galerie, mariée, avis, CTA |
| `prestations.html` | prestations & tarifs coiffure domicile Oran | menu complet (coiffure + onglerie + maquillage + extensions) + « comment ça se passe » |
| `mariee.html` | coiffure mariée Oran | parcours essai → jour J → retouches, forfait prestige (7 inclus) |
| `beaute.html` | onglerie / maquillage / extensions à domicile Oran | 3 univers : ongles, maquillage, extensions toutes techniques |
| `galerie.html` | galerie réalisations coiffure Oran | grille 6 réalisations + appel Instagram |
| `apropos.html` | Hadjira coiffeuse Oran / Institut de Beauté Ali | portrait, bio, mise en avant de l'Institut de Beauté Ali (réputation RS), 3 atouts |
| `contact.html` | contact / rendez-vous coiffeuse Oran | infos pratiques + **FAQ (5 questions, Schema.org FAQPage)** |

**Nom de marque** : **Beauty at Home by Jiji** (soins + maison — la promesse du
business). « Jiji » est le diminutif d'Hadjira ; son vrai prénom reste utilisé
sur la page À propos (confiance + SEO « hadjira coiffeuse oran »). Domaine
suggéré : `beautyathome.dz` (libre au 2026-09-13, ~à confirmer à l'achat) ;
repli `beautyathomebyjiji.com`. Pour changer la marque : clés `brand_name` FR + AR
dans `js/main.js`, `<title>` et JSON-LD de chaque page, `sitemap.xml`/`robots.txt`.

SEO : titres/descriptions uniques par page, canonical, Open Graph, JSON-LD
HairSalon + FAQPage (+ Person sur à propos), `sitemap.xml`, `robots.txt`.
Le SEO statique est en français ; en arabe, titre/description sont traduits côté client.

## Avant la mise en ligne — checklist

1. **Numéro WhatsApp** : remplacer `213XXXXXXXXX` dans `js/main.js` (une seule ligne).
2. **Nom de marque définitif** : voir encadré ci-dessus (titre de travail actuel :
   « L'Atelier d'Hadjira »).
3. **Vraies photos** : remplacer `assets/hero.jpg` et `assets/galerie/0*.jpg`
   (mêmes noms de fichiers = zéro code à toucher). Il manque notamment des
   photos maquillage, onglerie et extensions pour la page Beauté.
4. **Domaine** : remplacer `https://coiffeuse-oran.example` dans
   `sitemap.xml`, `robots.txt`, les `<link rel="canonical">` et le JSON-LD.
5. Déployer le contenu de `site-v2/` **sans** `variantes/` ni `apercus/`
   (dossiers de travail).

## Dossiers de travail (à ne pas déployer)

- `variantes/` — les trois concepts initiaux (A éditorial, B bridal, C clean).
- `apercus/` — captures pleine page (variantes + site final dans les 5 états :
  clair, sombre, arabe RTL, mobile clair, mobile sombre).

## Après la mise en ligne

- Google Business Profile (levier n°1 pour Maps et le pack local).
- Soumettre le sitemap dans Google Search Console.
- Tester l'URL depuis 2–3 opérateurs algériens (voir `site/DEPLOY.md`).
