# Vaibhav Malviya Portfolio

A premium, responsive, interactive software-engineering portfolio built with plain HTML, CSS, and JavaScript. The portfolio uses local structured data and local assets, so it does not require a database, backend, authentication, CMS, or external API.

## What Is Included

- Professional hero section with Vaibhav's local profile photo.
- Software Engineer positioning across Python, AI/ML, backend, full-stack development, automation, and engineering workflows.
- Responsive navigation with mobile menu behavior.
- Light, dark, and system theme modes persisted with `localStorage`.
- Dynamic experience timeline rendered from local JavaScript data.
- Dynamic skills, achievements, education, and leadership sections.
- Project explorer rendered from local project data.
- Instant project search by title, description, category, or technology.
- Project category filtering.
- Accessible project detail modal with GitHub and live-demo links.
- Fully local interactive terminal with command history.
- Certificate cards with image/PDF lightbox previews.
- Resume download using the latest bundled resume.
- Copy-email action and `mailto:` contact link.
- Scroll reveal animations, active navigation state, and back-to-top control.
- No GitHub API, LinkedIn API, database, CMS, or server dependency.

## Technology

- HTML5
- CSS3
- Vanilla JavaScript
- Local image, PDF, and SVG assets
- GitHub Pages-compatible static deployment

The repository intentionally does not contain the previous Next.js, MongoDB, Mongoose, authentication, admin dashboard, API, or seed architecture. The site should remain simple underneath and easy to maintain.

## Repository Structure

```text
.
├── index.html                         # Main portfolio page
├── style.css                          # Visual system and responsive layout
├── script.js                          # Local data and all interactions
├── favicon.svg                        # Favicon
├── public/
│   ├── profile-photo.jpeg             # Served profile image
│   ├── resume.pdf                     # Served latest resume
│   └── certificates/                  # Served certificate assets
├── Vaibhav_Malviya_Google_SWE_Final_Resume.pdf
├── VaibhavPhoto 03-06-24.jpeg
└── README.md
```

The root certificate and resume files are preserved as source assets. The copies under `public/` use stable URL-friendly paths for the static website.

## Run Locally

No package installation is required.

From the repository folder:

```bash
cd /workspaces/VaibhavPortfolio
python3 -m http.server 8000
```

Open:

```text
http://localhost:8000
```

If port `8000` is occupied:

```bash
python3 -m http.server 8001
```

Then open `http://localhost:8001`.

You can open `index.html` directly, but a local HTTP server is recommended because it handles local asset paths consistently.

Stop the server with `Ctrl+C`.

## Interactions

### Terminal commands

The terminal reads local `portfolioData` from `script.js` and supports:

```text
help
about
skills
experience
projects
achievements
education
github
linkedin
resume
contact
clear
```

Use Arrow Up and Arrow Down to navigate command history. Press Escape to clear the current input. The terminal does not make network requests.

### Project explorer

- Use the category chips to filter projects.
- Use the search field for project names, descriptions, categories, and technologies.
- Click a project card to open its accessible detail modal.
- Use GitHub or live-demo links from the card or modal.

### Theme

The theme button cycles through:

```text
Light → Dark → System
```

The selected preference is saved in `localStorage`. System mode follows the browser's `prefers-color-scheme` setting.

### Certificates

Click a certificate card to open its local image or PDF preview. Press Escape or click outside the modal to close it.

## Content Maintenance

Most content lives in the `portfolioData` object near the top of `script.js`:

- `profile`
- `experience`
- `projects`
- `skills`
- `achievements`
- `education`
- `leadership`
- `socials`

Certificate metadata lives in the `certificates` array in the same file.

To add a project, add one object to `portfolioData.projects` with:

```js
{
  id: "project-slug",
  title: "Project title",
  category: "AI/ML",
  description: "Verified project description.",
  tech: ["Python", "FastAPI"],
  github: "https://github.com/account/repository",
  demo: "https://example.com",
  achievement: "Verified achievement or an accurate project note.",
  highlight: "Featured"
}
```

Do not add unsupported metrics, employment claims, rankings, or technical details.

## Verified Project Positioning

- **Energy Decision Agent:** Team DASH LTTS hackathon project. Presented around sensor/energy data, observation, reasoning, decision-making, optimization recommendations, and savings/ROI concepts. GitHub account: `MalviyaSir`.
- **Zoom Finance:** Project work represented with the `CodeMaster00001/ZoomFinance` repository and its verified Vercel link. It is not presented as current employment.
- **Antim Seva:** Social Impact / Product Project. GitHub: `https://github.com/MalviyaSir/AntimSeva`. Live site: `https://antim-seva-gilt.vercel.app/`. It is not presented as an active operating service.
- **PG-Finder / StayJi:** Kept as a carefully labeled project candidate; do not merge the names unless the implementation verifies that relationship.
- **Pack Your Bag:** Included as a secondary Android project using the verified Java/Android Studio positioning from the resume.
- **ETWDC:** Multidisciplinary engineering project involving vehicle electrification, wiring harness, electronics, Arduino, and web development.

The portfolio includes only curated projects rather than dumping every repository from either GitHub account.

## Local Assets

Primary assets served by the static site:

```text
public/profile-photo.jpeg
public/resume.pdf
public/certificates/dsa.jpeg
public/certificates/c-cpp.jpeg
public/certificates/core-java.jpeg
public/certificates/advanced-java.jpg
public/certificates/cyber-security.jpeg
public/certificates/etwdc.pdf
public/certificates/feedbox.pdf
```

The profile image uses a fixed responsive container and `object-fit: cover` with a deliberate top-centered position so it remains contained without stretching.

## SEO And Links

The page includes title, description, Open Graph metadata, canonical metadata, favicon, and verified external links. GitHub, LinkedIn, HackerRank, CodeChef, Antim Seva, and project links open only when the visitor intentionally clicks them.

Because this is a static site, SEO helpers such as `robots.txt` or `sitemap.xml` can be added as plain files when the final deployment URL is known.

## Validation

Run these checks before publishing:

```bash
node --check script.js
python3 -m http.server 8000
```

Then verify in a browser:

- Profile image loads and remains contained.
- Resume downloads from `public/resume.pdf`.
- Mobile menu opens, closes, and is keyboard usable.
- Theme cycles through Light, Dark, and System.
- Project search and filter update without a reload.
- Project modal opens and closes with Escape.
- Terminal commands and command history work.
- Certificate image and PDF previews open locally.
- Copy email works or falls back to displaying the address.
- External links point to verified profiles and projects.
- No horizontal scrolling appears at mobile widths.

## GitHub Pages Deployment

This project is compatible with GitHub Pages.

1. Commit and push the repository to GitHub.
2. Open repository **Settings → Pages**.
3. Choose **Deploy from a branch**.
4. Select branch `main` and folder `/ (root)`.
5. Save the setting.

Expected URL:

```text
https://codemaster00001.github.io/VaibhavPortfolio/
```

GitHub Pages serves the static site directly. No environment variables, MongoDB connection, Node server, admin password, or build command is required.

## Git Workflow

Review changes:

```bash
git status
git diff --check
```

Commit and push:

```bash
git add .
git commit -m "Polish responsive dynamic portfolio"
git push origin main
```

Do not commit secrets, `.env` files, database credentials, or generated dependency/build directories.
