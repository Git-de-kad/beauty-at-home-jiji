#!/usr/bin/env bash
# ============================================================
# Prépare un dossier `dist/` propre pour la mise en ligne
# (site-v2 sans les dossiers de travail variantes/ et apercus/)
# Usage : ./deploy/deploy.sh   (depuis la racine du projet)
# ============================================================
set -euo pipefail
cd "$(dirname "$0")/.."

rm -rf dist
mkdir -p dist
cp site-v2/*.html dist/
cp site-v2/sitemap.xml site-v2/robots.txt dist/
cp -r site-v2/css site-v2/js site-v2/assets dist/

echo "dist/ prêt :"
find dist -type f | sort
