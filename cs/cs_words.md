# 计算机词汇

“理解了计算机词汇，也就理解了一半的计算机知识”

“准确使用计算机词汇，利人利己”

准确的计算机词汇让人能够更容易的理解深奥的含义。有的时候，翻译者拍脑袋想出来的词语却加大了学习的难度，又因为一系列历史原因，各种书籍上也一直沿用了这些说法，导致改动越来越难。

直到后来接触了英文，才慢慢理解了这些概念，不得不说如果熟练掌握英文，那么在编程领域还是非常有优势的。有时候就会想，如果中文能在计算机发展史上占据重要的一份，那么就不会有这么多拗口的计算机词汇了。

## 计算中那些拗口的词汇

### 句柄 handle

file handle 为什么译为「文件句柄」？和「句」有什么关系？
file handle 之类的翻译做「文件句柄」，完全就是乱来。handle 就是「把手」，什么门的把手、锅的把手、锤子的把手都是handle，可以理解为用来方便控制某个东西的东西。所以file handle是用来控制file的东西。要控制哪个object就用哪个handle.

参考翻译：文件操作符、文件处理器

### 套接字 socket

socket的英文原义是“孔”或“插座”,这个多好理解，套什么接什么字 
实际上，套接管可以理解为“将两个管子的接口包裹住用以将两个管口连接在一起套筒。”这样，是不是觉得套接管的功能作用和socket在计算机领域的作用类似了呢？顺便，你也可以看看socket pipe在google图片的搜索结果。

参考翻译：通道，

### 鲁棒性 robust

第一次看到的时候完全不理解，鲁和棒字都好理解，放在一起就不理解了

参考翻译：健壮性

### 宏 Macro

大概见多了，竟然觉得习惯了
参考翻译：指令

### 上下文 context

就是情景、环境之类的意思。进程切换时就要保存这个环境，以便下次切换回来时能够继续正常执行。进程的上下文包括各种寄存器的值、程序代码、进程控制信息（主要是Process Control Block）等等。其他地方也有上下文这个概念，含义都差不多。

参考翻译：运行环境

### 缺省 default

一开始还以为是不能省去的意思……….后来才知道原来就是默认……

### 浮点 

原文是floating point，至于为什么叫floating point，了解下IEEE754就明白了

### 脱机 Offline

这个词出现时可能还没有网络，那时是终端机或者局域网，所以变成“脱机”了。其实“离线”就挺好，“联机”与“脱机”仍存是因为微软IE一直在沿用该翻译……

### RAM跟ROM这俩词。

自从手机开始飙参数之后，“手机内存”和“内部存储空间”这两件事我就没跟人说明白过……… 
我一般使用的译法是「手机运存」和「手机闪存」，或者后者直接叫「内置/虚拟SD卡」，这样基本没什么歧义。

### 内存泄漏

内存泄漏也称作“存储渗漏”，用动态存储分配函数动态开辟的空间，在使用完毕后未释放，结果导致一直占据该内存单元。直到程序结束。（其实说白了就是该内存空间使用完毕之后未回收）即所谓内存泄漏。

### 反射，依赖注入，void（这个怎么翻译成中文就怎么别扭）

反射和依赖注入，用原文写一样很莫名其妙，完全是因为当年的构架师为了显得自己很牛叉装逼发明出来的词.其实就是runtime instantiation…

### 用例 case。

它的英语叫use case。话说这个英文术语我觉得也不好，遇到好几次才确定use是个名词。

参考翻译：情况

## HTML中常见标签英文对照表

| HTML标签    | 英文全称             | 中文释义                       |
| ----------- | -------------------- | ------------------------------ |
| a           | Anchor               | 锚                             |
| abbr        | Abbreviation         | 缩写词                         |
| address     | Address              | 地址                           |
| var         | Variable             | 变量（文本）                   |
| pre         | Preformatted         | 预定义格式（文本）             |
| cite        | Citation             | 引用                           |
| q           | Quotation            | 引用语                         |
| strong      | Strong               | 加重（文本）                   |
| em          | Emphasized           | 加重（文本）                   |
| b           | Bold                 | 粗体（文本）                   |
| i           | Italic               | 斜体（文本）                   |
| big         | Big                  | 变大（文本）                   |
| small       | Small                | 变小（文本）                   |
| sup         | Superscripted        | 上标（文本）                   |
| sub         | Subscripted          | 下标（文本）                   |
| br          | Break                | 换行                           |
| center      | Centered             | 居中（文本）                   |
| font        | Font                 | 字体                           |
| u           | Underlined           | 下划线（文本）                 |
| s           | Strikethrough        | 删除线                         |
| div         | Division             | 分隔                           |
| span        | Span                 | 范围                           |
| ol          | Ordered List         | 排序列表                       |
| ul          | Unordered List       | 不排序列表                     |
| li          | List Item            | 列表项目                       |
| del         | Deleted              | 删除（的文本）                 |
| ins         | Inserted             | 插入（的文本）                 |
| h1~h6       | Header 1 to Header 6 | 标题1到标题6                   |
| p           | Paragraph            | 段落                           |
| hr          | Horizontal Rule      | 水平尺                         |
| href        | hypertext reference  | 超文本引用                     |
| alt         | alter                | 替用(一般是图片显示不出的提示) |
| src         | Source               | 源文件链接                     |
| cell        | cell                 | 巢                             |
| cellpadding | cellpadding          | 巢补白                         |
| cellspacing | cellspacing          | 巢空间                         |
| nl          | navigation lists     | 导航列表                       |
| tr          | table row            | 表格中的一行                   |
| th          | table header cell    | 表格中的表头                   |
| td          | table data  cell     | 表格中的一个单元格             |

