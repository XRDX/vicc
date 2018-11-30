## Linux 磁盘分区、格式化、目录挂载



### 显示当前主机目录 df

```shell
$ df -h
Filesystem            Size  Used Avail Use% Mounted on
/dev/mapper/VolGroup-lv_root
                       26G  2.9G   22G  13% /
tmpfs                 1.9G     0  1.9G   0% /dev/shm
/dev/xvda1            485M   32M  428M   7% /boot
```



### 磁盘分区

#### 显示机器当前的磁盘 fdisk

```shell
$ fdisk -l /dev/xvdb 

Disk /dev/xvdb: 53.7 GB, 53687091200 bytes
255 heads, 63 sectors/track, 6527 cylinders
Units = cylinders of 16065 * 512 = 8225280 bytes
Sector size (logical/physical): 512 bytes / 512 bytes
I/O size (minimum/optimal): 512 bytes / 512 bytes
Disk identifier: 0x00000000
```

注:这里知道新增磁盘为/dev/xvdb,就直接指定了,缩减显示篇幅。



### 自动挂载

```shell
sudo vim /etc/fstab
```



### 格式化分区

1.首先执行sudo fdisk -l查看你的u盘的序号，通常是/dev/sdb之类的，U盘分区通常是/dev/sdb1

2.针对将要格式化的分区执行

```shell
sudo umount  /dev/sdb1 # 必须先卸载该分区
```



3.

```shell
sudo mkfs.ext4 /dev/sdb1    # 格式化为ext4分区
```



