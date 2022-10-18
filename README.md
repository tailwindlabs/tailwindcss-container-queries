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
<div class="@container">
  <!-- Container query with a size of `lg` defined in your tailwind.config.js file -->
  <div class="@lg:underline"></div>
  <div class="@[1024px]:underline"></div>
</div>

<!-- Container queries that apply for a defined container name -->
<div class="@container/sidebar">
  <div class="@lg/sidebar:underline"></div>
  <div class="@[1024px]/sidebar:underline"></div>
</div>
```

### Container types

| Class                       | css                                                     |
| --------------------------- | ------------------------------------------------------- |
| `@container`                | `container-type: inline-size;`                          |
| `@container/sidebar`        | `container-type: inline-size; container-name: sidebar;` |
| `@container-normal`         | `container-type: normal;`                               |
| `@container-normal/sidebar` | `container-type: inline-size; container-name: sidebar;` |

## Configuration

By default we ship with the following configured values:

| Name  | Value   |
| ----- | ------- |
| `xs`  | `20rem` |
| `sm`  | `24rem` |
| `md`  | `28rem` |
| `lg`  | `32rem` |
| `xl`  | `36rem` |
| `2xl` | `42rem` |
| `3xl` | `48rem` |
| `4xl` | `56rem` |
| `5xl` | `64rem` |
| `6xl` | `72rem` |
| `7xl` | `80rem` |

You can configure which values are available for this plugin under the `containers` key in your `tailwind.config.js` file:

```js
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      containers: {
        xs: '20rem',
        sm: '24rem',
        md: '28rem',
        lg: '32rem',
        xl: '36rem',
        // etc...
      },
    },
  },
}
```
