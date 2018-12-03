## Sphnix使用手册

### 安装

1. 安装Python，建议使用Python 3


2. 安装Sphnix

```shell
pip install Sphnix
```

3. 安装md支持及主题

```shell
pip install recommonmark
pip install sphinx_rtd_theme
```

### 使用

创建一个新目录，在目录下执行命令
```shell
sphnix-quickstart
```

```shell
make.bat clean
make.bat html
```

### 配置

修改conf.py文件
```python
# 添加md支持, 添加以下配置
from recommonmark.parser import CommonMarkParser

source_parsers = {
    '.md': CommonMarkParser,
}

# 修改以下配置
source_suffix = ['.rst', '.md']

# 修改主题
html_theme = 'sphinx_rtd_theme'
```



修改index.rst文件

```rst
.. Sphinx-Install documentation master file, created by
   sphinx-quickstart on Wed Jul 18 10:41:02 2018.
   You can adapt this file completely to your liking, but it should at least
   contain the root `toctree` directive.

Tools
==========================================

.. toctree::
   :maxdepth: 2

   git/index
   svn/index
   sphinx
```



#### 添加Markdown表格支持

安装插件

```shell
pip install sphinx_markdown_tables
```



在conf.py中添加

```python
extensions = [
    'sphinx_markdown_tables',
]
```



#### 添加Google Analysis支持

将gtag文件下载，放在_static目录下，如命名为GA.js

```html
<script async src="https://www.googletagmanager.com/gtag/js?id=UA-129766101-1"></script>
```



然后将追踪脚本保存为另一个文件，如命名为GA.vicc.wang.js

```js
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', 'UA-129766101-1');
```



在conf.py中添加

```python
def setup(app):
    app.add_javascript("GA.js")
    app.add_javascript("GA.vicc.wang.js")
```

