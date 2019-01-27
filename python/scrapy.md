# Scapy 爬虫框架

Scrapy 是用 Python 实现的一个为了爬取网站数据、提取结构性数据而编写的应用框架。

Scrapy 常应用在包括数据挖掘，信息处理或存储历史数据等一系列的程序中。

通常我们可以很简单的通过 Scrapy 框架实现一个爬虫，抓取指定网站的内容或图片。

## 安装

```shell
pip install scrapy
```

安装成功后，输入scrapy，出现下面的提示即安装成功

```shell
$ scrapy
Scrapy 1.5.1 - no active project

Usage:
  scrapy <command> [options] [args]

Available commands:
  bench         Run quick benchmark test
  fetch         Fetch a URL using the Scrapy downloader
  genspider     Generate new spider using pre-defined templates
  runspider     Run a self-contained spider (without creating a project)
  settings      Get settings values
  shell         Interactive scraping console
  startproject  Create new project
  version       Print Scrapy version
  view          Open URL in browser, as seen by Scrapy

  [ more ]      More commands available when run from project directory

Use "scrapy <command> -h" to see more info about a command
```

安装前提：
Microsoft Visual Studio 14.0
Microsoft Visual Studio 14.0 Window 10 SDK

错误提示：

```shell
C:\Program Files (x86)\Microsoft Visual Studio 14.0\VC\INCLUDE\basetsd.h(5): fatal error C1083: Cannot open include file: 'basetsd.h': No such file or directory
    error: command 'C:\\Program Files (x86)\\Microsoft Visual Studio 14.0\\VC\\BIN\\x86_amd64\\cl.exe' failed with exit status 2
```

解决办法：安装Microsoft Visual Studio 14.0 Window 10 SDK

## 第一个 Scrapy 例子

```python
import scrapy

class QuotesSpider(scrapy.Spider):
    name = "quotes"
    start_urls = [
      'http://quotes.toscrape.com/tag/humor/',
    ]

    def parse(self, res):
        for quote in res.css('div.quote'):
            yield {
              'text': quote.css('span.text::text').extract_first(),
              'author': quote.xpath('span/small/text()').extract_first(),
            }

        next_page = res.css('li.next a::attr("href")').extract_first()
        if next_page is not None:
            yield res.follow(next_page, self.parse)
```

在命令行中执行：

```shell
scrapy runspider quotes_spider.py -o quotes.json
```

因为历史原因（原文），输出为json格式，文本中非英文字符的的utf-8文本会以“\uXXXX”的形式显示

## Scrapy项目

### 创建项目

```shell
scrapy startproject tutorial
```

生成的项目结构如下：

```shell
tutorial/
    scrapy.cfg            # deploy configuration file
    tutorial/             # project's Python module, you'll import your code from here
        __init__.py
        items.py          # project items definition file
        middlewares.py    # project middlewares file
        pipelines.py      # project pipelines file
        settings.py       # project settings file
        spiders/          # a directory where you'll later put your spiders
            __init__.py
```

在spiders目录下创建爬虫文件，如`quotes_spider.py`

```python
import scrapy

class QuotesSpider(scrapy.Spider):
    name = "quotes"

    def start_requests(self):
        urls = [
            'http://quotes.toscrape.com/page/1/',
            'http://quotes.toscrape.com/page/2/',
        ]
        for url in urls:
            yield scrapy.Request(url=url, callback=self.parse)

    def parse(self, response):
        page = response.url.split("/")[-2]
        filename = 'quotes-%s.html' % page
        with open(filename, 'wb') as f:
            f.write(response.body)
        self.log('Saved file %s' % filename)
```

* `name`: 爬虫的名字，必须唯一。
* `start_requests()`: 必须是一个可迭代的函数，可以是数组，也可以是生成器，爬虫入口
* `parse()`: 默认解析器名称，常用作回调函数

如何运行爬虫呢

```shell
scrapy crawl quotes
```