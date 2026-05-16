/**
 * simple-master-ui — components.ts
 * All component definitions as typed Master CSS class strings.
 *
 * Each component is a Record<string, string> where:
 *   - key ''      → the base class name  (e.g. `.btn`)
 *   - key 'primary' → a modifier class   (e.g. `.btn-primary`)
 *
 * These are flattened by buildClasses() into the shape that
 * Style.extend('classes', ...) accepts: { 'btn': '...', 'btn-primary': '...' }
 */

import type { ComponentMap, ComponentsMap } from './types.js'

// Shorthand aliases used throughout — keep in sync with token names
const T = {
  primary:    'var(--color-primary)',
  primaryFg:  'var(--color-primary-fg)',
  secondary:  'var(--color-secondary)',
  secondaryFg:'var(--color-secondary-fg)',
  accent:     'var(--color-accent)',
  accentFg:   'var(--color-accent-fg)',
  neutral:    'var(--color-neutral)',
  neutralFg:  'var(--color-neutral-fg)',
  success:    'var(--color-success)',
  successFg:  'var(--color-success-fg)',
  warning:    'var(--color-warning)',
  warningFg:  'var(--color-warning-fg)',
  error:      'var(--color-error)',
  errorFg:    'var(--color-error-fg)',
  info:       'var(--color-info)',
  infoFg:     'var(--color-info-fg)',
  base:       'var(--color-base)',
  base2:      'var(--color-base-2)',
  base3:      'var(--color-base-3)',
  border:     'var(--color-border)',
  content:    'var(--color-content)',
  content2:   'var(--color-content-2)',
  rSm:   'var(--radius-sm)',
  rMd:   'var(--radius-md)',
  rLg:   'var(--radius-lg)',
  rXl:   'var(--radius-xl)',
  rFull: 'var(--radius-full)',
  shSm:  'var(--shadow-sm)',
  shMd:  'var(--shadow-md)',
  shLg:  'var(--shadow-lg)',
  shXl:  'var(--shadow-xl)',
  tFast:   'var(--transition-fast)',
  tNormal: 'var(--transition-normal)',
  tSlow:   'var(--transition-slow)',
} as const

// ─── BUTTON ──────────────────────────────────────────────────────────────────
const btn: ComponentMap = {
  '':         `inline-flex align-items:center justify-content:center gap:2 font:14 font:medium r:${T.rMd} px:4x h:10x ~background|${T.tNormal},color|${T.tNormal},box-shadow|${T.tNormal} cursor:pointer select:none outline:none border:none appearance:none fg:${T.content} bg:${T.base3} shadow:${T.shSm}`,
  primary:    `btn bg:${T.primary}! fg:${T.primaryFg}!`,
  secondary:  `btn bg:${T.secondary}! fg:${T.secondaryFg}!`,
  accent:     `btn bg:${T.accent}! fg:${T.accentFg}!`,
  neutral:    `btn bg:${T.neutral}! fg:${T.neutralFg}!`,
  success:    `btn bg:${T.success}! fg:${T.successFg}!`,
  warning:    `btn bg:${T.warning}! fg:${T.warningFg}!`,
  error:      `btn bg:${T.error}! fg:${T.errorFg}!`,
  ghost:      `btn bg:transparent! shadow:none! fg:${T.primary}! hover:bg:${T.primary}/.1!`,
  outline:    `btn bg:transparent! b:1|solid|${T.primary}! fg:${T.primary}! hover:bg:${T.primary}/.1!`,
  link:       `btn bg:transparent! shadow:none! fg:${T.primary}! hover:text:underline! px:0! h:auto!`,
  xs:         `btn px:2x h:6x font:12! r:${T.rSm}!`,
  sm:         `btn px:3x h:8x font:13!`,
  lg:         `btn px:6x h:12x font:16!`,
  xl:         `btn px:8x h:14x font:18!`,
  wide:       `btn w:full!`,
  square:     `btn px:0! w:10x!`,
  circle:     `btn px:0! w:10x! r:${T.rFull}!`,
}

