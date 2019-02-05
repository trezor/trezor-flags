trezor-flags
=========

This library provides interface for working with flags stored in trezor devices. 

Commands
-----

#### Build 
to build a bundle run `yarn build`

#### Tests
run tests using `yarn test` or `yarn run test:watch` for watch mode

#### eslint
`yarn run lint`

Installation
-----

#### Npm 
```npm install trezor-flags --save```

or

#### Yarn
```yarn add trezor-flags```

Usage
-----

```import { flags, TREZOR_FLAG_KEYS } from 'trezor-flags';```

Functions
-----

#### isFlagPresent(flag: number, trezorSavedFlags: number): boolean
- Both params are numbers. flag variable represents index from TREZOR_FLAG_KEYS. trezorSavedFlags represents flags field from trezor features. 

#### setFlag(flag: number, trezorSavedFlags: number): number 
- Returns representation of new combinantions of flag that might be saved into device with applyFlags call
