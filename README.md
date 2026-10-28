# Dileep Varma — Personal Portfolio

A responsive, playful portfolio site for technology services and learning sessions.

## Included
- `index.html` — page structure and content
- `styles.css` — responsive warm-color design
- `script.js` — mobile navigation, current year, and contact-form mailto behavior
- `assets/profile.png` — profile photo shown in the About section
- `assets/portfolio-hero.png` — generated visual concept preview (optional; the website's hero is CSS illustrated)

## Before publishing
1. The contact form is already set to send enquiries to dileep.psdk@gmail.com (change `recipient` in `script.js` if needed).
2. Review the wording and service descriptions; adjust anything that doesn't precisely reflect your offer.
3. Do not add invented testimonials, client logos, or performance claims. Add real examples when you have permission to share them.

## Run locally
You can double-click `index.html` to preview the site. For a local web server, from this folder run:

```bash
python -m http.server 8000
```

Then open `http://localhost:8000`.

## Deploy
- **GitHub Pages:** upload the files to a repository, then enable Pages for the branch/root.
- **Netlify:** drag this folder into the Netlify deploy area, or connect the repository.
- **Cloudflare Pages:** connect the repository and use the root directory; no build command is required.
- **Any static host:** upload `index.html`, `styles.css`, `script.js`, and the `assets` folder together.

## Contact form note
The form validates inputs and prepares an email using the visitor's default email app. It does not send data to a server or store visitor information. For a true on-site submission flow, connect a form service or backend.
