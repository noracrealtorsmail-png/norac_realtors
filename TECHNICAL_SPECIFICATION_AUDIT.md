# Norac Realtors: Full Project Analysis & Technical Audit

This document provides a comprehensive audit of every page and feature within the Norac Realtors platform, detailing the current frontend status, missing functionality, and backend/API requirements for full operational capability.

---

## 1. Discovery & Marketplace (Public Facing)

| Page Route | Description | Current Status (Frontend) | Missing Features | Backend / API Requirements |
| :--- | :--- | :--- | :--- | :--- |
| `/` | Landing/Hero | Fully polished parallax UI. | Dynamic featured property data. | `GET /api/home/featured` |
| `/buy` | Sales Listings | Grid UI with mock data. | Live filtering, sorting, pagination. | `GET /api/listings?type=sale` |
| `/rent` | Rental Listings | Grid UI with mock data. | Lease duration filtering (Short/Long). | `GET /api/listings?type=rent` |
| `/buy/[id]` | Property Detail | Cinematic gallery & sidebar. | Inquiry form logic, booking calendar. | `GET /api/listings/:id`, `POST /api/inquiries` |
| `/developments`| Project Units | Grid of off-plan projects. | Unit availability tracker, floor plans. | `GET /api/developments` |
| `/services` | Expert Services | Descriptive grid of offerings. | Lead capture per service type. | `POST /api/leads/service` |

---

## 2. Intelligence & Specialized Tools

| Page Route | Description | Current Status (Frontend) | Missing Features | Backend / API Requirements |
| :--- | :--- | :--- | :--- | :--- |
| `/calculators/mortgage` | Finance Tool | Functional calculator UI. | Save to profile, PDF export. | `POST /api/user/saved-calcs` |
| `/guides` | Area Insights | Premium neighborhood profiles. | Recharts integration for price trends. | `GET /api/areas/analytics` |
| `/agencies` | Agency Directory | Listing of verified firms. | Agency profile sub-pages. | `GET /api/directory/agencies` |
| `/agents` | Agent Directory | Individual broker profiles. | Direct "Schedule Call" logic. | `GET /api/directory/agents` |

---

## 3. Command Panels (Authenticated Hubs)

### **A. User Dashboard (`/user/*`)**
*Target: The Home Buyer/Renter.*

- **Current Status**: Shell UI with `StatCard` and mock activity.
- **Missing Front-end**: Real-time favorite updates, Inquiry status tracker.
- **Backend/API Requirements**:
    - `GET /api/user/favorites`: List of saved property IDs.
    - `GET /api/user/activity`: Recent search & viewing history.
    - `PUT /api/user/settings`: Personal info and notification toggles.

### **B. Realtor Panel (`/realtor/*`)**
*Target: The Property Agent/Agency.*

- **Current Status**: Basic shell.
- **Missing Front-end**: Multi-step property upload form, CRM Lead pipeline (Kanban style).
- **Backend/API Requirements**:
    - `POST /api/listings/create`: Multipart form data (Images + Metadata).
    - `GET /api/realtor/leads`: List of inquiries for their properties.
    - `PATCH /api/realtor/lead/:id`: Update lead status (New -> Viewing -> Closed).

### **C. Admin Control Center (`/admin/*`)**
*Target: Platform Staff.*

- **Current Status**: System health UI.
- **Missing Front-end**: Listing approval queue, User multi-tier moderation.
- **Backend/API Requirements**:
    - `GET /api/admin/metrics`: Aggregated platform stats.
    - `PATCH /api/admin/verify/:id`: Logic to approve Agents/Agencies.
    - `GET /api/admin/logs`: Access to security and audit trails.

---

## 4. Authentication & Security Layer

| Page Route | Description | Backend / API Requirements |
| :--- | :--- | :--- |
| `/auth/login` | JWT/Cookie Auth | `POST /api/auth/login` |
| `/auth/signup` | Role-based Registration | `POST /api/auth/register` (Buyer vs Realtor role) |
| `/auth/reset` | Password Recovery | `POST /api/auth/recover` & `POST /api/auth/verify-otp` |

---

## 5. Cross-Page Shared Functionality

These features are core "Engine Services" that serve multiple pages:

1.  **Identity Service**: Shared by `/auth`, `/user`, `/realtor`, and `/admin`. Manages sessions, roles, and permissions.
2.  **Inquiry Engine**: Shared by `/buy/[id]` (sender), `/user/inquiries` (tracker), and `/realtor/leads` (receiver).
3.  **Analytics Service**: Powers `/guides` (Market Trends), `/admin` (Platform stats), and `/realtor` (Engagement metrics).
4.  **Property Management Engine**: Shared by `/realtor` (creator) and `/admin` (moderator). Handles image optimized hosting and search indexing.

---

## 6. Implementation Roadmap

1.  **Phase 1 (Database)**: Initialize PostgreSQL/Prisma schema for all entities defined above.
2.  **Phase 2 (Auth)**: Connect the existing Login/Signup UI to a NextAuth.js or custom JWT provider.
3.  **Phase 3 (CRUD)**: Implement the Realtor property upload and the User favorite system.
4.  **Phase 4 (Live Data)**: Replace all mock arrays in Discovery pages with SWR/React Query hooks.
