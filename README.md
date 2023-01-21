# Vitest - Element Plus - Debug

A playground to help understand why Vitest is so slow when running Element Plus:

* Simple `NativeButton.vue` & 100 test files
* Simple `ElementButton.vue` & 100 test files
* `element-plus` is imported On-Demand ([auto-import as recommended](https://element-plus.org/en-US/guide/quickstart.html#on-demand-import))
* `element-plus` is set as `inline` dependency in `vite.config.js`

# Install
```sh
npm install
```

> the `multiplicated-tests` directory was created using the `./multiplicate.sh` script. It just copies the `./NativeButton.spec.js` and `./ElementButton.spec.js` files 100 times.

## Run
Running the 100 native button test files:
```sh
npm run test-native
```

Running the 100 element button test files:
```sh
npm run test-element
```

## Results
On a M1 MacBook Pro:
```
> npm run test-native

Test Files  100 passed (100)
     Tests  100 passed (100)
  Start at  12:17:50
  Duration  6.77s (transform 359ms, setup 17ms, collect 5.67s, tests 1.60s)
```

```
> npm run test-element

Test Files  100 passed (100)
     Tests  100 passed (100)
  Start at  12:17:15
  Duration  18.66s (transform 465ms, setup 10ms, collect 109.69s, tests 1.84s)
```

As you can see, the tests that use ElButton are almost 3 times slower.
The "collect" time is the biggest difference: `5.67s` vs `109.69s` (multi-worker?).

Perhaps `element-plus` is a barrel import and importing one component imports the whole library? (even though tree-shaking works for builds, it slows down vitest significantly)

## Questions
What does the "collect" duration mean?

Any ideas for improvements on either side (vitest and/or element-plus)?