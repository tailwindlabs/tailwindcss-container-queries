import { expect } from '@jest/globals'
import { css, html, run } from './run'

it('container queries', () => {
  let config = {
    content: [
      {
        raw: html`
          <div
            class="@container @container-normal @container/sidebar @container-normal/sidebar @container-[size]/sidebar"
          >
            <div class="@md:underline"></div>
            <div class="@md/container1:underline"></div>
            <div class="@md/container2:underline"></div>
            <div class="@md/container10:underline"></div>

            <div class="@sm:underline"></div>
            <div class="@sm/container1:underline"></div>
            <div class="@sm/container2:underline"></div>
            <div class="@sm/container10:underline"></div>

            <div class="@lg:underline"></div>
            <div class="@lg/container1:underline"></div>
            <div class="@lg/container2:underline"></div>
            <div class="@lg/container10:underline"></div>
            <div class="@[1024px]:underline"></div>
            <div class="@[1024px]/container1:underline"></div>
            <div class="@[1024]/container1:underline"></div>

            <div class="@[312px]:underline"></div>
            <div class="@[200rem]:underline"></div>
            <div class="@[123px]:underline"></div>
          </div>
        `,
      },
    ],
    theme: {
      containers: {
        sm: '320px',
        md: '768px',
        lg: '1024px',
      },
    },
    corePlugins: { preflight: false },
  }

  let input = css`
    @tailwind utilities;
  `

  return run(input, config).then((result) => {
    expect(result.css).toMatchFormattedCss(css`
      .\@container {
        container-type: inline-size;
      }

      .\@container-normal {
        container-type: normal;
      }

      .\@container\/sidebar {
        container-type: inline-size;
        container-name: sidebar;
      }

      .\@container-normal\/sidebar {
        container-type: normal;
        container-name: sidebar;
      }

      @container (min-width: 123px) {
        .\@\[123px\]\:underline {
          text-decoration-line: underline;
        }
      }

      @container (min-width: 200rem) {
        .\@\[200rem\]\:underline {
          text-decoration-line: underline;
        }
      }

      @container (min-width: 312px) {
        .\@\[312px\]\:underline {
          text-decoration-line: underline;
        }
      }

      @container container1 (min-width: 320px) {
        .\@sm\/container1\:underline {
          text-decoration-line: underline;
        }
      }

      @container container2 (min-width: 320px) {
        .\@sm\/container2\:underline {
          text-decoration-line: underline;
        }
      }

      @container container10 (min-width: 320px) {
        .\@sm\/container10\:underline {
          text-decoration-line: underline;
        }
      }

      @container (min-width: 320px) {
        .\@sm\:underline {
          text-decoration-line: underline;
        }
      }

      @container container1 (min-width: 768px) {
        .\@md\/container1\:underline {
          text-decoration-line: underline;
        }
      }

      @container container2 (min-width: 768px) {
        .\@md\/container2\:underline {
          text-decoration-line: underline;
        }
      }

      @container container10 (min-width: 768px) {
        .\@md\/container10\:underline {
          text-decoration-line: underline;
        }
      }

      @container (min-width: 768px) {
        .\@md\:underline {
          text-decoration-line: underline;
        }
      }

      @container container1 (min-width: 1024px) {
        .\@lg\/container1\:underline {
          text-decoration-line: underline;
        }
        .\@\[1024px\]\/container1\:underline {
          text-decoration-line: underline;
        }
      }

      @container container2 (min-width: 1024px) {
        .\@lg\/container2\:underline {
          text-decoration-line: underline;
        }
      }

      @container container10 (min-width: 1024px) {
        .\@lg\/container10\:underline {
          text-decoration-line: underline;
        }
      }

      @container (min-width: 1024px) {
        .\@lg\:underline {
          text-decoration-line: underline;
        }
        .\@\[1024px\]\:underline {
          text-decoration-line: underline;
        }
      }
    `)
  })
})

