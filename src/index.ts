import plugin from 'tailwindcss/plugin'

type ContainerValue = string | { min?: string; max?: string }
type QueryType = 'min-width' | 'max-width'

export = plugin(
  function containerQueries({ matchUtilities, matchVariant, theme }) {
    let values: Record<string, ContainerValue> = theme('containers') ?? {}

    // Process the container values to support both string and object formats
    let processedValues: Record<string, string> = {}
    let queryTypes: Record<string, QueryType> = {}

    // Transform the theme values into a format we can use
    for (const [key, value] of Object.entries(values)) {
      if (typeof value === 'string') {
        // String value - use as min-width (original behavior)
        processedValues[key] = value
        queryTypes[key] = 'min-width'
      } else if (typeof value === 'object' && value !== null) {
        // Object with min/max properties
        if (value.min) {
          processedValues[key] = value.min
          queryTypes[key] = 'min-width'
        } else if (value.max) {
          processedValues[key] = value.max
          queryTypes[key] = 'max-width'
        }
      }
    }

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

    matchVariant(
      '@',
      (value = '', { modifier }) => {
        let parsed = parseValue(value)

        // Find the key for this value to determine query type
        const key = Object.keys(processedValues).find(k => processedValues[k] === value)
        const queryType = key ? queryTypes[key] : 'min-width'

        return parsed !== null ? `@container ${modifier ?? ''} (${queryType}: ${value})` : []
      },
      {
        values: processedValues,
        sort(aVariant, zVariant) {
          let a = parseFloat(aVariant.value)
          let z = parseFloat(zVariant.value)

          if (a === null || z === null) return 0

          // Find keys to determine query types
          const aKey = Object.keys(processedValues).find(k => processedValues[k] === aVariant.value)
          const zKey = Object.keys(processedValues).find(k => processedValues[k] === zVariant.value)

          const aType = aKey ? queryTypes[aKey] : 'min-width'
          const zType = zKey ? queryTypes[zKey] : 'min-width'

          // If they have different types, sort max-width first
          if (aType !== zType) {
            return aType === 'max-width' ? -1 : 1
          }

          // For max-width queries, we want descending order
          if (aType === 'max-width') {
            if (a - z !== 0) return z - a
          } else {
            // Original sort logic for min-width
            if (a - z !== 0) return a - z
          }

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
        },
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