// ─── BADGE ───────────────────────────────────────────────────────────────────
const badge: ComponentMap = {
  '':         `inline-flex align-items:center justify-content:center px:2x h:6x font:12 font:medium r:${T.rFull} bg:${T.base3} fg:${T.content2}`,
  primary:    `badge bg:${T.primary}! fg:${T.primaryFg}!`,
  secondary:  `badge bg:${T.secondary}! fg:${T.secondaryFg}!`,
  accent:     `badge bg:${T.accent}! fg:${T.accentFg}!`,
  success:    `badge bg:${T.success}! fg:${T.successFg}!`,
  warning:    `badge bg:${T.warning}! fg:${T.warningFg}!`,
  error:      `badge bg:${T.error}! fg:${T.errorFg}!`,
  info:       `badge bg:${T.info}! fg:${T.infoFg}!`,
  ghost:      `badge bg:transparent! b:1|solid|${T.border}!`,
  outline:    `badge bg:transparent! b:1|solid|currentColor!`,
  sm:         `badge h:4x px:1.5x font:11!`,
  lg:         `badge h:8x px:3x font:14!`,
}

// ─── CARD ────────────────────────────────────────────────────────────────────
const card: ComponentMap = {
  '':         `flex flex:col bg:${T.base} r:${T.rXl} shadow:${T.shMd} b:1|solid|${T.border} overflow:hidden`,
  body:       `flex flex:col p:6x gap:4`,
  title:      `font:20 font:semibold fg:${T.content} lh:1.3`,
  actions:    `flex align-items:center gap:3 mt:auto`,
  bordered:   `card b:2|solid|${T.border}! shadow:none!`,
  glass:      `card bg:white/.1 backdrop-blur:12 b:1|solid|white/.2!`,
}

// ─── INPUT ───────────────────────────────────────────────────────────────────
const input: ComponentMap = {
  '':         `flex h:10x w:full r:${T.rMd} b:1|solid|${T.border} bg:${T.base} px:3x font:14 fg:${T.content} outline:none ~border|${T.tFast},box-shadow|${T.tFast} focus:b:${T.primary} focus:ring:3|solid|${T.primary}/.2`,
  sm:         `input h:8x px:2x font:13!`,
  lg:         `input h:12x px:4x font:16!`,
  error:      `input b:${T.error}! focus:ring:3|solid|${T.error}/.2!`,
  success:    `input b:${T.success}! focus:ring:3|solid|${T.success}/.2!`,
  ghost:      `input b:none! bg:${T.base2}!`,
}

// ─── TEXTAREA ────────────────────────────────────────────────────────────────
const textarea: ComponentMap = {
  '': `w:full min-h:24x r:${T.rMd} b:1|solid|${T.border} bg:${T.base} p:3x font:14 fg:${T.content} outline:none ~border|${T.tFast} focus:b:${T.primary} resize:vertical`,
}

// ─── SELECT ──────────────────────────────────────────────────────────────────
const select: ComponentMap = {
  '':   `h:10x w:full r:${T.rMd} b:1|solid|${T.border} bg:${T.base} px:3x font:14 fg:${T.content} outline:none ~border|${T.tFast} focus:b:${T.primary} appearance:none cursor:pointer`,
  sm:   `select h:8x font:13!`,
  lg:   `select h:12x font:16!`,
}

// ─── ALERT ───────────────────────────────────────────────────────────────────
const alert: ComponentMap = {
  '':         `flex align-items:start gap:3 p:4x r:${T.rLg} b:1|solid|transparent`,
  info:       `alert bg:${T.info}/.1 b:${T.info}/.3! fg:${T.info}!`,
  success:    `alert bg:${T.success}/.1 b:${T.success}/.3! fg:${T.success}!`,
  warning:    `alert bg:${T.warning}/.1 b:${T.warning}/.3! fg:${T.warning}!`,
  error:      `alert bg:${T.error}/.1 b:${T.error}/.3! fg:${T.error}!`,
  title:      `font:medium font:15 lh:1`,
  desc:       `font:14 opacity:.8`,
}

