default: test

jslint:
	@echo "jslint"
	@find . -name "*.js" -not -path "./node_modules/*" -print0 | xargs -0 ./node_modules/jslint/bin/jslint.js --white --nomen --node --predef describe --predef it

circular:
	@echo "circular"
	@./node_modules/madge/bin/madge --circular --format amd .

mocha:
	@echo "mocha"
	@./node_modules/mocha/bin/mocha -t 6000 test/*.js
	@echo

test: jslint mocha circular
	@echo "test"
	@echo

outdated:
	@echo "outdated modules?"
	@./node_modules/npmedge/bin/npmedge
