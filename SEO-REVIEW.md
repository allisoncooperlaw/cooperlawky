# Cooper Law SEO Review

**Reviewed:** May 24, 2026
**Reviewed by:** Claude

---

## The Short Version

Your site is *significantly* better built than the average solo law firm site. Strong technical foundation, beautiful content, clear voice, helpful blog. You're already doing a lot right — proper LegalService schema, a sitemap, mobile responsive, plain-English content, and a credentials angle (JD + CPA + CFP) that almost no competitor can match.

**But there are some things actively hurting you right now that we should fix today.** Then a handful of strategic moves will unlock the emergency and remote SEO push you want.

---

## CRITICAL — Fix This Week (Things That Are Actively Hurting You)

### 1. Three blog posts have broken filenames (404 errors)

In the `blog/` folder, these three files are missing their `.html` extension AND have spaces in the filename:

- `blog/Child Turned 18` (should be `blog/child-turned-18.html`)
- `blog/College Student Estate Planning` (should be `blog/college-estate-planning.html`)
- `blog/Study Abroad Documents` (should be `blog/study-abroad-documents.html`)

**Why this matters:** Your blog page links to these articles, your sitemap tells Google they exist, but anyone who clicks them gets a 404 error. Google notices and treats this as a quality problem.

**Fix:** Rename each file to lowercase, with hyphens, and add `.html`. I can do this for you in one go — just say the word.

### 2. Your nav links to a page that doesn't exist

The navigation includes "Priority Planning" linking to `priority.html` — but that file doesn't exist. Your contact page also points to it. Every single page on your site has this broken link in the menu.

