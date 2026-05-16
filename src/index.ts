/**
 * simple-master-ui — index.ts
 * Main entry point for the library.
 *
 * Usage (v1 API with Style.extend):
 *
 *   import { Style } from '@master/css'
 *   import { buildConfig, injectTokens } from 'simple-master-ui'
 *
 *   const config = buildConfig()
 *
 *   // Register all component classes with Master CSS
 *   Style.extend('classes', config.classes)
 *
 *   // Inject CSS variables into the document
 *   injectTokens()
 *
 * With custom overrides:
 *
 *   import { extend, injectTokens } from 'simple-master-ui'
 *
 *   const config = extend({
 *     tokens: { '--color-primary': { '@light': '#e11d48', '@dark': '#fb7185' } },
 *     components: {
 *       btn: { '': 'btn r:99', primary: 'btn-primary' }   // override btn base
 *     }
 *   })
 *
 *   Style.extend('classes', config.classes)
 *   injectTokens(config)
 */

import type {
  SMUConfig,
  SMUTokens,
  ComponentsMap,
  ComponentMap,
  SMUExtendOptions,
  PartialSMUTokens,
  PartialComponentsMap,
} from './types.js'

import { defaultTokens } from './tokens.js'
import { defaultComponents } from './components.js'
import { buildRootCSS, buildDarkCSS, injectCSS } from './css.js'

export type {
  SMUConfig,
  SMUTokens,
  ComponentsMap,
  ComponentMap,
  SMUExtendOptions,
  PartialSMUTokens,
  PartialComponentsMap,
}

export { defaultTokens } from './tokens'
export { defaultComponents } from './components'
export { buildRootCSS, buildDarkCSS, injectCSS } from './css'

// ─── Internal: flatten component map ─────────────────────────────────────────

/**
 * Flatten a ComponentsMap into the flat Record<string, string> that
 * Style.extend('classes', ...) expects.
 *
 * Input:
 *   { btn: { '': 'inline-flex …', primary: 'btn bg:blue' } }
 *
 * Output:
 *   { btn: 'inline-flex …', 'btn-primary': 'btn bg:blue' }
 */
function flattenComponents(components: ComponentsMap): Record<string, string> {
  const result: Record<string, string> = {}

  for (const [name, def] of Object.entries(components)) {
    if (typeof def === 'string') {
      result[name] = def
    } else {
      for (const [variant, value] of Object.entries(def)) {
        const key = variant === '' ? name : `${name}-${variant}`
        result[key] = value
      }
    }
  }

  return result
}

// ─── buildConfig ─────────────────────────────────────────────────────────────

/**
 * Build the full Simple Master UI config from merged tokens and components.
 *
 * Returns an `SMUConfig` object with:
 *   - `classes`  → pass to `Style.extend('classes', config.classes)`
 *   - `tokens`   → the resolved token map
 *   - `rootCSS`  → inject as a `<style>` tag (light theme variables)
 *   - `darkCSS`  → inject as a `<style>` tag (dark theme variables)
 */
export function buildConfig(
  tokens: SMUTokens = defaultTokens,
  components: ComponentsMap = defaultComponents,
): SMUConfig {
  return {
    classes: flattenComponents(components),
    tokens,
    rootCSS: buildRootCSS(tokens),
    darkCSS: buildDarkCSS(tokens),
  }
}

// ─── extend ──────────────────────────────────────────────────────────────────

/**
 * Create a customized config by merging your overrides on top of the defaults.
 *
 * - `tokens`     — partial override of design tokens (deep-merged)
 * - `components` — partial override of components (shallow-merged per component)
 *
 * @example
 * const config = extend({
 *   tokens: {
 *     '--color-primary': { '@light': '#e11d48', '@dark': '#fb7185' }
 *   },
 *   components: {
 *     btn: { primary: 'btn bg:red-50! fg:white!' }
 *   }
 * })
 */
export function extend(options: SMUExtendOptions = {}): SMUConfig {
  // Merge tokens
  const mergedTokens: SMUTokens = {
    ...defaultTokens,
    ...(options.tokens ?? {}),
  }

  // Merge components: shallow-merge each component's variant map
  const mergedComponents: ComponentsMap = { ...defaultComponents }

  if (options.components) {
    for (const [name, def] of Object.entries(options.components)) {
      const existing = mergedComponents[name]

      if (def === undefined) {
        // nothing to merge
      } else if (typeof def === 'string') {
        mergedComponents[name] = def
      } else if (typeof existing === 'object' && existing !== null && typeof def === 'object') {
        // Merge variant maps
        mergedComponents[name] = { ...(existing as ComponentMap), ...def }
      } else {
        mergedComponents[name] = def
      }
    }
  }

  return buildConfig(mergedTokens, mergedComponents)
}

// ─── injectTokens ────────────────────────────────────────────────────────────

/**
 * Inject the light and dark token CSS into the document <head>.
 * Call this once at app startup alongside `Style.extend('classes', ...)`.
 *
 * @param config — defaults to `buildConfig()` (default tokens)
 */
export function injectTokens(config?: SMUConfig): void {
  const c = config ?? buildConfig()
  injectCSS(c.rootCSS + '\n' + c.darkCSS, 'smu-tokens')
}

// ─── Default export ───────────────────────────────────────────────────────────

/**
 * The default config built from the library defaults.
 * Import this for the simplest usage with Style.extend.
 *
 * @example
 * import { Style } from '@master/css'
 * import smuConfig from 'simple-master-ui'
 *
 * Style.extend('classes', smuConfig.classes)
 * // then inject tokens manually or via injectTokens()
 */
const defaultConfig: SMUConfig = buildConfig()
export default defaultConfig