# MovieHub – Web-Based Movie Booking System

[![Next.js](https://img.shields.io/badge/Next.js-14-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.0-38B2AC?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
[![Prisma](https://img.shields.io/badge/Prisma-ORM-2D3748?style=flat-square&logo=prisma)](https://www.prisma.io/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-15-336791?style=flat-square&logo=postgresql)](https://www.postgresql.org/)

A full-stack, web-based movie booking system that enables users to seamlessly browse movies, select seats in real-time, process secure mock payments, and receive booking confirmations—all without requiring an account. 

It also includes a powerful administrative dashboard featuring Role-Based Access Control (RBAC) to manage schedules, movies, and staff permissions. Built with a focus on scalability, security, and exceptional user experience.

🔗 **[Live Demo](https://movie-hub-ten-beta.vercel.app/)**

---

## Overview

MovieHub simulates a real-world cinema ecosystem. This project was engineered to strengthen full-stack development skills and demonstrate practical experience with modern web application architectures, robust database relations, and clean UI/UX design patterns.

## Screenshots

### Home Page
<img width="1266" height="595" alt="Screenshot 2026-06-11 at 00 17 08" src="https://github.com/user-attachments/assets/4ff7d853-2c17-45fd-8616-b3573ea6ee37" />

### To book movie
<img width="782" height="544" alt="Screenshot 2026-06-11 at 00 17 53" src="https://github.com/user-attachments/assets/8479901e-2186-40db-b2ff-0a934a9a5e4d" />

### Movie Selection
<img width="768" height="515" alt="Screenshot 2026-06-11 at 00 19 05" src="https://github.com/user-attachments/assets/b22f0d59-5807-4d21-ac9c-23c0e88f4602" />

### Show Time Selection
<img width="768" height="515" alt="Screenshot 2026-06-11 at 00 20 08" src="https://github.com/user-attachments/assets/544e8258-d92b-47e6-b68a-4da3b2dc6ffa" />

### Seat Selection
<img width="768" height="515" alt="Screenshot 2026-06-11 at 00 20 37" src="https://github.com/user-attachments/assets/b9f5555f-0e92-4aa4-af79-0cdb1f4f6a67" />

### Confirm Checkout
<img width="768" height="515" alt="Screenshot 2026-06-11 at 00 20 57" src="https://github.com/user-attachments/assets/6c6ed776-e9d7-47b6-8642-3182352795b0" />

### Payment Page
<img width="768" height="515" alt="Screenshot 2026-06-11 at 00 21 28" src="https://github.com/user-attachments/assets/be356106-bda3-4571-9c1c-3d6c1aec636d" />

<img width="768" height="515" alt="Screenshot 2026-06-11 at 00 21 56" src="https://github.com/user-attachments/assets/f18c60b3-6852-48dd-a0d8-fe7919cb634e" />

### Key Highlights
* **Frictionless Checkout:** Seamless guest ticket booking workflow.
* **Interactive UI:** Dynamic seat map configuration with variable tier pricing.
* **Enterprise Administration:** Granular back-office management tools using Role-Based Access Control (RBAC).

---

## Features

### Customer Experience
* **Browse & Filter:** Explore current and upcoming movies, showtimes, and rich metadata descriptions.
* **Interactive Seating:** Visually select seats with real-time dynamic pricing updates based on seat tiers.
* **Guest Checkout:** Rapid booking pipeline without mandatory user account creation.
* **Automated Confirmations:** Instant email notifications with transactional booking receipts.
* **Responsive Layout:** Fully optimized UX across desktop, tablet, and mobile displays.

### Admin & Staff Dashboard
* **Dashboard Overview:** High-level metrics tracking sales, active bookings, and popular showtimes.
* **Movie Management:** Full CRUD operations for updating, adding, and removing movie listings.
* **Showtime Management:** Dynamic scheduling engine to link movies, rooms, and times.
* **Booking Management:** Real-time logging, cancellation, and searching of guest receipts.
* **Staff & Role Management:** Access control with strict data boundaries based on assigned permissions (RBAC).
* **Pricing Configuration:** Control seat multipliers and base pricing structures on the fly.

---

## Tech Stack

| Layer | Technologies |
| :--- | :--- |
| **Frontend** | Next.js (App Router), TypeScript, Tailwind CSS, Shadcn UI |
| **Backend & Auth** | Next.js Server Actions / API Routes, NextAuth.js |
| **Database & ORM** | PostgreSQL, Prisma ORM |
| **State & Forms** | React Query, React Hook Form, Zod (Schema Validation) |
| **Utilities** | React Table (TanStack), Lucide Icons |

---

## Project Structure

The project follows a modular, scalable architecture for high maintainability:

```text
src/
├── app/            # Next.js App Router (Pages, Layouts, API Routes)
├── components/     # Global reusable UI components (Buttons, Modals, Inputs)
├── features/       # Feature-specific modules (e.g., booking, admin, seats)
├── hooks/          # Custom React hooks
├── lib/            # Third-party configurations (Prisma client, NextAuth options)
├── services/       # API and data fetching layer
├── types/          # Global TypeScript type definitions
├── validations/    # Zod schemas for form and payload validation
└── utils/          # Shared helper functions
```
## Future Enhancements

The following roadmap outlines scheduled features intended for upcoming deployment iterations:

* **Digital Tickets:** Generation of secure, verifiable QR codes on checkout for paperless check-ins.
* **Real-Time Seat Reserving:** Integrating WebSockets to dynamically lock a seat map node during user selection pipelines to actively prevent cart collisions.
* **Customer Profiles:** Optional user registration pipelines allowing long-term order history access and saved preferences.
* **Peer Reviews:** Multi-tiered social metadata integrations allowing movie reviews and rating scores.
* **Multi-Cinema Infrastructure:** Transforming the database layer to safely provision regional chains and location-specific pricing grids.
* **Analytics Panel:** Advanced operational charting dashboards mapping performance parameters (gross income trends, theater capacity efficiencies).

---

## Author

### Aster Phyoe
**Graduate Software Developer**

* **LinkedIn:** [@your-profile](https://linkedin.com/in/your-profile)
* **Email:** [asterphyoe16@gmail.com]

---

##  License

This project is open-source and intended purely for educational and portfolio demonstration purposes. Feel free to reference the architectural strategies used here for your own systems.
