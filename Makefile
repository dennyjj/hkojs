.PHONY: build publish all

build:
	rm -rf dist
	npm run build

publish: 
	npm publish

all:
	make build
	make publish
