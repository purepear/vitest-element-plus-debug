# Vitest - Element Plus - Debug

A playground to help understand why Vitest is so slow when running Element Plus:

* Simple `NativeButton.vue` & 100 test files
* Simple `ElementButton.vue` & 100 test files
* ~~`element-plus` is imported On-Demand ([auto-import as recommended](https://element-plus.org/en-US/guide/quickstart.html#on-demand-import))~~. There doesn't seem to be any performance difference between using auto-import or manual import (`import { ElButton } from 'element-plus'`). We will use the manual import for easier Jest support.
* `element-plus` is set as `inline` dependency in `vite.config.js`
* Added Jest for further comparison.

# Install
```sh
npm install
```

> the `multiplicated-tests` directory was created using the `./multiplicate.sh` script. It just copies the `./NativeButton.test.js` and `./ElementButton.test.js` files 100 times.

## Run
Run 100 tests with vitest/jest for the native/element button:
```sh
npm run vitest-native
npm run vitest-element
npm run jest-native
npm run jest-element
```

## Results
On M1 MacBook Pro:

Benchmark:
<img width="849" alt="SCR-20230121-jiq" src="https://user-images.githubusercontent.com/144010/213866049-e81ba2a6-6e34-4618-9553-fff17b5d157d.png" />

```
> npm run vitest-native

Test Files  100 passed (100)
     Tests  100 passed (100)
  Start at  12:17:50
  Duration  6.77s (transform 359ms, setup 17ms, collect 5.67s, tests 1.60s)
------------------------------------------------------------
> npm run vitest-element

Test Files  100 passed (100)
     Tests  100 passed (100)
  Start at  12:17:15
  Duration  18.66s (transform 465ms, setup 10ms, collect 109.69s, tests 1.84s)
------------------------------------------------------------
> npm run jest-native

Test Suites: 100 passed, 100 total
Tests:       100 passed, 100 total
Snapshots:   0 total
Time:        2.513 s
------------------------------------------------------------
> npm run jest-element

Test Suites: 100 passed, 100 total
Tests:       100 passed, 100 total
Snapshots:   0 total
Time:        5.101 s
```

* Vitest is significantly slower than Jest. I understand there are reasons(isolation for example), but it's still quite the difference.

* Vitest runs the `ElButton` tests almost 3 times slower than the native button tests.
The "collect" time is the biggest difference: `5.67s` vs `109.69s` (multi-worker?).
Perhaps `element-plus` is a __barrel import__(?) and importing one component imports the whole library? (even though tree-shaking works for builds, it slows down vitest significantly)

## Questions
What does the "collect" duration in the Vitest results mean?

Am I doing sth wrong?

Any ideas for improvements on either side (vitest and/or element-plus)?