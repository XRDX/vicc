html:
	sphinx-build ../vic_notes vic_notes

publish:
	sudo cp -rf vic_notes 	/var/www/vicc/
	sudo cp index.html 		/var/www/vicc/
