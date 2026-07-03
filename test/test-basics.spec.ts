import { assert } from 'aegir/chai'
import { bytes } from 'multiformats'
import * as blake2b from '../src/blake2b.ts'
import * as blake2s from '../src/blake2s.ts'
import blake2 from '../src/index.ts'
import table from './table.csv.ts'
import type { MultihashHasher } from 'multiformats'

const fixtures = {
  'blake2b-512': ['beep boop', 'c0e402400eac6255ba822373a0948122b8d295008419a8ab27842ee0d70eca39855621463c03ec75ac3610aacfdff89fa989d8d61fc00450148f289eb5b12ad1a954f659'],
  'blake2b-160': ['beep boop', '94e40214fe303247293e54e0a7ea48f9408ca68b36b08442'],
  'blake2s-256': ['beep boop', 'e0e402204542eaca484e4311def8af74b546edd7fceb49eeb3cdcfd8a4a72ed0dc81d4c0'],
  'blake2s-40': ['beep boop', 'c5e402059ada01bb57']
}

/**
 * @typedef {import("multiformats/hashes/interface").MultihashHasher<number>} MultihashHasher
 */

describe('Digests', () => {
  for (const [name, fixture] of Object.entries(fixtures)) {
    it(name, async () => {
      const hasher = getHasher(name.includes('2b'), name.replace('-', ''))
      const hash = await hasher.digest(bytes.fromString(fixture[0]))
      assert.strictEqual(hash.code, hasher.code)
      assert.strictEqual(bytes.toHex(hash.bytes), fixture[1])
    })
  }
})

describe('Hashers', () => {
  const bstart = 0xb201
  const sstart = 0xb241
  const beepboop = bytes.fromString('beep boop')

  // @ts-expect-error splitting by `,` does not guarantee the correct number of array entries
  const codecs: Array<[string, string, number]> = (table.split('\n')
    .filter((l) => l.startsWith('blake2'))
    .map((l) => l.split(',').map((e) => e.trim()).map((e) => e.startsWith('0x') ? parseInt(e, 16) : e)))

  for (const [name,, code] of codecs) {
    const exportName = name.replace('-', '')
    const b = name.startsWith('blake2b')

    it(`${name} exports`, () => {
      // @ts-expect-error cannot use string to index glob import
      assert.strictEqual((blake2[b ? 'blake2b' : 'blake2s'])[exportName], getHasher(b, exportName)
      )
    })

    it(name, async () => {
      const length = code - (b ? bstart : sstart) + 1
      const hasher = getHasher(b, exportName)
      const hash = await hasher.digest(beepboop)
      assert.strictEqual(hash.code, hasher.code)
      assert.strictEqual(hash.digest.length, length)
      assert.strictEqual(hash.bytes.length, length + 4)
    })
  }
})

function getHasher (b: boolean, name: string): MultihashHasher {
  if (b) {
    // @ts-expect-error cannot use string to index glob import
    return blake2b[name]
  }

  // @ts-expect-error cannot use string to index glob import
  return blake2s[name]
}
