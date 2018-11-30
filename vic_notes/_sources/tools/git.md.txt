## GIT 常用命令



### 



```shell
git remote add origin git@github.com:XRDX/vicc.git
git push -u origin master
```

### 远端相关 remote

#### 查看远端地址

```shell
$ git remote -v
origin  git@github.com:USERNAME/REPOSITORY.git (fetch)
origin  git@github.com:USERNAME/REPOSITORY.git (push)
```



#### 修改远端（remote）的地址（url）

```sh
$ git remote set-url origin git@github.com:USERNAME/REPOSITORY.git
```

