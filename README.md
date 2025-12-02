# Kokum & Coast - Modern Wix Headless App

A production-ready web application built with **Astro**, **React**, and **Wix Headless**. This project demonstrates a modern architecture for e-commerce and content-driven sites, featuring selective SSR, robust type safety, and a premium UI.

## 🚀 Features

- **Hybrid Rendering**: Astro for initial HTML & SEO, React for interactive islands.
- **Wix Headless**: Typed client for Products, Cart, CMS, and Members.
- **Strict TypeScript**: Full type safety across the entire codebase.
- **Performance**: Critical CSS, image optimization, and code splitting.
- **Developer Experience**: Docker, ESLint, Prettier, and Husky hooks.
- **Testing**: Unit tests (Vitest) and E2E ready (Playwright).
- **Security**: CSP, input sanitization, and secure environment handling.

## 🛠️ Tech Stack

- **Framework**: Astro 5.8 + React 18.3
- **Backend**: Wix Headless (SDK, Stores, Ecom, Members)
- **State Management**: TanStack Query (Server) + Zustand (Client)
- **Styling**: Tailwind CSS + Radix UI
- **Forms**: React Hook Form + Zod
- **Testing**: Vitest + Testing Library
- **Deployment**: Docker / Node.js (Self-hosted)

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- Docker (optional)
- Wix Project ID & Client ID

### Installation

1. **Clone & Install**:
   ```bash
   git clone <repo-url>
   cd kokum-coast
   npm install
   ```

2. **Environment Setup**:
   Create a `.env` file:
   ```env
   PUBLIC_WIX_CLIENT_ID=your_client_id
   ```

3. **Run Locally**:
   ```bash
   npm run dev
   # or with Docker
   docker-compose up
   ```

## 📁 Project Structure

```
src/
├── components/     # React components (UI, Forms, Pages)
├── hooks/          # Custom hooks (useWixProducts, etc.)
├── lib/
│   └── wix/        # Typed Wix Headless client modules
├── pages/          # Astro routes (SSR entry points)
└── styles/         # Global Tailwind styles
```

## 🧪 Testing

```bash
npm run test:run   # Run unit tests
npm run type-check # Run strict type check
npm run lint       # Run linter
```

## 🤝 Contributing

Please read `CONTRIBUTING.md` (coming soon) for details on our code of conduct and the process for submitting pull requests.

---
Built with ❤️ by the Kokum & Coast Team.
