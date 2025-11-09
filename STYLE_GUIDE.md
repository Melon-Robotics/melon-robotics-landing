# Melon Robotics Design System & Style Guide

## Overview

This document outlines the comprehensive design system for Melon Robotics, optimized for enterprise-grade defense-tech applications with full mobile and desktop responsiveness.

---

## Design Philosophy

**Tone**: Precision engineering, mission-readiness, marine/underwater stealth, data intelligence  
**Visual Language**: Deep navy backgrounds, metallic accents (steel/graphite), subtle gradients reminiscent of ocean depths, high-contrast text, strong sans serif headlines, monospaced tech-style subheads  
**UX Approach**: Clear, confident, minimal clutter, high reliance on imagery and whitespace, guiding visitors from "what we do" → "how we do it" → "get in touch" with minimal friction

---

## Color Palette

### Primary Colors

- **Navy Base**: `#0a0e1a` (Background primary)
- **Navy 100**: `#0f1625` (Cards, elevated surfaces)
- **Navy 200**: `#1a2332` (Borders, subtle dividers)
- **Navy 300**: `#253040` (Interactive elements)

### Accent Colors

- **Amber 500**: `#f59e0b` (Primary CTA, highlights)
- **Amber 400**: `#fbbf24` (Hover states, secondary accents)
- **Amber 600**: `#d97706` (Active states, pressed buttons)

### Neutral Colors

- **White**: `#ffffff` (Primary text)
- **Gray 300**: `#d1d5db` (Secondary text, body)
- **Gray 400**: `#9ca3af` (Tertiary text, captions)
- **Gray 500**: `#6b7280` (Disabled states)

### Usage Guidelines

- **Hover States**: Amber 500 → Amber 600 for buttons, Amber 400 → Amber 500 for links
- **Focus States**: Amber 500 ring with 2px offset
- **Disabled States**: 50% opacity on gray tones
- **Contrast Ratios**: All text meets WCAG AA standards (4.5:1 minimum)

---

## Typography System

### Font Families

- **Sans Serif**: Geist Sans (primary UI, headlines, body text)
- **Monospace**: Geist Mono (technical labels, code, status indicators)

### Type Scale

**Desktop (≥ 768px)**
- **H1**: 64px (4rem) / Bold / Line-height: 1.1
- **H2**: 48px (3rem) / Bold / Line-height: 1.2
- **H3**: 36px (2.25rem) / Semibold / Line-height: 1.3
- **H4**: 24px (1.5rem) / Semibold / Line-height: 1.4
- **Body**: 18px (1.125rem) / Regular / Line-height: 1.75
- **Small**: 14px (0.875rem) / Regular / Line-height: 1.5

**Mobile (≤ 375px)**
- **H1**: 32px (2rem) / Bold / Line-height: 1.2
- **H2**: 24px (1.5rem) / Bold / Line-height: 1.3
- **H3**: 20px (1.25rem) / Semibold / Line-height: 1.4
- **H4**: 18px (1.125rem) / Semibold / Line-height: 1.5
- **Body**: 16px (1rem) / Regular / Line-height: 1.75
- **Small**: 14px (0.875rem) / Regular / Line-height: 1.5

### Typography Usage

- **Headlines**: Use Geist Sans Bold, tracking-tighter for impact
- **Technical Labels**: Use Geist Mono, uppercase, tracking-widest
- **Body Text**: Use text-balance utility for optimal line breaks
- **Monospace**: Use for status indicators, technical terms, navigation badges

---

## Spacing System

### Base Units
- **Mobile Base**: 16px (1rem)
- **Desktop Base**: 32px (2rem)

### Spacing Scale
- **xs**: 4px (0.25rem)
- **sm**: 8px (0.5rem)
- **md**: 16px (1rem) - Mobile base
- **lg**: 24px (1.5rem)
- **xl**: 32px (2rem) - Desktop base
- **2xl**: 48px (3rem)
- **3xl**: 64px (4rem)
- **4xl**: 96px (6rem)

### Component Spacing

- **Section Padding**: `py-16 md:py-24 lg:py-32` (64px → 96px → 128px)
- **Grid Gaps**: `gap-6 md:gap-8` (24px → 32px)
- **Card Padding**: `p-6 md:p-8` (24px → 32px)
- **Container Padding**: `px-4 md:px-6 lg:px-8` (16px → 24px → 32px)

---

## Layout System

### Breakpoints

