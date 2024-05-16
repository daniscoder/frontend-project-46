# Makefile

install:
	npm ci

link:
	npm link

publish:
	npm publish --dry-run

lint:
	npx eslint .

lint-fix:
	npx eslint . --fix

gendiff:
	node gendiff.js

run:
	node bin/gendiff.js __fixtures__/file1.json __fixtures__/file2.json

test:
	npm test

test-coverage:
	npx jest --coverage
