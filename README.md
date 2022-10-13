# @tailwindcss/container-queries

A plugin for Tailwind CSS v3.2+ that provides utilities for container queries.

## Installation

Install the plugin from npm:

```sh
npm install @tailwindcss/container-queries
```

Then add the plugin to your `tailwind.config.js` file:

```js
// tailwind.config.js
module.exports = {
  theme: {
    // ...
  },
  plugins: [
    require('@tailwindcss/container-queries'),
    // ...
  ],
}
```

## Usage

```html
<!-- Container queries without a specific container name -->
<div>
  <!-- Container query with a size of `lg` defined in your tailwind.config.js file -->
  <div class="@lg:underline"></div>
  <div class="@[(min-width:_1024px)]:underline"></div>
  <div class="@[1024px]:underline"></div>
</div>

<!-- Container queries that apply for a defined container name -->
<div class="container/sidebar">
  <div class="@lg/sidebar:underline"></div>
  <div class="@[(min-width:_1024px)]/sidebar:underline"></div>
  <div class="@[1024px]/sidebar:underline"></div>
</div>
```

Named containers look like this:

```css
/* `container/sidebar` results in: */
.container\/sidebar {
  container-type: inline;
  container-name: sidebar;
}

/* `container-inline/sidebar` results in: */
.container-inline\/sidebar {
  container-type: inline;
  container-name: sidebar;
}

/* `container-block/sidebar` results in: */
.container-block\/sidebar {
  container-type: block;
  container-name: sidebar;
}

/* `container-[size]/sidebar` results in: */
.container-\[size\]\/sidebar {
  container-type: size;
  container-name: sidebar;
}
```

## Configuration

You can configure which values are available for this plugin under the `containers` key in your `tailwind.config.js` file:

```js
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      containers: {
        xs: '(min-width: 20rem)',
        sm: '(min-width: 24rem)',
        md: '(min-width: 28rem)',
        lg: '(min-width: 32rem)',
        xl: '(min-width: 36rem)',
        // etc...
      }
    }
  },
}
```
