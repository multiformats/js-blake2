/**
 * @packageDocumentation
 *
 * The `@multiformats/blake2/blake2b` package exports `blake2bX` `MultihashHasher`s, where `X` is the output length in bits. The Multicodecs [table](https://github.com/multiformats/multicodec/blob/master/table.csv) defines 64 different output lengths for **BLAKE2b**, from `8` to `512`.
 *
 * The `@multiformats/blake2/blake2s` package exports `blake2sX` `MultihashHasher`s, where `X` is the output length in bits. For **BLAKE2s**, there are 32 different output lengths, from `8` to `256`.
 *
 * e.g. `blake2b-256`, multicodec code `0xb220`, may be imported as:
 *
 * ```ts
 * import { blake2b256 } from '@multiformats/blake2/blake2b'
 * ```
 *
 * while `blake2s-256`, multicodec code `0xb260`, may be imported as:
 *
 * ```ts
 * import { blake2s256 } from '@multiformats/blake2/blake2s'
 * ```
 *
 * @example
 *
 * ```ts
 * import * as codec from '@ipld/dag-cbor'
 * import * as Block from 'multiformats/block'
 * import { blake2b256 as hasher } from './src/blake2b.js' // would be: '@multiformats/blake2/blake2b'
 *
 * async function run () {
 *   const value = { hello: 'world' }
 *   const block = await Block.encode({ value, hasher, codec })
 *   console.log(block.cid)
 *   // -> CID(bafy2bzacedtxqx7k666ugf5mmagr2fxmbpfncbcji5jfg5uduausgb62y3av4)
 * }
 *
 * run().catch(console.error)
 * ```
 */

import * as blake2b from './blake2b.ts'
import * as blake2s from './blake2s.ts'

export default { blake2b, blake2s }
