# Cooper Law Website
## cooperlawky.com

Built April 2026. Static HTML/CSS/JS — no framework, no build step.

---

## Files

```
cooperlaw/
├── index.html              ← Home page
├── estate-planning.html    ← Education page
├── services.html           ← Services & pricing
├── priority.html           ← Priority Planning
├── about.html              ← About Allison
├── contact.html            ← Consultation intake form
├── privacy.html            ← Privacy policy
├── css/
│   └── style.css           ← All styles
├── js/
│   └── components.js       ← Shared nav, footer, form handling
└── images/
    └── allison.jpg         ← ADD THIS: your headshot photo
```

---

## Before you go live — checklist

### 1. Add your photo
- Save your headshot as `images/allison.jpg`
- It will automatically appear in the hero and about page
- The stone steps photo is perfect — use it

### 2. Set up Formspree (free contact form handling)
- Go to https://formspree.io and create a free account
- Create TWO forms:
  - "Cooper Law — Consultation Request" → copy the form ID (looks like `xpzgkwrd`)
  - "Cooper Law — Priority Planning" → copy the form ID
- In `contact.html`, replace `YOUR_CONSULT_FORM_ID` with your consultation form ID (two places)
- In `priority.html`, replace `YOUR_PRIORITY_FORM_ID` with your priority form ID (two places)
- Free Formspree tier = 50 submissions/month. Paid = $10/month for unlimited.
- All form submissions go to the email you register with Formspree

### 3. Deploy to Netlify (free)
Option A — Drag and drop (easiest):
1. Go to https://netlify.com and create a free account
2. Go to Sites → drag the entire `cooperlaw` folder onto the page
3. You'll get a URL like `https://charming-fox-abc123.netlify.app`
4. That's your live site. Done.

Option B — Connect to GitHub (best for future updates):
1. Upload the folder to a GitHub repository
2. In Netlify: New site → Import from Git → select your repo
3. Build command: leave blank. Publish directory: `.`
4. Deploy. Done.

### 4. Connect your domain (cooperlawky.com)
In Netlify:
1. Site settings → Domain management → Add custom domain
2. Enter `cooperlawky.com`
3. Netlify shows you DNS records to add at your domain registrar
4. Go to wherever you bought cooperlawky.com (GoDaddy, Namecheap, etc.)
5. Update the nameservers or DNS records as instructed
6. Wait 10-30 minutes. Done.

### 5. Connect kentuckyestateplanning.com as a redirect
- In Netlify, add `kentuckyestateplanning.com` as an alias domain
- OR at your domain registrar, set a redirect from kentuckyestateplanning.com to cooperlawky.com
- Either works. Free SEO signal.

### 6. Fix one thing in Wix
- Log into your current Wix site
- Update the footer copyright from © 2035 to © 2026
- Once the new site is live, you can unpublish the Wix site

---

## Making updates

The site is plain HTML. To update any text:
- Open the .html file in any text editor (even Notepad)
- Find the text you want to change
- Change it
- Save and re-upload to Netlify (drag and drop again, or push to GitHub)

To update prices: open `services.html`, find the price, change the number, save.
To update copy: open the relevant .html file, find the text, change it, save.

---

## Support

If you need help deploying, a developer on Fiverr can do this in 30 minutes for $25-50.
Search: "Netlify deployment static site"

---

## Brand notes

- Primary color: #C06070 (rose/mauve)
- Secondary: #0F6E56 (forest green — used for Priority Planning)
- Fonts: Cormorant Garamond (headings) + DM Sans (body) — loaded from Google Fonts
- Logo: SVG of hands cradling a heart, drawn in CSS
- Slogan: "You don't do estate planning for you. You do it for the people you love."

---

© 2026 Cooper Law, LLC. All rights reserved.
