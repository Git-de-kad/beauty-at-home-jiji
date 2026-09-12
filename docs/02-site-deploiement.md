# 02 — Site & déploiement

*Mis à jour le 2026-09-12 après refonte complète : site statique codé par les agents,
palette Méditerranée Solaire & Terracotta, Dark Mode luxueux, et version bilingue
Français / Arabe Algérie (RTL).*

## 1. Pourquoi pas l'éditeur Odoo (limites constatées)

Odoo One App Free reste pertinent **pour le domaine** (1 an offert), mais le
site ne sera pas construit dans son éditeur :

1. **Une seule app** — pas de module RDV ni eCommerce (sinon ~24 €/mois).
2. **Aucun code personnalisé** — SaaS fermé : pas de modules custom, pas d'accès
   serveur, enfermement dans l'éditeur drag & drop et la galerie de thèmes.
3. **Design générique** — thèmes beauté interchangeables, ajustements fins bloqués.
4. **Performance non maîtrisée** — stack Odoo complète, pas d'optimisation fine.
5. **Portabilité quasi nulle** — impossible d'exporter proprement.
6. **Non automatisable — le point décisif** : pas d'API pour éditer les pages.
   L'Opérateur délègue tout aux agents ; un builder à cliquer à la main ne
   rentre pas dans ce mode de fonctionnement. Un site statique dans un repo git,
   si : chaque modification est une demande en langage naturel → édition → commit → déploiement.

## 2. Architecture retenue : site statique one-page bilingue

Construit, optimisé et vérifié dans [`site/`](../site/) :

```
site/
├── index.html          # One-page bilingue (hero split, prestations/tarifs, galerie HD, avis, contact)
├── css/style.css       # Palette Terracotta / Dark Mode, support RTL, tokens CSS, mobile-first
├── js/main.js          # Dictionnaire i18n FR/AR, Dark Mode, numéro WhatsApp + menu mobile
├── assets/             # Photographies HD (hero.jpg, galerie 01.jpg à 06.jpg, favicon)
├── PERSONNALISER.md    # Checklist de personnalisation (tarifs, textes, photos)
└── DEPLOY.md           # Mise en ligne Pages + scénarios domaine
```

Caractéristiques : zéro dépendance de build, un seul call-to-action (WhatsApp,
messages préremplis dynamiques selon la langue), Dark Mode persistant sans scintillement,
SEO local intégré (méta, Open Graph, Schema.org HairSalon multilingue).

## 3. Hébergement

| Option | Coût | Statut |
|---|---|---|
| **Cloudflare Pages** (`*.pages.dev` gratuit) | 0 € | **Retenue** — accessible depuis l'ISP de l'Opérateur (testé 2026-09-11) |
| GitHub Pages (repli) | 0 € | Prête à l'emploi si blocage CF constaté |
| VM OCI de l'Opérateur | 0 € | **Écartée** : AMD seulement, trop petite/déjà chargée (ARM non obtenu) |

⚠️ Contrainte Algérie : des blocages intermittents d'IP Cloudflare ont été
signalés chez des ISP algériens ([Cloudflare Community](https://community.cloudflare.com/t/unreachable-cf-ips-from-algerian-isps/809465),
[r/algeria](https://www.reddit.com/r/algeria/comments/1lg1d7y/internet_censorship_in_algeria_what_can_i_do_if_a/)).
**Avant l'annonce publique** : tester l'URL depuis 2–3 opérateurs différents
(Algérie Télécom, Mobilis, Djezzy, Ooredoo). Procédure complète : `site/DEPLOY.md`.

## 4. Domaine — décision différée

1. **Piste gratuite** : domaine offert 1 an via Odoo (enregistré chez Gandi,
   DNS gérable via le Database Manager — [doc Odoo](https://www.odoo.com/documentation/19.0/applications/websites/website/configuration/domain_names.html)).
   ⚠️ Vérifier à l'inscription que l'offre est bien accessible **sans
   souscription annuelle payante**. Branchement : CNAME vers Pages, ou
   nameservers → Cloudflare via le support Odoo (verrou ICANN 60 j pour un
   transfert).
2. **Repli** : Cloudflare Registrar ~10 $/an, prix coûtant.
3. Propositions de nom : `coiffeuse-oran.com`, `[prenom]-coiffure-oran.com`.

## 5. SEO local (à faire après la mise en ligne)

- Métadonnées multilingues faites (titre ≤ 60 car., description contenant
  « coiffeuse à domicile Oran » / « كوافيز في الدار وهران ») — Schema.org HairSalon inclus.
- **Google Business Profile** : catégorie « service de coiffure à domicile »,
  zone desservie Oran sans adresse publique, photos, lien site + WhatsApp.
  C'est le levier n°1 pour Maps / pack local.
- Soumettre le sitemap à Google Search Console.

## 6. Version Multilingue & Dark Mode (Intégrés en v1)

- **Version Arabe Algérie** : Bascule instantanée FR / عربي dans l'en-tête, sans rechargement.
  Support natif RTL (`dir="rtl"`), inversion des alignements et typographie Google **Tajawal**.
  Vocabulaire adapté au marché oranais (*« كوافيز محترفة في منزلك »*, *« أوندوي »*, *« باك العروسة »*).
- **Dark Mode Luxueux** : Bascule Soleil / Lune dans l'en-tête, fond noir espresso/charbon `#120f11`,
  bordures or ambré et typographie crème, mémorisé dans `localStorage`.
- **Palette Mode Clair** : *Méditerranée & Terracotta* (`#b85d38` et blanc lin `#fcfaf8`), chaleureuse et lumineuse.
