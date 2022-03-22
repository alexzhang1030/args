import { BooleanDefault, NumberDefault, StringDefault } from './default'
import { isBoolean, isNumber, isString } from './is'
import type { PrimitiveConstructor } from './types'

export function hasOwn(obj: Object, key: string) {
  return Reflect.has(obj, key)
}

export function primitiveDefaultValue(type: PrimitiveConstructor) {
  if (isString(type)) {
    return StringDefault
  }
  if (isNumber(type)) {
    return NumberDefault
  }
  if (isBoolean(type)) {
    return BooleanDefault
  }
}
