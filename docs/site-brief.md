# devjasper.nl site brief

Status: draft for approval. Date: 2026-10-21.

## 1. Goal
- **Primary action:** email Jasper (`jasper@devjasper.nl`). Every section should lead towards it.
- **Secondary actions:** request a CV tailored to the assignment (via email, no download), view LinkedIn, view GitHub.
- **Situation:** Jasper is currently on assignment. The site builds the pipeline for the next one and shows an availability line with a date ("Available from <month year>").
- **Traffic:** a mix. Design primarily for visitors who arrive via a shared link (broker, client, LinkedIn) and need to be convinced within one scroll. Keep technical SEO solid for search traffic.

## 2. Audience
1. **Brokers and recruiters.** They scan for role, stack, years, recent clients and availability. They need it in the first screen.
2. **Engineering managers and CTOs.** They read for judgment and depth. They need proof and a sense of how Jasper works.

What they worry about, and what answers it:
| Worry | Answer on the site |
| --- | --- |
| Ramp-up time in a complex or legacy codebase | Legacy to modern track record (WCF/WebForms to .NET 8/Blazor), recommendations about learning fast |
| Knowledge walks out the door | Explains complexity clearly, documents, reviews, coaches developers |
| Over-engineering by an "architect" | Hands-on engineer, pragmatic, lays out options with pros and cons |

## 3. Positioning
- **Offer:** hands-on senior .NET engineer. Architecture and tech-lead experience are a credential that shows judgment, not the role on offer (avoid being matched to architect-only roles). The current assignment proves this: at New Media Systems Jasper is the sole engineer and architect and builds everything himself.
- **One-liner direction (problem-led):** "I make complex systems work together." Directly supported by: senior .NET engineer, about 15 years, in logistics automation, enterprise identity and video streaming. Final wording is decided in the copy phase.
- **Recurring threads that back the one-liner:** identity and integration (DAF IAM; Entra ID/OIDC, payment and email integrations at NMS) and legacy to modern rebuilds (NMS, DAF).
- **Differentiators (own these two):**
  1. **Fast ramp-up** in complex domains, from legacy to the newest stack.
  2. **Builds open source:** verifiable craftsmanship (Occurify, CodeCasa, NetDaemon contributions).
- **AI:** not a headline and not a section. One or two lines in "How I work": uses AI coding tools (Claude Code) daily to deliver faster and can teach a team effective AI-assisted workflows. No claims about building AI features.
- **Contrast with Rob Ramaekers (overlapping profile):** Rob sells architect and team lead in Dutch. Jasper is an English, hands-on, personal engineer with public code.

## 4. Proof points
All clients and projects from the CV and LinkedIn may be named. Keep out: phone number, home address, date of birth, the IAM vendor's name, anything not already public.

**Selected work (3 short highlights: problem, what Jasper did, result):**
1. **New Media Systems (Nov 2024 to present, freelance).** Sole engineer and architect on a full rebuild of a legacy software suite, cloud-first yet offline-capable. Two products, both live and in use: the NMS Suite Portal (Azure, Blazor Server, Entra ID, Mollie payments, SendGrid, RBAC REST APIs, CI/CD in Azure DevOps) for staff and customers, and the NMS Suite AV Director, a standalone media production tool (PTZ camera control, video mixer and streaming hardware, automated directing, real-time scheduling over SignalR) that keeps working offline.
2. **DAF (Aug 2022 to Oct 2024, Senior Software Engineer, freelance).** Global Portal: moved existing portals onto a new IAM solution. Enabled authentication for more than 6 tech stacks via OIDC or SAML, built integration libraries for multiple .NET versions, and a custom SCIM API adapter between the new IAM and legacy systems.
3. **Vanderlande (Jun 2015 to Aug 2022).** ADAPTO: designed and led the emulation environment that lets developers and testers run the system without physical shuttles and lifts. Coordinated integration with the Siegen (Germany) department. STOREPICK: software architect and tech lead of a team of 6 (Java, Kafka, Kubernetes, Domain-Driven Design).

**Earlier work (name list only):** SeaChange International (VOD back office, database optimisation) and SPS BV (warehouse management system), both via Hightech ICT (Sep 2011 to Apr 2015), TNO Automotive (PreScan), Memoria Media.

**Recommendations (named, with role and company; 3 to 4 on the site):**
- Rob Ramaekers, freelance IT solution architect (DAF project, 2024). Translated from Dutch, marked as translated.
- Sachin Shitole, Technology Lead, PACCAR India (DAF, 2025).
- Sven Markus, Scrum Master (Vanderlande, 2022).
- Carlus Geboers, Team Manager / DevOps Technical Lead (Vanderlande, 2022).
- Reserve: Twan Lambriex (2020), options with pros and cons.
- Nothing from 2011 to 2013: too old for a 15-year senior.

