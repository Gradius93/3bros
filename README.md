# 3Bros Burgers

The official website for **3Bros Burgers** — Sussex Wagyu smash burger specialists with locations across the South of England.

Built with Next.js (Pages Router), Tailwind CSS v4, and deployed on Vercel.

**Live site:** [3bros.co.uk](https://3bros.co.uk)

## Tech Stack

- **Framework:** Next.js 16 (Pages Router)
- **Styling:** Tailwind CSS v4
- **Language:** TypeScript
- **Unit Tests:** Vitest + React Testing Library
- **E2E Tests:** Playwright (Chromium)
- **Linting:** ESLint + Prettier
- **Git Hooks:** Husky (pre-commit runs unit tests)
- **Hosting:** Vercel

## Getting Started

### Prerequisites

- Node.js >= 22
- pnpm >= 10

### Install & Run

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project Structure

```
src/
  components/
    layout/          # Navbar, Footer
    modals/          # LocationModal
    views/           # HomeView, AboutView, MenuView, LocationsView, FestivalsView, ContactView
    InfintieCarousel.tsx
    LoadingScreen.tsx
    MarqueeBanner.tsx
    SEOHead.tsx
  data/
    locations.tsx     # Store locations (Horsham, Brighton, Chichester, Winchester)
    menu.tsx          # Menu items with per-location availability
  pages/
    index.tsx         # Homepage (single-page with anchor sections)
    locations.tsx     # Standalone locations grid page
    api/contact.ts    # Contact form handler (Resend email API)
  types/
    index.ts          # MenuItemData, Location interfaces
e2e/                  # Playwright E2E tests
```

## Scripts

| Command | Description |
|---|---|
| `pnpm dev` | Start dev server |
| `pnpm build` | Production build |
| `pnpm start` | Serve production build |
| `pnpm lint` | Run ESLint |
| `pnpm test` | Run unit tests (Vitest) |
| `pnpm test:watch` | Run unit tests in watch mode |
| `pnpm test:e2e` | Run E2E tests (Playwright) |
| `pnpm test:e2e:ui` | Run E2E tests with Playwright UI |

## Testing

### Unit Tests (68 tests)

```bash
pnpm test
```

Covers data integrity, component rendering, menu filtering logic, contact form submission, and the contact API handler (validation, honeypot, Resend integration, error paths).

### E2E Tests (22 tests)

```bash
pnpm test:e2e
```

Covers homepage sections, desktop/mobile navigation, menu location filtering, the locations page grid and modal, SEO metadata, and structured data.

### Pre-commit Hook

Husky runs `pnpm test` before every commit. If any unit test fails, the commit is blocked.

## Contact Form Setup

The contact form (`/api/contact`) sends email through [Resend](https://resend.com). Add a `.env.local` file:

```bash
RESEND_API_KEY=your_resend_api_key
CONTACT_FROM_EMAIL=3Bros Contact <noreply@your-verified-domain.com>
```

Submissions are delivered to `3brosfood@gmail.com`.

## Deployment

Deployed automatically via Vercel on push to `main`.
