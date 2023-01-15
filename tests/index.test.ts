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

            <div class="container-min-w-md:underline"></div>
            <div class="container-min-w-md/container1:underline"></div>
            <div class="container-min-w-md/container2:underline"></div>
            <div class="container-min-w-md/container10:underline"></div>

            <div class="container-min-h-md:underline"></div>
            <div class="container-min-h-md/container1:underline"></div>
            <div class="container-min-h-md/container2:underline"></div>
            <div class="container-min-h-md/container10:underline"></div>

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

            <div class="container-min-w-[312px]:underline"></div>
            <div class="container-min-w-[200rem]:underline"></div>
            <div class="container-min-w-[123px]:underline"></div>
            <div class="container-min-w-[123px]/container1:underline"></div>

            <div class="container-min-h-[312px]:underline"></div>
            <div class="container-min-h-[200rem]:underline"></div>
            <div class="container-min-h-[123px]:underline"></div>
            <div class="container-min-h-[123px]/container1:underline"></div>
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

      @container container1 (min-width: 123px) {
        .container-min-w-\[123px\]\/container1\:underline {
          text-decoration-line: underline;
        }
      }

      @container (min-width: 123px) {
        .container-min-w-\[123px\]\:underline {
          text-decoration-line: underline;
        }
      }

      @container (min-width: 200rem) {
        .container-min-w-\[200rem\]\:underline {
          text-decoration-line: underline;
        }
      }

      @container (min-width: 312px) {
        .container-min-w-\[312px\]\:underline {
          text-decoration-line: underline;
        }
      }

      @container container1 (min-width: 768px) {
        .container-min-w-md\/container1\:underline {
          text-decoration-line: underline;
        }
      }

      @container container2 (min-width: 768px) {
        .container-min-w-md\/container2\:underline {
          text-decoration-line: underline;
        }
      }

      @container container10 (min-width: 768px) {
        .container-min-w-md\/container10\:underline {
          text-decoration-line: underline;
        }
      }

      @container (min-width: 768px) {
        .container-min-w-md\:underline {
          text-decoration-line: underline;
        }
      }

      @container container1 (min-height: 123px) {
        .container-min-h-\[123px\]\/container1\:underline {
          text-decoration-line: underline;
        }
      }

      @container (min-height: 123px) {
        .container-min-h-\[123px\]\:underline {
          text-decoration-line: underline;
        }
      }

      @container (min-height: 200rem) {
        .container-min-h-\[200rem\]\:underline {
          text-decoration-line: underline;
        }
      }

      @container (min-height: 312px) {
        .container-min-h-\[312px\]\:underline {
          text-decoration-line: underline;
        }
      }

      @container container1 (min-height: 768px) {
        .container-min-h-md\/container1\:underline {
          text-decoration-line: underline;
        }
      }

      @container container2 (min-height: 768px) {
        .container-min-h-md\/container2\:underline {
          text-decoration-line: underline;
        }
      }

      @container container10 (min-height: 768px) {
        .container-min-h-md\/container10\:underline {
          text-decoration-line: underline;
        }
      }

      @container (min-height: 768px) {
        .container-min-h-md\:underline {
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

            <div class="container-min-w-md:underline"></div>
            <div class="container-min-w-lg:underline"></div>
            <div class="container-min-w-sm:underline"></div>
            <div class="container-min-w-xs:underline"></div>
            <div class="container-min-w-7xl:underline"></div>
            <div class="container-min-w-6xl:underline"></div>
            <div class="container-min-w-3xl:underline"></div>
            <div class="container-min-w-5xl:underline"></div>

            <div class="container-min-h-md:underline"></div>
            <div class="container-min-h-lg:underline"></div>
            <div class="container-min-h-sm:underline"></div>
            <div class="container-min-h-xs:underline"></div>
            <div class="container-min-h-7xl:underline"></div>
            <div class="container-min-h-6xl:underline"></div>
            <div class="container-min-h-3xl:underline"></div>
            <div class="container-min-h-5xl:underline"></div>
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
        .container-min-w-xs\:underline {
          text-decoration-line: underline;
        }
      }

      @container (min-width: 24rem) {
        .container-min-w-sm\:underline {
          text-decoration-line: underline;
        }
      }

      @container (min-width: 28rem) {
        .container-min-w-md\:underline {
          text-decoration-line: underline;
        }
      }

      @container (min-width: 32rem) {
        .container-min-w-lg\:underline {
          text-decoration-line: underline;
        }
      }

      @container (min-width: 48rem) {
        .container-min-w-3xl\:underline {
          text-decoration-line: underline;
        }
      }

      @container (min-width: 64rem) {
        .container-min-w-5xl\:underline {
          text-decoration-line: underline;
        }
      }

      @container (min-width: 72rem) {
        .container-min-w-6xl\:underline {
          text-decoration-line: underline;
        }
      }

      @container (min-width: 80rem) {
        .container-min-w-7xl\:underline {
          text-decoration-line: underline;
        }
      }

      @container (min-height: 20rem) {
        .container-min-h-xs\:underline {
          text-decoration-line: underline;
        }
      }

      @container (min-height: 24rem) {
        .container-min-h-sm\:underline {
          text-decoration-line: underline;
        }
      }

      @container (min-height: 28rem) {
        .container-min-h-md\:underline {
          text-decoration-line: underline;
        }
      }

      @container (min-height: 32rem) {
        .container-min-h-lg\:underline {
          text-decoration-line: underline;
        }
      }

      @container (min-height: 48rem) {
        .container-min-h-3xl\:underline {
          text-decoration-line: underline;
        }
      }

      @container (min-height: 64rem) {
        .container-min-h-5xl\:underline {
          text-decoration-line: underline;
        }
      }

      @container (min-height: 72rem) {
        .container-min-h-6xl\:underline {
          text-decoration-line: underline;
        }
      }

      @container (min-height: 80rem) {
        .container-min-h-7xl\:underline {
          text-decoration-line: underline;
        }
      }
    `)
  })
})
