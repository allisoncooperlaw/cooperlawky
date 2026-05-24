# How to preview and commit your changes

## Step 1: Preview the site locally (no risk, no commit)

Open File Explorer and navigate to:
`C:\Users\allis\OneDrive\Documents\GitHub\cooperlawky`

Then **double-click `index.html`** to open it in your browser. That's your homepage — exactly as it would appear on the live site.

From there, just click around — your nav now includes "Emergency Planning," the new pricing card appears below the probate section, the Probate Playbook teaser shows up near the bottom of the homepage, and every link should work.

### What to preview specifically

- **`index.html`** — new confident pricing card (paired with probate cost anchor) and the new Probate Playbook teaser at the bottom
- **`estate-planning.html`** — new "Plain-English glossary" section with each document explained, a Kentucky hot powers callout, a state differences section (KY/IN/OH), and a probate referral note + Probate Playbook teaser
- **`emergency.html`** — same as before but now reachable from the main nav
- **`blog.html`** — 8 brand new posts at the top, then your existing posts, then 12 new "Coming Soon" cards (including the Kentucky hot powers and probate playbook teasers)
- **`probate-playbook.html`** — brand new landing page for the book with email signup
- **Click any blog post** — they all have proper canonical + OpenGraph tags now (you won't see these visually, but they're in the page source)

### The 8 new published blog posts (all in /blog/)

1. `will-or-trust-cost-kentucky.html` — How Much Does a Will or Trust Cost in Kentucky in 2026?
2. `remote-estate-planning-how-it-works.html` — How Remote Estate Planning Actually Works
3. `will-drafted-in-hospital.html` — Can You Get a Will Drafted in a Hospital?
4. `emergency-planning-48-hours.html` — Emergency Estate Planning: What to Do When You Have 48 Hours
5. `just-bought-a-house.html` — Just Bought a House? Here's Why You Need an Estate Plan Now
6. `pour-over-will.html` — What Is a Pour-Over Will?
7. `estate-planning-cost-comparison.html` — How Much Does Estate Planning Actually Cost?
8. `estate-planning-checklist.html` — The Estate Planning Checklist Most People Miss

## Step 2: One thing you'll need to do before going live

The Probate Playbook signup form needs a real Formspree endpoint. Right now the placeholder in `probate-playbook.html` says `REPLACE_WITH_YOUR_ENDPOINT`. You'll want to:

1. Go to formspree.io and sign in (you already have an account based on your existing forms)
2. Create a new form — name it something like "Probate Playbook Signup"
3. Copy the form's endpoint URL (looks like `https://formspree.io/f/abcd1234`)
4. Open `probate-playbook.html`, find `REPLACE_WITH_YOUR_ENDPOINT`, and paste your endpoint in its place
5. Save the file

You can do this either before or after committing — the page will still display correctly, but the signup button won't email you the signup until you swap the URL.

If you want, I can do this swap for you when you have the URL.

## Step 3: Commit and push in GitHub Desktop

Open GitHub Desktop. You should see something like 30+ changed files in the left sidebar.

1. **Review the changes** — click any file in the sidebar to see the actual edits in a red/green diff view. You don't have to review everything, but feel free to spot-check.
2. **Write a commit message** in the bottom-left box. Something like: `SEO improvements: 8 new blog posts, fix broken links, add Probate Playbook teaser, expand estate planning page`
3. **Click "Commit to main"** (or whatever your default branch is called).
4. **Click "Push origin"** at the top.
5. Wait ~30 seconds. Netlify will auto-deploy and your site will be live.

## If you hate it (you won't, but just in case)

You have three undo options, in increasing strength:

### Before you commit (easiest)
In GitHub Desktop, right-click any file in the changes list and choose **"Discard Changes"** to revert just that file. To revert everything: right-click in the file list and choose **"Discard All Changes."** Your files snap back to exactly what's currently live. Nothing was committed, so nothing happened.

### After you commit but before you push
Right-click the latest commit in GitHub Desktop's "History" tab and choose **"Undo Commit."** Your changes go back to "uncommitted" state. From there, you can either discard them or fix them.

