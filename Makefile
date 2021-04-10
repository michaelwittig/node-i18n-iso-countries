default: test

eslint:
	@echo "eslint"
	@npm run lint

circular:
	@echo "circular"
	@./node_modules/.bin/madge --circular --format amd --exclude 'madge|source-map' .

mocha:
	@echo "mocha"
	@TS_NODE_PROJECT='./test/tsconfig.test.json' ./node_modules/.bin/mocha
	@echo

test: eslint circular mocha
	@echo "test"
	@echo
