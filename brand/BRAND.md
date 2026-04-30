# PrimeNode Technologies Shenzhen Co. — Brand Guide

## Company Overview
PrimeNode Technologies is a China-based WFOE (Wholly Foreign-Owned Enterprise) in Shenzhen.
It operates as a local execution hub for international IT service providers, system integrators, and MSPs.

---

## Color Palette

| Name             | Hex       | Usage                                      |
|------------------|-----------|--------------------------------------------|
| Brand Blue (Primary) | `#0B52EC` | Primary CTAs, links, highlights, icon fills — *from logo designer* |
| Brand Blue Hover | `#073BC0` | Darker primary for button/link hover       |
| Deep Blue (Navy) | `#122359` | Hero backgrounds, dark sections, headings — *from logo designer* |
| Navy Light       | `#1a316f` | Hover states on navy, gradient mid-stop   |
| Blue Light       | `#EEF4FF` | Alternate section backgrounds              |
| Blue Mid         | `#DBEAFE` | Card highlights, tag backgrounds           |
| White            | `#FFFFFF` | Main page background, card backgrounds     |
| Slate 50         | `#F8FAFC` | Light section backgrounds                  |
| Slate 200        | `#E2E8F0` | Borders, dividers                          |
| Slate 600        | `#475569` | Secondary/muted body text                  |
| Slate 900        | `#0F172A` | Primary body text                          |

---

## Typography

- **Font Family:** Inter (Google Fonts)
- **Headings:** Inter, font-weight 700–800, tight tracking (`tracking-tight`)
- **Body:** Inter, font-weight 400–500, relaxed line-height
- **Scale:**
  - H1 (Hero): `text-5xl md:text-6xl lg:text-7xl`
  - H2 (Section): `text-3xl md:text-4xl`
  - H3 (Card): `text-xl`
  - Body: `text-base` (16px)
  - Small/Muted: `text-sm`

---

## Logo Variants

Located in `/public/logos/`:

| File                  | Usage                                    |
|-----------------------|------------------------------------------|
| `logo-primary.png`    | Default — blue on white/light backgrounds|
| `logo-dark.png`       | Navy on white/light backgrounds          |
| `logo-icon-blue.png`  | Icon-only, blue — small/favicon uses     |
| `logo-icon-dark.png`  | Icon-only, navy — dark UI contexts       |
| `logo-white.png`      | White version — dark/navy backgrounds    |
| `logo-transparent.png`| Blue on transparent — flexible use       |

**Logo usage rules:**
- Always maintain clear space of at least 20px around the logo
- Do NOT stretch, rotate, recolor, or add effects to the logo
- Use `logo-white.png` on dark/navy backgrounds
- Use `logo-primary.png` on white or light backgrounds
- Minimum width: 120px for full logo, 32px for icon-only

---

## Spacing & Layout

- Container max-width: `max-w-7xl` (1280px)
- Section vertical padding: `py-20 md:py-28`
- Card padding: `p-6 md:p-8`
- Gap between grid items: `gap-6 md:gap-8`
- Border radius: `rounded-xl` for cards, `rounded-lg` for buttons

---

## Buttons

| Variant   | Classes                                              |
|-----------|------------------------------------------------------|
| Primary   | `bg-brand-blue text-white hover:bg-brand-blue-hover` |
| Secondary | `bg-brand-navy text-white hover:bg-brand-navy-light` |
| Outline   | `border-2 border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white` |
| Ghost     | `text-brand-blue hover:bg-brand-blue-light`          |

---

## Tone of Voice

- **Professional** and **confident** — we are experts
- **Clear and direct** — no jargon, easy to understand for international clients
- **Trustworthy** — emphasize reliability, standards, experience
- **Action-oriented** — use verbs: deliver, execute, support, validate, deploy

---

## Key Messages

1. "Your trusted China IT execution partner"
2. "EU-grade quality, China-speed execution"
3. "Reducing deployment risk through pre-validation"
4. "From Shenzhen to nationwide coverage"
