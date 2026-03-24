# KIHause Site Upgrade — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Update the existing spreeki-site (Next.js 16) with all new content/sections from the KIHause dist (bilingual DE/EN, testimonials, about, tech stack, sectors, package modals, social proof popup), then push to `emadexus/kihaus` on GitHub and deploy via Vercel.

**Architecture:** Add an i18n system using a translations file + React context provider. Create new section components for the added content. Update existing components to use the translation system. Connect to GitHub remote and deploy via Vercel.

**Tech Stack:** Next.js 16.1.7, React 19, TypeScript, Tailwind CSS 4, Framer Motion, Lucide React (icons)

**Project root:** `/Users/emadexus/Documents/Mine/Projects/claw/spreeki-site`

**Out of scope:** Blog pages (`src/app/blog/`, `src/components/blog/`) are not covered in this plan. They contain long-form German content that would need full translation — this can be a follow-up effort. The homepage blog preview section IS included via the i18n translations.

---

## File Structure

### New files to create:
- `src/lib/i18n.tsx` — Translation context provider + hook + translations data (DE/EN)
- `src/components/Testimonials.tsx` — Customer testimonials carousel/grid
- `src/components/About.tsx` — Founder/about section
- `src/components/TechStack.tsx` — Hardware + LLMs + Network section
- `src/components/Sectors.tsx` — Target industries section
- `src/components/PackageModal.tsx` — Detail modal for each pricing package
- `src/components/SocialProof.tsx` — Conversion popup toast
- `src/components/LanguageToggle.tsx` — DE/EN toggle button

### Existing files to modify:
- `src/app/layout.tsx` — Wrap with i18n provider
- `src/app/page.tsx` — Add new sections (Testimonials, About, TechStack, Sectors)
- `src/components/Header.tsx` — Add language toggle, use translations
- `src/components/Hero.tsx` — Use translations for bilingual text
- `src/components/Services.tsx` — Use translations
- `src/components/HowItWorks.tsx` — Use translations
- `src/components/Pricing.tsx` — Use translations + add "Learn more" button triggering PackageModal
- `src/components/Privacy.tsx` — Use translations
- `src/components/Contact.tsx` — Use translations
- `src/components/Footer.tsx` — Use translations
- `src/app/globals.css` — No changes expected (design system already matches)
- `package.json` — Add `lucide-react` dependency

---

### Task 1: Install lucide-react dependency

**Files:**
- Modify: `package.json`

- [ ] **Step 1: Install lucide-react**

```bash
cd /Users/emadexus/Documents/Mine/Projects/claw/spreeki-site && npm install lucide-react
```

- [ ] **Step 2: Verify installation**

```bash
cd /Users/emadexus/Documents/Mine/Projects/claw/spreeki-site && node -e "require('lucide-react')" && echo "OK"
```

- [ ] **Step 3: Commit**

```bash
cd /Users/emadexus/Documents/Mine/Projects/claw/spreeki-site
git add package.json package-lock.json
git commit -m "chore: add lucide-react dependency"
```

---

### Task 2: Create i18n translation system

**Files:**
- Create: `src/lib/i18n.tsx`

This is the foundation for all other tasks. Contains:
1. Full DE and EN translation objects (all site text)
2. React context + provider component
3. `useTranslations()` hook
4. `useLanguage()` hook for getting/setting language

- [ ] **Step 1: Create `src/lib/i18n.tsx`**

The file must export:
- `type Locale = "de" | "en"`
- `translations` object with `de` and `en` keys containing ALL site text (nav, hero, services, process, packages, comparison, about, techStack, sectors, testimonials, blog, contact, footer, packageModal, whatsappModal, conversion popup)
- `I18nProvider` component that wraps children with context, stores locale in state (default: `"de"`), reads from `localStorage` on mount
- `useTranslations()` — returns the current locale's translation object
- `useLanguage()` — returns `{ locale, setLocale }` to toggle language

