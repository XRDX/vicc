# 保持窗口在最前

保持窗口运行在最前是操作系统功能，因此要调用操作系统的接口来进行操作。

## window

通过python来让窗口前置，需要安装pywin32，pywin32内置了非常多的window操作接口

```python
import win32gui
import win32con
win32gui.SetWindowPos(self._hwnd, win32con.HWND_TOPMOST, 0,0,0,0,
win32con.SWP_NOMOVE | win32con.SWP_NOSIZE)
```

## Mac

Mac上让窗口前置，需要使用OSAScript，我们通过os.system来调用

```python
import os
script = 'tell application "System Events" \
    to set frontmost of the first process whose unix id is {pid} to true'.format(pid=os.getpid())
os.system("/usr/bin/osascript -e '{script}'".format(script=script))
```