**Numbers available:** 2 production products built as sole engineer (NMS), freelance since Aug 2022, 6+ tech stacks (DAF), team of 6 (STOREPICK), Occurify GitHub stars (read live value at build time or update manually). More numbers wanted, see open questions.

## 5. Structure
One page. Plus a 404 page. No privacy page needed if analytics stays cookieless.

| # | Section | Purpose |
| --- | --- | --- |
| 1 | Hero | Photo, name, one-liner, availability line, "Email me" button. A broker gets role, stack and availability here. |
| 2 | What I do | Three short points: the kinds of problems Jasper solves and the stack, in context. |
| 3 | Selected work | The 3 highlights, each with an abstract visual; earlier clients as a name list. |
| 4 | What colleagues say | 3 to 4 named quotes. |
| 5 | How I work | Ramp-up, knowledge transfer, pragmatism, one line on AI workflows. Answers the three worries. Ends with one personal line (games since primary school, bouldering, calisthenics, hut-to-hut hiking, philosophy, conversations about psychology). |
| 6 | Open source | Occurify and CodeCasa (and NetDaemon contributions). Proof of craft. |
| 7 | Contact | Email (as button and plain text), "Request a CV tailored to your assignment", LinkedIn, GitHub. |

Every section stays short; seven sections only work if each fits in roughly one screen.

Explicitly out of scope: blog, separate about page, case study pages, CV download, link to jasperlammers.com (for now), contact form.

## 6. Tone of voice
- English only.
- Warm and direct, with a light touch of humour. First person, "I" and "you".
- Plain words. Name the stack once, in context; no logo walls or acronym lists.
- Banned: buzzwords ("passionate", "enthusiastic", "rockstar", "cutting-edge", "synergy"), em dashes, jargon soup.
- Register sample (illustration only): "I like the moment a messy system finally clicks into place, and I'm good at getting there quickly. Usually in .NET, sometimes not."

## 7. Visual direction
- **Palette:** clean white with blazer blue, taken from the photo. Starting tokens: background `#FFFFFF`, text `#1B2430`, accent `#2B5BA8`, subtle tint `#EEF3FA`. Must meet WCAG AA contrast. Light only, no dark mode.
- **Personality comes from type and motion, not colour** (white and blue alone is the common freelance-IT look). Reference: robbowen.digital for its personal hero ("Hi, my name is ..."), playful motion, and one clear hire CTA.
- **Typography:** a chunky, friendly display font for headings and a highly readable sans for body. Self-hosted. Exact fonts chosen in the design phase.
- **Motion:** playful (animated hero entrance, scroll reveals, hover details). Rules: CSS first; a small inline script (no libraries, around 2 KB) only where CSS cannot do it; content is always visible without JS; nothing blocks first paint; everything off under `prefers-reduced-motion`.
- **Imagery:** the 2022 headshot in the hero (source `_input/Photo Square 2048.png`, optimized via `astro:assets`). One abstract SVG per highlight in the blue palette (for example a camera or stream motif for NMS, keys or a lock graph for DAF, shuttles or racks for Vanderlande). No stock photos, no generic tech icon walls.
- **Testimonials:** reference ramaekers-it.nl for using recommendations as a main persuasion tool, but always with full names and roles (their anonymous quotes are weaker).
- **Avoid:** dark "hacker" aesthetics, neon on black, terminal styling.

## 8. Practical
- **Domain:** `https://devjasper.nl` as the canonical URL (set `site` in `astro.config.mjs`); `www` redirects to the apex.
- **Contact:** `jasper@devjasper.nl`, as a mailto link plus visible text.
- **Links:** LinkedIn (`linkedin.com/in/jasper-lammers`), GitHub (`github.com/DevJasperNL`), Occurify (`github.com/Occurify/Occurify`). Not Dev.to or CodeProject.
- **Availability line:** a single value in one data file so updating it is a one-line change.
- **Analytics:** Cloudflare Web Analytics (cookieless, no consent banner).
- **SEO:** a unique title and description, Open Graph image, canonical URL, sitemap, and Person JSON-LD.

## 9. Open questions
1. **Availability date:** which month and year goes in the availability line?
2. **More numbers:** any figure for the highlights (customers, events or streams handled by the NMS Portal and AV Director, ADAPTO shuttles, emulation users, DAF portal users)?
3. **Quoted people:** they are public on LinkedIn, so naming them is OK; optionally give Rob a heads-up about the translation.
4. **Fonts:** pick the display and body fonts in the design phase; adding `@fontsource/*` packages needs approval.
5. **Cloudflare email obfuscation:** this zone setting rewrites `mailto` links and injects a script. Decide whether to turn it off (keeps zero JS) or accept it.
6. **OG image:** design a share image (name, one-liner, photo) in the design phase.
7. **Outside the site:** the CV says "13 years", and its dates should match LinkedIn: NMS "Nov 2024 to present" (the appendix says 2022 to 2024), DAF "Aug 2022 to Oct 2024". Fix it before sending tailored CVs.
