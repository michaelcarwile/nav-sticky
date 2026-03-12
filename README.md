# nav-sticky

Minimal jQuery snippet that makes a nav bar sticky on scroll.

## How it works

On each scroll event, `sticky_relocate()` compares the window's scroll position against the top offset of `#nav-anchor`. When the user scrolls past the anchor, it adds the `.stick` class to `#nav`. When they scroll back up, it removes it.

## Usage

**HTML structure**

```html
<!-- Anchor element — place this just above your nav -->
<div id="nav-anchor"></div>

<nav id="nav">
  <!-- your navigation -->
</nav>
```

**CSS**

```css
#nav.stick {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 100;
}
```

**Include the script** (after jQuery)

```html
<script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
<script src="nav-sticky.js"></script>
```

## Dependency

Requires [jQuery](https://jquery.com/). The snippet uses `$.scrollTop()`, `$.offset()`, `$.addClass()`, and `$.removeClass()`.
