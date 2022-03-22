import { PrimitiveConstructor } from './types'

export function isBoolean(value: PrimitiveConstructor) {
  return value === Boolean
}

export function isNumber(value: Object) {
  return value === Number
}

export function isString(value: Object) {
  return value === String
}

export function isObject(value: Object) {
  return typeof value === 'object'
}
