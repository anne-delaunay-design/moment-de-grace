# Moment de Grâce — site vitrine

Site statique (HTML / CSS / JS vanilla), généré à partir du design Figma "landing-page-VERSION FINAL".

## Ouvrir le projet
1. Décompresse/copie ce dossier où tu veux sur ton ordinateur.
2. Ouvre-le dans VSCode (`File > Open Folder`) ou lance Claude Code dedans (`cd moment-de-grace-site && claude`).
3. Pour prévisualiser : ouvre `index.html` dans un navigateur, ou lance un petit serveur local :
   ```
   npx serve
   ```

## Ce qu'il reste à faire

1. **Photos** — Remplacer les deux blocs dégradés (`.hero-image` et `.about-image` dans `styles.css`) par les vraies photos. Le plus simple : demander à Claude Code de remplacer le `background` par une image, ex. `background: url('images/hero.jpg') center/cover;`.
2. **Cal.com** — Dans `index.html`, chercher le commentaire `INTÉGRATION CAL.COM` (section `#booking`) et remplacer le bloc placeholder par le script d'embed officiel fourni par ton compte Cal.com (avec Stripe activé).
3. **Domaine & déploiement** — Pousser ce dossier sur un dépôt GitHub, puis le connecter à Netlify (plan gratuit) pour un déploiement automatique. Mettre à jour `sitemap.xml` et `robots.txt` avec le vrai nom de domaine une fois acheté.
4. **SEO** — Compléter la fiche Google Business Profile, s'inscrire sur 1-2 annuaires (Resalib / Crenolibre), déclarer le site sur Google Search Console.

## Structure des fichiers
```
moment-de-grace-site/
├── index.html      → structure complète des 10 sections
├── styles.css       → palette "Éclat", typographie, composants, responsive
├── script.js        → menu mobile, accordéon FAQ, calendrier de réservation
├── robots.txt
└── sitemap.xml
```
