# Rollback Plan

## Major Changes
1.  **Strict TypeScript**: If strict mode causes too many build failures, revert `strict: true` to `false` in `tsconfig.json`.
2.  **Wix Client**: If the new client fails, fallback to the old ad-hoc fetching (if any existed) or disable the specific feature flags.
3.  **SSR Entry**: If `[...slug].astro` refactor breaks the site, revert the file to its previous state (pure SPA wrapper).

## Revert Commands

### Revert to SPA-only
```bash
git checkout HEAD~1 src/pages/[...slug].astro
```

### Disable Strict Mode
Edit `tsconfig.json`:
```json
"strict": false
```