// ─── AVATAR ──────────────────────────────────────────────────────────────────
const avatar: ComponentMap = {
  '':          `rel inline-flex`,
  xs:          `w:8x h:8x`,
  sm:          `w:10x h:10x`,
  md:          `w:12x h:12x`,
  lg:          `w:16x h:16x`,
  xl:          `w:24x h:24x`,
  placeholder: `round bg:${T.primary}/.15 fg:${T.primary} font:semibold flex align-items:center justify-content:center`,
  ring:        `outline:3|solid|${T.primary} outline-offset:2`,
}

// ─── NAVBAR ──────────────────────────────────────────────────────────────────
const navbar: ComponentMap = {
  '':           `flex align-items:center w:full px:4x h:16x bg:${T.base} bb:1|solid|${T.border} gap:4`,
  brand:        `flex align-items:center gap:2 font:20 font:bold fg:${T.content} text:none`,
  start:        `flex align-items:center flex:1 gap:1`,
  end:          `flex align-items:center gap:2 ml:auto`,
  center:       `flex align-items:center gap:1`,
  item:         `px:3x py:2x r:${T.rMd} font:14 font:medium fg:${T.content2} ~color|${T.tFast},background|${T.tFast} hover:fg:${T.content} hover:bg:${T.base2} cursor:pointer text:none`,
  'item-active':`navbar-item fg:${T.primary}! bg:${T.primary}/.1!`,
}

// ─── MENU ────────────────────────────────────────────────────────────────────
const menu: ComponentMap = {
  '':           `flex flex:col gap:1 p:2x`,
  item:         `flex align-items:center gap:3 px:3x py:2.5x r:${T.rMd} font:14 font:medium fg:${T.content2} ~color|${T.tFast},background|${T.tFast} hover:fg:${T.content} hover:bg:${T.base2} cursor:pointer text:none`,
  'item-active':`menu-item fg:${T.primary}! bg:${T.primary}/.1!`,
  title:        `px:3x py:2x font:12 font:semibold uppercase letter-spacing:.05em fg:${T.content2}`,
  divider:      `h:1px bg:${T.border} my:2`,
}

// ─── TABS ────────────────────────────────────────────────────────────────────
const tabs: ComponentMap = {
  '':           `flex align-items:end gap:0 bb:2|solid|${T.border}`,
  tab:          `px:4x py:2.5x font:14 font:medium fg:${T.content2} ~color|${T.tFast},border|${T.tFast} cursor:pointer bb:2|solid|transparent mb:-2px hover:fg:${T.content}`,
  'tab-active': `tabs-tab fg:${T.primary}! bb:2|solid|${T.primary}!`,
  boxed:        `tabs bg:${T.base2} p:1x r:${T.rLg} b:none! gap:1`,
  'boxed-tab':  `tabs-tab r:${T.rMd} b:none! mb:0!`,
  'boxed-tab-active': `tabs-boxed-tab fg:${T.primary}! bg:${T.base}! shadow:${T.shSm}`,
}

// ─── TABLE ───────────────────────────────────────────────────────────────────
const table: ComponentMap = {
  '':       `w:full border-collapse:collapse font:14`,
  head:     `bg:${T.base2}`,
  th:       `px:4x py:3x text:left font:semibold fg:${T.content2} font:12 uppercase letter-spacing:.05em bb:1|solid|${T.border}`,
  td:       `px:4x py:3.5x fg:${T.content} bb:1|solid|${T.border}`,
  row:      `~background|${T.tFast} hover:bg:${T.base2}`,
  'row-active': `bg:${T.primary}/.05!`,
  zebra:    `bg:${T.base2}:nth-child(even)`,
  wrapper:  `w:full overflow:auto r:${T.rXl} b:1|solid|${T.border}`,
}

