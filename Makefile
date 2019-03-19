develop:
	npm start

install:
	npm install

build:
	# rm -rf dist
	# NODE_ENV=production npx webpack

test:
	npm test

lint:
	npx eslint .

deploy: build
	surge ./dist rssreader.surge.sh
