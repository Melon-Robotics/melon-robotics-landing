# Mobile-First Design Guide
## Gold Standard: Melon Scout Page Patterns

This guide documents the mobile-first design patterns established in the Melon Scout page, which serves as our reference implementation for exceptional mobile web experiences.

---

## Core Principles

### 1. Mobile First, Desktop Last
- Every design decision must justify itself on a **360–430px viewport**
- Desktop is a progressive enhancement, never the baseline
- Test on real mid-range Android devices with spotty LTE

### 2. Thumb-Zone Awareness
- Primary actions live in natural thumb reach (bottom-center of screen)
- No critical UI in top corners on mobile
- Full-width buttons on mobile (`w-full sm:w-auto`)
- Stacked CTAs on mobile, side-by-side on desktop

### 3. Performance is UX
- Assume: 3G/LTE, 2–4GB RAM, low-power CPU
- Favor: Static layouts, minimal JS, CSS over libraries
- Transition durations: **200ms** (not 300ms) for snappier feel
- Conditional rendering for heavy effects (3D, animations) on mobile

### 4. Accessibility by Default
- WCAG AA minimum compliance
- High contrast (amber-500 on dark backgrounds)
- Large tap targets: **minimum 44px × 44px**
- No reliance on color alone
- Proper ARIA labels and semantic HTML

---

## Component Patterns

### Buttons

**Base Button Component:**
- Default size: `min-h-[44px]` (mobile minimum)
- Large size: `min-h-[52px] sm:min-h-[56px]`
- Always includes `touch-manipulation` class
- Responsive padding: `px-4 sm:px-6` (default), `px-6 sm:px-8 md:px-10 lg:px-12` (large)
- Responsive text: `text-sm sm:text-base` (default), `text-base sm:text-lg` (large)
- Transition: `duration-200` (not 300ms)

**Primary Button (Amber):**
```tsx
<Button className="w-full sm:w-auto bg-amber-500/12 hover:bg-amber-500/20 active:bg-amber-500/25 text-amber-500 border border-amber-500/30 hover:border-amber-500/50 active:border-amber-500/60 px-6 sm:px-8 md:px-10 lg:px-12 py-4 sm:py-5 md:py-6 text-base sm:text-lg font-normal tracking-wide transition-all duration-200 hover:shadow-[0_0_30px_rgba(245,158,11,0.3)] backdrop-blur-sm">
  Action
</Button>
```

**Secondary Button (Outline):**
```tsx
<Button variant="outline" className="w-full sm:w-auto border border-gray-700/40 text-gray-300 hover:text-white active:text-white hover:border-gray-500 active:border-gray-400 px-6 sm:px-8 md:px-10 lg:px-12 py-4 sm:py-5 md:py-6 text-base sm:text-lg font-normal tracking-wide transition-all duration-200">
  Secondary Action
</Button>
```

**Key Patterns:**
- Full-width on mobile (`w-full sm:w-auto`)
- Active states for touch feedback (`active:bg-amber-500/25`)
- Minimum height ensures 44px touch target
- `touch-manipulation` class (now built into Button component)

### Form Inputs

**Input Component:**
- Minimum height: `min-h-[44px] sm:h-12`
- Responsive padding: `px-3 sm:px-4 py-2.5 sm:py-2`
- Responsive text: `text-base sm:text-sm` (larger on mobile for readability)
- Always includes `touch-manipulation`

**Textarea Component:**
- Minimum height: `min-h-[120px] sm:min-h-[200px]` (more space on mobile)
- Same padding and text patterns as Input
- `touch-manipulation` included

**Form Layout:**
- Stacked on mobile, side-by-side on desktop
- Generous spacing: `space-y-4 sm:space-y-6 md:space-y-8`
- Labels: `text-sm sm:text-base`

### Typography Scale

**Mobile-First Typography:**
```css
h1: text-5xl sm:text-6xl md:text-7xl lg:text-8xl
h2: text-4xl sm:text-5xl md:text-6xl lg:text-7xl
h3: text-2xl sm:text-3xl md:text-4xl lg:text-5xl
h4: text-xl sm:text-2xl md:text-3xl
p:  text-base sm:text-lg md:text-xl
```

**Line Heights:**
- Headlines: `leading-[0.95]` or `leading-[1.05]`
- Body: `leading-[1.6] sm:leading-[1.7]`
- Tight: `leading-[1.1]` to `leading-[1.3]`

