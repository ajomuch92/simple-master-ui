/**
 * simple-master-ui — tokens.ts
 * Default design tokens (CSS custom properties).
 * All values are compatible with Master CSS variable syntax.
 */

import type { SMUTokens } from './types'

export const defaultTokens: SMUTokens = {
  // ── Semantic color tokens ────────────────────────────────────────────────
  '--color-primary':      { '@light': '#4f46e5', '@dark': '#818cf8' },
  '--color-primary-fg':   { '@light': '#ffffff', '@dark': '#ffffff' },
  '--color-secondary':    { '@light': '#0ea5e9', '@dark': '#38bdf8' },
  '--color-secondary-fg': { '@light': '#ffffff', '@dark': '#ffffff' },
  '--color-accent':       { '@light': '#f59e0b', '@dark': '#fbbf24' },
  '--color-accent-fg':    { '@light': '#ffffff', '@dark': '#000000' },
  '--color-neutral':      { '@light': '#64748b', '@dark': '#94a3b8' },
  '--color-neutral-fg':   { '@light': '#ffffff', '@dark': '#000000' },
  '--color-success':      { '@light': '#22c55e', '@dark': '#4ade80' },
  '--color-success-fg':   { '@light': '#ffffff', '@dark': '#000000' },
  '--color-warning':      { '@light': '#f59e0b', '@dark': '#fbbf24' },
  '--color-warning-fg':   { '@light': '#000000', '@dark': '#000000' },
  '--color-error':        { '@light': '#ef4444', '@dark': '#f87171' },
  '--color-error-fg':     { '@light': '#ffffff', '@dark': '#ffffff' },
  '--color-info':         { '@light': '#3b82f6', '@dark': '#60a5fa' },
  '--color-info-fg':      { '@light': '#ffffff', '@dark': '#ffffff' },

  // ── Surface / background tokens ──────────────────────────────────────────
  '--color-base':     { '@light': '#ffffff',  '@dark': '#0f172a' },
  '--color-base-2':   { '@light': '#f8fafc',  '@dark': '#1e293b' },
  '--color-base-3':   { '@light': '#f1f5f9',  '@dark': '#334155' },
  '--color-border':   { '@light': '#e2e8f0',  '@dark': '#334155' },
  '--color-content':  { '@light': '#0f172a',  '@dark': '#f1f5f9' },
  '--color-content-2':{ '@light': '#475569',  '@dark': '#94a3b8' },

  // ── Border radius ────────────────────────────────────────────────────────
  '--radius-sm':   '0.25rem',
  '--radius-md':   '0.5rem',
  '--radius-lg':   '0.75rem',
  '--radius-xl':   '1rem',
  '--radius-full': '9999px',

  // ── Shadows ──────────────────────────────────────────────────────────────
  '--shadow-sm': '0 1px 2px 0 rgb(0 0 0/.08)',
  '--shadow-md': '0 4px 6px -1px rgb(0 0 0/.1),0 2px 4px -2px rgb(0 0 0/.1)',
  '--shadow-lg': '0 10px 15px -3px rgb(0 0 0/.1),0 4px 6px -4px rgb(0 0 0/.1)',
  '--shadow-xl': '0 20px 25px -5px rgb(0 0 0/.1),0 8px 10px -6px rgb(0 0 0/.1)',

  // ── Transitions ──────────────────────────────────────────────────────────
  '--transition-fast':   '150ms cubic-bezier(0.4,0,0.2,1)',
  '--transition-normal': '200ms cubic-bezier(0.4,0,0.2,1)',
  '--transition-slow':   '300ms cubic-bezier(0.4,0,0.2,1)',
}