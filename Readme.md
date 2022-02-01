# 使用 Docker 部署前端之简单版

+ [Dockerfile Reference](https://docs.docker.com/engine/reference/builder/)
+ [Compose file Reference](https://docs.docker.com/compose/compose-file/compose-file-v3/)

## 琐碎版: docker cli

使用 `docker` 命令行工具去构建及运行容器

``` bash
# 构建一个名为 simple-app 的镜像
$ docker build -f node.Dockerfile -t simple-node-app .

# 根据该镜像运行容器
$ docker run -d --rm -p 3000:3000 simple-node-app
```

## nginx版: docker cli

使用 `docker` 命令行工具去构建及运行容器

``` bash
# 构建一个名为 simple-app 的镜像
$ docker build -f nginx.Dockerfile -t simple-nginx-app .

# 根据该镜像运行容器
$ docker run -d --rm -p 3000:80 simple-nginx-app
```
## 高效版: docker-compose

使用 `docker-compose` 运行容器，同时部署 node 版与 nginx 版

``` bash
$ docker-compose up --build
```
