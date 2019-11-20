# rtl-node

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

### 步骤
```cmd
cd ./rtl-node
pm2 start ecosystem.config.js

// 开机启动需增加
pm2 save 
pm2 startup 

// pm2 monit 监控CPU/内存/log
// pm2 plus 开启 app.pm2.io远程监听
```
