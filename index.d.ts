declare global {
  namespace jest {
    interface Matchers<R> {
      toMatchFormattedCss(expected: string): CustomMatcherResult
    }
  }
}

declare module 'tailwindcss' {
  export interface Config {
    theme: {
      /** Container queries */
      containers: Record<string, string>
    }
  }
}

export {}
