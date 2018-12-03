## 谷歌分析 Google Analysis

### 介绍

强大的功能，可以随时查看网站访问情况，添加代码非常简单，只要添加一小段html即可

[后台访问地址](https://analytics.google.com/analytics/web/)

![](images/google_analysis.png)

### vicc.wang

比如vicc.wang网站的Google分析脚本

```html
<!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=UA-129766101-1"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-129766101-1');
</script>
```





