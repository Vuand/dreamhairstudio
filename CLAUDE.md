# Dream Hair Studio - Project Requirements

## Overview
Complete website for **Dream Hair Studio**, a hair salon and barbershop in Corvallis, OR. The site attracts local customers, showcases services/staff, builds trust through reviews and a gallery, and drives bookings via Vagaro integration.

## Tech Stack
- **Framework**: Next.js 16+ with App Router, TypeScript
- **Styling**: Tailwind CSS v4 (uses `@tailwindcss/postcss` and `@theme inline` blocks, NOT `tailwind.config.ts`)
- **Animations**: Framer Motion for scroll reveals and interactive animations
- **Fonts**: Cormorant Garamond (serif display) + DM Sans (sans body) via `next/font/google`
- **Booking**: Vagaro - `https://www.vagaro.com/dreamhairstudio4/book-now`
- **Deployment target**: Vercel (or any Next.js-compatible host)

## Brand Design System

### Colors
- **Background**: Cream `#f7f5f3`, white cards `#ffffff`, warm grays for text
- **Brand red** (CTAs): `#c1272d`
- **Brand gold** (accents): `#d4a574`
- **Dark surface** (hero, footer, header): `#1a1a1a`
- **No dark mode** — light theme only

### Semantic Tokens (used throughout components)
- `bg-cream` / `bg-cream-dark` - page backgrounds
- `bg-card` / `border-card-border` - cards
- `text-brand-dark` - primary text
- `text-warm-gray` / `text-warm-gray-light` - secondary/tertiary text
- `bg-dark-surface` - always-dark sections (hero, footer, final CTA)
- `bg-header-bg` / `bg-header-scrolled` - header backgrounds

### Typography
- `font-serif` (Cormorant Garamond): headings, display text, brand name
- `font-sans` (DM Sans): body text, buttons, navigation, labels

### Motif
- Subtle chevron/V dividers between sections (`ChevronDivider` component)
- Gold gradient rules as decorative touches
- Noise texture overlay on dark sections (`.noise-bg`)

## Business Data
All business data lives in `src/lib/constants.ts` as the single source of truth.

### Business Info
- **Name**: Dream Hair Studio
- **Tagline**: "Where Every Look Becomes a Dream"
- **Address**: 800 NW Starker Ave Suite 23, Corvallis, OR 97330
- **Phone**: (541) 230-9242
- **Hours**: Mon-Sat 9:00 AM - 6:30 PM, Sun closed

### Staff (4 members)
| Name | Role | Rating | Reviews |
|------|------|--------|---------|
| Roland | Barber / Stylist | 5.0 | 4 |
| Dalia | Stylist / Colorist | -- | 0 |
| Juan "Chapis" | Barber | 5.0 | 1 |
| Benjamin | Barber | -- | 0 |

### Services (3 categories, 30 total)
- **Barbering** (10): Men's Haircut $35, Beard Trim $15, Line Up $15, Razor Shave $35, Kids $25/$30, Senior $25, New Client Special $32, etc.
- **Hairstyles** (6): Women's Haircut $45+, Cut & Style $65+, Blowout $35+, Deep Conditioning $25+, Special Occasion $75+, Bridal (consultation)
- **Color** (14): All-Over $85+, Root Touch-Up $65+, Partial Highlights $95+, Full Highlights $120+, Balayage $150+, Ombre $140+, and more

### Additional Info
- **Amenities**: TV, disabled access
- **Payment**: Visa, MasterCard, Discover, Amex, debit, cash
- **Languages**: English, Spanish
- **Trust badges**: 5.0 rating, walk-ins welcome, bilingual, kid-friendly

## Pages (8 total)

### Home (`/`)
Sections in order: Hero, TrustBar, NewClientSpecial, FeaturedServices, ChevronDivider, MeetTheTeam, GalleryPreview, ChevronDivider, WhyChooseUs, ReviewsPreview, ChevronDivider, FAQSection, VisitUsPreview, FinalCTA

### About (`/about`)
Brand story, philosophy, inclusive values, photo placeholders

### Services (`/services`)
3 service categories with full pricing, new client special banner, FAQ accordion at bottom, FAQ JSON-LD schema

### Staff (`/staff`)
4 staff cards with name, role, rating, bio, "Book with [Name]" CTAs linking to Vagaro

### Gallery (`/gallery`)
Photo grid with 3 existing haircut photos + placeholder cards for future photos

### Reviews (`/reviews`)
5.0 rating summary, 2 verified review cards (Tyler F., Gary Z.)