// ─── MODAL ───────────────────────────────────────────────────────────────────
const modal: ComponentMap = {
  '':       `fixed inset:0 z:50 flex align-items:center justify-content:center p:4x bg:black/.5 backdrop-blur:4`,
  box:      `rel bg:${T.base} r:${T.rXl} shadow:${T.shXl} w:full max-w:lg max-h:90vh overflow:auto p:6x flex flex:col gap:4`,
  title:    `font:20 font:semibold fg:${T.content}`,
  body:     `fg:${T.content2} font:15 lh:1.6`,
  actions:  `flex justify-content:end gap:3 mt:2x`,
  close:    `abs top:4x right:4x btn btn-ghost btn-square btn-sm`,
}

// ─── DRAWER ──────────────────────────────────────────────────────────────────
const drawer: ComponentMap = {
  '':       `fixed top:0 left:0 h:full w:72x bg:${T.base} shadow:${T.shXl} b:right:1|solid|${T.border} flex flex:col z:40 ~transform|${T.tNormal}`,
  overlay:  `fixed inset:0 bg:black/.4 backdrop-blur:2 z:30`,
  header:   `flex align-items:center px:4x h:16x bb:1|solid|${T.border} font:18 font:semibold`,
  body:     `flex:1 overflow:auto p:4x`,
  footer:   `p:4x bt:1|solid|${T.border}`,
}

// ─── PROGRESS ────────────────────────────────────────────────────────────────
const progress: ComponentMap = {
  '':       `w:full h:2.5x r:${T.rFull} bg:${T.base3} overflow:hidden`,
  bar:      `h:full bg:${T.primary} r:${T.rFull} ~width|${T.tSlow}`,
  success:  `progress-bar bg:${T.success}!`,
  warning:  `progress-bar bg:${T.warning}!`,
  error:    `progress-bar bg:${T.error}!`,
  sm:       `progress h:1.5x!`,
  lg:       `progress h:4x!`,
}

// ─── SKELETON ────────────────────────────────────────────────────────────────
const skeleton: ComponentMap = {
  '':     `bg:${T.base3} r:${T.rMd} @pulse|1.5s|ease-in-out|infinite`,
  text:   `skeleton h:4x w:full`,
  circle: `skeleton r:${T.rFull}!`,
  rect:   `skeleton r:${T.rSm}!`,
}

// ─── LOADING ─────────────────────────────────────────────────────────────────
const loading: ComponentMap = {
  '':   `inline-block r:${T.rFull} b:2|solid|${T.border} b-top:2|solid|${T.primary} @spin|.7s|linear|infinite`,
  sm:   `loading w:4x h:4x`,
  md:   `loading w:6x h:6x`,
  lg:   `loading w:10x h:10x`,
  xl:   `loading w:16x h:16x`,
}

// ─── TOOLTIP ─────────────────────────────────────────────────────────────────
const tooltip: ComponentMap = {
  '':     `rel inline-flex`,
  text:   `abs bottom:full left:50% translate(-50%,-4px) px:2.5x py:1.5x r:${T.rMd} bg:${T.content} fg:${T.base} font:12 font:medium white-space:nowrap opacity:0 pointer-events:none ~opacity|${T.tFast} mb:1.5x z:50`,
  show:   `tooltip-text opacity:1!`,
}

// ─── DROPDOWN ────────────────────────────────────────────────────────────────
const dropdown: ComponentMap = {
  '':      `rel inline-flex`,
  menu:    `abs top:full left:0 mt:1x min-w:48x bg:${T.base} r:${T.rLg} shadow:${T.shLg} b:1|solid|${T.border} p:1x z:50 flex flex:col gap:0.5`,
  item:    `px:3x py:2x r:${T.rMd} font:14 fg:${T.content} ~background|${T.tFast} hover:bg:${T.base2} cursor:pointer flex align-items:center gap:2.5`,
  divider: `h:1px bg:${T.border} my:1x`,
  label:   `px:3x py:1.5x font:12 font:semibold uppercase letter-spacing:.05em fg:${T.content2}`,
}

