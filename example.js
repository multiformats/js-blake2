/* eslint no-console: off */
import * as codec from '@ipld/dag-cbor'
import * as Block from 'multiformats/block'
import { blake2b256 as hasher } from './src/blake2b.js' // would be: '@multiformats/blake2/blake2b'

async function run () {
  const value = { hello: 'world' }
  const block = await Block.encode({ value, hasher, codec })
  console.log(block.cid)
  // -> CID(bafy2bzacedtxqx7k666ugf5mmagr2fxmbpfncbcji5jfg5uduausgb62y3av4)
}

run().catch(console.error)
