# dip93

dip93: An alternative to the BIP39 mnemonic standard for generating shorter phrases, while being similarly secure and random.

Generates a phrase with maximum 78 characters for 128 bits. BIP39 can generate up to 108 characters for the same.

## Install

`npm install dip93`

## Usage

```js
import * as dip93 from 'dip93'

// Generates 13 words for 128 bits.
const phrase = dip93.generate()
```

or to generate a specific number of words

```js
// Generates 5 words with 48 bits.
const phrase = dip93.generate(5)
```

