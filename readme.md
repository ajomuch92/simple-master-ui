# Simple Master UI

> A **TypeScript-first** component library for [Master CSS](https://css.master.co) — pure HTML class names, zero JavaScript, built-in dark/light theme support. Inspired by DaisyUI.

---

## Features

- ✅ **25+ components** — buttons, cards, inputs, alerts, tables, avatars, and more
- 🌗 **Dark/light themes** — automatic via CSS variables and `data-theme` attribute  
- 🚫 **Zero JS** — styles only, works with any stack or plain HTML
- 📦 **NPM ready** — fully typed, ships `.d.ts` files
- 🎨 **Fully customizable** — override any token or component variant with type safety

---

## Installation

```bash
npm install simple-master-ui @master/css
```

---

## Usage

### With Master CSS v1 (`Style.extend`)

```ts
import { Style } from '@master/css'
import { buildConfig, injectTokens } from 'simple-master-ui'

const config = buildConfig()

// Register all component classes
Style.extend('classes', config.classes)

// Inject CSS variable tokens into the document
injectTokens(config)
```

### Extend with your own tokens and components

```ts
import { Style } from '@master/css'
import { extend, injectTokens } from 'simple-master-ui'

const config = extend({
  tokens: {
    // Override primary color for light and dark
    '--color-primary': { '@light': '#e11d48', '@dark': '#fb7185' },
    // Override a radius
    '--radius-md': '0.75rem',
  },
  components: {
    // Add a new variant to btn
    btn: {
      brand: 'btn bg:red-50! fg:white! font:bold',
    },
    // Completely override a component
    card: {
      '': 'flex flex:col bg:white r:12 shadow:lg b:1|solid|gray-20',
      body: 'p:8x flex flex:col gap:5',
    },
  },
})

Style.extend('classes', config.classes)
injectTokens(config)
```

### CDN / Plain HTML (no build step)

```html
<html data-theme="light">
<head>
  <!-- Inject tokens via style tag -->
  <style id="smu-tokens">
    :root {
      --color-primary: #4f46e5;
      --color-base: #ffffff;
      /* … see dist/index.js for all tokens … */
    }
    [data-theme="dark"] {
      --color-primary: #818cf8;
      --color-base: #0f172a;
    }
  </style>
  <script src="https://cdn.master.co/css@1"></script>
  <script>
    // Register classes via the global Style object
    MasterStyleSheet.extend?.('classes', { /* paste config.classes here */ })
  </script>
</head>
```

---

## Theme Toggle

```html
<html data-theme="light">
```

```ts
// Toggle dark mode
document.documentElement.setAttribute('data-theme', 'dark')

// Read current theme
const isDark = document.documentElement.getAttribute('data-theme') === 'dark'
```

---

## API

### `buildConfig(tokens?, components?): SMUConfig`

Build a config from fully resolved tokens and components.

```ts
import { buildConfig, defaultTokens, defaultComponents } from 'simple-master-ui'

const config = buildConfig(defaultTokens, defaultComponents)
// config.classes  — flat Record<string, string> for Style.extend
// config.tokens   — resolved SMUTokens
// config.rootCSS  — :root { … } string
// config.darkCSS  — [data-theme="dark"] { … } string
```

### `extend(options): SMUConfig`

Merge your overrides on top of the defaults.

```ts
import { extend } from 'simple-master-ui'

const config = extend({
  tokens: { '--color-primary': '#ff0000' },
  components: { btn: { danger: 'btn bg:red-50! fg:white!' } },
})
```

### `injectTokens(config?): void`

Inject CSS token variables into `document.head`. Safe to call multiple times.

```ts
import { injectTokens } from 'simple-master-ui'
injectTokens()              // uses default config
injectTokens(customConfig)  // uses your config
```

### `buildRootCSS(tokens): string` / `buildDarkCSS(tokens): string`

Generate raw CSS strings (useful for SSR).

```ts
import { buildRootCSS, buildDarkCSS, defaultTokens } from 'simple-master-ui'

const html = `
  <style>
    ${buildRootCSS(defaultTokens)}
    ${buildDarkCSS(defaultTokens)}
  </style>
`
```

---

## Components

| Component     | Base class      | Variants example                          |
|---------------|-----------------|-------------------------------------------|
| Button        | `btn`           | `btn-primary`, `btn-sm`, `btn-outline`, `btn-circle` |
| Badge         | `badge`         | `badge-success`, `badge-lg`, `badge-outline` |
| Card          | `card`          | `card-body`, `card-title`, `card-bordered` |
| Input         | `input`         | `input-sm`, `input-error`, `input-ghost`  |
| Select        | `select`        | `select-sm`, `select-lg`                  |
| Textarea      | `textarea`      | —                                         |
| Alert         | `alert`         | `alert-info`, `alert-success`, `alert-error` |
| Avatar        | `avatar`        | `avatar-md`, `avatar-placeholder`, `avatar-ring` |
| Navbar        | `navbar`        | `navbar-brand`, `navbar-item`, `navbar-item-active` |
| Menu          | `menu`          | `menu-item`, `menu-item-active`, `menu-title` |
| Tabs          | `tabs`          | `tabs-tab`, `tabs-tab-active`, `tabs-boxed` |
| Table         | `table`         | `table-th`, `table-td`, `table-row`, `table-wrapper` |
| Modal         | `modal`         | `modal-box`, `modal-title`, `modal-actions` |
| Drawer        | `drawer`        | `drawer-overlay`, `drawer-header`, `drawer-body` |
| Progress      | `progress`      | `progress-bar`, `progress-success`, `progress-lg` |
| Skeleton      | `skeleton`      | `skeleton-text`, `skeleton-circle`        |
| Loading       | `loading`       | `loading-sm`, `loading-md`, `loading-lg`  |
| Tooltip       | `tooltip`       | `tooltip-text`, `tooltip-show`            |
| Dropdown      | `dropdown`      | `dropdown-menu`, `dropdown-item`, `dropdown-divider` |
| Breadcrumb    | `breadcrumb`    | `breadcrumb-item`, `breadcrumb-link`      |
| Pagination    | `pagination`    | `pagination-item`, `pagination-active`    |
| Stat          | `stat`          | `stat-title`, `stat-value`, `stat-desc`   |
| Accordion     | `accordion`     | `accordion-item`, `accordion-trigger`     |
| Toast         | `toast`         | `toast-item`, `toast-success`, `toast-error` |
| Chip          | `chip`          | `chip-primary`, `chip-error`              |
| Divider       | `divider`       | `divider-line`, `divider-label`           |
| Code          | `code`          | `code-block`                              |
| Steps         | `steps`         | `steps-step`, `steps-bullet-active`       |
| Hero          | `hero`          | `hero-body`, `hero-title`, `hero-sub`     |
| Form Group    | `form-group`    | `form-group-label`, `form-group-error`    |
| Container     | `container`     | —                                         |

---

## Design Tokens

All tokens map to CSS custom properties. Override via `extend({ tokens: { … } })`:

| Token                  | Light default | Dark default |
|------------------------|---------------|--------------|
| `--color-primary`      | `#4f46e5`     | `#818cf8`    |
| `--color-secondary`    | `#0ea5e9`     | `#38bdf8`    |
| `--color-accent`       | `#f59e0b`     | `#fbbf24`    |
| `--color-success`      | `#22c55e`     | `#4ade80`    |
| `--color-warning`      | `#f59e0b`     | `#fbbf24`    |
| `--color-error`        | `#ef4444`     | `#f87171`    |
| `--color-base`         | `#ffffff`     | `#0f172a`    |
| `--color-content`      | `#0f172a`     | `#f1f5f9`    |
| `--color-border`       | `#e2e8f0`     | `#334155`    |
| `--radius-md`          | `0.5rem`      | `0.5rem`     |
| `--shadow-md`          | `0 4px 6px …` | same        |

---

## TypeScript

All exports are fully typed. Key types:

```ts
import type {
  SMUConfig,        // output of buildConfig() / extend()
  SMUTokens,        // all design token keys
  SMUExtendOptions, // input to extend()
  ComponentMap,     // { '': string, primary: string, … }
  ComponentsMap,    // { btn: ComponentMap, card: ComponentMap, … }
} from 'simple-master-ui'
```

---

## License

MIT © Simple Master UI Contributors