// ─── BREADCRUMB ──────────────────────────────────────────────────────────────
const breadcrumb: ComponentMap = {
  '':        `flex align-items:center gap:2 flex-wrap:wrap font:14`,
  item:      `flex align-items:center gap:2 fg:${T.content2}`,
  link:      `fg:${T.primary} ~color|${T.tFast} hover:fg:${T.primary} text:none font:medium`,
  separator: `fg:${T.border}`,
  active:    `fg:${T.content} font:medium`,
}

// ─── PAGINATION ──────────────────────────────────────────────────────────────
const pagination: ComponentMap = {
  '':        `flex align-items:center gap:1`,
  item:      `inline-flex align-items:center justify-content:center w:9x h:9x r:${T.rMd} font:14 font:medium fg:${T.content2} ~background|${T.tFast},color|${T.tFast} hover:bg:${T.base2} hover:fg:${T.content} cursor:pointer border:none bg:transparent`,
  active:    `pagination-item bg:${T.primary}! fg:${T.primaryFg}!`,
  disabled:  `pagination-item opacity:.4! cursor:not-allowed!`,
}

// ─── STAT ────────────────────────────────────────────────────────────────────
const stat: ComponentMap = {
  '':      `flex flex:col gap:1 p:5x bg:${T.base} r:${T.rXl} b:1|solid|${T.border}`,
  title:   `font:13 font:medium fg:${T.content2} uppercase letter-spacing:.08em`,
  value:   `font:32 font:bold fg:${T.content} lh:1.2`,
  desc:    `font:13 fg:${T.content2}`,
  icon:    `w:12x h:12x r:${T.rLg} bg:${T.primary}/.1 fg:${T.primary} flex align-items:center justify-content:center`,
  group:   `grid grid-cols:repeat(auto-fit,minmax(200px,1fr)) gap:4`,
}

// ─── ACCORDION ───────────────────────────────────────────────────────────────
const accordion: ComponentMap = {
  '':       `flex flex:col b:1|solid|${T.border} r:${T.rXl} overflow:hidden`,
  item:     `flex flex:col bb:1|solid|${T.border} last:bb:none`,
  trigger:  `flex align-items:center justify-content:space-between px:4x py:4x font:15 font:medium fg:${T.content} cursor:pointer hover:bg:${T.base2} ~background|${T.tFast}`,
  content:  `px:4x pb:4x font:14 fg:${T.content2} lh:1.7`,
}

// ─── TOAST ───────────────────────────────────────────────────────────────────
const toast: ComponentMap = {
  '':       `fixed bottom:4x right:4x flex flex:col gap:3 z:100 max-w:sm w:full`,
  item:     `flex align-items:start gap:3 px:4x py:3.5x r:${T.rLg} shadow:${T.shLg} bg:${T.base} b:1|solid|${T.border} font:14`,
  success:  `toast-item b:${T.success}! bg:${T.success}/.05!`,
  error:    `toast-item b:${T.error}! bg:${T.error}/.05!`,
  warning:  `toast-item b:${T.warning}! bg:${T.warning}/.05!`,
  close:    `btn btn-ghost btn-xs btn-square ml:auto`,
}

// ─── CHIP ────────────────────────────────────────────────────────────────────
const chip: ComponentMap = {
  '':        `inline-flex align-items:center gap:2 px:3x h:7x r:${T.rFull} font:13 font:medium bg:${T.base3} fg:${T.content} b:1|solid|${T.border}`,
  primary:   `chip bg:${T.primary}/.15! fg:${T.primary}! b:${T.primary}/.3!`,
  secondary: `chip bg:${T.secondary}/.15! fg:${T.secondary}! b:${T.secondary}/.3!`,
  success:   `chip bg:${T.success}/.15! fg:${T.success}! b:${T.success}/.3!`,
  warning:   `chip bg:${T.warning}/.15! fg:${T.warning}! b:${T.warning}/.3!`,
  error:     `chip bg:${T.error}/.15! fg:${T.error}! b:${T.error}/.3!`,
}

