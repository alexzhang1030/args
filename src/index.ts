import { DefaultOption } from './default'
import { hasOwn } from './shared'

type OptionType = BooleanConstructor | StringConstructor | NumberConstructor

type Options = {
  [key: string]: OptionType
}
type ArgsType = (number | string | boolean)[]

type ArgsReturnType = {
  option: string
  value: boolean | string | number
}
function processArgs(options: Options, args: ArgsType): ArgsReturnType[] {
  const k_v_args = []
  for (let i = 0; i < args.length; i++) {
    let k_v_item: ArgsReturnType = {
      option: '',
      value: '',
    }
    if (
      hasOwn(options, <string>args[i]) &&
      args[i + 1] &&
      !hasOwn(options, <string>args[i + 1])
    ) {
      k_v_item.option = <string>args[i]
      k_v_item.value = args[i + 1]
      i++
    } else {
      k_v_item.option = <string>args[i]
      k_v_item.value = DefaultOption[<string>args[i]]
    }
    k_v_args.push(k_v_item)
  }
  return k_v_args
}
function processReturnValue(k_v_args: ArgsReturnType[]): Options {
  const options = {}
  k_v_args.forEach(item => {
    options[item.option] = item.value
  })
  return options
}

export function parseArgs(options: Options, args: ArgsType) {
  const k_v_args = processArgs(options, args)
  return processReturnValue(k_v_args)
}
