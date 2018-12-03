### screen


```shell
# 新建一个叫session_name的session
screen -S session_name 

# 列出当前所有的session
screen -ls 

# 回到yourname这个session
screen -r session_name 

# 远程detach某个session
screen -d session_name 

# 结束当前session并回到yourname这个session
screen -d -r session_name 
screen -Dr session_name
```

#### 快捷键

Ctrl-a d -> detach，暂时离开当前session，将目前的 screen session (可能含有多个 windows) 丢到后台执行，并会回到还没进 screen 时的状态，此时在 screen session 里，每个 window 内运行的 process (无论是前台/后台)都在继续执行，即使 logout 也不影响。 


#### 窗口相关
C-a C-c 创建一个窗口
C-a C-n 切换到下一个窗口