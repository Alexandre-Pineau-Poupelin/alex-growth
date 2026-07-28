# Alexandre Pineau-Poupelin — Growth Portfolio

Site CV/portfolio one-page, pensé comme une documentation produit plutôt qu'un CV en ligne
classique. Next.js (App Router) + Tailwind CSS + Framer Motion, 100% statique, sans backend
ni CMS.

## Stack

- **Next.js 15** (App Router, React 19)
- **Tailwind CSS** — tokens dans `app/globals.css`, mappés dans `tailwind.config.ts`
- **Framer Motion** — apparitions au scroll, respecte `prefers-reduced-motion`
- **next-themes** — dark mode avec mémorisation du choix utilisateur
- **Geist Sans / Geist Mono** — polices via `next/font`, aucune requête réseau externe

## Développement local

```bash
npm install
npm run dev
```

Ouvrir [http://localhost:3000](http://localhost:3000).

```bash
npm run build      # build de production
npm run start      # sert le build de production en local
npm run lint        # ESLint
npm run typecheck   # TypeScript, sans émission
```

## Modifier le contenu

**Tout le contenu éditorial vit dans `data/` — aucun composant React à toucher :**

| Fichier | Contenu |
|---|---|
| `data/content.ts` | Identité, hero, bandeau de preuve, "Comment je travaille", pipeline, contact, SEO |
| `data/caseStudies.ts` | Les 3 études de cas (résumé, stats, schéma, détail déplié) |
| `data/experience.ts` | Timeline d'expérience |
| `data/projects.ts` | Cartes "Experiments" |
| `data/skills.ts` | Compétences par catégorie |
| `data/stack.ts` | Outils par groupe |
| `data/education.ts` | Formation |

## Avant de déployer — checklist

1. **Disponibilité** : remplacer `[À compléter]` dans `data/content.ts` (`siteConfig.availability`) par la date réelle.
2. **Domaine** : une fois le domaine Vercel (ou custom) connu, définir la variable d'env
   `NEXT_PUBLIC_SITE_URL` (voir plus bas) — sinon le site auto-détecte l'URL de prod Vercel.
3. **Captures d'écran** : `public/screenshots/` est prêt à recevoir les futures captures
   (Looker Studio, HubSpot, n8n, Google Ads) — les emplacements actuels dans les Case Studies
   sont des placeholders textuels.

## Architecture

```
app/            routes Next.js, layout, metadata SEO, OG image, favicon, robots, sitemap
components/
  layout/       Header (nav sticky, CTA email), Footer
  sections/     Un composant par section de la page
  case-study/   Carte + détail déplié + schéma pipeline réutilisables
  ui/           Primitives (Button, Badge, SectionHeading, MetricStat, Reveal)
  theme/        Dark mode (provider + toggle)
data/           Tout le contenu éditorial, typé
lib/            Utilitaires partagés
public/         Assets statiques (screenshots à venir)
styles/         Documentation des tokens de design (les tokens eux-mêmes sont dans app/globals.css)
```

Chaque section de la page est un composant indépendant de moins de 250 lignes. Passer à un
site multi-pages plus tard ne demande pas de réécriture : déplacer une section vers sa propre
route dans `app/`, les données restent inchangées.

## Déploiement sur Vercel

Voir les instructions détaillées données par Claude lors de la livraison du projet, ou en résumé :

1. Pousser ce dossier sur un repo GitHub.
2. Sur [vercel.com](https://vercel.com), importer le repo — Vercel détecte Next.js automatiquement, aucune configuration nécessaire.
3. Déployer. Le site est statique : pas de base de données, pas de variable d'environnement obligatoire pour que ça fonctionne (`NEXT_PUBLIC_SITE_URL` est optionnelle, cf. ci-dessus).
