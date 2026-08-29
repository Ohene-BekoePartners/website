# Proposal: Client Self-Service Content Management

**Site:** Ohene-Bekoe & Partners (`Ohene-BekoePartners/website`)
**Stack today:** Next.js 16.1.6 (App Router, Turbopack) · React 19.2 · Tailwind v4 · TypeScript · deployed on Vercel
**Author:** Engineering
**Status:** Draft for approval

---

## 1. Summary

Every word, photograph, and phone number on this website is currently hard-coded in TypeScript. Any change — a corrected surname, a new team member, a revised mission statement — requires a developer to edit source, run a build, commit, and push. That is why content requests arrive as WhatsApp messages and consume engineering time.

**Recommendation: move all editable content into [Sanity](https://www.sanity.io), a hosted headless CMS, and connect it to the existing Next.js site via on-demand revalidation.**

The client gets a URL they can open on a phone, tablet, or laptop, log into, and edit every piece of content themselves. Changes appear on the live site within seconds. No developer, no deploy, no WhatsApp.

| | |
|---|---|
| **Estimated effort** | ~8 developer-days, deliverable in phases |
| **Recurring cost** | **$0** on Sanity's free tier (site needs ~30 documents of the 10,000 allowed) |
| **Client-visible change** | A new login at `studio.ohenebekoeandpartners.com` |
| **Site performance** | Unchanged — pages stay statically generated |
| **Risk to existing site** | Low — migration is page-by-page and reversible |

---

## 2. The problem, measured

This is not a perception issue. The audit below quantifies it.

### 2.1 Nothing is editable without a developer

| Content type | Where it lives | Items | Client can edit? |
|---|---|---|---|
| Practice areas | `utils/mockData.ts` | 8 (+ 4 nested subsections) | No |
| Lawyers / team | `utils/mockData.ts` | 6 | No |
| Professional staff | `utils/mockData.ts` | 2 | No |
| Insights / articles | `utils/mockData.ts` | 5 (+ 13 content blocks) | No |
| Industries served | `utils/mockData.ts` | 5 | No |
| Homepage hero, About, Why-us, Clients | Hard-coded JSX in 7 components | ~25 strings | No |
| Page headings & intros | Passed inline per page | 14 titles, 11 descriptions | No |
| Privacy Policy | `app/privacy/page.tsx` | 38 text nodes | No |
| Terms of Use | `app/terms/page.tsx` | 23 text nodes | No |
| Opening hours | `components/layout/OpeningHoursBlock.tsx` | 3 lines | No |
| SEO titles & descriptions | 13 static + 3 dynamic blocks | 16 pages | No |
| Photographs | `public/` + `utils/images.ts` | 20 local files (16.4 MB), 15 remote URLs | No |

**Every row is a developer ticket.**

### 2.2 The same fact is stored in many places

Because content is scattered through JSX, a single change means hunting through files:

| Fact | Occurrences | Files |
|---|---|---|
| `contact@ohenebekoeandpartners.com` | 11 | 6 |
| `+233 20 588 2007` | 9 | 4 |
| `1 Liberation Road` | 6 | 6 |
| `Accra` | 10 | 8 |

If the firm moves office or changes its phone number, that is a 30-file review. We have already seen this failure mode: the address was updated on the contact page but not the footer or homepage, and required a follow-up commit to reconcile.

### 2.3 Content errors reach production

Because copy is pasted into code by hand, mistakes ship:

- Placeholder text `"Supreme Court case which …,"` was live on the managing partner's profile.
- A team member's profile carried **another person's photograph** and a URL with the wrong name.
- A bio referred to "Ms. Amponsah" on Ms. Acheampong's profile.
- Directory rankings and a partner quote existed as unreplaced template filler.

A CMS with required fields, validation, and a preview step catches this class of error before publication — and lets the client, who actually knows the facts, fix them directly.

### 2.4 The developer is a bottleneck for trivial edits

Recent requests that each required a full code-edit-build-commit-push cycle: delete one footer line; add two icons; add a map; add a mission paragraph; add two team members; remove justified text; remove practice areas from two profiles; correct one surname; add role summaries.

**None of these needed engineering judgement. All of them needed an engineer.**

---

## 3. Requirements

### Must have
1. Client edits **all** content listed in §2.1 without a developer.
2. Works on **phone, tablet, and laptop** in a normal browser — no app install, no VPN, no terminal.
3. Client can **upload photographs directly from a phone camera roll**.
4. Published changes appear on the live site **within seconds**, not on the next deploy.
5. **Draft and preview** before publishing — a law firm cannot afford half-written copy going live.
6. **Version history and rollback** — recover from an accidental deletion or bad edit.
7. Site stays as fast as it is today (statically served, good Core Web Vitals).
8. Structured editing — the client fills labelled fields, and **cannot break the layout or styling**.

### Should have
9. Multiple named user accounts with roles (partner can publish; assistant can draft).
10. Image cropping that respects the site's 3:4 portrait frames.
11. Content stored in a format we can export and leave with, if we ever change vendor.

### Explicit non-goals
12. The client will **not** edit page layout, colours, fonts, or navigation structure. Those are design decisions and stay in code — this is a content system, not a website builder. Letting a non-designer rearrange a law firm's homepage produces a worse site, not a better one.
13. No new server or database to operate.

---

## 4. Options considered

| | **Sanity** (recommended) | Keystatic | Storyblok | Payload 3 | Contentful | Do nothing |
|---|---|---|---|---|---|---|
| Cost at our scale | Free | Free | Free (1 seat) | Free + DB hosting | Free (limited) | "Free" |
| Hosting burden | None (SaaS) | None (git) | None (SaaS) | **We run a database** | None (SaaS) | None |
| Mobile browser editing | Good | Good | Good | Good | Fair | N/A |
| Publish speed | **Seconds** (webhook) | ~90s (full rebuild) | Seconds | Seconds | Seconds | Days |
| Image upload + auto-optimise | **Excellent** (CDN, hotspot crop) | Basic (files in git) | Very good | Good | Good | N/A |
| Draft / preview | Yes | Yes | **Best-in-class visual** | Yes | Yes | No |
| Version history | **Yes, granular** | Git history | Yes | Yes | Yes | Git |
| Vendor lock-in | Low (JSON export) | **None** (files in repo) | Medium | None (self-host) | Medium | None |
| Content modelling depth | **Excellent** | Good | Good | Excellent | Good | N/A |

### Why Sanity

1. **The free tier genuinely fits.** 3 users, 10,000 documents, 1M CDN requests/month. This site needs roughly 30 documents. There is no realistic path to a bill.
2. **Image handling solves a real, current problem.** The client sends photographs straight from a phone, and they are committed to the repository at full size. The most recent team portrait to arrive, `samuel-bennett-owusu.jpeg`, is **9.5 MB** — one file accounting for more than half of the 16.4 MB now sitting in `public/`, and it will be carried in the git history permanently. Three images exceed 1 MB.

   Next.js resizes these for delivery, so visitors are not downloading 9.5 MB — but the repository, every clone, and every build carry the full weight, and it grows with each new hire. Sanity stores originals outside the repository and serves optimised derivatives from a CDN. Its *hotspot* feature also lets the client mark the subject's face, so portraits crop correctly in the site's 3:4 frames instead of cutting off heads — currently a manual `object-top` guess in code.
3. **The content model maps almost 1:1 onto our existing TypeScript interfaces.** `Lawyer`, `PracticeArea`, `Insight` become Sanity schemas with the same fields. Migration is mechanical.
4. **The editing UI is a hosted web app.** We deploy it once to `studio.ohenebekoeandpartners.com`; the client bookmarks it. Nothing to install on any device.
5. **Instant publishing without rebuilds.** A webhook tells Next.js to regenerate only the affected pages. Edits are live in seconds and we do not burn Vercel build minutes on every typo fix.
6. **Real version history.** Every field change is retained and reversible — meaningful protection for a firm whose website carries professional claims.

### Why not the alternatives

- **Keystatic** is the strongest zero-cost fallback: content stays in this repository as JSON/MDX, so there is literally no vendor. But every edit triggers a full Vercel rebuild (~90s before the client sees their change), image handling is primitive, and concurrent developer/client edits can produce git conflicts. **Choose this if the firm objects to storing content with a third party.**
- **Storyblok** has the best visual editing experience, but its free tier allows only one user, and the firm will want at least two.
- **Payload 3** is excellent and embeds directly in this Next.js app, but requires us to provision, back up, and maintain a PostgreSQL database. For a brochure site, that is ongoing operational work with no matching benefit.
- **Contentful's** free tier is the most restrictive and its editor is the weakest on a phone.
- **Do nothing** keeps the current cost: engineering time on every comma, plus the content-accuracy risk documented in §2.3.

---

## 5. Proposed architecture

```
   Client's phone / tablet / laptop
                │
                │  studio.ohenebekoeandpartners.com  (Sanity Studio)
                ▼
        ┌───────────────────┐
        │   Sanity Content  │  ← drafts, publishing, version history,
        │       Lake        │    image CDN, user accounts & roles
        └─────────┬─────────┘
                  │ 1. "Publish" webhook  →  POST /api/revalidate
                  ▼
        ┌───────────────────┐
        │   Next.js on      │  2. revalidateTag('lawyer') regenerates
        │     Vercel        │     only the affected pages
        └─────────┬─────────┘
                  ▼
            Live website  (static, CDN-served, unchanged performance)
```

**Key point: the site stays static.** Pages are pre-rendered exactly as they are today. The only change is that content comes from Sanity at build time and is refreshed on demand when the client publishes, rather than being frozen into the JavaScript bundle.

### How it works
- Pages fetch content with cached, tagged queries (`next: { tags: ['lawyer'] }`).
- A new route, `app/api/revalidate/route.ts`, receives Sanity's webhook, verifies its signature, and calls `revalidateTag()` for the affected content type.
- Next.js regenerates just those pages. Visitors are served from cache throughout — no downtime, no rebuild.
- Draft Mode + Sanity's Presentation tool gives the client a live preview of unpublished changes on the real site design.

### Failure behaviour
If Sanity is unreachable at build time, the last successfully generated pages continue to be served. The site cannot go blank because a third party is down.

---

## 6. Content model

Direct translation of the current data structures, plus the copy currently trapped in JSX.

### Collections (many entries)

| Schema | Fields | Replaces |
|---|---|---|
| `teamMember` | name, slug, title, **memberType** (attorney \| professional staff), portrait (image+hotspot), quote, intro, bio (rich text), qualifications[], memberships[], jurisdictions[], specialisms[], practiceAreas[→ref], career[{firm, role, caseName}], publications[{title, citation, year}], contact{email, phone, linkedIn}, displayOrder | `lawyers`, `professionalStaff` |
| `practiceArea` | title, slug, category, excerpt, description (rich text), image, subsections[{title, description}], displayOrder | `practiceAreas` |
| `insight` | title, slug, excerpt, date, category, **section** (firm-news \| client-update \| publications), featured, image, body (rich text) | `insights` |
| `industry` | name, description, displayOrder | `industries` |

A single `memberType` field finally resolves the attorneys/professional-staff split properly, and lets the client move someone between the two pages with a dropdown.

### Singletons (one entry each)

| Schema | Fields | Replaces |
|---|---|---|
| `siteSettings` | firm name, address, email, phone, opening hours[], practice-reach note, footer tagline, social links, default SEO image | The **36 duplicated occurrences** in §2.2 — edited once, correct everywhere |
| `homePage` | hero heading, hero CTAs, about heading + body, whyUs items[{title, description}], clients heading + intro, contact section heading + body | `HeroSection`, `AboutSection`, `WhyUsSection`, `ClientsSection`, `ContactSection` |
| `aboutPage` | hero, intro body, **mission**, vision, values | `app/about/*` (incl. the Mission section just added, and the Vision/Values likely to follow) |
| `careersPage` | hero, why-join body, opportunities body, applications email | `app/careers/page.tsx` |
| `legalPage` (×2) | title, lastUpdated, body (rich text) | `app/privacy`, `app/terms` |
| `seo` (per page) | title, description, share image | 16 metadata blocks |

### Rich text
Long-form fields use Sanity's Portable Text, restricted to a deliberately small set: paragraph, H2, H3, bold, italic, bullet list, link. **No font, colour, or size controls** — the client writes content; the design system renders it. This is what prevents a well-meaning edit from breaking the page.

---

## 7. Guardrails

The client should be able to change anything they *should* change and nothing they shouldn't.

| Guardrail | Implementation |
|---|---|
| Required fields | A team member cannot be saved without name, title, and type — the empty-details class of bug becomes impossible |
| Character limits | Warnings on excerpts and SEO descriptions, so cards and search results don't overflow |
| Image dimensions | Minimum resolution enforced on upload; hotspot cropping for portraits |
| Slug safety | Auto-generated from name, with a warning before changing a published URL (and a redirect prompt) |
| No layout controls | Restricted rich-text; no HTML input |
| Roles | *Editor* drafts, *Administrator* publishes — the firm decides who signs off on public claims |
| Preview before publish | Draft Mode renders unpublished content on the real design |
| Rollback | Any document restorable to any prior version |

---

## 8. What the client actually experiences

**On a phone:** open a bookmark, log in with Google or email, tap *Team → Gillian Acheampong*, correct the surname, tap *Publish*. Live in about five seconds.

**Adding a team member:** tap *Team → +*, fill in name, title, and type, upload a photograph straight from the camera roll, drag the hotspot over the face, paste the bio, publish. The profile page, the attorneys listing, and the sitemap all update automatically.

**Adding an insight:** tap *Insights → +*, choose the section, write the article, upload an image, publish.

**Changing the phone number:** *Site Settings → Phone*. One field. It updates in all nine places at once.

---

## 9. Migration plan

Phased, so the site stays live and each phase is independently valuable.

| Phase | Work | Effort | Client can self-serve after this |
|---|---|---|---|
| **0. Setup** | Sanity project, roles, `studio.ohenebekoeandpartners.com`, environment variables | 0.5 d | — |
| **1. Schemas** | All schemas from §6, validation, previews, custom desk structure | 2.0 d | — |
| **2. Content migration** | Script current `mockData.ts` into Sanity; upload and re-crop the 20 images; replace the 15 Unsplash URLs with owned assets | 1.5 d | — |
| **3. Wire up the site** | Replace `mockData` imports with tagged Sanity queries, page by page | 2.0 d | **Team, practice areas, insights** |
| **4. Live publishing** | Revalidation webhook, Draft Mode preview, Presentation tool | 1.0 d | Edits go live in seconds |
| **5. Page copy & legal** | Homepage, About, Careers, Privacy, Terms, SEO into singletons | 0.5 d | **Everything in §2.1** |
| **6. Handover** | One-page handbook, 45-minute walkthrough, 2-week supported period | 0.5 d | Client is fully independent |
| | | **8.0 d** | |

**Suggested order of value:** Phases 0–4 (~7 days) already cover team members, practice areas, and insights — which is where the great majority of change requests originate. Phase 5 can follow a week later.

### Delete-on-completion
Once Phase 5 lands, `utils/mockData.ts` (749 lines) and the hard-coded copy across 7 components are deleted. The repository gets smaller and contains only code.

---

## 10. Cost

| Item | Cost |
|---|---|
| Sanity free tier (3 users, 10k documents, 1M requests/mo) | **$0/month** |
| Vercel (current plan, unchanged — in fact fewer builds) | no change |
| Additional Sanity seats beyond 3, if ever needed | $15/user/month |
| One-off implementation | 8 developer-days |

**Break-even:** at roughly two content requests per week — well below the current rate — the build pays for itself in recovered engineering time within a couple of months.

---

## 11. Risks

| Risk | Likelihood | Mitigation |
|---|---|---|
| Client publishes typos or poor copy | Medium | Preview step, draft/publish roles, full version history and one-click rollback |
| Client changes a slug and breaks a URL | Low | Warning in the editor plus an automatic redirect prompt |
| Sanity outage during a build | Low | Last good static pages continue serving; visitors unaffected |
| Vendor pricing changes | Low | Content is JSON; a documented export exists. Keystatic (§4) is a viable exit |
| Client finds the tool intimidating | Medium | Custom desk structure showing only their content in plain language, a one-page handbook, and a recorded walkthrough |
| Migration introduces content errors | Medium | Scripted migration plus a page-by-page visual diff against the current live site before cutover |

---

## 12. Decisions needed before we start

1. **Approve Sanity**, or choose Keystatic if the firm prefers content never leaves the repository.
2. **Who gets accounts, and who may publish?** Recommend: two administrators (managing partner + one other), one editor.
3. **Studio address** — `studio.ohenebekoeandpartners.com` (needs one DNS record) or the free `ohenebekoe.sanity.studio`.
4. **Image rights.** 15 images are currently hot-linked from Unsplash. Migration is the moment to replace them with the firm's own photography — several are stock images standing in for the firm's actual offices and people.
5. **Phasing** — all six phases in one go, or Phases 0–4 first?

---

## 13. Recommendation

Approve Phases 0–4 now. Within about seven working days the client will be adding team members, editing practice areas, and publishing insights from their phone — which accounts for nearly every content request received to date. Phase 5 follows shortly after and retires the last of the hard-coded copy.

The current arrangement does not just cost engineering time; it has already put incorrect content in front of the firm's clients. Handing content to the people who own the facts fixes both problems at once.

---

## Appendix A — Files retired by this work

```
utils/mockData.ts                              749 lines   all content
utils/images.ts                                157 lines   image mapping
components/screens/home/HeroSection.tsx                    hero copy
components/screens/home/AboutSection.tsx                   about copy
components/screens/home/WhyUsSection.tsx                   4 differentiators
components/screens/home/ClientsSection.tsx                 heading + intro
components/screens/home/ContactSection.tsx                 heading, body, address
components/layout/OpeningHoursBlock.tsx                    opening hours
components/layout/Footer.tsx                               tagline, address, contact
app/privacy/page.tsx                            38 nodes   full policy
app/terms/page.tsx                              23 nodes   full terms
app/about/*, app/careers/page.tsx                          page copy
16 metadata blocks across app/                             SEO
```

## Appendix B — Known content issues to resolve during migration

Carried over from the site review; migration is the natural moment to fix them.

1. Privacy Policy cites **UK GDPR, the Data Protection Act 2018, and the ICO** — the firm is in Accra and should cite Ghana's Data Protection Act, 2012 (Act 843) and the Data Protection Commission.
2. Terms of Use are governed by **the laws of England and Wales** — almost certainly should be Ghana.
3. The Chambers Global ranking article names two people who are not on the team and cites a **Band 3 ranking for England**.
4. A partner quote in the firm-news article appears to be unverified template text.
5. The digital-assets client update concerns **UK FCA and EU MiCA** rules, not Ghanaian law.
6. Homepage "Why us" claims the firm focuses **exclusively on disputes**, contradicting the eight practice areas.
7. One stock photograph serves as the homepage hero, the About image, and every inner-page hero, with alt text describing a different image entirely.
8. The two Candidate Attorneys' bios still name practice groups, though the client has said they have none.
9. Office Manager and Clerk role descriptions are currently engineering-drafted placeholder copy awaiting the firm's own wording.
