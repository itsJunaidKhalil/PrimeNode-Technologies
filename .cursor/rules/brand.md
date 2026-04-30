# PrimeNode Brand & Code Standards

## Company
PrimeNode Technologies Shenzhen Co. — China-based IT execution hub for global MSPs and system integrators.

## Brand Colors (Tailwind CSS classes)
- **Primary Blue**: `bg-brand-blue` / `text-brand-blue` → #0B52EC (logo designer)
- **Primary Hover**: `hover:bg-brand-blue-hover` → #073BC0
- **Deep Blue (Navy)**: `bg-brand-navy` / `text-brand-navy` → #122359 (logo designer)
- **Navy Light**: `bg-brand-navy-light` → #1a316f
- **Blue Light BG**: `bg-brand-blue-light` → #EEF4FF
- **Blue Mid**: `bg-brand-blue-mid` → #DBEAFE

## Typography
- Font: Inter (already configured in layout.tsx)
- Hero H1: `text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight`
- Section H2: `text-3xl md:text-4xl font-bold tracking-tight`
- Card H3: `text-xl font-semibold`
- Body: `text-base text-slate-600 leading-relaxed`

## Layout Conventions
- Container: `<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">`
- Section padding: `py-20 md:py-28`
- Card: `rounded-xl border border-slate-200 bg-white p-6 md:p-8`
- Gaps: `gap-6 md:gap-8`

## Logos
- Light backgrounds: `/logos/logo-primary.png` (blue) or `/logos/logo-dark.png` (navy)
- Dark/navy backgrounds: `/logos/logo-white.png`
- Icon only: `/logos/logo-icon-blue.png`

## Component Conventions
- All reusable UI in `components/ui/`
- All page sections in `components/sections/`
- Layout components (Navbar, Footer) in `components/layout/`
- Use `clsx` for conditional class composition
- Use `framer-motion` for subtle enter animations

## Button Variants
- Primary: `bg-brand-blue text-white hover:bg-brand-blue-hover rounded-lg px-6 py-3 font-semibold`
- Secondary: `bg-brand-navy text-white hover:bg-brand-navy-light rounded-lg px-6 py-3 font-semibold`
- Outline: `border-2 border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white rounded-lg px-6 py-3 font-semibold`

## Tone of Voice
- Professional, confident, trustworthy, action-oriented
- Short sentences. Clear value props. No filler words.
- Emphasize: reliability, EU standards, China execution speed, risk reduction
