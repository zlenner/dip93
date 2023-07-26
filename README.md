# dip93

dip93: An alternative to the BIP39 mnemonic standard for generating shorter phrases, while being similarly secure and random.

Generates a phrase with maximum 78 characters for 128 bits. BIP39 can generate up to 108 characters for the same.

## Install

`npm install dip93`

## Usage

```js
import * as dip93 from 'dip93'
dip93.generate()
```