### Contact (`/contact`)
Google Maps embed, address, hours, amenities, payment methods, consultation CTA

### Booking (`/booking`)
Vagaro iframe embed with fallback link

## File Structure
```
src/
  app/
    layout.tsx          # Root layout: fonts, metadata, JSON-LD, ThemeProvider, Header, Footer
    page.tsx            # Home page
    globals.css         # Tailwind + base styles
    about/page.tsx
    staff/page.tsx
    services/page.tsx
    gallery/page.tsx
    reviews/page.tsx
    contact/page.tsx
    booking/page.tsx
    sitemap.ts
    robots.ts
  components/
    layout/
      Header.tsx        # Sticky dark header, nav, mobile hamburger, Book Now
      Footer.tsx        # Dark footer, 4-col grid (brand, links, hours, contact)
      MobileBookNow.tsx # Sticky bottom bar on mobile (hidden on desktop)
    ui/
      Button.tsx        # CTA variants: primary (red), secondary (dark), outline, gold
      SectionHeading.tsx # Overline + title + subtitle pattern
      ServiceCard.tsx
      StaffCard.tsx     # Staff-specific Vagaro booking links
      ReviewCard.tsx
      TrustBar.tsx
      ChevronDivider.tsx
      AnimatedSection.tsx # Scroll-triggered fade/slide with direction prop
      FAQAccordion.tsx  # Expandable accordion with framer-motion
      ImagePlaceholder.tsx # Gradient placeholder with initials for missing photos
      background-paths.tsx # SVG animated paths (shadcn)
    sections/
      HeroSection.tsx
      NewClientSpecial.tsx
      FeaturedServices.tsx
      MeetTheTeam.tsx
      GalleryPreview.tsx
      WhyChooseUs.tsx
      ReviewsPreview.tsx
      FAQSection.tsx
      VisitUsPreview.tsx
      FinalCTA.tsx
    embeds/
      VagaroWidget.tsx  # Vagaro booking iframe
      GoogleMap.tsx      # Google Maps iframe
  lib/
    constants.ts        # ALL business data (single source of truth)
    metadata.ts         # LocalBusiness + FAQ JSON-LD schema generators
    fonts.ts            # next/font definitions
    utils.ts            # cn() utility (clsx + tailwind-merge)
  types/
    index.ts            # TypeScript interfaces for all data types
public/images/
    DreamStudioLogo.jpg
    haircutpic1.jpeg
    haircutpic2.jpeg
    haircutpic3.jpeg
```

## CTA Strategy
Consistent call-to-action buttons used throughout the site:
- **Book Now** -> Vagaro main booking URL
- **View Services** -> `/services`
- **Meet the Team** -> `/staff`
- **Book with [Name]** -> Vagaro (staff-specific when supported, else general)
- **View Gallery** -> `/gallery`
- **Get Directions** -> Google Maps URL

## SEO
- **LocalBusiness JSON-LD** schema in root layout (HairSalon type, address, hours, rating, geo)
- **FAQPage JSON-LD** schema on services page
- **Per-page OG metadata**: unique title, description, og:image
- **Auto-generated sitemap** (`sitemap.ts`)
- **robots.ts** configured
- **Local keywords** woven into copy: "Corvallis hair studio", "barber Corvallis OR", etc.
- **metadataBase**: `https://dreamhairstudio.com`

## Key Conventions
- All business data changes go through `src/lib/constants.ts` only
- Components use semantic tokens (`bg-card`, `text-brand-dark`, etc.), never raw colors
- Always-dark sections use `bg-dark-surface` (hero, footer, final CTA, mobile book bar)
- Scroll animations use `AnimatedSection` wrapper with optional `direction` and `delay` props
- Framer Motion variants use `ease: [0.25, 0.1, 0.25, 1] as const` for type safety
- Images use `next/image` with explicit dimensions; missing staff photos use `ImagePlaceholder`
- No `tailwind.config.ts` -- Tailwind v4 uses `@theme inline` block in `globals.css`

## Photo Placeholder Strategy
- `ImagePlaceholder` component: styled gradient with initials + "Photo Coming Soon"
- Staff photos: warm gradient placeholder with initials
- Gallery: 3 real photos + placeholder cards
- To add photos: place files in `public/images/` and update the relevant constant in `constants.ts`

## Git / Workflow
- **Repository**: https://github.com/Vuand/dreamhairstudio
- **Branch**: main
- Never add co-author attributions to commits
- Run `npm run build` to verify no build errors before pushing
- Run `npm run dev` for local development (Turbopack enabled by default)