it('should be possible to use default container queries', () => {
  let config = {
    content: [
      {
        raw: html`
          <div>
            <div class="@md:underline"></div>
            <div class="@lg:underline"></div>
            <div class="@sm:underline"></div>
            <div class="@xs:underline"></div>
            <div class="@7xl:underline"></div>
            <div class="@6xl:underline"></div>
            <div class="@3xl:underline"></div>
            <div class="@5xl:underline"></div>
          </div>
        `,
      },
    ],
    theme: {},
    corePlugins: { preflight: false },
  }

  let input = css`
    @tailwind utilities;
  `

  return run(input, config).then((result) => {
    expect(result.css).toMatchFormattedCss(css`
      @container (min-width: 20rem) {
        .\@xs\:underline {
          text-decoration-line: underline;
        }
      }

      @container (min-width: 24rem) {
        .\@sm\:underline {
          text-decoration-line: underline;
        }
      }

      @container (min-width: 28rem) {
        .\@md\:underline {
          text-decoration-line: underline;
        }
      }

      @container (min-width: 32rem) {
        .\@lg\:underline {
          text-decoration-line: underline;
        }
      }

      @container (min-width: 48rem) {
        .\@3xl\:underline {
          text-decoration-line: underline;
        }
      }

      @container (min-width: 64rem) {
        .\@5xl\:underline {
          text-decoration-line: underline;
        }
      }

      @container (min-width: 72rem) {
        .\@6xl\:underline {
          text-decoration-line: underline;
        }
      }

      @container (min-width: 80rem) {
        .\@7xl\:underline {
          text-decoration-line: underline;
        }
      }
    `)
  })
})

it('max-width container queries', () => {
  let config = {
    content: [
      {
        raw: html`
          <div
            class="@container @container-normal @container/sidebar @container-normal/sidebar @container-[size]/sidebar"
          >
            <div class="@max-md:underline"></div>
            <div class="@max-md/container1:underline"></div>
            <div class="@max-md/container2:underline"></div>
            <div class="@max-md/container10:underline"></div>

            <div class="@max-sm:underline"></div>
            <div class="@max-sm/container1:underline"></div>
            <div class="@max-sm/container2:underline"></div>
            <div class="@max-sm/container10:underline"></div>

            <div class="@max-lg:underline"></div>
            <div class="@max-lg/container1:underline"></div>
            <div class="@max-lg/container2:underline"></div>
            <div class="@max-lg/container10:underline"></div>
            <div class="@max-[1024px]:underline"></div>
<!--        These are not working with the current defaultExtractor:
            <div class="@max-[1024px]/container1:underline"></div>
            <div class="@max-[1024]/container1:underline"></div>
-->

            <div class="@max-[312px]:underline"></div>
            <div class="@max-[200rem]:underline"></div>
            <div class="@max-[123px]:underline"></div>
          </div>
        `,
      },
    ],
    theme: {
      containers: {
        sm: '320px',
        md: '768px',
        lg: '1024px',
      },
    },
    corePlugins: { preflight: false },
  }

  let input = css`
    @tailwind utilities;
  `

  return run(input, config).then((result) => {
    expect(result.css).toMatchFormattedCss(css`
      .\@container {
        container-type: inline-size;
      }

      .\@container-normal {
        container-type: normal;
      }

      .\@container\/sidebar {
        container-type: inline-size;
        container-name: sidebar;
      }

      .\@container-normal\/sidebar {
        container-type: normal;
        container-name: sidebar;
      }

      @container (max-width: 123px) {
        .\@max-\[123px\]\:underline {
          text-decoration-line: underline;
        }
      }

      @container (max-width: 200rem) {
        .\@max-\[200rem\]\:underline {
          text-decoration-line: underline;
        }
      }

      @container (max-width: 312px) {
        .\@max-\[312px\]\:underline {
          text-decoration-line: underline;
        }
      }

      @container container1 (max-width: 320px) {
        .\@max-sm\/container1\:underline {
          text-decoration-line: underline;
        }
      }

      @container container2 (max-width: 320px) {
        .\@max-sm\/container2\:underline {
          text-decoration-line: underline;
        }
      }

      @container container10 (max-width: 320px) {
        .\@max-sm\/container10\:underline {
          text-decoration-line: underline;
        }
      }

      @container (max-width: 320px) {
        .\@max-sm\:underline {
          text-decoration-line: underline;
        }
      }

      @container container1 (max-width: 768px) {
        .\@max-md\/container1\:underline {
          text-decoration-line: underline;
        }
      }

      @container container2 (max-width: 768px) {
        .\@max-md\/container2\:underline {
          text-decoration-line: underline;
        }
      }

      @container container10 (max-width: 768px) {
        .\@max-md\/container10\:underline {
          text-decoration-line: underline;
        }
      }

      @container (max-width: 768px) {
        .\@max-md\:underline {
          text-decoration-line: underline;
        }
      }

      @container container1 (max-width: 1024px) {
        .\@max-lg\/container1\:underline {
          text-decoration-line: underline;
        }
      }

      @container container2 (max-width: 1024px) {
        .\@max-lg\/container2\:underline {
          text-decoration-line: underline;
        }
      }

      @container container10 (max-width: 1024px) {
        .\@max-lg\/container10\:underline {
          text-decoration-line: underline;
        }
      }

      @container (max-width: 1024px) {
        .\@max-lg\:underline {
          text-decoration-line: underline;
        }
        .\@max-\[1024px\]\:underline {
          text-decoration-line: underline;
        }
      }
    `)
  })
})

