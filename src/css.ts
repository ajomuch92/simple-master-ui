/**
 * simple-master-ui — css.ts
 * Utilities to generate CSS from design tokens.
 * Produces :root { } blocks for light and dark themes.
 */

import type { SMUTokens, ColorValue } from './types.js'

/**
 * Extract the light value from a ColorValue.
 * If the token is a plain string, return it as-is.
 */
function lightValue(v: ColorValue): string {
  return typeof v === 'string' ? v : v['@light']
}

/**
 * Extract the dark value from a ColorValue.
 * If the token is a plain string (not theme-aware), return it as-is.
 */
function darkValue(v: ColorValue): string {
  return typeof v === 'string' ? v : v['@dark']
}

/**
 * Build a `:root { }` CSS block from the light theme values of the tokens.
 */
export function buildRootCSS(tokens: SMUTokens): string {
  const lines = Object.entries(tokens).map(
    ([key, value]) => `  ${key}: ${lightValue(value as ColorValue)};`
  )
  return `:root {\n${lines.join('\n')}\n}`
}

/**
 * Build a `[data-theme="dark"] { }` CSS block from the dark theme values.
 * Only includes tokens that actually differ between light and dark.
 */
export function buildDarkCSS(tokens: SMUTokens): string {
  const lines = Object.entries(tokens)
    .filter(([, value]) => typeof value === 'object')
    .map(([key, value]) => `  ${key}: ${darkValue(value as ColorValue)};`)

  return `[data-theme="dark"] {\n${lines.join('\n')}\n}`
}

/**
 * Inject a <style> tag into the document <head> with the given CSS content.
 * Safe to call multiple times — uses an id to deduplicate.
 */
export function injectCSS(css: string, id = 'smu-tokens'): void {
  if (typeof document === 'undefined') return // SSR guard
  let el = document.getElementById(id) as HTMLStyleElement | null
  if (!el) {
    el = document.createElement('style')
    el.id = id
    document.head.appendChild(el)
  }
  el.textContent = css
}