import { test, expect } from 'vitest'
import { parseArgs } from '.'

test('happy path', () => {
  const options = {
    '-l': Boolean,
    '-p': Number,
    '-d': String,
  }
  const args = parseArgs(options, ['-l', '-p', 9090, '-d', '/Users/alex/logs'])
  expect(args).toEqual({
    '-l': false,
    '-p': 9090,
    '-d': '/Users/alex/logs',
  })
})

test('default value', () => {
  const options = {
    '-l': Boolean,
    '-d': {
      type: String,
      default: '/Users/alex/logs',
    },
    '-p': {
      type: Number,
      default: 9090,
    },
  }
  const args = parseArgs(options, ['-l', '-d', '-p'])
  expect(args).toEqual({
    '-l': false,
    '-d': '/Users/alex/logs',
    '-p': 9090,
  })
})

test('non option', () => {
  const options = {}
  const args = parseArgs(options, [])
  expect(args).toEqual({})
})
