# Performance Review — Ohene-Bekoe & Partners (Home & App)

**Reviewed:** Home page, layout, key components, build output, and assets.

---

## Summary

| Area | Status | Notes |
|------|--------|--------|
| **Core Web Vitals (expected)** | Good | Static HTML, priority hero image, no heavy JS on home |
| **LCP (Largest Contentful Paint)** | Good | Hero has `priority` + `sizes="100vw"`; font loading is the main risk |
| **CLS (Cumulative Layout Shift)** | Good | Images use `fill` + aspect/min-height; one small improvement below |
| **INP / TTI** | Good | Minimal client JS; scroll listener is passive; IntersectionObserver used efficiently |
| **Bundle size** | Good | No heavy deps; client boundary limited to Header, Nav, AnimateInView |
| **Images** | Mixed | Next/Image used correctly; some source files are very large; hero/about still remote (Unsplash) |

---

## What’s Working Well

1. **Static generation**  
   Home and most routes are statically generated (○). No per-request server work for the main pages.

2. **Hero image**  
   Hero uses `priority` and `sizes="100vw"`, so Next.js can preload and serve an appropriate size. Good for LCP.

3. **Next/Image everywhere**  
   All section images use `next/image` with `fill`, `sizes`, and (where applicable) aspect-ratio or min-height. That gives optimization, responsive srcset, and lazy loading for below-the-fold images.

4. **Scroll performance**  
   Header scroll listener uses `{ passive: true }`, which avoids blocking the main thread during scroll.

5. **Reveal animations**  
   `AnimateInView` uses IntersectionObserver with `once: true` and disconnects after firing. No continuous work after elements have revealed.

6. **Client boundary**  
   Only Header (scroll + menu), Nav (mobile menu), and AnimateInView are client components. Home does not load ContactForm, so JS is minimal on the homepage.

7. **Accessibility**  
   Skip link, focus styles, and `prefers-reduced-motion` for animations are in place and help both a11y and perceived performance.

---

## Recommendations (by impact)

### 1. Font loading (high impact on LCP)

**Current:** Google Fonts loaded via `@import` in `globals.css`. That can block first paint until the CSS (and thus the font request) is processed.

**Recommendation:** Use `next/font` (e.g. `next/font/google`) for Cormorant Garamond and Source Sans 3. Next will self-host the fonts and inject a non-blocking loader, which typically improves LCP and avoids a flash of unstyled text.

```ts
// app/layout.tsx
import { Cormorant_Garamond, Source_Sans_3 } from 'next/font/google';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-serif',
  display: 'swap',
});
const sourceSans = Source_Sans_3({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-sans',
  display: 'swap',
});
```

Then use the `variable` classes on `<body>` and keep using `var(--font-serif)` / `var(--font-sans)` in your theme.

---

### 2. Preconnect to external origins (medium)

**Current:** Hero and About images are served from `images.unsplash.com`. Fonts (if kept on Google) come from `fonts.googleapis.com` / `fonts.gstatic.com`.

**Recommendation:** In `app/layout.tsx`, add:

```tsx
<head>
  <link rel="preconnect" href="https://images.unsplash.com" />
  {/* If you keep Google Fonts: */}
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
</head>
```

This reduces latency for the first request to those origins.

---

### 3. Contact section image container (small, CLS)

**Current:** Contact section image wrapper has `min-h-[280px]` but no aspect ratio. Depending on image dimensions, layout can shift slightly when the image loads.

**Recommendation:** Give the container an aspect ratio (e.g. `aspect-[4/3]` or `aspect-video`) so reserved space matches the rendered image and CLS stays low.

---

### 4. Large source images in `public/` (medium, optional)

**Current:** Some images in `public/` are very large (e.g. ~12 MB, ~5 MB). Next.js Image optimization will serve smaller, responsive formats at runtime, but build/cache and disk usage can be improved.

**Recommendation:** Before committing, resize/compress large JPGs to something reasonable (e.g. max 2400px on the long edge, 80–85% quality). Keep Next/Image so the app still gets automatic formats and sizes.

---

### 5. Hero image quality (optional)

**Current:** Hero uses `q: 90` in `utils/images.ts`. Slightly lower quality (e.g. 80–85) often gives a good visual tradeoff and smaller bytes.

**Recommendation:** Try `q: 82` or `85` and compare visually; adjust if needed.

---

### 6. AnimateInView observers (low)

**Current:** Each section using `AnimateInView` gets its own IntersectionObserver. On the home page that’s several observers; all use `once: true` and disconnect, so cost is limited.

**Recommendation:** Acceptable as is. If you ever add many more sections, consider a single shared observer that observes multiple targets (e.g. a small wrapper component that registers refs with one observer).

---

## Metrics to monitor

- **LCP:** Aim for &lt; 2.5s (hero image + fonts are the main levers).
- **CLS:** Aim for &lt; 0.1 (image dimensions and font loading are the main levers).
- **INP / FID:** Should be good given minimal JS; keep an eye on scroll and menu open/close.

Run Lighthouse (or PageSpeed Insights) on the production build with “Mobile” and “Clear storage” to get baseline numbers, then re-run after applying font and preconnect changes.

---

## Quick reference

| Item | Location | Action |
|------|----------|--------|
| Fonts | `globals.css` | Prefer `next/font` in `layout.tsx` |
| Preconnect | `app/layout.tsx` | Add `preconnect` for Unsplash (and fonts if needed) |
| Contact image | `ContactSection.tsx` | Add aspect ratio to image wrapper |
| Hero quality | `utils/images.ts` | Consider lowering `q` for hero |
| Source images | `public/*.jpg` | Optionally pre-resize/compress before commit |

Overall, the page is in good shape: static, minimal client JS, and sensible use of Next/Image. The highest-value follow-ups are font loading and preconnect; the rest are incremental improvements.