- **Mobile**: 0-639px (default)
- **Tablet**: 640px-1023px (`sm:`)
- **Desktop**: 1024px-1279px (`md:`)
- **Large Desktop**: 1280px-1439px (`lg:`)
- **XL Desktop**: 1440px+ (`xl:`, `2xl:`)

### Container System

- **Max Width**: 1440px on XL screens
- **Responsive Padding**: `container-responsive` utility class
- **Centering**: `mx-auto` with max-width constraints

### Grid System

- **Products Grid**: 1 column (mobile) → 2 columns (tablet) → 3 columns (desktop)
- **Services Grid**: 1 column (mobile) → 2 columns (tablet) → 3 columns (desktop)
- **Cards**: Flex-based with equal heights using `flex-grow`

---

## Component Guidelines

### Navigation

**Desktop**
- Sticky header with backdrop blur
- Left-aligned logo
- Right-aligned navigation links
- Dropdown menus for Products/Services
- Contact CTA button (amber background)

**Mobile**
- Hamburger menu (48px minimum tap target)
- Full-screen overlay navigation
- Large tap targets (48px minimum)
- Collapsible sections for dropdowns

**States**
- **Hover**: Underline animation, color transition
- **Active**: Amber 500 underline
- **Focus**: Visible ring outline
- **Dropdown**: Fade-in animation, backdrop blur

### Hero Section

**Desktop**
- Full viewport height
- Centered content
- Large headline (64px+)
- Two CTA buttons side-by-side
- Background grid pattern + ocean gradient

**Mobile**
- Minimum 90vh height
- Stacked CTAs
- Reduced headline size (32px)
- Optimized background effects

### Product/Service Cards

**Design**
- Border: `border-amber-500/20`
- Background: `bg-black/40`
- Padding: `p-6 md:p-8`
- Image aspect ratio: 16:9 or 4:3

**Hover States**
- Lift effect: `translate-y-[-4px]`
- Shadow: `shadow-xl shadow-amber-500/20`
- Border accent: `border-amber-500/50`
- Image scale: `scale-105`

**Animations**
- Fade-in on scroll
- Staggered delays (0.1s increments)
- Smooth transitions (300ms)

### Buttons

**Primary (Amber)**
- Background: `bg-amber-500`
- Text: `text-black`
- Hover: `hover:bg-amber-600`
- Shadow: `shadow-lg shadow-amber-500/20`
- Padding: `px-8 md:px-10 py-6 md:py-7`
- Font: Semibold, text-base md:text-lg

**Secondary (Outline)**
- Border: `border-amber-500/50`
- Text: `text-amber-400`
- Hover: `hover:bg-amber-500/10`
- Same padding as primary

**Accessibility**
- Minimum 48px tap target
- Focus ring: `focus-visible:ring-2 focus-visible:ring-amber-500`
- ARIA labels on icon-only buttons

### Forms

**Input Fields**
- Background: `bg-black/50`
- Border: `border-amber-500/30`
- Focus: `focus:border-amber-500`
- Text: `text-white`
- Placeholder: `placeholder:text-gray-500`

**Labels**
- Color: `text-amber-500/80`
- Font: Medium, text-sm
- Required indicator: Red asterisk with `aria-label="required"`

**Validation**
- Error states: Red border + message
- Success states: Green accent
- Focus states: Amber ring

### Footer

**Desktop**
- 4-column grid layout
- Brand section (left)
- Quick Links (center-left)
- Legal (center-right)
- Contact/Newsletter (right)

**Mobile**
- Single column stack
- Accordion sections for Quick Links and Legal
- Collapsible contact form
- Social icons at bottom

---

## Animations & Interactions

### Scroll Animations

- **Fade-in**: `opacity: 0 → 1` with `translateY(20px → 0)`
- **Stagger**: 0.1s delay between items
- **Viewport**: Trigger at `-100px` margin for early animation

### Hover Effects

- **Cards**: Lift + shadow + border accent
- **Links**: Underline animation (width: 0 → 100%)
- **Buttons**: Scale + shadow enhancement
- **Icons**: Color transition

### Transitions

- **Duration**: 300ms (base), 500ms (slow)
- **Easing**: `ease-in-out` for smooth feel
- **Transform**: Hardware-accelerated transforms

---

## Accessibility Standards

### WCAG Compliance

