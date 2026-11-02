#!/usr/bin/env bash
set -e

cd Vantage
npm ci
npm run build:vercel
cd ..

rm -rf _site
mkdir -p _site

for f in index.html asme-landing.html coffee-menu.html meridian-landing.html; do
  [ -f "$f" ] && cp "$f" _site/
done
[ -d images ] && cp -r images _site/
[ -d raudones ] && cp -r raudones _site/

mkdir -p _site/vantage
cp -r Vantage/dist-vercel/. _site/vantage/
