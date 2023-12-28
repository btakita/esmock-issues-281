# esmock-issues-281

This package reproduces the error in https://github.com/iambumblehead/esmock/issues/281

## Usage

```sh
npm i
node ./index.js
```

## What is expected

```
sut_dep|debug|1 {
  access: 'ESMOCK_access',
  readFile: 'ESMOCK_readFile'
}
```

## What is seen in this bug

```
sut_dep|debug|1 {
  access: [AsyncFunction: access],
  readFile: [AsyncFunction: readFile]
}
```
