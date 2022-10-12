# @tailwindcss/container-queries

A plugin that provides utilities for container queries.


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

TODO

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
