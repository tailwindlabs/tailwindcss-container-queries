import { expect } from '@jest/globals'
import { html, css, run } from './run'

it('container queries', () => {
  let config = {
    content: [
      {
        raw: html`
          <div
            class="@container @container-normal @container/sidebar @container-normal/sidebar @container-[inline-size]/sidebar"
          >
            <div class="@md:underline"></div>
            <div class="@md/container1:underline"></div>
            <div class="@md/container2:underline"></div>
            <div class="@md/container10:underline"></div>

            <div class="@w-md:underline"></div>
            <div class="@w-md/container1:underline"></div>
            <div class="@w-md/container2:underline"></div>
            <div class="@w-md/container10:underline"></div>

            <div class="@h-md:underline"></div>
            <div class="@h-md/container1:underline"></div>
            <div class="@h-md/container2:underline"></div>
            <div class="@h-md/container10:underline"></div>

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

            <div class="@w-[312px]:underline"></div>
            <div class="@w-[200rem]:underline"></div>
            <div class="@w-[123px]:underline"></div>

            <div class="@h-[312px]:underline"></div>
            <div class="@h-[200rem]:underline"></div>
            <div class="@h-[123px]:underline"></div>
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
        container-type: size;
      }

      .\@container-normal {
        container-type: normal;
      }

      .\@container\/sidebar {
        container-type: size;
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

      @container (min-width: 123px) {
        .\@w-\[123px\]\:underline {
          text-decoration-line: underline;
        }
      }

      @container (min-width: 200rem) {
        .\@w-\[200rem\]\:underline {
          text-decoration-line: underline;
        }
      }

      @container (min-width: 312px) {
        .\@w-\[312px\]\:underline {
          text-decoration-line: underline;
        }
      }

      @container container1 (min-width: 768px) {
        .\@w-md\/container1\:underline {
          text-decoration-line: underline;
        }
      }

      @container container2 (min-width: 768px) {
        .\@w-md\/container2\:underline {
          text-decoration-line: underline;
        }
      }

      @container container10 (min-width: 768px) {
        .\@w-md\/container10\:underline {
          text-decoration-line: underline;
        }
      }

      @container (min-width: 768px) {
        .\@w-md\:underline {
          text-decoration-line: underline;
        }
      }

      @container (min-height: 123px) {
        .\@h-\[123px\]\:underline {
          text-decoration-line: underline;
        }
      }

      @container (min-height: 200rem) {
        .\@h-\[200rem\]\:underline {
          text-decoration-line: underline;
        }
      }

      @container (min-height: 312px) {
        .\@h-\[312px\]\:underline {
          text-decoration-line: underline;
        }
      }

      @container container1 (min-height: 768px) {
        .\@h-md\/container1\:underline {
          text-decoration-line: underline;
        }
      }

      @container container2 (min-height: 768px) {
        .\@h-md\/container2\:underline {
          text-decoration-line: underline;
        }
      }

      @container container10 (min-height: 768px) {
        .\@h-md\/container10\:underline {
          text-decoration-line: underline;
        }
      }

      @container (min-height: 768px) {
        .\@h-md\:underline {
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

            <div class="@w-md:underline"></div>
            <div class="@w-lg:underline"></div>
            <div class="@w-sm:underline"></div>
            <div class="@w-xs:underline"></div>
            <div class="@w-7xl:underline"></div>
            <div class="@w-6xl:underline"></div>
            <div class="@w-3xl:underline"></div>
            <div class="@w-5xl:underline"></div>

            <div class="@h-md:underline"></div>
            <div class="@h-lg:underline"></div>
            <div class="@h-sm:underline"></div>
            <div class="@h-xs:underline"></div>
            <div class="@h-7xl:underline"></div>
            <div class="@h-6xl:underline"></div>
            <div class="@h-3xl:underline"></div>
            <div class="@h-5xl:underline"></div>
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

      @container (min-width: 20rem) {
        .\@w-xs\:underline {
          text-decoration-line: underline;
        }
      }

      @container (min-width: 24rem) {
        .\@w-sm\:underline {
          text-decoration-line: underline;
        }
      }

      @container (min-width: 28rem) {
        .\@w-md\:underline {
          text-decoration-line: underline;
        }
      }

      @container (min-width: 32rem) {
        .\@w-lg\:underline {
          text-decoration-line: underline;
        }
      }

      @container (min-width: 48rem) {
        .\@w-3xl\:underline {
          text-decoration-line: underline;
        }
      }

      @container (min-width: 64rem) {
        .\@w-5xl\:underline {
          text-decoration-line: underline;
        }
      }

      @container (min-width: 72rem) {
        .\@w-6xl\:underline {
          text-decoration-line: underline;
        }
      }

      @container (min-width: 80rem) {
        .\@w-7xl\:underline {
          text-decoration-line: underline;
        }
      }

      @container (min-height: 20rem) {
        .\@h-xs\:underline {
          text-decoration-line: underline;
        }
      }

      @container (min-height: 24rem) {
        .\@h-sm\:underline {
          text-decoration-line: underline;
        }
      }

      @container (min-height: 28rem) {
        .\@h-md\:underline {
          text-decoration-line: underline;
        }
      }

      @container (min-height: 32rem) {
        .\@h-lg\:underline {
          text-decoration-line: underline;
        }
      }

      @container (min-height: 48rem) {
        .\@h-3xl\:underline {
          text-decoration-line: underline;
        }
      }

      @container (min-height: 64rem) {
        .\@h-5xl\:underline {
          text-decoration-line: underline;
        }
      }

      @container (min-height: 72rem) {
        .\@h-6xl\:underline {
          text-decoration-line: underline;
        }
      }

      @container (min-height: 80rem) {
        .\@h-7xl\:underline {
          text-decoration-line: underline;
        }
      }
    `)
  })
})
