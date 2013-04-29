REPORTER ?= list
# Flags and arguments for node. Could be "debug" to trigger interactive debug session, or '--debug-brk'
NODE_FLAGS ?= --timeout 10000

.SILENT:

default:
	echo "A build command must be specified."

# Compile the assets
test:
	./node_modules/mocha/bin/mocha \
		$(NODE_FLAGS) \
		--reporter $(REPORTER) \
		test/main

.PHONY: test
