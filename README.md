# DIP93

DIP93: An alternative to the BIP39 mnemonic standard for generating shorter phrases, while being similarly secure and random.

Generates a phrase with maximum 78 characters, while BIP39 can generate a phrase with up to 108 characters.

## Install

`npm install dip93`

## Usage

```js
import * as dip93 from 'dip93'
dip93.generate()
```
