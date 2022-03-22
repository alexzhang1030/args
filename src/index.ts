import { isObject } from './is'
import { hasOwn, primitiveDefaultValue } from './shared'
import type {
  ArgsReturnType,
  ArgsType,
  ObjectType,
  Options,
  PrimitiveConstructor,
  PrimitiveValue,
} from './types'

function processDefaultValue(
  Options: Options,
  optionName: string
): PrimitiveValue {
  const optionValue = Options[optionName]
  if (isObject(optionValue)) {
    if (!(optionValue as ObjectType).default) {
      return primitiveDefaultValue((optionValue as ObjectType).type)
    } else {
      return (optionValue as ObjectType).default
    }
  } else {
    return primitiveDefaultValue(<PrimitiveConstructor>Options[optionName])
  }
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
      k_v_item.value = processDefaultValue(options, <string>args[i])
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