it('should be possible to use default max-width container queries', () => {
  let config = {
    content: [
      {
        raw: html`
          <div>
            <div class="@max-md:underline"></div>
            <div class="@max-lg:underline"></div>
            <div class="@max-sm:underline"></div>
            <div class="@max-xs:underline"></div>
            <div class="@max-7xl:underline"></div>
            <div class="@max-6xl:underline"></div>
            <div class="@max-3xl:underline"></div>
            <div class="@max-5xl:underline"></div>
          </div>
        `,
      },
    ],
    theme: {},
    corePlugins: { preflight: false },
  }

  let input = css`
    @tailwind utilities;
  `

  return run(input, config).then((result) => {
    expect(result.css).toMatchFormattedCss(css`
      @container (max-width: 20rem) {
        .\@max-xs\:underline {
          text-decoration-line: underline;
        }
      }

      @container (max-width: 24rem) {
        .\@max-sm\:underline {
          text-decoration-line: underline;
        }
      }

      @container (max-width: 28rem) {
        .\@max-md\:underline {
          text-decoration-line: underline;
        }
      }

      @container (max-width: 32rem) {
        .\@max-lg\:underline {
          text-decoration-line: underline;
        }
      }

      @container (max-width: 48rem) {
        .\@max-3xl\:underline {
          text-decoration-line: underline;
        }
      }

      @container (max-width: 64rem) {
        .\@max-5xl\:underline {
          text-decoration-line: underline;
        }
      }

      @container (max-width: 72rem) {
        .\@max-6xl\:underline {
          text-decoration-line: underline;
        }
      }

      @container (max-width: 80rem) {
        .\@max-7xl\:underline {
          text-decoration-line: underline;
        }
      }
    `)
  })
})

