import { html, css, run } from '~/jest/run'

it('container queries', () => {
  let config = {
    content: [
      {
        raw: html`
          <div>
            <div class="@md:underline"></div>
            <div class="@md/container1:underline"></div>
            <div class="@md/container2:underline"></div>
            <div class="@md/container10:underline"></div>
            <div class="@[(min-width:_768px)]:underline"></div>
            <div class="@[(min-width:_768px)]/container1:underline"></div>

            <div class="@sm:underline"></div>
            <div class="@sm/container1:underline"></div>
            <div class="@sm/container2:underline"></div>
            <div class="@sm/container10:underline"></div>
            <div class="@[(min-width:_320px)]:underline"></div>
            <div class="@[(min-width:_320px)]/container1:underline"></div>

            <div class="@lg:underline"></div>
            <div class="@lg/container1:underline"></div>
            <div class="@lg/container2:underline"></div>
            <div class="@lg/container10:underline"></div>
            <div class="@[(min-width:_1024px)]:underline"></div>
            <div class="@[(min-width:_1024px)]/container1:underline"></div>
            <div class="@[1024px]:underline"></div>
            <div class="@[1024px]/container1:underline"></div>
            <div class="@[1024]/container1:underline"></div>

            <div class="@[(min-width:_280px)_and_(max-width:_300px)]:underline"></div>
            <div class="@[(min-width:_290px)_and_(max-width:_300px)]:underline"></div>
            <div class="@[(min-width:_290px)_and_(max-width:_500px)]:underline"></div>
          </div>
        `,
      },
    ],
    theme: {
      containers: {
        sm: '(min-width: 320px)',
        md: '(min-width: 768px)',
        lg: '(min-width: 1024px)',
      },
    },
    corePlugins: { preflight: false },
  }

  let input = css`
    @tailwind utilities;
  `

  return run(input, config).then((result) => {
    expect(result.css).toMatchFormattedCss(css`
      @container (min-width: 280px) and (max-width: 300px) {
        .\@\[\(min-width\:_280px\)_and_\(max-width\:_300px\)\]\:underline {
          text-decoration-line: underline;
        }
      }
      @container (min-width: 290px) and (max-width: 500px) {
        .\@\[\(min-width\:_290px\)_and_\(max-width\:_500px\)\]\:underline {
          text-decoration-line: underline;
        }
      }
      @container (min-width: 290px) and (max-width: 300px) {
        .\@\[\(min-width\:_290px\)_and_\(max-width\:_300px\)\]\:underline {
          text-decoration-line: underline;
        }
      }
      @container container1 (min-width: 320px) {
        .\@sm\/container1\:underline {
          text-decoration-line: underline;
        }
        .\@\[\(min-width\:_320px\)\]\/container1\:underline {
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
        .\@\[\(min-width\:_320px\)\]\:underline {
          text-decoration-line: underline;
        }
      }
      @container container1 (min-width: 768px) {
        .\@md\/container1\:underline {
          text-decoration-line: underline;
        }
        .\@\[\(min-width\:_768px\)\]\/container1\:underline {
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
        .\@\[\(min-width\:_768px\)\]\:underline {
          text-decoration-line: underline;
        }
      }
      @container container1 (min-width: 1024px) {
        .\@lg\/container1\:underline {
          text-decoration-line: underline;
        }
        .\@\[\(min-width\:_1024px\)\]\/container1\:underline {
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
        .\@\[\(min-width\:_1024px\)\]\:underline {
          text-decoration-line: underline;
        }
        .\@\[1024px\]\:underline {
          text-decoration-line: underline;
        }
      }
    `)
  })
})
