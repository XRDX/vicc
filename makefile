all: html publish

html:
	@echo "start building"
	sphinx-build ../vic_notes vic_notes

publish:
	sudo cp -rf . /var/www/vicc/

clean:
	rm -rf vic_notes

help:
	@echo "make [html|publish|clean]"

.PHONY: all html publish clean help