**Fix:** Either change "Priority Planning" in the nav to "Emergency Planning" and link it to `emergency.html` (recommended — this also fixes problem #4 below), OR create a `priority.html` page.

### 3. Emergency is buried — not in your main nav

The Estate Planning 911 page is one of your strongest pages and targets high-intent searches ("emergency estate planning before surgery," "rush will and trust"), but it's not in the main navigation. People searching for it organically will find it, but visitors browsing your site won't.

**Fix:** Add "Emergency Planning" to the main nav (and make it the rebranded "Priority Planning" link). Bonus: use a small accent color or icon to make it stand out.

### 4. Sitemap inconsistencies

Your sitemap lists pages that don't exist (`priority.html`, the three blog posts above) and uses `www.cooperestateplanning.com` while your robots.txt uses `cooperestateplanning.com` (no www). Google handles this OK, but it's a small signal of sloppiness.

**Fix:** I'll clean the sitemap up when we do the other fixes. Pick a canonical domain (with or without www) and use it everywhere.

### 5. Inconsistent canonical tags and missing OpenGraph

Only `emergency.html`, `contact.html`, and `blog.html` have canonical tags and OpenGraph (social sharing) tags. The homepage, estate-planning page, and most blog posts don't.

**Why this matters:** Without OpenGraph tags, when someone shares your page on Facebook, LinkedIn, or in a text message, it shows up as a plain ugly link instead of a card with your photo and a description. Lower click-through.

**Fix:** Add the same pattern of canonical + OG tags to every page.

### 6. Duplicate `components.js` file

There's a `components.js` in the root folder AND in `js/`. Your pages all reference the `js/` one. The root copy is dead code.

**Fix:** Delete the root `components.js` to keep things clean.

---

## YOUR PRICING QUESTION

> *"I have my prices listed because I wanted to be transparent and set the standard for what estate planning costs — but I am also scared of scaring business off."*

Here's the truth: **your pricing is a competitive weapon, not a liability.** Almost every competitor hides it. People who Google "how much does a will cost in Louisville" are *desperate* for honest numbers. If they find them on your site, that's trust earned before they ever talk to you.

Your prices ($3,500 / $5,000 / $3,800 starting / $1,000 for young adults) are also reasonable for the market — especially given your credentials. The risk isn't the number. The risk is *how the number is framed.*

### What you're doing well

- The Estate Planning 911 packages put price next to a complete list of what's included — that's textbook good pricing presentation.
- You anchor against probate cost on the homepage ($10K–$20K typical probate). This makes $3,800 feel small.
- "Both packages are flat fees — this is the total cost" is exactly the kind of language anxious buyers need.

### What to improve

**(a) Make the $3,800 mention on the homepage more confident, not less.**

Right now this line is buried in tiny gray italics under the "what happens when there's no plan" section:

> *"A Family Protection Plan at Cooper Law starts at $3,800 — a fraction of what probate alone would cost your family. Payment plans available."*

It reads like an apology. Make it its own card. Bigger type. Frame it as: "A complete trust-based plan at Cooper Law: $3,800. The probate it prevents: $10,000–$20,000." That's not scary — that's a slam dunk.

**(b) Add a dedicated "Pricing" or "What It Costs" page (or beef up `services.html`).**

This is huge for SEO. Real searches you would rank for:
- "estate planning cost Kentucky"
- "how much does a trust cost in Louisville"
- "flat fee estate planning attorney"
- "estate planning attorney pricing Indiana"

Hardly any law firm has this page because they're scared. Yours would rank.

**(c) Add an explicit "Why we price this way" section.**

Two paragraphs. "Most attorneys quote by the hour. I don't — because you shouldn't be afraid of every phone call. Here's what's included, here's what isn't, here's why a flat fee is in your interest." This is on-brand for you (honesty, clarity) and answers the unspoken objection.

**(d) Show what's NOT included in the price.**

Things like recording fees, court fees, optional add-ons. Showing the limits builds *more* trust, not less. People assume the worst when you don't show it.

**(e) "Payment plans available" should be visible everywhere there's a price.**

You have it on the homepage but not on the emergency page or in the services nav copy. Add it consistently. It removes a silent objection.

---

## EMERGENCY + REMOTE SEO PUSH — Strategy

This is the biggest opportunity in your whole SEO picture. Here's the plan.

### Why these two categories are gold

- **Emergency** searches are extremely high-intent. Someone Googling "estate planning before surgery next week" is converting *today,* not in six months. Volume is lower than "estate planning attorney Louisville" but conversion rate is wildly higher.
- **Remote** is where the entire industry is moving — and the legacy firms in your market hate it. Their websites still say "call to schedule an in-person consultation." Yours can own the "online / virtual / remote" search space across three states.

### Emergency keywords to target

Primary (high intent, low competition):
- estate planning before surgery
- emergency power of attorney Kentucky / Indiana / Ohio
- rush will and trust
- last-minute will Louisville
- estate planning bedside / hospital
- 48 hour will
- emergency estate planning attorney near me

Secondary (good ongoing traffic):
- estate planning after a diagnosis
- estate planning when a parent is dying
- power of attorney for a parent in a nursing home
- urgent healthcare directive

Your `emergency.html` page is already strong but can be optimized further by:
1. Adding an H2 that uses the phrase "Emergency estate planning attorney serving Kentucky, Indiana, and Ohio" in the first 200 words
2. Adding an FAQ section at the bottom (great for SEO — Google loves FAQ schema)
3. Adding location language ("Louisville, Lexington, Bowling Green, Indianapolis, Cincinnati") naturally in the copy
4. Creating sister pages: `emergency-louisville.html`, `emergency-indianapolis.html`, `emergency-cincinnati.html` — same template, location-specific wording

### Remote keywords to target

Primary:
- remote estate planning attorney
- online estate planning Kentucky / Indiana / Ohio
- virtual estate planning consultation
- estate planning by video
- estate planning attorney that works remotely
- estate planning attorney who comes to you

Secondary:
- can I do estate planning online
- estate planning without going to an office
- estate planning Louisville remote
- estate planning attorney Indiana online

You currently have a tiny "remote bar" on the homepage. That's not enough. You need:

1. **A dedicated `remote.html` page** — "Remote Estate Planning Across KY, IN & OH." Walk through the whole process. Show the signing kit. Explain notarization. Address the objection ("How does signing work remotely?"). This page alone could drive significant traffic.
2. **Three location-targeted variants:** `remote-kentucky.html`, `remote-indiana.html`, `remote-ohio.html`. Same structure, state-specific notary rules, state-specific testimonials when you have them.

### New blog posts I'd write in priority order

These each target a specific search you can win:

1. **"How Much Does a Will or Trust Cost in Kentucky in 2026?"** — already on your "coming soon" list. Move this up. High-intent search, almost no good answer ranks for it.
2. **"How Remote Estate Planning Actually Works (Step by Step)"** — addresses the #1 objection and ranks for "remote estate planning" searches.
3. **"Can You Get a Will Drafted in a Hospital?"** — directly mirrors a real search.
4. **"Emergency Estate Planning: What to Do When You Have 48 Hours"** — supports the emergency page.
5. **"Estate Planning Across State Lines: KY, IN & OH"** — captures the multi-state niche almost no competitor addresses.
6. **"What to Do Before a Major Surgery: A Legal Checklist"** — broad reach, drives emergency conversions.

---

## OTHER QUICK WINS

### Add testimonials / social proof

I didn't see any. Even 2–3 short quotes (with first name + initial, no last name needed) would meaningfully boost conversion. Adding `Review` schema markup gets you stars in Google results.

### Add phone number to the nav bar

It's in the footer, but mobile visitors who want to call right now (especially emergency visitors) shouldn't have to scroll. A small click-to-call link in the nav lifts conversions.

### Add FAQ schema to your estate-planning page

You already have a great FAQ section at the bottom of `estate-planning.html`. Wrapping it in FAQPage schema (a small block of JSON-LD code, like the LegalService schema you already have on the homepage) tells Google to potentially show the questions directly in search results. This is a huge visibility win.

### Add Article schema to every blog post

Same idea — small code block in each post's head section. Helps Google understand the post is editorial content with a publish date and author, which can lead to rich results.

### Image SEO

Your hero image of Allison has good alt text. But the logo images use generic alt text ("Cooper Law"). Make them more descriptive: "Cooper Law estate planning attorney Louisville Kentucky logo." Small thing, real signal.

### Add a Google Business Profile (if you don't have one)

This is the single biggest local SEO move you can make, and it lives outside the website. Free. Lets you show up in Google Maps and the "local pack" (the map results that appear at the top for "estate planning attorney near me"). If you already have one, make sure it's verified, has photos, and has at least a few reviews.

---

## What to do first (in order)

If you only have time for a little, do these in this order:

1. **Today (15 min):** Rename the three broken blog files. (I can do this for you — just say go.)
2. **Today (10 min):** Fix the broken "Priority Planning" nav link.
3. **This week (1 hour):** Add canonical + OpenGraph tags to every page that's missing them.
4. **This week (30 min):** Clean up the sitemap.
5. **This week (30 min):** Move the homepage pricing line up and make it confident.
6. **Next week:** Build the `remote.html` page.
7. **Next two weeks:** Write the "How much does a will cost in Kentucky" blog post.
8. **Within a month:** Add testimonials and FAQ schema.

I can help with all of these directly in the code whenever you're ready. Just tell me which ones to tackle and in what order.
