# SVN使用手册

### SVN简介

管理文件版本，追溯文件历史，同步文件



### SVN使用步骤

#### 安装

下载安装SVN软件，下载地址：https://tortoisesvn.net/downloads.html

#### 设置源

安装结束后，在任意一个文件夹下右键菜单，点击SVN Checkout...

![1](images/1.png)

输入源地址：https://192.168.0.30/svn/Leaplearner/LeapLearnerClass/常规课 Courses

体验课地址：https://192.168.0.30/svn/Leaplearner/LeapLearnerClass/体验课 Demo Class

![1](images/2.png)

点击OK，这时候会弹出账号密码的输入框，输入自己的账号密码即可。

等待资源下载完成，第一次同步需要花费比较长的时间，视文件大小及同步速度大概5~30分钟左右。

下载完成后即可看到所有相关的文件，请阅读每个文件夹下面的**readme**以了解相关信息。

#### 更新文件

当库文件有更新时，在该文件夹上右键，点击SVN Update即可

![1](images/3.png)

建议在每次使用前进行update。

#### 提交文件

当你修改文件要提交到svn仓库时，使用commit。

![1](images/4.png)

按照下图提示的内容进行操作。

![1](images/5.png)

可以在网上找到更多svn的信息。