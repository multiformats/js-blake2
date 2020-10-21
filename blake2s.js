// File generated by build.js, do not edit

import blakejs from 'blakejs'
import { from } from 'multiformats/hashes/hasher'
import { bytes } from 'multiformats'

const { blake2s } = blakejs

export const blake2s8 = from({
  name: 'blake2s-8',
  code: 0xb241,
  encode: (input) => bytes.coerce(blake2s(input, null, 1))
})

export const blake2s16 = from({
  name: 'blake2s-16',
  code: 0xb242,
  encode: (input) => bytes.coerce(blake2s(input, null, 2))
})

export const blake2s24 = from({
  name: 'blake2s-24',
  code: 0xb243,
  encode: (input) => bytes.coerce(blake2s(input, null, 3))
})

export const blake2s32 = from({
  name: 'blake2s-32',
  code: 0xb244,
  encode: (input) => bytes.coerce(blake2s(input, null, 4))
})

export const blake2s40 = from({
  name: 'blake2s-40',
  code: 0xb245,
  encode: (input) => bytes.coerce(blake2s(input, null, 5))
})

export const blake2s48 = from({
  name: 'blake2s-48',
  code: 0xb246,
  encode: (input) => bytes.coerce(blake2s(input, null, 6))
})

export const blake2s56 = from({
  name: 'blake2s-56',
  code: 0xb247,
  encode: (input) => bytes.coerce(blake2s(input, null, 7))
})

export const blake2s64 = from({
  name: 'blake2s-64',
  code: 0xb248,
  encode: (input) => bytes.coerce(blake2s(input, null, 8))
})

export const blake2s72 = from({
  name: 'blake2s-72',
  code: 0xb249,
  encode: (input) => bytes.coerce(blake2s(input, null, 9))
})

export const blake2s80 = from({
  name: 'blake2s-80',
  code: 0xb24a,
  encode: (input) => bytes.coerce(blake2s(input, null, 10))
})

export const blake2s88 = from({
  name: 'blake2s-88',
  code: 0xb24b,
  encode: (input) => bytes.coerce(blake2s(input, null, 11))
})

export const blake2s96 = from({
  name: 'blake2s-96',
  code: 0xb24c,
  encode: (input) => bytes.coerce(blake2s(input, null, 12))
})

export const blake2s104 = from({
  name: 'blake2s-104',
  code: 0xb24d,
  encode: (input) => bytes.coerce(blake2s(input, null, 13))
})

export const blake2s112 = from({
  name: 'blake2s-112',
  code: 0xb24e,
  encode: (input) => bytes.coerce(blake2s(input, null, 14))
})

export const blake2s120 = from({
  name: 'blake2s-120',
  code: 0xb24f,
  encode: (input) => bytes.coerce(blake2s(input, null, 15))
})

export const blake2s128 = from({
  name: 'blake2s-128',
  code: 0xb250,
  encode: (input) => bytes.coerce(blake2s(input, null, 16))
})

export const blake2s136 = from({
  name: 'blake2s-136',
  code: 0xb251,
  encode: (input) => bytes.coerce(blake2s(input, null, 17))
})

export const blake2s144 = from({
  name: 'blake2s-144',
  code: 0xb252,
  encode: (input) => bytes.coerce(blake2s(input, null, 18))
})

export const blake2s152 = from({
  name: 'blake2s-152',
  code: 0xb253,
  encode: (input) => bytes.coerce(blake2s(input, null, 19))
})

export const blake2s160 = from({
  name: 'blake2s-160',
  code: 0xb254,
  encode: (input) => bytes.coerce(blake2s(input, null, 20))
})

export const blake2s168 = from({
  name: 'blake2s-168',
  code: 0xb255,
  encode: (input) => bytes.coerce(blake2s(input, null, 21))
})

export const blake2s176 = from({
  name: 'blake2s-176',
  code: 0xb256,
  encode: (input) => bytes.coerce(blake2s(input, null, 22))
})

export const blake2s184 = from({
  name: 'blake2s-184',
  code: 0xb257,
  encode: (input) => bytes.coerce(blake2s(input, null, 23))
})

export const blake2s192 = from({
  name: 'blake2s-192',
  code: 0xb258,
  encode: (input) => bytes.coerce(blake2s(input, null, 24))
})

export const blake2s200 = from({
  name: 'blake2s-200',
  code: 0xb259,
  encode: (input) => bytes.coerce(blake2s(input, null, 25))
})

export const blake2s208 = from({
  name: 'blake2s-208',
  code: 0xb25a,
  encode: (input) => bytes.coerce(blake2s(input, null, 26))
})

export const blake2s216 = from({
  name: 'blake2s-216',
  code: 0xb25b,
  encode: (input) => bytes.coerce(blake2s(input, null, 27))
})

export const blake2s224 = from({
  name: 'blake2s-224',
  code: 0xb25c,
  encode: (input) => bytes.coerce(blake2s(input, null, 28))
})

export const blake2s232 = from({
  name: 'blake2s-232',
  code: 0xb25d,
  encode: (input) => bytes.coerce(blake2s(input, null, 29))
})

export const blake2s240 = from({
  name: 'blake2s-240',
  code: 0xb25e,
  encode: (input) => bytes.coerce(blake2s(input, null, 30))
})

export const blake2s248 = from({
  name: 'blake2s-248',
  code: 0xb25f,
  encode: (input) => bytes.coerce(blake2s(input, null, 31))
})

export const blake2s256 = from({
  name: 'blake2s-256',
  code: 0xb260,
  encode: (input) => bytes.coerce(blake2s(input, null, 32))
})
