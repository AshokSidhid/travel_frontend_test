# Travel Frontend (React + Vite)

This is a simple travel management front-end built with React and Vite, deployed using GitHub Actions to GitHub Pages.

## Live Demo

- **URL:** https://ashoksidhid.github.io/travel_frontend_test/

## Demo Login Credentials

For front-end-only demo deployments (like GitHub Pages), use the following credentials on the login page:

- **Username:** `demo`
- **Password:** `demo123`

These are handled entirely on the front-end and do **not** require a running backend.

## Development

### Install and run locally

```bash
npm install
npm run dev
```

### Build for production

```bash
npm run build
```

## CI/CD and Deployment

GitHub Actions is configured in `.github/workflows/deploy.yml` to:

- Run on every push to the `main` branch
- Install dependencies
- Build the Vite app
- Deploy the `dist` folder to the `gh-pages` branch for GitHub Pages hosting

The Vite config sets the base path to:

```js
base: '/travel_frontend_test/',
```

so that assets resolve correctly at the GitHub Pages URL.