- **Contrast Ratios**: AA minimum (4.5:1), AAA preferred (7:1)
- **Text Sizes**: Minimum 16px base, scalable up to 200%
- **Focus Indicators**: Visible 2px amber ring
- **Keyboard Navigation**: All interactive elements accessible

### ARIA Labels

- **Navigation**: `aria-label="Main navigation"`
- **Buttons**: Descriptive labels for icon-only buttons
- **Forms**: `aria-required="true"` for required fields
- **Sections**: `aria-labelledby` for section headings

### Semantic HTML

- `<header>` for navigation
- `<main>` for main content
- `<section>` with headings
- `<nav>` for navigation menus
- `<footer>` for footer content
- `<button>` for interactive elements (not `<div>`)

### Keyboard Navigation

- **Tab Order**: Logical flow through page
- **Skip Links**: Jump to main content
- **Focus Management**: Clear focus indicators
- **Escape Key**: Close modals/dropdowns

---

## Performance Optimizations

### Images

- **Format**: WebP with fallback
- **Lazy Loading**: `loading="lazy"` (except above-fold)
- **Sizes**: Responsive `sizes` attribute
- **Priority**: `priority` for hero images

### Fonts

- **Display**: `swap` for immediate text rendering
- **Preload**: Critical fonts preloaded
- **Subsets**: Latin-only for faster loading

### CSS

- **Mobile-First**: Base styles for mobile, enhancements for desktop
- **Critical CSS**: Inlined in `<head>`
- **Unused CSS**: Purged via Tailwind

### JavaScript

- **Code Splitting**: Route-based splitting
- **Tree Shaking**: Remove unused code
- **Defer Non-Critical**: Defer analytics, third-party scripts

---

## Responsive Patterns

### Mobile-First Approach

1. Design for mobile (375px width) first
2. Enhance for tablet (768px+)
3. Optimize for desktop (1440px+)

### Content Reflow

- **Hero**: Stacked on mobile, side-by-side on desktop
- **Grids**: 1 column → 2 columns → 3 columns
- **Navigation**: Hamburger → horizontal menu
- **Forms**: Stacked → side-by-side where appropriate

### Touch Targets

- **Minimum Size**: 48px × 48px
- **Spacing**: 8px minimum between targets
- **Feedback**: Visual feedback on tap

---

## Implementation Notes

### Utility Classes

- `.container-responsive`: Responsive container with max-width
- `.section-padding`: Consistent section padding
- `.grid-responsive`: Responsive grid system
- `.card-hover`: Standardized card hover effects
- `.bg-grid-pattern`: Background grid pattern
- `.bg-ocean-gradient`: Ocean depth gradient
- `.text-balance`: Optimal text wrapping

### Tailwind Configuration

- Extended color palette (navy, amber, steel)
- Custom font sizes and line heights
- Custom animations (fade-in, slide-in, scale-in)
- Custom shadows (glow effects)

### Component Structure

- All components use TypeScript
- Client components marked with `"use client"`
- Server components by default
- Shared UI components in `/components/ui`

---

## Testing Checklist

### Accessibility
- [ ] Keyboard navigation works throughout
- [ ] Screen reader announces all content correctly
- [ ] Focus indicators visible on all interactive elements
- [ ] Color contrast meets WCAG AA standards
- [ ] Forms have proper labels and validation

### Responsive Design
- [ ] Mobile (375px): All content readable, no horizontal scroll
- [ ] Tablet (768px): Layout adapts appropriately
- [ ] Desktop (1440px): Maximum width respected, content centered
- [ ] Touch targets ≥ 48px on mobile

### Performance
- [ ] Lighthouse score > 90 (Performance)
- [ ] Images lazy-loaded correctly
- [ ] Fonts load with `display: swap`
- [ ] No layout shift on load
- [ ] Smooth animations (60fps)

### Browser Compatibility
- [ ] Chrome/Edge (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Mobile Safari (iOS 15+)
- [ ] Chrome Mobile (Android 10+)

---

## Maintenance

### Updates

- Design system changes should be documented here
- Component updates should maintain backward compatibility
- Breaking changes require version bump and migration guide

### Resources

- Tailwind CSS: https://tailwindcss.com/docs
- Next.js: https://nextjs.org/docs
- Framer Motion: https://www.framer.com/motion
- WCAG Guidelines: https://www.w3.org/WAI/WCAG21/quickref/

---

**Last Updated**: 2024  
**Version**: 1.0.0  
**Maintained By**: Melon Robotics Design Team


