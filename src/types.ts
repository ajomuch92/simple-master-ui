/**
 * simple-master-ui — types.ts
 * All type definitions for the library.
 * Designed to be compatible with @master/css v1 (Style.extend API).
 */

// ─── Master CSS compat types ─────────────────────────────────────────────────
// @master/css v1 uses `Style.extend()` and plain Record<string,string> for
// classes. We model the config shape that `Style.extend()` accepts.

/** A single Master CSS class value: one string of space-separated syntax tokens. */
export type MasterClass = string

/**
 * A component definition: either a flat class string, or a nested object
 * where keys become sub-selectors (e.g. `card-body`, `card-title`).
 *
 * Matches the shape accepted by Style.extend('classes', ...).
 */
export type ComponentDef = MasterClass | ComponentMap

export interface ComponentMap {
  [variant: string]: MasterClass
}

/** Full map of all components in the library. */
export type ComponentsMap = Record<string, ComponentDef>

// ─── Color token ─────────────────────────────────────────────────────────────

/**
 * A color token value.
 * Can be a plain string, or theme-aware { '@light': string, '@dark': string }.
 */
export type ColorValue =
  | string
  | { '@light': string; '@dark': string }

// ─── Design tokens ───────────────────────────────────────────────────────────

/** All semantic color tokens that Simple Master UI exposes. */
export interface SMUColorTokens {
  '--color-primary': ColorValue
  '--color-primary-fg': ColorValue
  '--color-secondary': ColorValue
  '--color-secondary-fg': ColorValue
  '--color-accent': ColorValue
  '--color-accent-fg': ColorValue
  '--color-neutral': ColorValue
  '--color-neutral-fg': ColorValue
  '--color-success': ColorValue
  '--color-success-fg': ColorValue
  '--color-warning': ColorValue
  '--color-warning-fg': ColorValue
  '--color-error': ColorValue
  '--color-error-fg': ColorValue
  '--color-info': ColorValue
  '--color-info-fg': ColorValue
  '--color-base': ColorValue
  '--color-base-2': ColorValue
  '--color-base-3': ColorValue
  '--color-border': ColorValue
  '--color-content': ColorValue
  '--color-content-2': ColorValue
}

/** All radius tokens. */
export interface SMURadiusTokens {
  '--radius-sm': string
  '--radius-md': string
  '--radius-lg': string
  '--radius-xl': string
  '--radius-full': string
}

/** All shadow tokens. */
export interface SMUShadowTokens {
  '--shadow-sm': string
  '--shadow-md': string
  '--shadow-lg': string
  '--shadow-xl': string
}

/** All transition tokens. */
export interface SMUTransitionTokens {
  '--transition-fast': string
  '--transition-normal': string
  '--transition-slow': string
}

/**
 * All design tokens in Simple Master UI.
 * These map directly to CSS custom properties (`--color-primary`, etc.).
 * Passed to Master CSS as `classes` semantics or inline CSS variables.
 */
export type SMUTokens =
  & SMUColorTokens
  & SMURadiusTokens
  & SMUShadowTokens
  & SMUTransitionTokens

// ─── User customization ───────────────────────────────────────────────────────

/**
 * The shape of `tokens` that the user can partially override.
 * All fields are optional — unset fields fall back to the defaults.
 */
export type PartialSMUTokens = Partial<SMUTokens>

/**
 * The shape of `components` that the user can partially override or extend.
 * Pass only the components/variants you want to change.
 */
export type PartialComponentsMap = Partial<Record<string, ComponentDef>>

// ─── Library output ───────────────────────────────────────────────────────────

/**
 * The complete config object produced by Simple Master UI.
 *
 * This is what you pass to `Style.extend('classes', config.classes)`:
 *
 * ```ts
 * import { Style } from '@master/css'
 * import { buildConfig } from 'simple-master-ui'
 *
 * const config = buildConfig()
 * Style.extend('classes', config.classes)
 * Style.extend('colors',  config.colors)
 * ```
 */
export interface SMUConfig {
  /**
   * Flat record of class → Master CSS syntax string.
   * Passed directly to `Style.extend('classes', config.classes)`.
   */
  classes: Record<string, string>

  /**
   * CSS custom property token map (the raw token values).
   * Use this to inject a `<style>:root{…}</style>` block,
   * or merge into your own CSS-in-JS solution.
   */
  tokens: SMUTokens

  /**
   * Pre-rendered `:root` CSS block (light theme defaults).
   * Inject this into a `<style>` tag in your HTML `<head>`.
   */
  rootCSS: string

  /**
   * Pre-rendered `[data-theme="dark"] :root` CSS block.
   * Inject alongside `rootCSS` to enable dark mode.
   */
  darkCSS: string
}

// ─── extend() user options ────────────────────────────────────────────────────

/**
 * Options accepted by the `extend()` helper.
 */
export interface SMUExtendOptions {
  /** Override any design token. */
  tokens?: PartialSMUTokens
  /** Override or add components/variants. Merges with defaults. */
  components?: PartialComponentsMap
}