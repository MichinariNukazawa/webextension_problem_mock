
all: copy

.PHONY: all clean
.PHONY: copy package

package:
	bash ./package.sh "webextension_problem_mock"

