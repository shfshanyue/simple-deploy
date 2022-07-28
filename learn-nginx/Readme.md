# 通过 docker 学习 nginx 配置

通过该配置文件可以在容器中学习 nginx，不再受限于宿主环境。**学习 nginx 请先进入 [learn-nginx](https://github.com/shfshanyue/simple-deploy/tree/master/learn-nginx) 目录。**

API 文档置于 [learn nginx by docker](https://www.apifox.cn/apidoc/project-1264553/api-28699589/shanyue)，可使用 [Apifox](https://www.apifox.cn/a1shanyue) 直接打开。

可通过以下步骤，在 [apifox](https://www.apifox.cn/a1shanyue) 中调试 nginx 接口。

1. [下载 Apifox](https://www.apifox.cn/a1shanyue)
2. 在 Apifox 中克隆该项目
3. 在 Github 中克隆[示例仓库](https://github.com/shfshanyue/simple-deploy/tree/master/learn-nginx)
4. 克隆下来后，进入 learn-nginx 目录
5. `docker-compose up` 启动容器
6. 打开 Apifox 调试接口学习 nginx

![](https://static.shanyue.tech/images/22-07-11/clipboard-8971.3bfb0d.webp)

### location

``` bash
$ docker-compose up location

$ docker-compose up location2 api
```

### proxy

``` bash
$ docker-compose up proxy
```
