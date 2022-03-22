import { DefaultOption } from './default'

type OptionType = BooleanConstructor | StringConstructor | NumberConstructor

type Options = {
  [key: string]: OptionType
}

type parseOptionsType = {
  option: string
  type: OptionType
}

function parseOptions(options: Options): parseOptionsType[] {
  return Object.keys(options).map(item => ({
    option: item,
    type: options[item],
  }))
}

type OptionResult = {
  [key: string]: unknown
}
function processOptionType(options: parseOptionsType[]): OptionResult[] {
  return options.map(item => {
    const defaultValue = DefaultOption[item.option]
    return {
      [item.option]: defaultValue,
    }
  })
}

export function parseArgs(options: Options, args: string[]) {
  const keys = parseOptions(options)
  return processOptionType(keys)[0]
}
