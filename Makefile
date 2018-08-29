default: test

jshint:
	@echo "jshint"
	@find . -name "*.js" -not -path "./node_modules/*" -print0 | xargs -0 ./node_modules/.bin/jshint

circular:
	@echo "circular"
	@./node_modules/.bin/madge --circular --format amd --exclude 'madge|source-map' .

mocha:
	@echo "mocha"
	@./node_modules/.bin/mocha test/*.js
	@echo

coverage:
	@echo "coverage"
	@./node_modules/.bin/istanbul cover ./node_modules/.bin/_mocha test/*
	@echo

test: jshint circular mocha
	@echo "test"
	@echo

outdated:
	@echo "outdated modules?"
	@npm outdated
