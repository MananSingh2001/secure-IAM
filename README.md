# Secure-Nexus IAM: Enterprise Identity Management System

[![Next.js 15](https://img.shields.io/badge/Next.js-15-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![Keycloak](https://img.shields.io/badge/Keycloak-26.x-red?style=flat-square&logo=keycloak)](https://www.keycloak.org/)
[![Auth.js](https://img.shields.io/badge/Auth.js-v5-blueviolet?style=flat-square)](https://authjs.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)

## 📌 Project Overview
**Secure-Nexus IAM** is a production-grade Identity and Access Management (IAM) dashboard designed to handle enterprise-level authentication and authorization. Built with **Next.js 15 (App Router)** and **Keycloak**, it demonstrates a high-concurrency architecture that prioritizes security, type safety, and seamless user experience.

This project serves as a technical showcase for implementing **OIDC (OpenID Connect)** patterns, specifically solving the "Ghost Session" problem in SSO via **Federated Logout**.

---

## 🛠 Tech Stack & Architecture
- **Frontend Framework:** Next.js 15 (React 19, Server Components, Server Actions)
- **Identity Provider (IdP):** Keycloak (OIDC compliant)
- **Authentication:** Auth.js v5 (formerly NextAuth)
- **Styling:** Tailwind CSS
- **Infrastructure:** Docker (Keycloak & PostgreSQL)

---

## 🏗 Key Engineering Implementations

### 1. Federated Logout (SSO Session Sync)
Standard logouts often fail to terminate the Single Sign-On session at the Identity Provider. This project implements **OIDC RP-Initiated Logout**:
- Captures the `id_token` during the JWT callback.
- Utilizes Server Actions to trigger a clean redirect to the Keycloak `end-session` endpoint.
- Ensures absolute session parity between the client application and the IdP.

### 2. Advanced RBAC (Role-Based Access Control)
Implemented a granular authorization layer by extending the `auth.ts` callbacks:
- **JWT Mapping:** Maps Keycloak realm roles into the application's session object.
- **Middleware Protection:** Enforces route-level security at the edge, preventing unauthorized access to administrative paths.
- **Dynamic UI:** Utilizes React Server Components to conditionally render UI elements based on user permissions without client-side flickering.

### 3. Server-Side Session Validation
Leverages Next.js 15's **Server Components** to validate sessions before the page is delivered to the browser. This architectural choice significantly reduces the **Time to First Byte (TTFB)** compared to client-side `useEffect` authentication checks.

---

## 🚦 Getting Started

### Prerequisites
- Docker & Docker Compose
- Node.js 20+

### Step-by-Step Setup
1. **Initialize Keycloak:**
   ```bash
   docker run -p 8080:8080 -e KC_BOOTSTRAP_ADMIN_USERNAME=admin -e KC_BOOTSTRAP_ADMIN_PASSWORD=admin quay.io/keycloak/keycloak:latest start-dev

```

2. **Configure Environment:**
Create a `.env.local` file:
```env
AUTH_KEYCLOAK_ID="nexus-dashboard"
AUTH_KEYCLOAK_SECRET="your_secret_here"
AUTH_KEYCLOAK_ISSUER="http://localhost:8080/realms/secure-nexus"
AUTH_SECRET="your_generated_secret"
NEXTAUTH_URL="http://localhost:3000"

```


3. **Run Application:**
```bash
npm install
npm run dev

```



---

## 📈 System Design Impact

* **Security:** Implemented secure cookie handling and CSRF protection via Auth.js.
* **Performance:** Achieved near-instant session hydration using React Server Components.
* **Scalability:** The stateless JWT-based architecture allows the application to scale horizontally across multiple clusters.

---

## 👨‍💻 Developer

**Manan Singh** *Senior Software Engineer / SDE-2 Candidate* [LinkedIn]([https://www.linkedin.com/in/your-profile](https://www.linkedin.com/in/manan-singh-sde/) | [Portfolio](https://manansingh-six-blush.vercel.app/)

---

License: MIT

```

### Why this is "SDE-2 Copy":
1.  **Architecture-First:** It uses terms like "TTFB," "Stateless JWT," "RP-Initiated Logout," and "Horizontal Scaling."
2.  **Solves Specific Problems:** It highlights that you solved the "Ghost Session" problem—a common real-world issue in enterprise IAM.
3.  **Visual Professionalism:** Includes badges and clear headings that make the project look like an official library.

```
