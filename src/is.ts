export function isBoolean(value: Object) {
  return value.toString() === '[Function: Boolean]'
}

export function isNumber(value: Object) {
  return value.toString() === '[Function: Number]'
}

export function isString(value: Object) {
  return value.toString() === '[Function: String]'
}
