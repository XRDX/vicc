import recommonmark
from recommonmark.parser import CommonMarkParser
from recommonmark.transform import AutoStructify

source_parsers = {
    '.md': CommonMarkParser,
}

project = '维克笔记'
copyright = '2018, Vic'
author = 'Vic'

version = '0.1'
release = 'beta'

html_copy_source = False
html_show_sourcelink = False
html_show_sphinx = False

extensions = [
    'sphinx_markdown_tables',
]

templates_path = ['_templates']
source_suffix = ['.rst', '.md']
master_doc = 'index'
language = 'zh'
exclude_patterns = ['_build', 'Thumbs.db', '.DS_Store']
pygments_style = 'sphinx'
html_theme = 'sphinx_rtd_theme'
html_static_path = ['_static']

def setup(app):
    app.add_js_file("GA.js")
    app.add_js_file("GA.vicc.wang.js")
    app.add_css_file("my_style.css")

    app.add_config_value('recommonmark_config', {
            'auto_toc_tree_section': 'Contents'
        }, True)
    app.add_transform(AutoStructify)