// ─── DIVIDER ─────────────────────────────────────────────────────────────────
const divider: ComponentMap = {
  '':        `flex align-items:center gap:4 fg:${T.content2} font:13`,
  line:      `flex:1 h:1px bg:${T.border}`,
  label:     `white-space:nowrap`,
  vertical:  `w:1px bg:${T.border} self:stretch`,
}

// ─── CODE ────────────────────────────────────────────────────────────────────
const code: ComponentMap = {
  '':    `font:14 font:mono px:1.5x py:.5x r:${T.rSm} bg:${T.base3} fg:${T.primary}`,
  block: `code w:full p:4x r:${T.rLg} overflow:auto bg:${T.content} fg:${T.base} lh:1.7 font:13 block`,
}

// ─── STEPS ───────────────────────────────────────────────────────────────────
const steps: ComponentMap = {
  '':           `flex align-items:start gap:0 w:full`,
  step:         `flex:1 flex flex:col align-items:center`,
  bullet:       `w:8x h:8x r:${T.rFull} bg:${T.base3} b:2|solid|${T.border} flex align-items:center justify-content:center font:13 font:semibold fg:${T.content2} z:10`,
  'bullet-active': `steps-bullet bg:${T.primary}! b:${T.primary}! fg:${T.primaryFg}!`,
  line:         `h:2px bg:${T.border} flex:1 mt:4x`,
  'line-done':  `steps-line bg:${T.primary}!`,
  label:        `mt:2x font:13 font:medium fg:${T.content2} text:center`,
  'label-active': `steps-label fg:${T.primary}!`,
}

// ─── HERO ────────────────────────────────────────────────────────────────────
const hero: ComponentMap = {
  '':      `rel flex align-items:center justify-content:center py:24x px:4x text:center bg:${T.base2} overflow:hidden`,
  body:    `rel z:10 flex flex:col align-items:center gap:6 max-w:3xl`,
  title:   `font:48 font:bold fg:${T.content} lh:1.1 tracking-tight font:60@md`,
  sub:     `font:18 fg:${T.content2} lh:1.6 max-w:2xl`,
  actions: `flex align-items:center gap:4 flex-wrap:wrap justify-content:center mt:2x`,
}

// ─── FORM GROUP ──────────────────────────────────────────────────────────────
const formGroup: ComponentMap = {
  '':      `flex flex:col gap:1.5x`,
  label:   `font:14 font:medium fg:${T.content}`,
  hint:    `font:12 fg:${T.content2}`,
  error:   `font:12 fg:${T.error}`,
}

// ─── CONTAINER ───────────────────────────────────────────────────────────────
const container: ComponentMap = {
  '': `max-w:1280 mx:auto px:4x px:6x@sm px:8x@lg w:full`,
}

// ─── SECTION ─────────────────────────────────────────────────────────────────
const section: ComponentMap = {
  '': `py:16x py:24x@md`,
}

// ─── All components export ───────────────────────────────────────────────────

/**
 * The complete components map.
 * Keys are component names (e.g. 'btn', 'card').
 * Values are ComponentMap objects with variant keys.
 */
export const defaultComponents: ComponentsMap = {
  btn,
  badge,
  card,
  input,
  textarea,
  select,
  alert,
  avatar,
  navbar,
  menu,
  tabs,
  table,
  modal,
  drawer,
  progress,
  skeleton,
  loading,
  tooltip,
  dropdown,
  breadcrumb,
  pagination,
  stat,
  accordion,
  toast,
  chip,
  divider,
  code,
  steps,
  hero,
  'form-group': formGroup,
  container,
  section,
}