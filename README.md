# 10-coiffeuse-oran — Site web coiffeuse à domicile à Oran

Site vitrine pour une coiffeuse à domicile sur Oran, hébergé sur **Odoo One App Free**
(site gratuit à vie + 1 an de domaine offert), avec une stratégie réseaux sociaux
adaptée au marché algérien (Instagram / TikTok / WhatsApp > Google).

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
| [docs/02-site-deploiement.md](docs/02-site-deploiement.md) | Architecture du site statique, limites Odoo, options de déploiement + SEO local |
| [docs/03-strategie-rs.md](docs/03-strategie-rs.md) | Stratégie Instagram / TikTok / Facebook / WhatsApp |

## Décisions actuelles

- **Approche** : site statique codé par les agents (dossier `site/`), PAS construit
  dans l'éditeur Odoo — l'éditeur Odoo n'est pas automatisable (pas d'API) et
  l'Opérateur compte sur les agents pour tout faire. Déployable tel quel sur
  Cloudflare Pages (ou tout hébergeur statique).
- **Domaine** : décision reportée — commencer par la piste gratuite Odoo
  (domaine offert 1 an, à vérifier sans souscription payante), repli
  Cloudflare Registrar ~10 $/an. Voir `site/DEPLOY.md`.
- **Hébergement OCI écarté** : la VM AMD disponible est trop petite/déjà chargée
  (l'ARM Always Free n'a pas été obtenu).
- **Réservation** : bouton WhatsApp (wa.me), pas de module RDV.
- **Langue** : français seul (option FR + arabe documentée dans `02-site-deploiement.md`).

## Contenu du dossier `site/`

| Fichier | Rôle |
|---|---|
| `site/index.html` | Site one-page (hero, prestations/tarifs, galerie, avis, contact) |
| `site/css/style.css` | Styles (rose poudré / doré, mobile-first) |
| `site/js/main.js` | Numéro WhatsApp (seule config à éditer) + menu mobile |
| `site/PERSONNALISER.md` | Checklist de personnalisation (photos, tarifs, prénom…) |
| `site/DEPLOY.md` | Mise en ligne Pages + scénario domaine |

## Statut

- [x] Étude de marché + documentation (2026-09-11)
- [x] Site statique one-page construit et vérifié (2026-09-11) — `site/`
- [ ] Personnalisation : prénom, numéro WhatsApp, tarifs réels, photos
- [ ] Choix du nom de domaine (piste Odoo gratuite puis repli CF) + mise en ligne
- [ ] Google Business Profile
- [ ] Lancement RS + premières publications