**Font Weights:**
- Headlines: `font-light` (not bold)
- Body: `font-light`
- Labels: `font-medium` or `font-normal`

### Spacing System

**Section Padding:**
- Mobile: `py-16 sm:py-20 md:py-24 lg:py-32`
- Tight: `py-12 sm:py-16 md:py-20`
- Loose: `py-20 sm:py-28 md:py-36 lg:py-48`

**Container Padding:**
- `px-4 sm:px-6 md:px-8 lg:px-8`
- Max-width: `max-w-4xl`, `max-w-6xl`, `max-w-7xl`

**Gap Spacing:**
- Grid gaps: `gap-4 sm:gap-6 md:gap-8 lg:gap-12`
- Flex gaps: `gap-3 sm:gap-4 md:gap-5`

**Margins:**
- Headline margins: `mb-4 sm:mb-6 md:mb-8`
- Paragraph margins: `mb-6 sm:mb-8 md:mb-10`
- Section margins: `mb-8 sm:mb-12 md:mb-16 lg:mb-24`

### Cards & Links

**Card Pattern:**
```tsx
<Link href="/path" className="block h-full touch-manipulation">
  <div className="relative h-full border border-gray-800/40 bg-gradient-to-b from-[#0a0e1a] to-[#0f1625] p-5 sm:p-6 md:p-8 lg:p-10 transition-all duration-200 active:scale-[0.98] hover:border-amber-500/40 hover:shadow-[0_0_30px_rgba(245,158,11,0.15)] flex flex-col">
    {/* Content */}
  </div>
</Link>
```

**Key Patterns:**
- `touch-manipulation` on Link wrapper
- `active:scale-[0.98]` for touch feedback
- Responsive padding: `p-5 sm:p-6 md:p-8 lg:p-10`
- Full height with flex column for equal card heights

---

## Layout Patterns

### Hero Sections

**Mobile-First Hero:**
```tsx
<section className="relative min-h-[85vh] sm:min-h-[90vh] md:min-h-screen flex items-center justify-center overflow-hidden pt-16 sm:pt-20 md:pt-0">
  <div className="container-responsive relative z-10 max-w-7xl">
    <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light tracking-[-0.02em] leading-[0.95] mb-6 sm:mb-8 text-white">
      Headline
    </h1>
    <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-[1.6] sm:leading-[1.7] font-light mb-8 sm:mb-12 px-4">
      Description
    </p>
    <div className="flex flex-col gap-3 sm:gap-4 md:gap-5 justify-center items-stretch sm:items-center px-4 w-full max-w-md sm:max-w-none mx-auto">
      {/* Stacked CTAs on mobile */}
    </div>
  </div>
</section>
```

**Key Patterns:**
- Minimum viewport height: `min-h-[85vh]` on mobile
- Padding top for mobile nav: `pt-16 sm:pt-20`
- Centered content with max-width constraints
- Stacked CTAs with full-width on mobile

### Grid Layouts

**Products/Services Grid:**
```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10 lg:gap-12">
  {/* Cards */}
</div>
```

**Key Patterns:**
- Single column on mobile
- Two columns on tablet (`md:`)
- Three columns on desktop (`lg:`)
- Responsive gaps increase with screen size

---

## Performance Optimizations

### Conditional Rendering

**Heavy Effects (3D, Complex Animations):**
```tsx
{/* Disable on mobile for performance */}
<div className="hidden md:block">
  {/* Heavy 3D or animation */}
</div>
```

**Example from Melon Scout Hero:**
```tsx
{/* Subtle Animated Scan Lines - Disabled on Mobile for Performance */}
<div className="absolute inset-0 opacity-[0.02] pointer-events-none hidden md:block">
  {/* Scan lines animation */}
</div>
```

### Image Optimization

**Next.js Image Component:**
```tsx
<Image
  src={imageSrc}
  alt="Description"
  fill
  className="object-cover"
  loading={index === 0 ? "eager" : "lazy"}
  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
  priority={index === 0} // Only first image
/>
```

**Key Patterns:**
- Lazy loading for below-fold images
- Responsive `sizes` attribute
- Priority only for hero images

### Animation Performance

**Reduced Motion:**
- Respect `prefers-reduced-motion` (not forced disable)
- Use `duration-200` instead of `duration-300`
- Conditional animations based on viewport

**Framer Motion:**
```tsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, margin: "-50px" }}
  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
>
```

