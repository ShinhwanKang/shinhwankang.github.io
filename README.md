# Shinhwan Kang — Academic CV Website

A lightweight, responsive academic CV site designed for GitHub Pages.

## Preview locally

Open `index.html` directly, or run a small local server:

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## Deploy with GitHub Pages

1. Create a GitHub repository (for example `cv` or `<username>.github.io`).
2. Upload all files in this directory to the repository root.
3. In **Settings → Pages**, choose **Deploy from a branch**.
4. Select the `main` branch and `/ (root)` directory.
5. Save. GitHub Pages will provide the public URL.

## Structure

- `index.html` — all CV content
- `style.css` — responsive visual design
- `script.js` — publication filters and footer year
- `assets/profile.jpg` — profile image
- `assets/ShinhwanKang_CV.pdf` — downloadable CV
- `assets/favicon.svg` — browser tab icon

## Updating the site

- Edit personal information and CV content in `index.html`.
- Replace `assets/ShinhwanKang_CV.pdf` whenever the PDF CV changes.
- Replace `assets/profile.jpg` to update the portrait.

No build tools or external dependencies are required.
