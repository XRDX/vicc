## 在树莓派安装vsftpd服务器

#### 简介 Introduction

vsftpd是一个开源的轻量级的常用ftp服务器



#### 安装 install vsftdp

约400KB

```sh
sudo apt-get install vsftpd
```



#### 启动 start ftp

```shell
sudo service vsftpd start
```



#### 编辑配置文件 vsftdp etc

```shell
sudo vim /etc/vsftpd.conf
```



找到以下行，修改一下，允许可写

```ini
#设定可以进行写操作
write_enable=YES

#设定上传后文件的权限掩码。
local_umask=022
```



#### 重启服务 restart vsftpd

```shell
sudo service vsftpd restart
```



#### 测试 test

通过ftp连接树莓派系统，以用户名pi登录，密码是pi的密码

![use_ftp](images/use_ftp.png)

ftp的根目录是`/home/pi`，即pi用户的HOME目录

可上传或下载文件了