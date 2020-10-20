import CID from 'multiformats/cid'
import * as dagCbor from '@ipld/dag-cbor'
import { blake2b256 } from '@multiformats/blake2/blake2b'

async function run () {
  const bytes = dagCbor.encode({ hello: 'world' })

  const hash = await blake2b256.digest(bytes)
  const cid = CID.create(1, dagCbor.code, hash)
  console.log(cid)
  // -> CID(bafy2bzacedtxqx7k666ugf5mmagr2fxmbpfncbcji5jfg5uduausgb62y3av4)
}

run().catch(console.error)
