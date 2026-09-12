# PERSONNALISER — mise en route du site

Tout se joue dans **3 endroits seulement**. Aucune compétence requise :
donne les infos à l'agent et il fait le reste.

## 1. Le numéro WhatsApp & les Textes Bilingues — `site/js/main.js`

### A. Numéro WhatsApp
Une seule ligne en haut du fichier :

```js
const WHATSAPP_NUMBER = "213XXXXXXXXX";  // ← remplacer par le vrai numéro
```

Format international sans `+` ni `0` : un numéro `0661 23 45 67` s'écrit `213661234567`.
Tous les boutons WhatsApp du site (en français et en arabe) se mettent à jour automatiquement avec le message prérempli adapté.

### B. Textes & Tarifs (Français et Arabe Algérien)
L'objet `I18N` dans `site/js/main.js` contient tous les textes en deux versions :
- `fr` : Version française
- `ar` : Version arabe algérien (Darija raffinée d'Oran)

Pour ajuster un tarif ou un texte, modifiez-le simplement dans les deux sections de `I18N`.

## 2. L'Identité Visuelle & Thèmes — `site/css/style.css`

Le site intègre une identité double hautement travaillée :
- **Mode Clair (« Méditerranée Solaire & Terracotta Chic »)** : Fond blanc lin lumineux (`#fcfaf8`), sable doux, accents terracotta cuivrée (`#b85d38`) et carte VIP mariée en terre cuite profonde ambrée.
- **Mode Sombre (Dark Mode Luxueux)** : Fond noir espresso chaleureux (`#120f11`), surfaces satinées et bordures champagne doré.
- **Bascule instantanée** : Bouton soleil/lune dans l'en-tête, mémorisation dans `localStorage` et détection automatique des préférences système (`prefers-color-scheme`).
- **Version Arabe (RTL)** : Bascule instantanée FR / عربي dans l'en-tête, layout inversé et typographie Google Tajawal.

## 3. Les photos — `site/assets/`

Le site dispose de visuels photographiques réalistes haute définition :
- `site/assets/hero.jpg` : Photo d'ambiance de coiffure à domicile (Hero)
- `site/assets/galerie/01.jpg` à `06.jpg` : Galerie des réalisations (brushing, chignon mariée, soin capillaire, coupe, ondulé soirée, balayage)

Pour ajouter les propres photos de vos clientes :
- Déposez vos photos dans `site/assets/galerie/`
- Respectez les formats JPG/WebP optimisés (~1200 px de large)
- Veillez à l'accord des clientes (visages floutés ou cadrés de dos si nécessaire).

## 4. Après modification

Demander à l'agent : « mets à jour le site et déploie » — il vérifie le rendu, commit et déploie (voir `DEPLOY.md`).
