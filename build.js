#!/usr/bin/env node

const mode = process.argv[2] || 'b'

console.log(`// @ts-check

import blakejs from 'blakejs'
import { from } from 'multiformats/hashes/hasher'
import { bytes } from 'multiformats'

const { blake2${mode} } = blakejs`)

const bstart = 0xb201
const bend = 0xb240
const sstart = 0xb241
const send = 0xb260

for (let code = (mode === 'b' ? bstart : sstart); code <= (mode === 'b' ? bend : send); code++) {
  const length = code - (mode === 'b' ? bstart : sstart) + 1
  const bitLength = length * 8

  console.log(`
export const blake2${mode}${bitLength} = from({
  name: 'blake2${mode}-${bitLength}',
  code: 0x${code.toString(16)},
  encode: (input) => bytes.coerce(blake2${mode}(input, null, ${length}))
})`)
}
