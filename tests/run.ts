import path from 'path'
import postcss from 'postcss'
import tailwind, { Config } from 'tailwindcss'
import containerQueries from '../src'

export let css = String.raw
export let html = String.raw
export let javascript = String.raw

export function run(input: string, config: Config, plugin = tailwind) {
  let { currentTestName } = expect.getState()

  config.plugins ??= []
  if (!config.plugins.includes(containerQueries)) {
    config.plugins.push(containerQueries)
  }

  return postcss(plugin(config)).process(input, {
    from: `${path.resolve(__filename)}?test=${currentTestName}`,
  })
}