Include ALL translation content extracted from the KIHause dist (both DE and EN objects — the full content from the analysis).

- [ ] **Step 2: Verify the file compiles**

```bash
cd /Users/emadexus/Documents/Mine/Projects/claw/spreeki-site && npx tsc --noEmit src/lib/i18n.tsx 2>&1 | head -20
```

- [ ] **Step 3: Commit**

```bash
cd /Users/emadexus/Documents/Mine/Projects/claw/spreeki-site
git add src/lib/i18n.tsx
git commit -m "feat: add bilingual i18n system with DE/EN translations"
```

---

### Task 3: Create LanguageToggle component

**Files:**
- Create: `src/components/LanguageToggle.tsx`

A small "DE | EN" toggle button that calls `setLocale()` from the i18n hook. Styled to fit the header (rounded-full, subtle).

- [ ] **Step 1: Create `src/components/LanguageToggle.tsx`**

"use client" component. Uses `useLanguage()` hook. Two buttons side by side: "DE" and "EN". Active one has `bg-primary-600 text-white`, inactive has `text-slate-600`. Wraps in a `rounded-full bg-slate-100` container.

- [ ] **Step 2: Commit**

```bash
cd /Users/emadexus/Documents/Mine/Projects/claw/spreeki-site
git add src/components/LanguageToggle.tsx
git commit -m "feat: add language toggle component"
```

---

### Task 4: Wire i18n provider into layout + update Header

**Files:**
- Modify: `src/app/layout.tsx` — Wrap `{children}` with `<I18nProvider>`
- Modify: `src/components/Header.tsx` — Add `<LanguageToggle />` next to CTA button, use `useTranslations()` for nav labels

- [ ] **Step 1: Update `layout.tsx`**

`layout.tsx` stays as a server component (it exports `metadata`). Import the `I18nProvider` client component and wrap `{children}` with it — Next.js allows importing client components into server components. Also add a `useEffect` inside `I18nProvider` to set `document.documentElement.lang` when locale changes (since the `<html lang="de">` attribute is static in the server-rendered layout).

- [ ] **Step 2: Update `Header.tsx`**

Replace hardcoded German nav labels with `t.nav.services`, `t.nav.packages`, etc. from `useTranslations()`. Remove the existing dual `label`/`labelEn` structure in `navLinks` — it's no longer needed since translations come from i18n. Also translate the CTA button text ("Kostenlos beraten" → `t.nav.cta`). Add `<LanguageToggle />` between the nav links and the CTA button on desktop, and at the top of the mobile menu.

- [ ] **Step 3: Build and verify**

```bash
cd /Users/emadexus/Documents/Mine/Projects/claw/spreeki-site && npm run build 2>&1 | tail -20
```

- [ ] **Step 4: Commit**

```bash
cd /Users/emadexus/Documents/Mine/Projects/claw/spreeki-site
git add src/app/layout.tsx src/components/Header.tsx
git commit -m "feat: wire i18n provider and bilingual header"
```

---

### Task 5: Update Hero component with translations

**Files:**
- Modify: `src/components/Hero.tsx`

- [ ] **Step 1: Update Hero.tsx**

Replace all hardcoded German text with `useTranslations()` values: badge, title, description, CTAs, terminal content, trust badges.

- [ ] **Step 2: Build and verify**

```bash
cd /Users/emadexus/Documents/Mine/Projects/claw/spreeki-site && npm run build 2>&1 | tail -10
```

- [ ] **Step 3: Commit**

```bash
cd /Users/emadexus/Documents/Mine/Projects/claw/spreeki-site
git add src/components/Hero.tsx
git commit -m "feat: bilingual Hero section"
```

---

### Task 6: Update Services component with translations

**Files:**
- Modify: `src/components/Services.tsx`

- [ ] **Step 1: Update Services.tsx**

