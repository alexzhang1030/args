import { test, expect } from 'vitest'
import { parseArgs } from '.'

/**
 * 需求分析：
 * 1. -l Boolean, 默认是 true
 * 2. -p Number，默认是 8080
 * 3. -d String，默认是 '.'
 */

test('期望 -l 返回的是 true', () => {
  const options = {
    '-l': Boolean,
  }
  const args = parseArgs(options, ['-l'])
  expect(args).toEqual({
    '-l': true,
  })
})

test('期望 -p 返回的是 8080', () => {
  const options = {
    '-p': Number,
  }
  const args = parseArgs(options, ['-p'])
  expect(args).toEqual({
    '-p': 8080,
  })
})

test('期望 -d 返回的是 .', () => {
  const options = {
    '-d': String,
  }
  const args = parseArgs(options, ['-d'])
  expect(args).toEqual({
    '-d': '.',
  })
})

test('期望 -p 9090 返回的是 9090', () => {
  const options = {
    '-p': Number,
  }
  const args = parseArgs(options, ['-p', 9090])
  expect(args).toEqual({
    '-p': 9090,
  })
})

test('happy path', () => {
  const options = {
    '-l': Boolean,
    '-p': Number,
    '-d': String,
  }
  const args = parseArgs(options, ['-l', '-p', 9090, '-d', '/Users/alex/logs'])
  expect(args).toEqual({
    '-l': true,
    '-p': 9090,
    '-d': '/Users/alex/logs',
  })
})
