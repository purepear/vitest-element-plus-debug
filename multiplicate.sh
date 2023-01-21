rm -rf ./multiplicated-tests

mkdir ./multiplicated-tests

for i in {1..99}; do cp NativeButton.spec.js "./multiplicated-tests/NativeButton$i.spec.js"; done
for i in {1..99}; do cp ElementButton.spec.js "./multiplicated-tests/ElementButton$i.spec.js"; done