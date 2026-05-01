# Portfolio Design System - Shilo Jeyaraj

This document defines the design system, component patterns, and coding conventions for this portfolio website.

## Design Principles

**Editorial & Refined Aesthetic**
- Heavy use of whitespace and generous spacing
- Serif + sans-serif contrast creates hierarchy
- Minimal color palette with strategic accent usage
- No heavy shadows or gradients - keep it clean
- Typography does the heavy lifting

## Color System

```
Background: #fafaf9 (warm off-white)
Primary Text: #111 (near-black)
Secondary Text: #888 (medium gray)
Accent Color: #C0634A (terracotta/rust)
Border: #e5e5e5 (light gray)
Card Background: #ffffff (white)
```

**Color Usage Rules:**
- Use terracotta (#C0634A) sparingly for CTAs, italic accent text, and hover states
- Never use it for body text or backgrounds
- Gray (#888) for labels, metadata, subtitles, and secondary text
- White cards on off-white background for subtle depth

## Typography

**Font Pairing:**
- Display/Headings: `Playfair Display, serif`
- Body/UI: `Inter, sans-serif`

**Type Scale:**
- Hero headline: 72px
- Section headings: 48px  
- Card titles: 36px (modals), default (cards)
- Body text: 16px (1rem)
- Small text/metadata: 12px
- Labels: 10px uppercase with letter-spacing

**Font Import Location:**
- Fonts are imported via `next/font/google` in `app/layout.tsx`
- Variables exposed as `--font-display` (Playfair Display) and `--font-sans` (Inter)

## Layout System

**Container:**
- Max width: 1200px
- Centered with `mx-auto`
- Horizontal padding: 2rem (px-8)

**Spacing:**
- Section vertical padding: py-20
- Card padding: p-6
- Component gaps: gap-6 (for grids), gap-4 (for inline elements)

**Grid Patterns:**
- Experience cards: 4 columns (`grid-cols-4`)
- Project cards: 3 columns (`grid-cols-3`)
- Research cards: 3 columns (`grid-cols-3`)
- Hero: 2 columns (`grid-cols-2`)

## Component Patterns

### Card Style
```tsx
className="bg-white rounded-xl border"
style={{ 
  borderColor: '#e5e5e5', 
  boxShadow: '0 1px 3px rgba(0,0,0,0.05)' 
}}
```

### Section Header Pattern
```tsx
<h2 style={{
  fontFamily: 'Playfair Display, serif',
  fontSize: '48px',
  color: '#111'
}}>
  Section Title
</h2>
<p style={{ color: '#888' }}>
  Subtitle description
</p>
```

### Tags/Pills
```tsx
<span
  className="px-3 py-1 rounded-full text-xs"
  style={{
    backgroundColor: '#f5f5f5',
    color: '#555'
  }}
>
  Tag Name
</span>
```

### Hover Effects
- Cards: `hover:shadow-lg transition-shadow`
- Images: `group-hover:scale-105 transition-transform duration-300`
- Links: `hover:text-[#C0634A] transition-colors`
- Social icons: `hover:opacity-70 transition-opacity`

### Metadata Style
```tsx
<div 
  className="text-xs" 
  style={{ color: '#888', letterSpacing: '0.05em' }}
>
  CATEGORY · DATE
</div>
```

## File Structure (Next.js App Router)

```
app/
  page.tsx          — Main entry point; all components live here as named functions
  layout.tsx        — Fonts (Playfair Display + Inter via next/font/google), metadata
  globals.css       — Tailwind base + CSS custom properties + scrollbar/selection styles
  api/
    chat/route.ts   — POST endpoint for Ask Shilo.ai (Anthropic SDK, SSE streaming, rate limit)
public/
  me/               — Portrait and company logos (friedmannlogo.png, Percievable design logo.jpg, etc.)
  projectimages/    — Project screenshots and logos
tailwind.config.js  — Font families, animation keyframes, color tokens
```

**Important Next.js adaptations from the Figma spec:**
- All components are functions in `app/page.tsx`, not separate files
- Fonts imported via `next/font/google` in `app/layout.tsx` (not `src/styles/fonts.css`)
- Images use Next.js `Image` component (not `ImageWithFallback`)
- Tailwind v3 (not v4); color values use inline styles or arbitrary Tailwind classes
- `max-w-[1200px] mx-auto px-8` matches the 1200px container spec

## Component-Specific Rules

### Navigation
**Layout:**
```tsx
<nav className="w-full max-w-[1200px] mx-auto px-8 py-6 flex items-center justify-between">
  <div>Logo (Playfair Display serif)</div>
  <div className="flex items-center gap-8">
    <div>Links with · separators (gray #888)</div>
    <button>CTA button (terracotta border, pill shape)</button>
  </div>
</nav>
```
- Fixed to top of page, full width
- Logo left-aligned, clickable
- Nav links: About · Experience · Projects · Research · Contact
- Separator character: `·` (middle dot, not period)
- "Ask Shilo.ai ✦" button: `border-2` terracotta, `rounded-full`, `px-4 py-2`

### Hero Section
**Structure:**
```tsx
<section className="w-full max-w-[1200px] mx-auto px-8 py-20">
  <div className="grid grid-cols-2 gap-16">
    <div className="flex flex-col justify-center">
      {/* Left column content */}
    </div>
    <div className="flex items-center justify-center">
      {/* Right column - portrait image */}
    </div>
  </div>
</section>
```

**Left Column (in order):**
1. Small caps label: `text-xs tracking-[0.2em]` gray, all-caps separated by ·
2. Heading: 72px Playfair Display with mixed styling:
   - "Hi, I'm Shilo —" (black, regular)
   - "a mechatronics engineer" (terracotta, italic) 
   - "building at the intersection of AI and full-stack." (black, regular)
3. Body paragraph: gray (#888), 16px, line-height 1.6
4. Social icons row: GitHub, Linkedin, Mail from lucide-react
   - Size: 24px, gray (#888)
   - Hover: opacity-70
   - Links with `target="_blank" rel="noopener noreferrer"`

**Right Column:**
- Portrait image: `h-[500px]` tall, `rounded-xl`, object-cover
- Use ImageWithFallback component
- Centers vertically with parent

**DO NOT include:**
- "Now/Exploring/Fueled by" metadata section
- Button CTAs (LinkedIn, See work) - replaced with icon links

### Experience Cards
**Grid:** `grid-cols-4 gap-6`

**Card Structure:**
```tsx
<div className="bg-white rounded-xl p-6 border" 
     style={{ borderColor: '#e5e5e5', boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}>
  {/* Colored header with initial */}
  <div className="w-full h-40 rounded-lg mb-4 flex items-center justify-center"
       style={{ backgroundColor: exp.color }}>
    <span style={{ 
      fontFamily: 'Playfair Display, serif',
      fontSize: '80px',
      color: 'rgba(255,255,255,0.3)',
      fontWeight: '600'
    }}>
      {initial}
    </span>
  </div>
  
  {/* Metadata */}
  <div className="text-xs mb-2" style={{ color: '#888', letterSpacing: '0.05em' }}>
    INTERNSHIP · JAN 2026 – PRESENT
  </div>
  
  {/* Company and role */}
  <h3 className="mb-1" style={{ color: '#111' }}>{company}</h3>
  <p className="text-sm" style={{ color: '#888' }}>{role}</p>
</div>
```

**Colors for initials:** Use muted/desaturated colors
- #6B8E9F (steel blue)
- #2C3E50 (navy)
- #5A7C5F (forest green)
- #6B5B4F (dark brown)

**Format:** Company name first letter as large faded initial on colored background

### Project Cards
**Grid:** `grid-cols-3 gap-6`

**Card Structure (simplified, no descriptions):**
```tsx
<div onClick={() => setSelectedProject(project)}
     className="bg-white rounded-xl overflow-hidden border cursor-pointer hover:shadow-lg transition-shadow group">
  <div className="relative overflow-hidden">
    <ImageWithFallback 
      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
    />
  </div>
  
  <div className="p-6">
    <h3 className="mb-4 group-hover:text-[#C0634A] transition-colors">
      {title}
    </h3>
    
    {/* First 3 tags + count */}
    <div className="flex flex-wrap gap-2">
      {tags.slice(0, 3).map(tag => <Tag />)}
      {tags.length > 3 && <span>+{tags.length - 3}</span>}
    </div>
  </div>
</div>
```

**Interactive Behavior:**
- Click card → opens ProjectModal
- Hover → lift shadow (`hover:shadow-lg`)
- Hover → scale image 5% (`group-hover:scale-105`)
- Hover → title color changes to terracotta
- NO action buttons on cards (moved to modal)
- NO descriptions on cards (only in modal)

**State Management:**
```tsx
const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
```

### Project Modal
**Trigger:** Click any project card

**Structure:**
```tsx
<div className="fixed inset-0 z-50 flex items-center justify-center p-8"
     style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}
     onClick={onClose}>
  <div className="bg-white rounded-2xl overflow-hidden max-w-2xl w-full"
       style={{ boxShadow: '0 20px 60px rgba(0,0,0,0.3)' }}
       onClick={(e) => e.stopPropagation()}>
    
    {/* Image with close button */}
    <div className="relative">
      <ImageWithFallback className="w-full h-64 object-cover" />
      <button className="absolute top-4 right-4 p-2 rounded-full bg-white">
        <X size={20} />
      </button>
    </div>
    
    {/* Content */}
    <div className="p-8">
      <div className="text-xs mb-2">{category.toUpperCase()}</div>
      <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '32px' }}>
        {title}
      </h2>
      <p>{fullDescription}</p>
      <a href={website}>Visit website →</a>
      <div className="flex flex-wrap gap-2 pt-4 border-t">
        {/* ALL tags shown here */}
      </div>
    </div>
  </div>
</div>
```

**Close Behavior:**
- Click overlay background → close
- Click X button → close
- Click modal content → do nothing (stopPropagation)
- ESC key → not implemented (optional enhancement)

### Research Cards
**Grid:** `grid-cols-3 gap-6`

**Card Structure:**
```tsx
<a href="#" className="bg-white rounded-xl overflow-hidden border hover:shadow-lg transition-shadow cursor-pointer group">
  <div className="relative overflow-hidden">
    <ImageWithFallback 
      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
    />
    {/* Category badge overlaid on image */}
    <div className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs"
         style={{ backgroundColor: 'rgba(255,255,255,0.9)', color: '#555' }}>
      {category}
    </div>
  </div>
  
  <div className="p-6">
    {/* Date and read time */}
    <div className="flex items-center gap-2 text-xs mb-3" style={{ color: '#888' }}>
      <span>{date}</span>
      <span>·</span>
      <span>{readTime}</span>
    </div>
    
    <h3 className="mb-3 group-hover:text-[#C0634A] transition-colors">
      {title}
    </h3>
    
    <p className="text-sm" style={{ color: '#888', lineHeight: '1.5' }}>
      {excerpt}
    </p>
  </div>
</a>
```

**Hover Effects:**
- Image scales 5%
- Title changes to terracotta
- Card shadow lifts
- Whole card is clickable link

### Footer
**Structure:**
```tsx
<footer className="w-full max-w-[1200px] mx-auto px-8 py-16 mt-20 border-t">
  <div className="grid grid-cols-2 gap-16">
    <div>
      <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '36px' }}>
        Let's build something
      </h3>
      <p>{description}</p>
    </div>
    
    <div className="flex flex-col justify-center">
      <a href="mailto:" style={{ color: '#C0634A' }}>{email}</a>
      <div className="flex gap-4 text-sm">
        LinkedIn · GitHub · Twitter
      </div>
    </div>
  </div>
  
  <div className="mt-16 pt-8 border-t text-sm text-center">
    © 2026 Shilo Jeyaraj. Designed with intention.
  </div>
</footer>
```

## Interactive Patterns

**Modal Overlay:**
```tsx
// Background
style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}

// Modal card
className="bg-white rounded-2xl overflow-hidden max-w-2xl"
style={{ boxShadow: '0 20px 60px rgba(0,0,0,0.3)' }}
```

**Click Handlers:**
- Stop propagation on modal content to prevent closing when clicking inside
- Close on overlay click or X button

## Images

**New Images:**
- Use Next.js `Image` component from `'next/image'`
- Always provide `alt`, `fill` or `width`/`height`, and `sizes` props
- Local assets live in `public/me/` (portraits, logos) and `public/projectimages/`
- Use `object-contain` for logos on colored backgrounds; `object-cover` for photos

**Import Pattern:**
```tsx
import Image from 'next/image';
<Image src="/me/friedmannlogo.png" alt="Friedmann AI" fill className="object-contain p-5" sizes="300px" />
```

## NPM Packages

**Installed:**
- `lucide-react` - for icons (Github, Linkedin, Mail, X)

**Usage:**
```tsx
import { Github, Linkedin, Mail } from 'lucide-react';
<Github size={24} />
```

## Tailwind Guidance

- Using Tailwind v3 (configured in `tailwind.config.js`)
- Apply inline Tailwind classes for layout and spacing
- Use inline styles for colors and fonts to maintain exact design system values
- `tailwind.config.js` already exists — extend it rather than replacing it

## Page Structure & Flow

**Overall Layout:**
```tsx
<div className="min-h-screen w-full" 
     style={{ backgroundColor: '#fafaf9', fontFamily: 'Inter, sans-serif', color: '#111' }}>
  <Navigation />
  <Hero />
  <Experiences />
  <Projects />
  <Research />
  <Footer />
</div>
```

**Section Order (fixed, do not reorder):**
1. Navigation (sticky/fixed at top)
2. Hero (first section, largest vertical space)
3. Experiences (4-column grid)
4. Projects (3-column grid with modal)
5. Research (3-column grid, blog-style)
6. Footer (2-column, centered)

**Scroll Behavior:**
- Smooth scroll to anchors: `#experience`, `#projects`, `#research`, `#contact`
- Nav links use `href="#section-id"`

## Data Structure Patterns

**Experience Data:**
```tsx
{
  initial: 'A',           // First letter for background
  color: '#6B8E9F',       // Muted background color
  metadata: 'INTERNSHIP · JAN 2026 – PRESENT',  // All caps with · separator
  company: 'Company Name',
  role: 'Job Title'
}
```

**Project Data:**
```tsx
{
  title: 'Project Name',
  description: 'Full detailed description for modal (2-3 sentences)',
  image: 'https://...',
  tags: ['Tech1', 'Tech2', 'Tech3', 'Tech4', 'Tech5'],  // Full array
  category: 'Category Name',  // For modal header
  website: 'https://...'      // Optional
}
```

**Research Post Data:**
```tsx
{
  title: 'Post Title',
  date: 'Month YYYY',        // e.g., "March 2026"
  readTime: 'X min read',    // e.g., "12 min read"
  image: 'https://...',
  category: 'Category',      // Badge on image
  excerpt: '1-2 sentence summary'
}
```

## State Management

**Modal State (Projects):**
```tsx
const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

// Open modal
onClick={() => setSelectedProject(project)}

// Close modal
{selectedProject && <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />}
```

**Component Communication:**
- Props down, events up
- Modal receives `project` object and `onClose` callback
- No global state needed (all local `useState`)

## Animation & Transitions

**Card Hover (standard):**
```tsx
className="hover:shadow-lg transition-shadow"
```

**Image Zoom on Hover:**
```tsx
// Parent with overflow hidden
<div className="relative overflow-hidden">
  {/* Image with group hover */}
  <ImageWithFallback 
    className="group-hover:scale-105 transition-transform duration-300"
  />
</div>
```

**Link Color Change:**
```tsx
className="hover:text-[#C0634A] transition-colors"
```

**Icon Opacity:**
```tsx
className="hover:opacity-70 transition-opacity"
```

**Modal Entrance:**
- No animation on entrance (appears immediately)
- Overlay: `rgba(0, 0, 0, 0.6)` solid color, no fade-in
- Keep it simple and fast

## Responsive Behavior

**Grid Breakpoints:**
- Desktop (default): `grid-cols-2`, `grid-cols-3`, `grid-cols-4`
- Tablet: Should stack to `grid-cols-2` or `grid-cols-1`
- Mobile: All grids become `grid-cols-1`

**Image Heights:**
- Hero portrait: `h-[500px]` (fixed)
- Project cards: `h-48` (192px)
- Research cards: `h-48` (192px)
- Experience headers: `h-40` (160px)

**Container Behavior:**
- Max-width: 1200px at all sizes
- Padding: `px-8` (2rem) maintains breathing room on mobile

## React Patterns

- Use functional components with TypeScript
- Always provide `key` prop for mapped elements (use index if no unique ID)
- Use `useState` for local component state (modals, selections)
- File naming: PascalCase for components (Navigation.tsx)
- Default exports for all components
- Import components with: `import ComponentName from './components/ComponentName'`

## Type Safety

**TypeScript Patterns:**
```tsx
// Modal props interface
interface ProjectModalProps {
  project: {
    title: string;
    description: string;
    image: string;
    tags: string[];
    category: string;
    website?: string;  // Optional
  };
  onClose: () => void;
}

// Component with typed props
export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  // ...
}
```

**Array Methods:**
```tsx
// Always provide key
{projects.map((project, index) => (
  <div key={index}>...</div>
))}

// Slice for limited display
{tags.slice(0, 3).map(...)}

// Conditional rendering
{tags.length > 3 && <span>+{tags.length - 3}</span>}
```

## Never Do

- ❌ Create standalone HTML files
- ❌ Add font imports outside of `/src/styles/fonts.css`
- ❌ Use heavy shadows or gradients
- ❌ Add features or abstractions beyond requirements
- ❌ Create planning or decision documents
- ❌ Add comments unless WHY is non-obvious
- ❌ Use emojis unless explicitly requested
- ❌ Modify protected files in `/src/styles/theme.css` without permission

## Common Tasks & How to Approach Them

### Adding a New Section
1. Create component in `src/app/components/NewSection.tsx`
2. Follow section header pattern (48px Playfair + gray subtitle)
3. Use standard container: `max-w-[1200px] mx-auto px-8 py-20`
4. Choose appropriate grid: `grid-cols-3` or `grid-cols-4`
5. Import and add to App.tsx in correct order
6. Add nav link if needed (with · separator)

### Adding New Content
**Projects:**
- Add object to `projects` array in Projects.tsx
- Include all fields: title, description, image, tags (full array), category, website
- Use Unsplash for images: `https://images.unsplash.com/photo-[id]?w=400&h=250&fit=crop`
- Modal automatically handles the new project

**Experience:**
- Add to `experiences` array in Experiences.tsx
- Pick muted color for initial background
- Format metadata: `UPPERCASE · DATE RANGE`
- Company name first

**Research:**
- Add to `researchPosts` array in Research.tsx
- Format date: "Month YYYY"
- Format read time: "X min read"
- Keep excerpt to 1-2 sentences

### Modifying Colors
- All colors defined in "Color System" section
- Use inline styles for colors, not Tailwind classes
- Terracotta (#C0634A) only for: CTA buttons, italic heading text, link hover, research title hover
- Never use terracotta for backgrounds or body text

### Adding Interactivity
**Click handlers:**
```tsx
onClick={() => setSelectedItem(item)}
```

**Close handlers:**
```tsx
onClick={onClose}  // On overlay
onClick={(e) => e.stopPropagation()}  // On modal content
```

**Links:**
```tsx
// External links
<a href="https://..." target="_blank" rel="noopener noreferrer">

// Internal anchors
<a href="#section-id">
```

### Updating Typography
- DO NOT change font sizes without good reason
- Heading sizes are fixed: 72px (hero), 48px (sections), 36px (modal), default (cards)
- Body text: always 16px (1rem)
- Metadata: always 12px with `letterSpacing: '0.05em'` if uppercase

## Content Guidelines

**Writing Style:**
- Professional but approachable
- Focus on impact and outcomes
- Use active voice
- Be specific (numbers, technologies, results)

**Image Selection (Unsplash):**
- Use technical/abstract images for projects (circuits, code, robotics)
- Use professional/atmospheric images for research posts
- Prefer images with negative space for text overlays
- Maintain consistent color temperature (cool/muted tones)

**Tag Selection:**
- Limit to 5-7 tags per project
- Show first 3 on card, rest in modal
- Order by importance/relevance
- Use proper casing: "PyTorch" not "pytorch", "React" not "react"

## Testing Checklist

Before considering a feature complete:
- ✅ Hover states work on all interactive elements
- ✅ Modal opens and closes correctly
- ✅ Images load with fallback handling
- ✅ Nav links scroll to correct sections
- ✅ All grids maintain proper spacing
- ✅ Colors match design system exactly
- ✅ Typography follows scale (check font sizes)
- ✅ Click handlers don't have unexpected behavior
- ✅ No console errors
- ✅ Content doesn't overflow containers

## Debugging Common Issues

**Modal won't close when clicking inside:**
- Add `onClick={(e) => e.stopPropagation()}` to modal content container

**Images not loading:**
- Verify using ImageWithFallback component
- Check Unsplash URL format
- Ensure src prop is passed correctly

**Hover effects not working:**
- Check for `group` class on parent container
- Verify `group-hover:` prefix on child elements
- Ensure transition classes are present

**Grid not displaying correctly:**
- Verify container has `grid` class
- Check `grid-cols-X` matches design (2, 3, or 4)
- Ensure `gap-6` is present

**Colors look wrong:**
- Check using exact hex values from Color System
- Verify using inline styles, not Tailwind color classes
- Confirm no conflicting CSS from theme.css

## Always Do

- ✅ Edit `app/page.tsx` for all component changes
- ✅ Use exact color values from the design system (#C0634A accent, #111 text, #888 secondary)
- ✅ Maintain generous whitespace (py-20 for sections)
- ✅ Use Playfair Display for headings, Inter for body
- ✅ Keep the editorial, refined aesthetic
- ✅ Test interactive features (modals, hovers, clicks)
- ✅ Use Next.js `Image` component for all images
- ✅ Include proper TypeScript types
- ✅ Add transition classes for interactive elements
- ✅ `w-full max-w-[1200px] mx-auto px-8` for all section containers
