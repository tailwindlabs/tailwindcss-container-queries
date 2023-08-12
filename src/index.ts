import plugin from 'tailwindcss/plugin'

export = plugin(
  function containerQueries({ matchUtilities, matchVariant, theme }) {
    let values: Record<string, string> = theme('containers') ?? {}

    function parseValue(value: string) {
      let numericValue = value.match(/^(\d+\.\d+|\d+|\.\d+)\D+/)?.[1] ?? null
      if (numericValue === null) return null

      return parseFloat(value)
    }

    matchUtilities(
      {
        '@container': (value, { modifier }) => {
          return {
            'container-type': value,
            'container-name': modifier,
          }
        },
      },
      {
        values: {
          DEFAULT: 'inline-size',
          normal: 'normal',
        },
        modifiers: 'any',
      }
    )

    const sort: (
      a: { value: string; modifier: string | null },
      b: { value: string; modifier: string | null }
    ) => number = (aVariant, zVariant) => {
      let a = parseFloat(aVariant.value)
      let z = parseFloat(zVariant.value)

      if (a === null || z === null) return 0

      // Sort values themselves regardless of unit
      if (a - z !== 0) return a - z

      let aLabel = aVariant.modifier ?? ''
      let zLabel = zVariant.modifier ?? ''

      // Explicitly move empty labels to the end
      if (aLabel === '' && zLabel !== '') {
        return 1
      } else if (aLabel !== '' && zLabel === '') {
        return -1
      }

      // Sort labels alphabetically in the English locale
      // We are intentionally overriding the locale because we do not want the sort to
      // be affected by the machine's locale (be it a developer or CI environment)
      return aLabel.localeCompare(zLabel, 'en', { numeric: true })
    }

    matchVariant(
      '@max',
      (value = '', { modifier }) => {
        let parsed = parseValue(value)

        return parsed !== null ? `@container ${modifier ?? ''} (max-width: ${value})` : []
      },
      {
        values,
        sort,
      }
    )

    matchVariant(
      '@',
      (value = '', { modifier }) => {
        let parsed = parseValue(value)

        return parsed !== null ? `@container ${modifier ?? ''} (min-width: ${value})` : []
      },
      {
        values,
        sort,
      }
    )

  },
  {
    theme: {
      containers: {
        xs: '20rem',
        sm: '24rem',
        md: '28rem',
        lg: '32rem',
        xl: '36rem',
        '2xl': '42rem',
        '3xl': '48rem',
        '4xl': '56rem',
        '5xl': '64rem',
        '6xl': '72rem',
        '7xl': '80rem',
      },
    },
  }
)
