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

Start by marking an element as a container using the `@container` class, and then applying styles based on the size of that container using the container variants like `@md:`, `@lg:`, and `@xl:`:

```html
<div class="@container">
  <div class="@lg:underline">
    <!-- This text will be underlined when the container is larger than `32rem` -->
  </div>
</div>
```

By default we provide [container sizes](#configuration) from `@xs` (`20rem`) to `@7xl` (`80rem`).

In case of `max-width` container queries:

```html
<div class="@container">
  <div class="@max-lg:underline">
    <!-- This text will be underlined when the container is larger than `32rem` -->
  </div>
</div>
```

or alternatively there is an `atMax` version:

```html
<div class="@container">
  <div class="atMax-lg:underline">
    <!-- This text will be underlined when the container is larger than `32rem` -->
  </div>
</div>
```

### Named containers

You can optionally name containers using a `@container/{name}` class, and then include that name in the container variants using classes like `@lg/{name}:underline`:

```html
<div class="@container/main">
  <!-- ... -->
  <div class="@lg/main:underline">
    <!-- This text will be underlined when the "main" container is larger than `32rem` -->
  </div>
</div>
```

In case of `max-width` container queries:

```html
<div class="@container/main">
  <div class="@max-lg/main:underline">
    <!-- This text will be underlined when the container is larger than `32rem` -->
  </div>
</div>
```

or alternatively the `atMax` version:

```html
<div class="@container/main">
  <div class="atMax-lg/main:underline">
    <!-- This text will be underlined when the container is larger than `32rem` -->
  </div>
</div>
```

### Arbitrary container sizes

In addition to using one of the [container sizes](#configuration) provided by default, you can also create one-off sizes using any arbitrary value:

```html
<div class="@container">
  <div class="@[17.5rem]:underline"></div>
    <!-- This text will be underlined when the container is larger than `17.5rem` -->
  </div>
</div>
```

In case of `max-width` container queries:

```html
<div class="@container">
  <div class="@max-[17.5rem]:underline">
    <!-- This text will be underlined when the container is larger than `32rem` -->
  </div>
</div>
```

or alternatively the `atMax` version:

```html
<div class="@container">
  <div class="atMax-[17.5rem]:underline">
    <!-- This text will be underlined when the container is larger than `32rem` -->
  </div>
</div>
```

### Combining named containers and arbitrary container sizes

You can combine both [named containers](#named-containers) and
[arbitrary container sizes](#arbitrary-container-sizes) this way:

```html
<div class="@container/main">
  <div class="@[17.5rem]/main:underline"></div>
    <!-- This text will be underlined when the container is larger than `17.5rem` -->
  </div>
</div>
```

In case of `max-width` container queries only the `atMax` version is working
because to support extraction of `@max-[17.5rem]/main:underline` by the default
extractor of Tailwind CSS its regular expressions would need to be updated
(or a custom extractor could be used but that is really an advanced topic since it
overrides the default one which does really an excellent job to extract class name
candidates from anywhere).

```html
<div class="@container/main">
  <div class="atMax-[17.5rem]/main:underline">
    <!-- This text will be underlined when the container is larger than `32rem` -->
  </div>
</div>
```



### Removing a container

To stop an element from acting as a container, use the `@container-normal` class.

<div class="@container xl:@container-normal">
  <!-- ... -->
</div>

### With a prefix

If you have configured Tailwind to use a prefix, make sure to prefix both the `@container` class and any classes where you are using a container query modifier:

```html
<div class="tw-@container">
  <!-- ... -->
  <div class="@lg:tw-underline">
    <!-- ... -->
  </div>
</div>
```

## Configuration

By default we ship with the following configured values:

| Name   | CSS                                          |
| ------ | -------------------------------------------- |
| `@xs`  | `@container (min-width: 20rem /* 320px */)`  |
| `@sm`  | `@container (min-width: 24rem /* 384px */)`  |
| `@md`  | `@container (min-width: 28rem /* 448px */)`  |
| `@lg`  | `@container (min-width: 32rem /* 512px */)`  |
| `@xl`  | `@container (min-width: 36rem /* 576px */)`  |
| `@2xl` | `@container (min-width: 42rem /* 672px */)`  |
| `@3xl` | `@container (min-width: 48rem /* 768px */)`  |
| `@4xl` | `@container (min-width: 56rem /* 896px */)`  |
| `@5xl` | `@container (min-width: 64rem /* 1024px */)` |
| `@6xl` | `@container (min-width: 72rem /* 1152px */)` |
| `@7xl` | `@container (min-width: 80rem /* 1280px */)` |

You can configure which values are available for this plugin under the `containers` key in your `tailwind.config.js` file:

```js
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      containers: {
        '2xs': '16rem',
      },
    },
  },
}
```