it('atMax max-width container queries', () => {
  let config = {
    content: [
      {
        raw: html`
          <div
            class="@container @container-normal @container/sidebar @container-normal/sidebar @container-[size]/sidebar"
          >
            <div class="atMax-md:underline"></div>
            <div class="atMax-md/container1:underline"></div>
            <div class="atMax-md/container2:underline"></div>
            <div class="atMax-md/container10:underline"></div>

            <div class="atMax-sm:underline"></div>
            <div class="atMax-sm/container1:underline"></div>
            <div class="atMax-sm/container2:underline"></div>
            <div class="atMax-sm/container10:underline"></div>

            <div class="atMax-lg:underline"></div>
            <div class="atMax-lg/container1:underline"></div>
            <div class="atMax-lg/container2:underline"></div>
            <div class="atMax-lg/container10:underline"></div>
            <div class="atMax-[1024px]:underline"></div>
            <div class="atMax-[1024px]/container1:underline"></div>
            <div class="atMax-[1024]/container1:underline"></div>

            <div class="atMax-[312px]:underline"></div>
            <div class="atMax-[200rem]:underline"></div>
            <div class="atMax-[123px]:underline"></div>
          </div>
        `,
      },
    ],
    theme: {
      containers: {
        sm: '320px',
        md: '768px',
        lg: '1024px',
      },
    },
    corePlugins: { preflight: false },
  }

  let input = css`
    @tailwind utilities;
  `

  return run(input, config).then((result) => {
    expect(result.css).toMatchFormattedCss(css`
      .\@container {
        container-type: inline-size;
      }

      .\@container-normal {
        container-type: normal;
      }

      .\@container\/sidebar {
        container-type: inline-size;
        container-name: sidebar;
      }

      .\@container-normal\/sidebar {
        container-type: normal;
        container-name: sidebar;
      }

      @container (max-width: 123px) {
        .atMax-\[123px\]\:underline {
          text-decoration-line: underline;
        }
      }

      @container (max-width: 200rem) {
        .atMax-\[200rem\]\:underline {
          text-decoration-line: underline;
        }
      }

      @container (max-width: 312px) {
        .atMax-\[312px\]\:underline {
          text-decoration-line: underline;
        }
      }

      @container container1 (max-width: 320px) {
        .atMax-sm\/container1\:underline {
          text-decoration-line: underline;
        }
      }

      @container container2 (max-width: 320px) {
        .atMax-sm\/container2\:underline {
          text-decoration-line: underline;
        }
      }

      @container container10 (max-width: 320px) {
        .atMax-sm\/container10\:underline {
          text-decoration-line: underline;
        }
      }

      @container (max-width: 320px) {
        .atMax-sm\:underline {
          text-decoration-line: underline;
        }
      }

      @container container1 (max-width: 768px) {
        .atMax-md\/container1\:underline {
          text-decoration-line: underline;
        }
      }

      @container container2 (max-width: 768px) {
        .atMax-md\/container2\:underline {
          text-decoration-line: underline;
        }
      }

      @container container10 (max-width: 768px) {
        .atMax-md\/container10\:underline {
          text-decoration-line: underline;
        }
      }

      @container (max-width: 768px) {
        .atMax-md\:underline {
          text-decoration-line: underline;
        }
      }

      @container container1 (max-width: 1024px) {
        .atMax-lg\/container1\:underline {
          text-decoration-line: underline;
        }
      
        .atMax-\[1024px\]\/container1\:underline {
          text-decoration-line: underline;
        }
      }

      @container container2 (max-width: 1024px) {
        .atMax-lg\/container2\:underline {
          text-decoration-line: underline;
        }
      }

      @container container10 (max-width: 1024px) {
        .atMax-lg\/container10\:underline {
          text-decoration-line: underline;
        }
    }

      @container (max-width: 1024px) {
        .atMax-lg\:underline {
          text-decoration-line: underline;
        }
        .atMax-\[1024px\]\:underline {
          text-decoration-line: underline;
        }
      }
    `)
  })
})

it('should be possible to use default atMax max-width container queries', () => {
  let config = {
    content: [
      {
        raw: html`
          <div>
            <div class="atMax-md:underline"></div>
            <div class="atMax-lg:underline"></div>
            <div class="atMax-sm:underline"></div>
            <div class="atMax-xs:underline"></div>
            <div class="atMax-7xl:underline"></div>
            <div class="atMax-6xl:underline"></div>
            <div class="atMax-3xl:underline"></div>
            <div class="atMax-5xl:underline"></div>
          </div>
        `,
      },
    ],
    theme: {},
    corePlugins: { preflight: false },
  }

  let input = css`
    @tailwind utilities;
  `

  return run(input, config).then((result) => {
    expect(result.css).toMatchFormattedCss(css`
      @container (max-width: 20rem) {
        .atMax-xs\:underline {
          text-decoration-line: underline;
        }
      }

      @container (max-width: 24rem) {
        .atMax-sm\:underline {
          text-decoration-line: underline;
        }
      }

      @container (max-width: 28rem) {
        .atMax-md\:underline {
          text-decoration-line: underline;
        }
      }

      @container (max-width: 32rem) {
        .atMax-lg\:underline {
          text-decoration-line: underline;
        }
      }

      @container (max-width: 48rem) {
        .atMax-3xl\:underline {
          text-decoration-line: underline;
        }
      }

      @container (max-width: 64rem) {
        .atMax-5xl\:underline {
          text-decoration-line: underline;
        }
      }

      @container (max-width: 72rem) {
        .atMax-6xl\:underline {
          text-decoration-line: underline;
        }
      }

      @container (max-width: 80rem) {
        .atMax-7xl\:underline {
          text-decoration-line: underline;
        }
      }
    `)
  })
})
