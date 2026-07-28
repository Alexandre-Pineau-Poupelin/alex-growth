# Design tokens

Les tokens vivent dans `app/globals.css` (variables CSS `--bg`, `--fg`, `--muted`,
`--border`, `--accent`, `--accent-fg`) et sont mappés dans `tailwind.config.ts`.

Ce fichier documente les valeurs pour référence — le modifier ne change rien au site,
il faut éditer `globals.css`.

## Light

| Token | Valeur | Usage |
|---|---|---|
| `--bg` | `250 250 249` | fond de page |
| `--surface` | `255 255 255` | cartes, section Contact |
| `--fg` | `10 10 10` | texte principal |
| `--muted` | `110 110 110` | texte secondaire |
| `--border` | `228 228 227` | bordures fines, séparateurs |
| `--accent` | `67 56 202` | liens, chiffres clés, tagline |

## Dark

| Token | Valeur | Usage |
|---|---|---|
| `--bg` | `10 10 10` | fond de page |
| `--surface` | `23 23 23` | cartes, section Contact |
| `--fg` | `250 250 249` | texte principal |
| `--muted` | `163 163 163` | texte secondaire |
| `--border` | `40 40 40` | bordures fines, séparateurs |
| `--accent` | `165 173 250` | liens, chiffres clés, tagline |

## Typographie

- **Geist Sans** — titres et corps de texte (`font-sans`)
- **Geist Mono** — métriques, labels, badges, schéma pipeline (`font-mono`)
