.PHONY : html publish clean
html:
	sphinx-build ../vic_notes vic_notes

publish:
	sudo cp -rf . 			/var/www/vicc/

clean:
	rm -rf vic_notes

all:
	clean html publish
