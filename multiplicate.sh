rm -rf ./multiplicated-tests

mkdir ./multiplicated-tests

for i in {1..99}; do cp calc.test.js "./multiplicated-tests/calc$i.test.js"; done
for i in {1..99}; do cp NativeButton.test.js "./multiplicated-tests/NativeButton$i.test.js"; done
for i in {1..99}; do cp ElementButton.test.js "./multiplicated-tests/ElementButton$i.test.js"; done