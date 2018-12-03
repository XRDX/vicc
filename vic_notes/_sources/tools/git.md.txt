## GIT 常用命令

### 获取
```shell
git pull
```

### 推送

```shell
git status

git add .
git commit -m "Comments"

git push
```

### 推送已有的项目到Github

首先在Github上创建项目

```shell
git remote add origin git@github.com:USERNAME/REPOSITORY.git
git push -u origin master
```

### 远端相关 remote

#### 查看远端地址
```shell
git remote -h
```

```shell
$ git remote -v
origin  git@github.com:USERNAME/REPOSITORY.git (fetch)
origin  git@github.com:USERNAME/REPOSITORY.git (push)
```

```shell
git remote add github git@github.com:USERNAME/REPOSITORY.git
```


#### 修改远端（remote）的地址（url）

```shell
$ git remote set-url origin git@github.com:USERNAME/REPOSITORY.git
```

### tag

列出所有tags
```shell
git tag -l
```

### 一些常用的Git网站

https://github.com
https://bitbucket.org
https://dev.tencent.com/
