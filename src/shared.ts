export function hasOwn(obj: Object, key: string) {
  return Reflect.has(obj, key)
}
