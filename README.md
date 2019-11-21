# rtl-node

## 运行
```
//本地
npm install
npm start
```

## 功能列表：
1. 支持<style>a｛float:left｝</style> rtl样式转换
2. 支持style="float:left" rtl样式转换
3. 日志log4

## node服务：
1. 支持/rtl/translate 调取rtl转换接口;


## 待办功能：
1. 日志监听
2. 错误处理
3. 线上部署

## 功能流程图
[流程图](https://drive.google.com/file/d/1KhiwpGVpdQbB8fjjHJjA3XHM6ArC9Uhv/view?usp=sharing)

## 部署
>采用pm2 管理node进程
>nginx 需配置 client_max_body_size 50M;避免post报错

```
    server{
        listen 80;
        server_name  node.wuxingtao.club;
        client_max_body_size 50M;
        index        index.html index.htm;
        location /{
           proxy_pass http://127.0.0.1:3001;
           index index.html;
        }
    }

```

### 自动部署
```
cd ./rtl-node
chmod u+x ./sh/pm2.sh
./sh/pm2.sh
```

### 手动部署
```cmd
cd ./rtl-node/sh
pm2 start ecosystem.config.js

// 开机启动需增加
pm2 save
pm2 startup centos

// pm2 monit 监控CPU/内存/log
// pm2 plus 开启 app.pm2.io远程监听
```

### 开启日志策略
```
    pm2 set pm2-logrotate:rotateInterval '* * */1 * *'     //每小时备份
    pm2 set pm2-logrotate:compress true    //压缩
    pm2 set pm2-logrotate:retain 10  //备份最多10份，也就是备份最进3小时的日志
```