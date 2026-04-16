# Integration Guide – LoadingScreen Component

## 1️⃣ Add the component files
- **`src/components/LoadingScreen.jsx`** – React component that renders the full‑screen overlay.
- **`src/components/LoadingScreen.module.css`** – CSS Module containing the premium styles (gradient, glass‑morphism, animations, dark‑mode support, and a subtle glow pulse).

Both files have already been created in the repository.

## 2️⃣ Import the component in `src/App.jsx`
```jsx
import LoadingScreen from './components/LoadingScreen';
```
> The import was added automatically.

## 3️⃣ Wire‑up visibility control
The app now renders the loading screen first and only shows the main UI after the animation finishes.
```jsx
function App() {
  const [showApp, setShowApp] = useState(false);

  return (
    <>
      {/* The loading screen hides itself after the animation (or instantly if reduced‑motion is enabled) */}
      <LoadingScreen onFinish={() => setShowApp(true)} />

      {/* Main UI – rendered only when `showApp` is true */}
      {showApp && (
        <div className="app-container">
          {/* … existing layout … */}
        </div>
      )}
    </>
  );
}
```
- `onFinish` is called by `LoadingScreen` once it hides, toggling `showApp` to `true`.
- The component also accepts an optional `duration` prop (default 2000 ms) if you want to tweak the total visible time.

## 4️⃣ Customising the animation duration or colours
- **Duration** – Pass a custom value (in milliseconds) to the component:
  ```jsx
  <LoadingScreen duration={3000} onFinish={…} />
  ```
- **Colours** – Edit the CSS variables in `LoadingScreen.module.css`:
  ```css
  :root {
    --gradient-light: linear-gradient(135deg, #ff7e5f, #feb47b);
    --gradient-dark:  linear-gradient(135deg, #ff7e5f, #ffb347);
  }
  ```
  Adjust the hex codes to match your brand palette.

## 5️⃣ Accessibility & Reduced‑Motion
- The overlay has `role="status"` and `aria-live="polite"` for screen‑readers.
- If the user prefers reduced motion, the component skips the animation and hides after a short 500 ms delay.

## 6️⃣ Styling notes
- The component uses **Inter** via a Google‑Fonts `@import` at the top of the CSS module.
- Glass‑morphism is achieved with `backdrop-filter: blur(8px)` on the overlay.
- A faint glow pulse is added with the `glow` keyframe.

## 7️⃣ Build & Test
```bash
# Install dependencies (if not already installed)
npm install

# Run the dev server
npm run dev
```
Visit the app in the browser – you should see the animated "R" covering the viewport, then the main portfolio UI appears.

---
**That’s it!** You now have a premium, animated loading screen that enhances the first‑time visitor experience while respecting accessibility and user preferences.
