# Add Architectural Loading Screen

## Goal
Create a premium, SVG‑based fullscreen loading screen inspired by Alche Studio, then integrate it as the initial overlay for the portfolio app.

## Components to Add / Modify
- **New React component** `src/components/ArchitectLoadingScreen.jsx` (as described in the prompt).
- **CSS Module** `src/components/ArchitectLoadingScreen.module.css` with all SVG animations, dark background, and tagline styling.
- **Update `src/App.jsx`**:
  - Import `ArchitectLoadingScreen` instead of the previous `LoadingScreen`.
  - Manage visibility state (`showApp`) the same way, passing `onFinish` to the new component.
  - Remove the old `LoadingScreen` import (optional, keep file but unused).

## Files to Create
- `src/components/ArchitectLoadingScreen.jsx`
- `src/components/ArchitectLoadingScreen.module.css`

## Files to Modify
- `src/App.jsx` – replace import and usage.

## Design Details
- Pure black background (`#000000`).
- SVG contains:
  - Faint grid lines (horizontal & vertical) fading in.
  - Concentric dashed circles rising.
  - Diagonal construction lines drifting up.
  - Double‑line outer frame appearing.
  - Letter **R** built from two overlapping paths (outer thicker, inner thinner) with stroke‑dashoffset draw animation and overshoot bounce.
  - Continuous bobbing animation after settle.
  - Tagline text below the R, monospace, fades in after 3.8 s.
- Respect `prefers-reduced-motion` (skip animations, hide after 500 ms).
- Accessibility: `role="status"` and `aria-live="polite"` on overlay.
- Font: `Courier Prime` imported via `@import` in CSS.

## Integration Guide (to be added as a markdown file)
- Explain how to import and use the component.
- Show optional `duration` prop.
- Mention customizing colors or tagline.

## Verification Plan
- Run `npm run dev` and ensure the loading screen appears on page load, animates as specified, then the main UI becomes visible.
- Test reduced‑motion preference (via OS settings) – overlay should hide quickly.
- Check responsiveness on different viewport sizes.
- Verify no console errors.

## Open Questions
> [!IMPORTANT] No critical open questions. Proceed if the design matches the description.

## Next Steps
1. Create component and CSS files.
2. Update `App.jsx`.
3. Add integration guide markdown.
4. Run the dev server to manually verify the animation.
