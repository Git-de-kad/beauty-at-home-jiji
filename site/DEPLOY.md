# DEPLOY — mise en ligne

Décision du 2026-09-11 : développement d'abord, domaine ensuite (budget 0 € pour
l'instant). Le site est **statique et portable** : il se déploie tel quel chez
n'importe quel hébergeur. Deux scénarios prévus.

## Scénario A (par défaut) — Cloudflare Pages, URL de prévision gratuite

1. Créer un compte Cloudflare (gratuit) : https://dash.cloudflare.com/sign-up
2. Créer un repo GitHub avec le contenu de `site/` (ou déployer en direct).
3. Cloudflare Dashboard → Workers & Pages → Create → Pages → connect to Git
   → sélectionner le repo :
   - Build command : *(vide — site déjà statique)*
   - Output directory : `/`
4. Le site est en ligne sur `https://<projet>.pages.dev`.

**Test de reachabilité à faire avant de communiquer l'URL** : ouvrir l'URL
depuis 2–3 téléphones sur des opérateurs algériens différents (Algérie Télécom,
Mobilis, Djezzy, Ooredoo). Des blocages intermittents d'IP Cloudflare ont été
signalés en Algérie (voir docs/02, § hébergement). Si un opérateur bloque →
scénario B.

Déploiement en ligne de commande (automatisable par l'agent) :

```bash
npx wrangler pages deploy . --project-name=coiffeuse-oran   # depuis site/
```

## Scénario B — repli sans Cloudflare

Même site, autre hébergeur gratuit statique (Netlify, GitHub Pages) — le code
ne change pas. GitHub Pages (Fastly) est un bon repli si CF est bloqué.

## Domaine — à décider plus tard

1. **Piste gratuite** : domaine offert 1 an via Odoo (enregistré chez Gandi).
   ⚠️ Vérifier à l'inscription que l'offre est bien accessible sans
   souscription annuelle payante. Puis pointer un CNAME vers Pages (ou changer
   les nameservers vers Cloudflare via le support Odoo).
2. **Repli** : domaine ~10 $/an chez Cloudflare Registrar (prix coûtant).
3. Le jour du branchement : Pages → Custom domains → ajouter le domaine,
   et communiquer l'URL finale pour les bios RS.

## Checklist avant l'annonce publique

- [ ] Numéro WhatsApp réel testé (un clic sur chaque bouton du site)
- [ ] 6 vraies photos en galerie
- [ ] Nom de marque dans le `<title>` + hero
- [ ] Tarifs validés par la coiffeuse
- [ ] Google Business Profile créé (voir docs/02 § 4.8)
