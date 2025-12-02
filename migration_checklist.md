# Migration Checklist

## Phase 1: Code Hygiene (Completed)
- [x] Enable `strict: true` in `tsconfig.json`.
- [x] Add linting and type-checking scripts.
- [x] Fix initial type errors (ongoing).

## Phase 2: Wix Integration (In Progress)
- [x] Install Wix SDK packages.
- [x] Create typed client (`src/lib/wix/client.ts`).
- [x] Implement Products and CMS modules.
- [x] Implement E-commerce (Cart) module.
- [ ] Verify integration with real API keys.

## Phase 3: Architecture & Routing (In Progress)
- [x] Refactor `[...slug].astro` for SSR.
- [x] Create `App.tsx` entry point.
- [x] Add `QueryClientProvider`.
- [ ] Test routing with dynamic data.

## Phase 4: UI & Forms (In Progress)
- [x] Create `ContactForm` with Zod validation.
- [x] Integrate form into `ContactPage`.
- [ ] Add accessibility attributes to all UI components.

## Phase 5: Testing & Ops (Pending)
- [x] Create unit tests for Client and Form.
- [x] Create Docker setup.
- [ ] Run full test suite.
- [ ] Set up CI/CD pipeline.
