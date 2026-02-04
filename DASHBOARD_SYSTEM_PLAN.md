# Dashboard System Implementation Plan: Norac Realtors

This document outlines the architecture, design, and features for the multi-role management panels (User, Realtor, and Admin) for the Norac Realtors platform.

## 1. Role-Based Panel Architectures

### **A. User Panel (Universal Base)**
*Core functionality accessible to all account holders.*
- **Overview Dashboard**: High-level summary of active inquiries and recently viewed properties.
- **Inquiry & Order Tracker**: Status updates for property viewings, service bookings, and financial inquiries.
- **Curated Favorites**: A high-visual gallery of saved listings with price change alerts.
- **Smart Profile**: Management of personal preferences, notification settings, and security.

### **B. Realtor Panel (Professional Suite)**
*Advanced tools for property management and lead conversion.*
- **Performance Analytics**: Visual data tracking listing engagement, click-through rates, and inquiry volume.
- **Listing Command Center**: Professional CRUD interface for property uploads, featuring "Premium" and "Featured" status toggles.
- **Lead Pipeline (CRM)**: A visual tracking system for potential buyers (New -> Contacted -> Viewing -> Closing).
- **Communication Hub**: Centralized management for client messages and tour scheduling.

### **C. Admin Panel (Global Controller)**
*High-level platform governance and oversight.*
- **Platform Health Dashboard**: Aggregated data on total users, revenue/lead growth, and system performance.
- **Entity Management**: Verification and moderation of Realtor accounts and user credentials.
- **Quality Assurance Queue**: Review and approval system for new property listings to ensure brand consistency.
- **Global Config**: Management of site-wide promotions, dynamic banners, and system-wide settings.

---

## 2. Design Ethos & UX Standards

### **Visual Aesthetics**
- **Glassmorphism**: Continued use of semi-transparent backgrounds (`bg-card/50`), heavy backdrop blurs, and thin borders.
- **Dynamic Theming**: Automatic adaptation to Light/Dark modes with refined accent colors.
- **Premium Motion**: use of `Framer Motion` for:
    - Sidebar transitions (Slide/Spring).
    - Page entrance animations (Staggered fade-ins).
    - Micro-interactions on buttons (Glow/Scale).

### **Interface Layout**
- **Responsive Shell**: A persistent collapsible sidebar on desktop that transforms into a gesture-based bottom bar or overlay on mobile.
- **Action-Oriented Header**: Sticky top bar with global search, role-switching (for admins), and a notification "pulse" system.

---

## 3. Technical Strategy

### **Framework & Tools**
- **Routing**: Next.js App Router for role-nested directory structures.
- **State Management**: React Context or Zustand for cross-panel user state.
- **Data Visualization**: `Recharts` for high-performance, interactive dashboard graphs.

### **Implementation Phasing**
1. **Phase 1 (Shell)**: Implementation of the `DashboardLayout` with the premium responsive sidebar.
2. **Phase 2 (User)**: Building the universal components (Favorites, Inquiries) that serve as the foundation.
3. **Phase 3 (Realtor/Admin)**: Building specialized data-heavy views and moderation tools.

---

## 4. Directory Structure
```text
/app/
  └── (dashboard)/
      ├── layout.tsx         # Shared premium shell
      ├── user/              # User-specific routes
      ├── realtor/           # Realtor-specific routes
      └── admin/             # Administrator routes
/components/dashboard/
  ├── sidebar/               # Role-aware navigation components
  ├── data-viz/              # Recharts implementations
  ├── shared/                # Stat cards, List items, Form skeletons
  └── actions/               # Status badges and action triggers
```
