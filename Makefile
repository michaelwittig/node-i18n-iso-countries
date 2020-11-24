default: test

eslint:
	@echo "eslint"
	@npm run lint

circular:
	@echo "circular"
	@./node_modules/.bin/madge --circular --format amd --exclude 'madge|source-map' .

mocha:
	@echo "mocha"
	@./node_modules/.bin/mocha test/*.test.js
	@echo

test: eslint circular mocha
	@echo "test"
	@echo

outdated:
	@echo "outdated modules?"
	@npm outdated

build:
	@./node_modules/.bin/rollup -c
