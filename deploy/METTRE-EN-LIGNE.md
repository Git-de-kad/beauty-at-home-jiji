# Mise en ligne — Beauty at Home by Jiji

Deux chemins possibles. Le chemin A (recommandé) relie GitHub à Cloudflare :
chaque `git push` publiera automatiquement le site.

---

## ✅ ÉTAT (2026-09-13) : SITE EN LIGNE

**URL de production : https://beauty-at-home-jiji.pages.dev**

Déployé via Wrangler (upload direct avec le token du `.env` du workspace) —
le projet Pages n'est PAS encore connecté au repo GitHub. Pour republier après
une modification :

```bash
./deploy/deploy.sh && wrangler pages deploy dist --project-name beauty-at-home-jiji --branch main
```

(option : connecter le repo dans le dashboard Cloudflare pour un déploiement
automatique à chaque `git push` — section A ci-dessous.)

---

## A. Cloudflare Pages connecté à GitHub (recommandé)

### 1. Pousser sur GitHub

Créer le dépôt vide sur https://github.com/new — nom suggéré :
**`beauty-at-home-jiji`**, visibilité **Public**, **aucune** case d'init
(pas de README, pas de .gitignore, pas de licence).

Puis :

```bash
git remote add origin git@github.com:Git-de-kad/beauty-at-home-jiji.git
git branch -M main
git push -u origin main
```

### 2. Cloudflare Pages

1. https://dash.cloudflare.com → **Workers & Pages** → **Create** →
   **Pages** → **Connect to Git** → autoriser GitHub → choisir
   `beauty-at-home-jiji`.
2. Configuration de build :
   - **Project name** : `beauty-at-home-jiji` (→ URL `beauty-at-home-jiji.pages.dev`)
   - **Production branch** : `main`
   - **Framework preset** : None
   - **Build command** :
     ```bash
     mkdir -p dist && cp site-v2/*.html site-v2/*.xml site-v2/*.txt dist/ && cp -r site-v2/css site-v2/js site-v2/assets dist/
     ```
   - **Build output directory** : `dist`
3. **Save and Deploy** → le site est en ligne en ~1 minute sur
   `https://beauty-at-home-jiji.pages.dev`.

Chaque futur `git push` sur `main` redéploie automatiquement.

### 3. ⚠️ Test obligatoire depuis l'Algérie

Des blocages intermittents d'IP Cloudflare ont été signalés chez certains ISP
algériens. Avant toute annonce publique, ouvrir l'URL depuis 2–3 opérateurs
différents (Algérie Télécom / Mobilis / Djezzy / Ooredoo), en 4G **et** en Wi-Fi.
Si blocage : basculer sur GitHub Pages (chemin B) ou utiliser un domaine perso.

### 4. Domaine (quand choisi)

- Acheter `beautyathome.dz` (registrar .dz, ex. CERIST) ou
  `beautyathomebyjiji.com` (~10 $/an, Cloudflare Registrar).
- Dans Pages → projet → **Custom domains** → ajouter le domaine, suivre les
  instructions DNS (CNAME ou transfer des nameservers à Cloudflare).
- Puis remplacer `https://beautyathome.dz` dans : `sitemap.xml`, `robots.txt`,
  les JSON-LD (`"url"`) de `index/prestations/mariee.html`. Les
  `<link rel="canonical">` sont relatifs, rien à faire.

---

## B. GitHub Pages (repli simple, sans Cloudflare)

1. Dépôt public + push (étape 1 ci-dessus).
2. GitHub → Settings → Pages → Source : **Deploy from a branch** → `main` / `/ (root)`.
   ⚠️ Publie alors tout le dépôt, y compris `site-v2/variantes/` et
   `site-v2/apercus/` (inoffensif mais peu propre). Préférer le chemin A.
3. URL : `https://git-de-kad.github.io/beauty-at-home-jiji/site-v2/`
   (fonctionne tel quel : les chemins internes sont relatifs).

---

## C. Déploiement direct (sans GitHub) avec Wrangler

```bash
npm install -g wrangler
wrangler login                     # ouvre le navigateur
./deploy/deploy.sh                 # prépare dist/
wrangler pages deploy dist --project-name beauty-at-home-jiji
```

---

## Après la mise en ligne — SEO

1. **Google Business Profile** (levier n°1) :
   business.google.com → catégorie « Service de coiffure à domicile »,
   zone desservie Oran sans adresse publique, photos réelles, lien du site
   + numéro WhatsApp.
2. **Google Search Console** : ajouter la propriété (URL pages.dev ou domaine),
   soumettre `sitemap.xml`, demander l'indexation de l'accueil.
3. Partager le lien dans les bios Instagram/TikTok (lien en bio).
4. Vérifier les données structurées : https://search.google.com/test/rich-results
