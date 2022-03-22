export type PrimitiveConstructor =
  | BooleanConstructor
  | StringConstructor
  | NumberConstructor
export type PrimitiveValue = string | number | boolean
export type ObjectType = {
  type: PrimitiveConstructor
  default: PrimitiveValue
}

export type OptionType = PrimitiveConstructor | ObjectType
export type Options = {
  [key: string]: OptionType
}
export type ArgsType = PrimitiveValue[]

export type ArgsReturnType = {
  option: string
  value: PrimitiveValue
}
