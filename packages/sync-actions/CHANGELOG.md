# @commercetools/sync-actions

## 5.1.0

### Minor Changes

- [#1803](https://github.com/commercetools/nodejs/pull/1803) [`823985ae`](https://github.com/commercetools/nodejs/commit/823985ae67465673c26f296b68681f255230d571) Thanks [@nicolasnieto92](https://github.com/nicolasnieto92)! - Add createSyncStandalonePrices export to index for supporting prices sync actions

## 5.0.0

### Major Changes

- [#1775](https://github.com/commercetools/nodejs/pull/1775) [`35669f30`](https://github.com/commercetools/nodejs/commit/35669f30dbc4b24d59ec3df3f38417b1f2a77837) Thanks [@ajimae](https://github.com/ajimae)! - Drop support for Node `v10` and `v12`. Supported versions now are `v14`, `v16` and `v18`.

## 4.13.0

### Minor Changes

- [#1798](https://github.com/commercetools/nodejs/pull/1798) [`850325d0`](https://github.com/commercetools/nodejs/commit/850325d08603764787c387b2341e4009d0c4f788) Thanks [@markus-azer](https://github.com/markus-azer)! - support standalone prices

## 4.12.0

### Minor Changes

- [#1796](https://github.com/commercetools/nodejs/pull/1796) [`7aaf91cd`](https://github.com/commercetools/nodejs/commit/7aaf91cdecb7c844943369fc137a5356becdba36) Thanks [@VineetKumarKushwaha](https://github.com/VineetKumarKushwaha)! - Fix custom types sync actions to detect addEnumValue action correctly

## 4.11.0

### Minor Changes

- [#1788](https://github.com/commercetools/nodejs/pull/1788) [`f1acfb67`](https://github.com/commercetools/nodejs/commit/f1acfb67708d8253f551481fd65097add48c6686) Thanks [@nicolasnieto92](https://github.com/nicolasnieto92)! - Add setPriceMode sync action for commercetools-importer project

## 4.10.1

### Patch Changes

- [#1770](https://github.com/commercetools/nodejs/pull/1770) [`381d1e1f`](https://github.com/commercetools/nodejs/commit/381d1e1f07cc2705962973e3a48934bf7884e309) Thanks [@mohib0306](https://github.com/mohib0306)! - Fix product selection's name update action. `setName` => `changeName`
  Expose `createSyncProductSelections` from `sync-actions` package

## 4.10.0

### Minor Changes

- [#1767](https://github.com/commercetools/nodejs/pull/1767) [`1aef3423`](https://github.com/commercetools/nodejs/commit/1aef3423e96da7f5df20fd5f66ec29146cacee83) Thanks [@mohib0306](https://github.com/mohib0306)! - feat(sync-actions/product-selections): add sync action support for product selections

  As product selections are available via the API, the sync-actions package is updated to support generating update actions for product selections.
