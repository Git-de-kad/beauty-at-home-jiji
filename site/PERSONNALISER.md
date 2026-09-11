# PERSONNALISER — mise en route du site

Tout se joue dans **3 endroits seulement**. Aucune compétence requise :
donne les infos à l'agent (Hermes / Zai) et il fait le reste.

## 1. Le numéro WhatsApp — `site/js/main.js`

Une seule ligne en haut du fichier :

```js
const WHATSAPP_NUMBER = "213XXXXXXXXX";  // ← remplacer par le vrai numéro
```

Format international sans `+` ni `0` : un numéro `0661 23 45 67` s'écrit `213661234567`.
Tous les boutons WhatsApp du site se mettent à jour automatiquement.

## 2. Les contenus — `site/index.html`

Chercher les commentaires `<!-- À PERSONNALISER : ... -->`. Dans l'ordre :

| Quoi | Où | Info à fournir |
|---|---|---|
| Nom de marque | `<title>`, `<a class="brand">`, JSON-LD | prénom / nom commercial |
| Tarifs | section Prestations | les vrais prix de chaque prestation |
| Zones desservies | hero + section Contact | communes réelles |
| Galerie | section Mon travail | 6+ photos (voir §3) |
| Avis | section Avis | vrais avis clientes (avec accord) |
| Réseaux sociaux | section Contact | liens Instagram / TikTok / Facebook |
| Horaires / préavis | section Contact | rythme réel |

## 3. Les photos — `site/assets/galerie/`

Remplacer les fichiers `01.svg` … `06.svg` par de vraies photos en gardant
**les mêmes noms** (`01.jpg`, `02.jpg`… puis adapter l'extension dans
`index.html`, ou simplement convertir en `.svg`→ non : fournir des `.jpg` et
mettre à jour les `src`). Idéalement :

- format paysage ou carré, ~1200 px de large,
- avant/après pour au moins 2 slots,
- accord des clientes (visages floutés sinon).

## 4. Après modification

Demander à l'agent : « mets à jour le site et déploie » — il vérifie le rendu,
commit et déploie (voir DEPLOY.md).