## 台湾地区的翻译

台湾地区的计算机和大陆是独立发展的，所以演化出了独立的一套计算机术语，理解这些术语能帮助我们在一些情况下快速的理解计算机知识。

### 大陆台湾计算机术语对照表

| 英语         | 台灣     | 大陆                   |
| ------------ | -------- | ---------------------- |
| adapter      | 配接器   | 适配器                 |
| register     | 暂存器   | 寄存器                 |
| algorithm    | 演算法   | 算法                   |
| argument     | 引數     | 参数（实际参数、实参） |
| array        | 陣列     | 数组                   |
| binding      | 系結     | 绑定                   |
| bit          | 位元     | 位                     |
| boolean      | 布林值   | 布尔值                 |
| byte         | 位元組   | 字节                   |
| cache        | 快取     | 缓存                   |
| call         | 呼叫     | 调用                   |
| callback     | 回呼     | 回调                   |
| chain        | 串鏈     | 链                     |
| class        | 類別     | 类                     |
| command line | 命令列   | 命令行                 |
| concrete     | 具象的   | 实在的、具体的         |
| context      | 背景關係 | 上下文                 |
| control      | 控制元件 | 控件                   |
| constructor  | 建構式   | 构造函数、构造器       |
| data         | 資料     | 数据                   |
| debug        | 除錯     | 调试                   |
| declaration  | 宣告     | 声明                   |
| default      | 預設     | 缺省、默认             |
| destructor   | 解構式   | 析构函数               |
| document     | 文件     | 文档                   |
| entity       | 物體     | 实体                   |
| enumeration  | 列舉     | 枚举                   |
| exception    | 異常情況 | 异常                   |
| exit         | 退離     | 退出                   |
| export       | 匯出     | 导出                   |
| expression   | 運算式   | 表达式                 |
| field        | 欄位     | 字段                   |
| file         | 檔案     | 文件                   |
| firmware     | 韌體     | 固件                   |
| flush        | 掃清     | 刷新                   |
| function     | 函式     | 函数                   |
| global       | 全域性   | 全局                   |
| hardware     | 硬體     | 硬件                   |
| hard disk    | 硬碟     | 硬盘                   |
| heap         | 堆積     | 堆                     |
| identifier   | 識別符號 | 标识符                 |
| implement    | 實作     | 实现                   |
| import       | 匯入     | 导入                   |
| inline       | 行內     | 内联                   |
| instance     | 實體     | 实例                   |
| invoke       | 喚起     | 调用                   |
| linker       | 聯結器   | 链接器                 |
| list         | 串列     | 列表                   |
| local        | 區域性   | 局部                   |
| loop         | 迴圈     | 循环                   |
| macro        | 巨集     | 宏                     |
| memory       | 記憶體   | 内存                   |
| menu         | 選單     | 菜单                   |
| message      | 訊息     | 消息                   |
| mouse        | 滑鼠     | 鼠标                   |
| object       | 物件     | 对象                   |
| operand      | 運算元   | 操作数、运算数         |
| operator     | 運算子   | 操作符、运算符         |
| overflow     | 上限溢位 | 溢出（上溢出）         |
| overload     | 多載     | 重载                   |
| override     | 改寫     | 覆盖                   |
| partition    | 分割槽   | 分区                   |
| parameter    |          | 参数（形式参数、形参） |
| pattern      | 樣式     | 模式                   |
| pointer      | 指標     | 指针                   |
| polymorphism | 多型     | 多态                   |
| preprocessor | 前處理器 | 预处理器               |
| procedure    | 程序     | 过程                   |
| process      | 行程     | 进程                   |
| program      | 程式     | 程序                   |
| project      | 專案     | 项目                   |
| queue        | 佇列     | 队列                   |
| refer        | 取用     | 参考、引用             |
| resolve      | 決議     | 解析                   |
| resolution   | 解析度   | 分辨率                 |
| return       | 傳回     | 返回                   |
| save         | 儲存     | 存储、保存             |
| semantics    | 語意     | 语义                   |
| software     | 軟體     | 软件                   |
| source       | 原始碼   | 源码、源代码           |
| stack        | 堆疊     | 栈                     |
| statement    | 陳述句   | 语句                   |
| string       | 字串     | 字符串                 |
| target       | 標的     | 目标                   |
| thread       | 執行緒   | 线程                   |
| throw        | 丟擲     | 抛出                   |
| type         | 型別     | 类型                   |
| variable     | 變數     | 变量                   |
| window       | 視窗     | 窗口                   |
| recursion    | 遞迴     | 递归                   |
| interface    | 界面     | 接口                   |
