# 10-coiffeuse-oran — Site web coiffeuse à domicile à Oran

Site vitrine pour une coiffeuse à domicile sur Oran, optimisé pour le marché algérien (Instagram / TikTok / WhatsApp > Google) avec une identité visuelle **Méditerranée & Terracotta**, un **Dark Mode luxueux**, et une version bilingue **Français / Arabe Algérie (RTL)**.

## Contexte

Recherche Google « coiffeuse à domicile oran » : ~1 seul résultat pertinent.
Le marché existe pourtant (prestataires actifs sur TikTok, Instagram, Bricoram,
3ersi, Fresha) mais il est **quasi invisible sur Google** → double opportunité :

1. **SEO local facile** : peu de concurrence indexée, se positionner est rapide.
2. **Le vrai canal d'acquisition en Algérie reste les RS + WhatsApp** : le site sert
   de vitrine de confiance (tarifs, galerie, contact), le trafic vient des RS.

## Contenu du projet

| Fichier | Rôle |
|---|---|
| [docs/01-etude-marche.md](docs/01-etude-marche.md) | Marché Oran : concurrence, tarifs constatés, canaux |
| [docs/02-site-deploiement.md](docs/02-site-deploiement.md) | Architecture du site statique, identité visuelle, bilinguisme, déploiement + SEO local |
| [docs/03-strategie-rs.md](docs/03-strategie-rs.md) | Stratégie Instagram / TikTok / Facebook / WhatsApp |

## Décisions & Caractéristiques Techniques

- **Identité Visuelle** : 
  - **Mode Clair** : *Méditerranée Solaire & Terracotta Chic* (blanc lin chaud `#fcfaf8`, sable calcaire doux `#f7efe8`, cuivre/terracotta artisanale d'Oran `#b85d38`, carte mariée VIP ambrée).
  - **Mode Sombre** : *Nocturne Espresso & Or Lumineux* (fond charbon/espresso `#120f11`, surfaces `#1c171a`, bordures champagne doré).
- **Bilinguisme & RTL** :
  - Sélecteur instantané FR / عربي dans l'en-tête, sans rechargement.
  - Inversion complète en RTL (`dir="rtl"`) avec typographie arabe moderne Google **Tajawal**.
  - Formulations adaptées à Oran (*« كوافيز محترفة في منزلك بـ وهران »*, *« علاج الشعر والأوندوي »*, *« باك العروسة »*).
- **Photographies Réalistes** :
  - Hero split layout avec photographie d'ambiance d'une séance à domicile (`site/assets/hero.jpg`).
  - Galerie de 6 réalisations réelles (brushing wavy, chignon mariée, soin capillaire, coupe, ondulé soirée, balayage) — zéro emoji ni placeholder artificiel.
- **Approche** : site statique pur (zéro dépendance Node/npm, zéro compilation), déploiement direct et instantané sur Cloudflare Pages ou GitHub Pages.
- **Réservation** : boutons WhatsApp dynamiques (wa.me) avec messages préremplis adaptés en français et en arabe.

## Contenu du dossier `site/`

| Fichier | Rôle |
|---|---|
| `site/index.html` | Site one-page bilingue (hero, prestations/tarifs, galerie, avis, contact) |
| `site/css/style.css` | Styles (Terracotta / Dark Mode, support RTL, mobile-first) |
| `site/js/main.js` | Dictionnaire i18n FR/AR, Dark Mode, numéro WhatsApp + menu mobile |
| `site/assets/` | Photographies HD (`hero.jpg`, galerie `01.jpg` à `06.jpg`, favicon) |
| `site/PERSONNALISER.md` | Guide de personnalisation (tarifs, textes, photos, WhatsApp) |
| `site/DEPLOY.md` | Mise en ligne Pages + scénario domaine |

## Statut

- [x] Étude de marché + documentation (2026-09-11)
- [x] Site statique one-page construit et vérifié (2026-09-11)
- [x] Refonte anti-« template IA » : **site-v2/** — 5 pages SEO, 3 concepts comparés,
      hybride retenu A+B (clair éditorial / sombre noir & or), bilingue FR/AR (RTL) (2026-09-12)
- [x] QA visuelle complète (5 états × desktop/mobile) validée (2026-09-12)
- [ ] Personnalisation finale par la coiffeuse (prénom, numéro WhatsApp réel, vraies photos)
- [ ] Choix du nom de domaine + mise en ligne sur Cloudflare Pages
- [ ] Fiche Google Business Profile
