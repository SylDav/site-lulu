# site-lulu

Site vitrine one page (Astro) pour une prestation de ménage à domicile.

## Démarrer
```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # génère dist/
```

## Personnaliser
Tout le contenu (textes, avis, services, infos légales) est dans `src/data/site.ts`.

## Formulaire de contact
Créer un formulaire sur https://formspree.io (gratuit), copier l'ID dans `formAction`.

## À faire avant mise en ligne
- Remplacer SIRET, adresse, téléphone, e-mail, assurance
- Remplacer les avis par de vrais avis (avec l'accord des clients)
- Mettre l'URL finale dans `astro.config.mjs`
