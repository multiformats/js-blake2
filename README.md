# @multiformats/blake2

[![multiformats.io](https://img.shields.io/badge/project-IPFS-blue.svg?style=flat-square)](http://multiformats.io)
[![codecov](https://img.shields.io/codecov/c/github/multiformats/js-blake2.svg?style=flat-square)](https://codecov.io/gh/multiformats/js-blake2)
[![CI](https://img.shields.io/github/actions/workflow/status/multiformats/js-blake2/js-test-and-release.yml?branch=master\&style=flat-square)](https://github.com/multiformats/js-blake2/actions/workflows/js-test-and-release.yml?query=branch%3Amaster)

> Multiformats BLAKE2 implementations

# About

<!--

!IMPORTANT!

Everything in this README between "# About" and "# Install" is automatically
generated and will be overwritten the next time the doc generator is run.

To make changes to this section, please update the @packageDocumentation section
of src/index.js or src/index.ts

To experiment with formatting, please run "npm run docs" from the root of this
repo and examine the changes made.

-->

The `@multiformats/blake2/blake2b` package exports `blake2bX` `MultihashHasher`s, where `X` is the output length in bits. The Multicodecs [table](https://github.com/multiformats/multicodec/blob/master/table.csv) defines 64 different output lengths for **BLAKE2b**, from `8` to `512`.

The `@multiformats/blake2/blake2s` package exports `blake2sX` `MultihashHasher`s, where `X` is the output length in bits. For **BLAKE2s**, there are 32 different output lengths, from `8` to `256`.

e.g. `blake2b-256`, multicodec code `0xb220`, may be imported as:

```ts
import { blake2b256 } from '@multiformats/blake2/blake2b'
```

while `blake2s-256`, multicodec code `0xb260`, may be imported as:

```ts
import { blake2s256 } from '@multiformats/blake2/blake2s'
```

## Example

```ts
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
```

# Install

```console
$ npm i @multiformats/blake2
```

## Browser `<script>` tag

Loading this module through a script tag will make its exports available as `MultiformatsBlake2` in the global namespace.

```html
<script src="https://unpkg.com/@multiformats/blake2/dist/index.min.js"></script>
```

# API Docs

- <https://multiformats.github.io/js-blake2>

# License

Licensed under either of

- Apache 2.0, ([LICENSE-APACHE](https://github.com/multiformats/js-blake2/LICENSE-APACHE) / <http://www.apache.org/licenses/LICENSE-2.0>)
- MIT ([LICENSE-MIT](https://github.com/multiformats/js-blake2/LICENSE-MIT) / <http://opensource.org/licenses/MIT>)

# Contribution

Unless you explicitly state otherwise, any contribution intentionally submitted for inclusion in the work by you, as defined in the Apache-2.0 license, shall be dual licensed as above, without any additional terms or conditions.
