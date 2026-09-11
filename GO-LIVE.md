# Going Live & Getting Found — dushyantkhanna.com

Your domain **dushyantkhanna.com** is already registered. Below is the full path
to (A) publish the site and (B) make it show up when people search "Dushyant Khanna".

---

## A. Publish the site (GitHub Pages — you already have the repo)

Repo: `Aayush0810/portfolio_website`

1. **Push the code** to GitHub (commit + `git push origin main`).
2. On GitHub: **Settings → Pages**.
   - **Source:** `Deploy from a branch` → Branch **`main`** → folder **`/ (root)`** → Save.
3. Under **Custom domain**, it should already show **`dushyantkhanna.com`**
   (the `CNAME` file in this repo sets it). If not, type it in and Save.
4. Tick **Enforce HTTPS** (may take a few minutes to become available).

### DNS records (at your domain registrar — where you bought the domain)
Add these so the domain points at GitHub Pages:

| Type | Host / Name | Value |
|------|-------------|-------|
| A | `@` | `185.199.108.153` |
| A | `@` | `185.199.109.153` |
| A | `@` | `185.199.110.153` |
| A | `@` | `185.199.111.153` |
| AAAA | `@` | `2606:50c0:8000::153` |
| AAAA | `@` | `2606:50c0:8001::153` |
| AAAA | `@` | `2606:50c0:8002::153` |
| AAAA | `@` | `2606:50c0:8003::153` |
| CNAME | `www` | `aayush0810.github.io.` |

DNS changes can take 10 minutes to a few hours. When done, `https://dushyantkhanna.com`
shows the site, and `www` redirects to it.

> **Alternative host — Netlify:** connect the same GitHub repo, add the domain in
> Site settings → Domains. Netlify also handles the contact-form email natively.
> If you go this route, delete the `CNAME` file and follow Netlify's DNS instructions.

---

## B. Get found for "Dushyant Khanna" (SEO)

**What's already built into the site (done):**
- Keyword-focused `<title>` + meta descriptions on all 3 pages
- `Person` structured data (JSON-LD) — name, role, employer, photo → can power a Google knowledge panel
- Open Graph + Twitter cards + a 1200×630 share image (`assets/og-image.jpg`)
- `sitemap.xml`, `robots.txt`, canonical URLs, mobile-friendly, fast-loading

**What you need to do after it's live (this is what makes it actually rank):**

1. **Google Search Console** (free, most important) — https://search.google.com/search-console
   - Add property `https://dushyantkhanna.com` and verify (DNS TXT record or HTML file).
   - Submit the sitemap: `https://dushyantkhanna.com/sitemap.xml`.
   - Use **URL Inspection → Request Indexing** for each of the 3 pages to jump the queue.
2. **Bing Webmaster Tools** (https://www.bing.com/webmasters) — same idea; you can import from Google.
3. **Backlinks — the biggest lever for a name search.** Add `dushyantkhanna.com` to:
   - His **LinkedIn** profile (Contact info → Website) and a post announcing the site
   - His **iBRICS 2026 / SWFI** speaker bio, and any press releases
   - The **Panache Capital**, **3 Group** and **TerraGrid Energy** sites, if they exist
   - Any conference or interview bios
   Each link from a credible site tells Google this is *the* Dushyant Khanna.
4. **Add his real profile URLs to the site's structured data.** In each HTML file,
   fill the `"sameAs": []` array in the JSON-LD, e.g.:
   ```json
   "sameAs": [
     "https://www.linkedin.com/in/DUSHYANT-PROFILE",
     "https://x.com/HANDLE"
   ]
   ```
5. **Google Business / knowledge panel:** once a few authoritative links point to the
   site, Google may build a knowledge panel — you can then claim it.

### Honest timeline
- **Indexed (appears in Google at all):** ~3–14 days after Search Console + indexing request.
- **Ranking on page 1 for "Dushyant Khanna":** typically a few weeks, and it depends on
  competition (his LinkedIn, news coverage, any namesakes). The exact-match domain +
  backlinks above are what get it there. No one can guarantee the #1 position, but for a
  fairly specific name with this setup it is very achievable.

---

## Still open
- **Contact-form email** to `Bansalakshya92@gmail.com` — pick a method (Web3Forms /
  Formspree / Google Apps Script / Netlify) and it gets wired up. See `README.md`.
