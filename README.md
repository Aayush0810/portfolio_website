# Dushyant Khanna — Personal Brand Website

A premium, 3-page personal branding website for **Dushyant Khanna** — Co-Chair of
iBRICS 2026 and Founder & Managing Director of Panache Capital.

Built as clean, dependency-free static HTML/CSS/JS — host it anywhere (Netlify,
Vercel, GitHub Pages, or any web server).

---

## Pages

| File | Page | Highlights |
|------|------|-----------|
| `index.html` | **Home** | Hero, track-record stats, profile, areas of focus, ventures (Panache Capital / 3 Group / TerraGrid Energy), iBRICS 2026 feature band |
| `about.html` | **About** | Biography + a 6-stage "Life Journey" timeline and guiding principles |
| `contact.html` | **Contact** | Full enquiry form + direct channels and global offices |

## Structure

```
├── index.html
├── about.html
├── contact.html
├── css/styles.css      # Full design system (navy + gold, responsive, dark/light sections)
├── js/main.js          # Nav, scroll reveal, stat count-up, form validation
├── assets/
│   ├── portrait.svg    # Elegant placeholder (shows until you add a real photo)
│   └── favicon.svg
└── README.md
```

---

## Customising

### 1. Photos (already added)
Real, web-optimised photos are in `assets/` and placed as follows:

| File | Where it's used |
|------|-----------------|
| `portrait.jpg` | Home hero (full-length studio portrait) |
| `among-flags.jpg` | Home "Profile" section (among the BRICS flags) |
| `ibrics-speaker.jpg` | Home iBRICS band + About gallery (official iBRICS speaker graphic) |
| `portrait-brand.jpg` | About biography |
| `with-chairman.jpg` | About "In Focus" gallery |
| `brand-wide.jpg` | About "In Focus" gallery |

To swap any of them, replace the file in `assets/` keeping the **same filename**
(a portrait-orientation image around 1000×1250px works best). The `DK` monogram in
`portrait.svg` is only a fallback if an image is missing.

> **Caption to verify:** In the About gallery, the candid photo is captioned
> "*With Lakshmi Narayanan, Chairman of SWFI & Lead Co-Chair, iBRICS 2026*",
> based on the wording of your iBRICS press release. Please confirm the identity /
> reword it in `about.html` if needed.

Two supplied images are **not** used: a near-duplicate candid, and the Hindustan
Times "BRICS leaders" graphic (third-party/branded). Say the word to include either.

### 2. Update contact details
In `contact.html`, replace the placeholders:
- Email: `contact@dushyantkhanna.com`
- Phone: `+61 (0) 000 000 000`
- LinkedIn URL
- Office cities

The same email/social links appear in each page's footer.

### 3. Make the contact form actually send email
The form currently shows a **demo success message** (front-end only). To receive
real enquiries, connect it to a form service — no server needed:

1. Sign up at **[Formspree](https://formspree.io)** (or Getform / Basin) and get a form endpoint.
2. In `contact.html`, change the opening form tag to:
   ```html
   <form id="contact-form" action="https://formspree.io/f/YOUR_ID" method="POST" novalidate>
   ```
3. In `js/main.js`, inside the `submit` handler, remove the demo block (the
   `e.preventDefault()` short-circuit and the `setTimeout`) so the browser posts
   the form after validation passes. The validation logic can stay as-is.

### 4. Colours & fonts
All brand colours and fonts are CSS variables at the top of `css/styles.css`
(`--navy-900`, `--gold`, `--serif`, `--sans`, …) — change them in one place to
restyle the whole site.

---

## Running locally
Open `index.html` directly, or serve the folder:
```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Deploying
Drag-and-drop the whole folder into **Netlify Drop** (app.netlify.com/drop), or push
to a **GitHub Pages** repo — it's fully static.

---

## Content notes
- The **iBRICS 2026** facts (Sept 12–13, New Delhi; US$1 trillion; 500+ investors;
  21 nations) and the quote are from public reporting on the summit.
- **Panache Capital / 3 Group / TerraGrid Energy** details follow Mr. Khanna's own
  professional bio.
- The About-page **timeline** is written as thematic career phases rather than exact
  dates — add specific years where you'd like them.
- Placeholder copy (hero intro, principles, etc.) is ready to edit with any
  additional information you'd like to provide.