---

## Accessibility Checklist

### Touch Targets
- ✅ All buttons minimum 44px × 44px
- ✅ Links have adequate padding
- ✅ Form inputs minimum 44px height
- ✅ `touch-manipulation` on all interactive elements

### Visual
- ✅ High contrast (amber-500 on dark backgrounds)
- ✅ Text readable in sunlight (large sizes, high contrast)
- ✅ Focus states visible (`focus-visible:ring-2 focus-visible:ring-amber-500`)
- ✅ No reliance on color alone (use icons, labels)

### Semantic HTML
- ✅ Proper heading hierarchy (h1 → h2 → h3)
- ✅ ARIA labels on icon-only buttons
- ✅ Form labels with `htmlFor` attributes
- ✅ `aria-required="true"` on required fields

### Keyboard Navigation
- ✅ Logical tab order
- ✅ Focus indicators visible
- ✅ Skip links for main content

---

## Common Mistakes to Avoid

### ❌ Don't:
1. **Design for desktop first** - Always start mobile
2. **Use fixed heights** - Use `min-h` instead
3. **Forget touch targets** - Always 44px minimum
4. **Disable animations entirely** - Respect `prefers-reduced-motion`
5. **Use 300ms transitions** - Use 200ms for snappier feel
6. **Hide critical UI in corners** - Keep in thumb zone
7. **Forget active states** - Add `active:` variants for touch feedback
8. **Use small text on mobile** - Minimum 16px (text-base)
9. **Forget `touch-manipulation`** - Now built into Button component
10. **Use desktop spacing on mobile** - Scale down appropriately

### ✅ Do:
1. **Test on real devices** - Not just browser dev tools
2. **Use responsive typography** - Scale with breakpoints
3. **Stack CTAs on mobile** - Side-by-side on desktop
4. **Add active states** - `active:scale-[0.98]` for feedback
5. **Conditional rendering** - Hide heavy effects on mobile
6. **Lazy load images** - Except above-fold
7. **Use semantic HTML** - Proper headings, labels, etc.
8. **Test with screen readers** - Ensure accessibility
9. **Optimize for 3G** - Assume slow connections
10. **Think thumb-zone** - Primary actions in reach

---

## Testing Checklist

### Mobile (360–430px viewport)
- [ ] All buttons ≥ 44px height
- [ ] Text readable without zooming
- [ ] CTAs in thumb-zone (not top corners)
- [ ] Forms stack vertically
- [ ] Images load appropriately
- [ ] No horizontal scrolling
- [ ] Touch feedback on all interactions
- [ ] Focus states visible

### Performance
- [ ] First Contentful Paint < 1.5s
- [ ] Time to Interactive < 3.5s
- [ ] No layout shift (CLS < 0.1)
- [ ] Images optimized and lazy-loaded
- [ ] Heavy animations disabled on mobile

### Accessibility
- [ ] WCAG AA contrast ratios
- [ ] Keyboard navigation works
- [ ] Screen reader friendly
- [ ] Focus indicators visible
- [ ] ARIA labels where needed

---

## Reference Implementation

The **Melon Scout page** (`/products/scout`) serves as the gold standard reference. Key files:

- `components/melon-scout-hero.tsx` - Hero section patterns
- `components/what-is-melon-scout.tsx` - Content section patterns
- `components/scout-cta-section.tsx` - CTA section patterns
- `app/products/[id]/page.tsx` - Full page composition

When in doubt, check these files for the established patterns.

---

## Quick Reference

### Button Sizes
- Default: `min-h-[44px] px-4 sm:px-6 py-2.5 sm:py-3`
- Large: `min-h-[52px] sm:min-h-[56px] px-6 sm:px-8 md:px-10 lg:px-12 py-4 sm:py-5 md:py-6`

### Typography
- H1: `text-5xl sm:text-6xl md:text-7xl lg:text-8xl`
- H2: `text-4xl sm:text-5xl md:text-6xl lg:text-7xl`
- Body: `text-base sm:text-lg md:text-xl`

### Spacing
- Section: `py-16 sm:py-20 md:py-24 lg:py-32`
- Container: `px-4 sm:px-6 md:px-8`
- Gaps: `gap-4 sm:gap-6 md:gap-8`

### Transitions
- Standard: `duration-200`
- Never: `duration-300` (too slow for mobile)

---

*Last updated: Based on Melon Scout page patterns*




