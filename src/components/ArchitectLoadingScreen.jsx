import React, { useEffect, useState, useRef } from 'react';
import styles from './ArchitectLoadingScreen.module.css';

/**
 * ArchitectLoadingScreen — Alche Studio-style geometric blueprint intro.
 * Letter "R" is constructed with architectural drafting lines, concentric
 * guide circles and diagonal construction lines, all animated sequentially.
 *
 * Props:
 *   duration  {number}   Total overlay duration in ms  (default 5200)
 *   onFinish  {function} Called when overlay hides
 */
export default function ArchitectLoadingScreen({ duration = 5200, onFinish }) {
  const [show,        setShow]        = useState(true);
  const [showTagline, setShowTagline] = useState(false);

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) {
      const t = setTimeout(() => { setShow(false); onFinish?.(); }, 600);
      return () => clearTimeout(t);
    }

    const tagTimer  = setTimeout(() => setShowTagline(true), 4000);
    const hideTimer = setTimeout(() => { setShow(false); onFinish?.(); }, duration);
    return () => { clearTimeout(tagTimer); clearTimeout(hideTimer); };
  }, [duration, onFinish]);

  if (!show) return null;

  // ── R geometry (viewBox 1000 × 700, centre 500 350) ─────────────────────
  // The R is inscribed in a rectangle approx 220 × 300 px, centred at 500,350
  // Coordinates:
  //   Stem left edge:     x = 390
  //   Stem right edge:    x = 415  (outer)  / 408 (inner)
  //   Right extent bowl:  x = 600  (outer)  / 585 (inner)
  //   Top:                y = 205
  //   Bowl mid:           y = 355
  //   Bottom:             y = 495

  // Bowl arc: a true semicircle on the right side of the R.
  // Centre of arc: (507, 280), radius 95 — gives a D-shape from y=185 to y=375
  // We clip to y 205 → 355 so it looks proportional.

  return (
    <div className={styles.overlay} role="status" aria-live="polite">
      <svg
        viewBox="0 0 1000 700"
        preserveAspectRatio="xMidYMid meet"
        className={styles.svg}
        aria-hidden="true"
      >
        {/* ── 1. BACKGROUND GRID ─────────────────────────────────────── */}
        <g className={styles.grid}>
          {/* Horizontals every 35px */}
          {Array.from({ length: 21 }, (_, i) => (
            <line key={`h${i}`} x1="0" y1={i * 35} x2="1000" y2={i * 35} />
          ))}
          {/* Verticals every 35px */}
          {Array.from({ length: 29 }, (_, i) => (
            <line key={`v${i}`} x1={i * 35} y1="0" x2={i * 35} y2="700" />
          ))}
        </g>

        {/* ── 2. CONCENTRIC GUIDE CIRCLES ───────────────────────────── */}
        <g className={styles.circles}>
          <circle className={styles.circ0} cx="500" cy="345" r="290" />
          <circle className={styles.circ1} cx="500" cy="345" r="230" />
          <circle className={styles.circ2} cx="500" cy="345" r="175" />
          <circle className={styles.circ3} cx="500" cy="345" r="115" />
        </g>

        {/* ── 3. DIAGONAL CONSTRUCTION LINES ────────────────────────── */}
        {/* Main diagonals through centre */}
        <g className={styles.diag1}>
          <line x1="0"    y1="0"   x2="1000" y2="700" />
          <line x1="1000" y1="0"   x2="0"    y2="700" />
        </g>
        {/* Secondary diagonals (R leg slope guides) */}
        <g className={styles.diag2}>
          <line x1="210" y1="0"   x2="790"  y2="700" />
          <line x1="790" y1="0"   x2="210"  y2="700" />
        </g>
        {/* Tertiary — horizontal band lines through bowl and baseline */}
        <g className={styles.diag3}>
          <line x1="0" y1="205" x2="1000" y2="205" />
          <line x1="0" y1="355" x2="1000" y2="355" />
          <line x1="0" y1="495" x2="1000" y2="495" />
        </g>

        {/* ── 4. DOUBLE BORDER FRAME ─────────────────────────────────── */}
        <g className={styles.frame}>
          <rect x="12" y="12" width="976" height="676" />
          <rect x="20" y="20" width="960" height="660" />
        </g>

        {/* ── 5. LETTER R ────────────────────────────────────────────── */}
        <g className={styles.letterGroup}>

          {/* ── Outer R  (2.5px  rgba(255,255,255,0.95)) ── */}
          <g className={styles.outerR}>
            {/* Stem */}
            <path pathLength="1" d="M 390 495 L 390 205" />
            {/* Top horizontal cap */}
            <path pathLength="1" d="M 390 205 L 600 205" />
            {/* Bowl arc — D-shape, sweep clockwise */}
            <path pathLength="1" d="M 600 205 A 75 75 0 0 1 600 355" />
            {/* Crossbar — back to stem */}
            <path pathLength="1" d="M 600 355 L 390 355" />
            {/* Diagonal leg */}
            <path pathLength="1" d="M 600 355 L 700 495" />
            {/* Baseline left cap */}
            <path pathLength="1" d="M 390 495 L 440 495" />
            {/* Baseline right of leg */}
            <path pathLength="1" d="M 660 495 L 710 495" />
          </g>

          {/* ── Inner R  (1px  rgba(255,255,255,0.38)) ── */}
          <g className={styles.innerR}>
            <path pathLength="1" d="M 403 483 L 403 217" />
            <path pathLength="1" d="M 403 217 L 587 217" />
            <path pathLength="1" d="M 587 217 A 63 63 0 0 1 587 343" />
            <path pathLength="1" d="M 587 343 L 403 343" />
            <path pathLength="1" d="M 587 343 L 682 483" />
            <path pathLength="1" d="M 403 483 L 440 483" />
            <path pathLength="1" d="M 648 483 L 696 483" />
          </g>

        </g>

      </svg>

      {/* Tagline — absolutely positioned over the SVG */}
      <p className={`${styles.tagline} ${showTagline ? styles.taglineVisible : ''}`}>
        Architect worlds that move hearts and spark hope.
      </p>
    </div>
  );
}