Convert from hardcoded `services` array to using `useTranslations()`. Add `"use client"` directive. Map over `t.services.items` for titles/descriptions. Keep existing SVG icons (match by index).

- [ ] **Step 2: Build and verify**

- [ ] **Step 3: Commit**

```bash
cd /Users/emadexus/Documents/Mine/Projects/claw/spreeki-site
git add src/components/Services.tsx
git commit -m "feat: bilingual Services section"
```

---

### Task 7: Update HowItWorks component with translations

**Files:**
- Modify: `src/components/HowItWorks.tsx`

- [ ] **Step 1: Update HowItWorks.tsx**

Replace hardcoded `steps` array with `t.process.steps`. Add `"use client"`. Use `t.process.badge`, `t.process.title`, `t.process.description`.

- [ ] **Step 2: Build and verify**

- [ ] **Step 3: Commit**

```bash
cd /Users/emadexus/Documents/Mine/Projects/claw/spreeki-site
git add src/components/HowItWorks.tsx
git commit -m "feat: bilingual HowItWorks section"
```

---

### Task 8: Create PackageModal component

**Files:**
- Create: `src/components/PackageModal.tsx`

- [ ] **Step 1: Create PackageModal.tsx**

"use client" component. Props: `{ packageKey: "A" | "B" | "C" | null; onClose: () => void }`.

