find ./esm -not -path "node_modules*" -name "*.js" -exec sh -c 'mv "$0" "${0%.js}.jsx"' {} \;
find ./cjs -not -path "node_modules*" -name "*.js" -exec sh -c 'mv "$0" "${0%.js}.jsx"' {} \;
