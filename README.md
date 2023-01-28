# Vitest - Element Plus - Debug

> :warning: **UPDATED WITH THE LATEST FINDING IN https://github.com/vitest-dev/vitest/issues/579**

A playground to help identify potential performance improvements in Vitest:

* Simple `calc.js` & 100 test files (`node` env)
* Simple `NativeButton.vue` & 100 test files (`jsdom` env)
* Simple `ElementButton.vue` & 100 test files (`jsdom` env)
* `element-plus` is aliased to `element-plus/dist/index.full.mjs` for better performance.
* Added Jest for comparison.

# Install
```sh
npm install
```

> the `./multiplicated-tests` directory is created using the `./multiplicate.sh` script. It just copies the `spec.test.js`, `./NativeButton.test.js` and `./ElementButton.test.js` files 100 times.

## Run
Run 100 tests with vitest/jest:
```sh
npm run vitest-calc
npm run vitest-native
npm run vitest-element
npm run jest-calc
npm run jest-native
npm run jest-element
```

## Results
On M1 MacBook Pro:

All of the following runs are testing 100 test files
```
npm run vitest-calc    ~2.4s (node)
npm run vitest-native  ~6.3s (jsdom)
npm run vitest-element ~6.9s (jsdom)

// The Jest tests are using cache
npm run jest-calc      ~1.5s (node)
npm run jest-native    ~2.5s (jsdom)
npm run jest-element   ~4.7s (jsdom)
```

**Interesting observation**: if we change `calc.test.js` env from `node` to `jsdom`, then Jest runs the tests 0.5s slower but Vitest - 3.1s slower. Perhaps this is because Vitest loads/initializes `jsdom` 100 times(once per worker)?
```
npm run jest-calc    ~2.0s (jsdom) // compared to ~1.5s (node)
npm run vitest-calc  ~5.5s (jsdom) // compared to ~2.4s (node)
```