Uses `useTranslations()` to get package detail content. Shows a full-screen modal overlay with:
- Title + subtitle + description
- Marketing pitch
- "Perfect for" tags + ROI stat (two-column grid)
- "How it works" 3-step flow with arrows
- "What's included" feature list with checkmark icons
- Use cases with bullet points
- Close + "Inquire now" (links to #contact) buttons in footer

Uses Framer Motion for enter/exit animations. Uses AnimatePresence. Renders `null` when `packageKey` is `null`.

- [ ] **Step 2: Build and verify**

- [ ] **Step 3: Commit**

```bash
cd /Users/emadexus/Documents/Mine/Projects/claw/spreeki-site
git add src/components/PackageModal.tsx
git commit -m "feat: add package detail modal"
```

---

### Task 9: Update Pricing component with translations + modal

**Files:**
- Modify: `src/components/Pricing.tsx`

- [ ] **Step 1: Update Pricing.tsx**

Add `"use client"`. Replace hardcoded `packages` array with `t.packages.list`. Add state for `selectedPackage`. Add "Learn more" button under each package that opens `<PackageModal>`. Import and render `<PackageModal packageKey={selectedPackage} onClose={() => setSelectedPackage(null)} />`.

- [ ] **Step 2: Build and verify**

- [ ] **Step 3: Commit**

```bash
cd /Users/emadexus/Documents/Mine/Projects/claw/spreeki-site
git add src/components/Pricing.tsx
git commit -m "feat: bilingual Pricing with package modals"
```

---

### Task 10: Update Privacy component with translations

**Files:**
- Modify: `src/components/Privacy.tsx`

- [ ] **Step 1: Update Privacy.tsx**

Replace hardcoded `comparisons` array with `t.comparison.rows`. Use `t.comparison.badge`, `t.comparison.title`, `t.comparison.quote`, `t.comparison.founderQuote`, `t.comparison.founderTitle`.

- [ ] **Step 2: Build and verify**

- [ ] **Step 3: Commit**

```bash
cd /Users/emadexus/Documents/Mine/Projects/claw/spreeki-site
git add src/components/Privacy.tsx
git commit -m "feat: bilingual Privacy/Comparison section"
```

---

### Task 11: Create Testimonials component

**Files:**
- Create: `src/components/Testimonials.tsx`

- [ ] **Step 1: Create Testimonials.tsx**

"use client" component. Uses `useTranslations()`.

Displays `t.testimonials.badge`, `t.testimonials.title`, `t.testimonials.description` as section header.

Shows testimonial cards in a responsive grid (1 col mobile, 2 col md, 3 col lg). Each card shows:
- Quote text
- Star rating (5 stars, using Lucide `Star` icon filled)
- Company (anonymized)
- Size
- Date
- Package name tag

Styled consistently with other sections (rounded-2xl, border, shadow).

- [ ] **Step 2: Build and verify**

- [ ] **Step 3: Commit**

```bash
cd /Users/emadexus/Documents/Mine/Projects/claw/spreeki-site
git add src/components/Testimonials.tsx
git commit -m "feat: add Testimonials section"
```

---

### Task 12: Create About component

**Files:**
- Create: `src/components/About.tsx`

- [ ] **Step 1: Create About.tsx**

Uses `useTranslations()`. Shows `t.about.badge`, `t.about.title`, two paragraphs (`t.about.p1`, `t.about.p2`), and `t.about.stat` badge. Clean layout with subtle background.

- [ ] **Step 2: Build and verify**

- [ ] **Step 3: Commit**

```bash
cd /Users/emadexus/Documents/Mine/Projects/claw/spreeki-site
git add src/components/About.tsx
git commit -m "feat: add About section"
```

---

### Task 13: Create TechStack component

**Files:**
- Create: `src/components/TechStack.tsx`

- [ ] **Step 1: Create TechStack.tsx**

Uses `useTranslations()`. Three-column grid showing:
1. Apple Silicon Hardware (with Lucide `Cpu` icon)
2. Open-Source LLMs (with Lucide `Brain` icon)
3. Secure Network (with Lucide `Shield` icon)

Each card has title + description from `t.techStack`.

- [ ] **Step 2: Build and verify**

- [ ] **Step 3: Commit**

```bash
cd /Users/emadexus/Documents/Mine/Projects/claw/spreeki-site
git add src/components/TechStack.tsx
git commit -m "feat: add TechStack section"
```

---

### Task 14: Create Sectors component

**Files:**
- Create: `src/components/Sectors.tsx`

- [ ] **Step 1: Create Sectors.tsx**

Uses `useTranslations()`. Four cards in a 2x2 grid (md:grid-cols-2) showing target industries from `t.sectors.items`. Each card has:
- Lucide icon (Scale for law, Palette for agencies, Heart for doctors, Users for HR)
- Title + description

- [ ] **Step 2: Build and verify**

- [ ] **Step 3: Commit**

```bash
cd /Users/emadexus/Documents/Mine/Projects/claw/spreeki-site
git add src/components/Sectors.tsx
git commit -m "feat: add Sectors section"
```

---

### Task 15: Create SocialProof popup component

**Files:**
- Create: `src/components/SocialProof.tsx`

- [ ] **Step 1: Create SocialProof.tsx**

"use client" component. Shows a toast notification at bottom-left with social proof: "[Name] from [City] just purchased [Package]". Uses Framer Motion AnimatePresence for slide-in/out.

Logic:
- First appears after 15 seconds
- Shows for 5 seconds
- Reappears after random 60-120 second interval
- Randomly picks name, city, package from arrays
- Dismiss button (X)

Uses `useTranslations()` for package names and "just purchased"/"from" text.

- [ ] **Step 2: Build and verify**

- [ ] **Step 3: Commit**

```bash
cd /Users/emadexus/Documents/Mine/Projects/claw/spreeki-site
git add src/components/SocialProof.tsx
git commit -m "feat: add social proof conversion popup"
```

---

### Task 16: Update Contact and Footer with translations

**Files:**
- Modify: `src/components/Contact.tsx`
- Modify: `src/components/Footer.tsx`

- [ ] **Step 1: Update Contact.tsx**

Replace all hardcoded German text with `useTranslations()` values. Form labels, placeholders, select options, submit button, privacy note.

- [ ] **Step 2: Update Footer.tsx**

Add `"use client"`. Replace hardcoded text with `t.footer.*` values.

- [ ] **Step 3: Build and verify**

- [ ] **Step 4: Commit**

```bash
cd /Users/emadexus/Documents/Mine/Projects/claw/spreeki-site
git add src/components/Contact.tsx src/components/Footer.tsx
git commit -m "feat: bilingual Contact and Footer"
```

---

### Task 17: Assemble all sections in page.tsx

**Files:**
- Modify: `src/app/page.tsx`

- [ ] **Step 1: Update page.tsx**

`page.tsx` stays as a server component. All new components that need `"use client"` have it in their own files. Client components can be rendered inside server components.

Add imports for all new components. Insert them in this order:
1. Header (already present)
2. Hero
3. Services
4. Sectors (NEW)
5. HowItWorks
6. Pricing
7. TechStack (NEW)
8. Privacy (comparison table)
9. Testimonials (NEW)
10. About (NEW)
11. Contact
12. SocialProof (NEW — floating, not in main flow)
13. Footer

- [ ] **Step 2: Build and verify full site**

```bash
cd /Users/emadexus/Documents/Mine/Projects/claw/spreeki-site && npm run build 2>&1 | tail -20
```

- [ ] **Step 3: Commit**

```bash
cd /Users/emadexus/Documents/Mine/Projects/claw/spreeki-site
git add src/app/page.tsx
git commit -m "feat: assemble all new sections on homepage"
```

---

### Task 18: Update SEO for bilingual support

**Files:**
- Modify: `src/lib/seo.ts`

- [ ] **Step 1: Update seo.ts**

Remove the `alternates.languages` entries that point to `/de` and `/en` routes — these routes don't exist (the i18n is client-side toggle, not URL-based). Keep all other SEO intact:
- `openGraph.alternateLocale: "en_US"` — keep (signals content available in English)
- JSON-LD `knowsLanguage: ["de", "en"]` — keep
- `<html lang="de">` — keep as default; `I18nProvider` updates it dynamically via `document.documentElement.lang`

- [ ] **Step 2: Commit**

```bash
cd /Users/emadexus/Documents/Mine/Projects/claw/spreeki-site
git add src/lib/seo.ts
git commit -m "fix: remove non-existent alternate language routes from SEO config"
```

---

### Task 19: Push to GitHub and deploy

**Files:**
- No code changes

**Note:** Current branch is `master`. Existing `.vercel/project.json` points to project `spreeki-site` (ID: `prj_7ZCZariCgQVIF8HnFbuB0o5BfF7R`). We need to either relink Vercel to the new GitHub repo or create a new Vercel project for KIHause.

- [ ] **Step 1: Rename branch to main and add GitHub remote**

```bash
cd /Users/emadexus/Documents/Mine/Projects/claw/spreeki-site
git branch -M main
git remote add origin https://github.com/emadexus/kihaus.git
```

- [ ] **Step 2: Push to GitHub**

```bash
cd /Users/emadexus/Documents/Mine/Projects/claw/spreeki-site
git push -u origin main
```

- [ ] **Step 3: Remove old Vercel config and relink**

The existing `.vercel/project.json` points to the old `spreeki-site` project. Remove it and re-link:

```bash
cd /Users/emadexus/Documents/Mine/Projects/claw/spreeki-site
rm .vercel/project.json
npx vercel link
```

Follow the prompts to link to the `emadexus` scope and either create a new project named `kihaus` or connect to an existing one.

- [ ] **Step 4: Deploy to production**

```bash
cd /Users/emadexus/Documents/Mine/Projects/claw/spreeki-site
npx vercel --prod
```

- [ ] **Step 5: Verify deployment**

```bash
npx vercel ls 2>&1 | head -10
```

- [ ] **Step 6: Commit Vercel config**

```bash
cd /Users/emadexus/Documents/Mine/Projects/claw/spreeki-site
git add .vercel/project.json
git commit -m "chore: update Vercel project config for kihaus"
git push
```
