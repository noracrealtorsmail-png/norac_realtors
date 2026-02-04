# Implementation Plan - Norac Redesign

## Phase 1: Project Initialization & Setup
- [ ] Initialize Next.js project in `frontend` directory.
- [ ] Install dependencies:
    -   `tailwindcss`, `postcss`, `autoprefixer` (Standard)
    -   `framer-motion` (Animations)
    -   `three`, `@react-three/fiber`, `@react-three/drei` (3D Logo)
    -   `lucide-react` (Icons)
    -   `next-themes` (Dark/Light mode)
    -   `clsx`, `tailwind-merge` (Utils)
- [ ] Configure Tailwind CSS with brand colors (`#8B6BC2`) and fonts.
- [ ] Setup ThemeProvider for Dark/Light mode.

## Phase 2: Core UI Components & Design System
- [ ] Create `components/ui` directory.
- [ ] Implement `Button`, `Card`, `Input` base components with premium styling.
- [ ] Create `Layout` component with `TopNav` and `SideNav`.
    -   **TopNav**: Transparent/Glassmorphic, responsive.
    -   **SideNav**: Hidden on mobile/toggleable, sleek design.
- [ ] Implement `AnimatedGradientBackground` component.

## Phase 3: Hero Section (The "Wow" Factor)
- [ ] Create `NoracParallax` component.
    -   Integrate the provided parallax logic.
    -   Add the 3D Logo Viewer using `@react-three/fiber`.
    -   Load `abstract+logo+3d+model.glb`.
    -   Implement the "Luxurious Word Carousel".
    -   Ensure "Super Responsiveness".

## Phase 4: Landing Page Structure
- [ ] Assemble the Landing Page (`page.tsx`).
- [ ] Add the second Parallax Scroll Effect section (post-hero).
- [ ] Implement placeholder sections for "About", "Services", "Featured Listings" to show structure.

## Phase 5: Polish & Optimization
- [ ] Verify Mobile Responsiveness.
- [ ] Check Dark/Light mode toggling.
- [ ] Optimize 3D model loading (Suspense, Preload).
- [ ] SEO Meta tags setup.

## Phase 6: Backend & Database (Future Steps)
- [ ] Initialize Django Project.
- [ ] Setup PostgreSQL.
- [ ] Define Models (Properties, Users, Inquiries).