### After you push to live
Right-click the latest commit in the "History" tab and choose **"Revert Changes in Commit."** This creates a new commit that undoes the previous one. Push it, and 30 seconds later your live site is back to the previous version.

You cannot break this beyond repair. Every step has an undo button.

## Latest additions (Competitive SEO round)

### New pages (5 city pages + 1 calculator + 1 book)
- `louisville-estate-planning.html` — Louisville landing page (in-person + remote)
- `lexington-estate-planning.html` — Lexington landing page (remote)
- `indianapolis-estate-planning.html` — Indianapolis landing page (remote)
- `cincinnati-estate-planning.html` — Cincinnati / NKY landing page (remote, cross-state angle)
- `bowling-green-estate-planning.html` — Bowling Green landing page (remote)
- `probate-cost-calculator.html` — Interactive calculator with KY/IN/OH support
- `probate-playbook.html` — The book teaser page (added earlier)

### Schema markup added
- FAQPage schema on `estate-planning.html` (FAQ rich snippets in Google search)
- Article schema on all 25 blog posts (better AI citations, news/article eligibility)
- BreadcrumbList schema on every interior page (breadcrumb display in search results)
- LegalService schema on each city page (local SEO)
- WebApplication schema on the probate calculator

### Breadcrumb navigation
- Visible breadcrumbs added to every interior page (40+ pages)
- Format: Home / [Parent] / Current Page
- Matches existing site design

### Sitemap updates
- Added Probate Playbook, Probate Cost Calculator, and 5 city pages
- All canonical URLs use the www subdomain consistently

## What to do in Google Search Console after pushing

1. Resubmit the sitemap (Sitemaps section → click your existing sitemap → Resubmit)
2. Use URL Inspection on these high-value new pages and click "Request Indexing":
   - `/probate-cost-calculator.html`
   - `/probate-playbook.html`
   - `/louisville-estate-planning.html`
   - `/lexington-estate-planning.html`
   - `/indianapolis-estate-planning.html`
   - `/cincinnati-estate-planning.html`
3. Use the Rich Results Test (search.google.com/test/rich-results) to verify FAQ schema and Article schema are valid on a few sample URLs

---

## What got fixed / added (the full list)

### Critical fixes (these were actively hurting you)
- Renamed 3 broken blog files that had spaces and no .html extension
- Fixed broken "Priority Planning" nav link → now "Emergency Planning" pointing to emergency.html
- Fixed the same broken link in contact.html and blog.html
- Deleted the duplicate `components.js` file in the root folder
- Cleaned up the sitemap (removed broken references, added all blog posts, consistent domain)
- Fixed robots.txt to match the canonical domain (with www)
- Added canonical + OpenGraph tags to every page that was missing them (homepage, estate-planning, quiz, young-adults, services, and all 15 blog posts)
- Improved estate-planning.html title for better SEO

### Pricing reframe
- Homepage now has a confident pricing card pairing $3,800 (your plan) with $10K-$20K (the probate it prevents) — no more buried italic apology

### Content expansion
- Estate planning page now includes a full "Plain-English glossary" of every document (will, trust, POA, healthcare POA, living will, advance directive, HIPAA, certificate of trust, pour-over will)
- New Kentucky "hot powers" callout explaining the KY-specific rule
- New "What changes between KY, IN, and OH" section covering state differences
- Probate referral note ("Cooper Law is focused on proactive planning — I refer probate work to trusted attorneys across KY, IN, and OH")

### Probate Playbook
- New landing page at `/probate-playbook.html` with book cover mock, release pipeline (KY → IN → OH), chapter list, "who this is for / who it isn't" sections, email signup form, and your personal "Why I'm writing this when I don't practice probate" note
- Teaser blocks on homepage and estate planning page

### 8 new published blog posts
- All targeting SEO keywords across emergency planning, remote planning, pricing transparency, and homeownership

### 12 new "Coming Soon" blog placeholders
- Including the Kentucky hot powers post, the DIY probate teaser, and topics spanning blended families, small business owners, special needs trusts, multi-state planning, IRA inheritance, crypto, divorce, family conversations, and review triggers — so your blog always looks like it's actively growing
