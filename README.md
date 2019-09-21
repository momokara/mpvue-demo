# customer

> 客户端小程序

# 1.Build Setup 项目初始化步骤


## 必须先下载并安装node  版本必须>6.0.0
[node中文下载地址](http://nodejs.cn/download/)

## 打包发布步骤
###  [step 1]. 上传云函数 cloudfunctions/getOpenid (初次上传需要,已经上传可以跳过此步骤)
### [step 2]. 执行安装&打包命令

#### 部署/测试 执行以下命令打包 (只有在第一次执行时候需要 添加:i 后缀，脚本自动安装node依赖包。)

| 名称 | 说明 | 直接打包命令 | 备注
| :--------------- | :---------------------------------| :------------ |:---------------
| npm切换淘宝镜像 | | npmlink:taobao | 
| 安装依赖 | (自动安装相关依赖):| npm run autoinstall | 
| 普通打包-使用config | (访问 [src/config.js] 配置地址 ):| npm run build | 

### [step 3]. 上传小程序代码

#  2.开发使用命令
```
安装基本依赖
npm install

安装 sass 支持
npm install -g node-sass
npm install -g sass-loader

安装 小程序sdk
npm install -d wafer2-client-sdk

安装 mpvue-wxparse 小程序富文本工具
npm install -d mpvue-wxparse

```

运行命令

开发环境 打包命令 命令运行是项目会监听文件变化实时刷新
npm run dev

生产打包 命令,会移除无用的包和内容
npm run build

> 运行可以接受参数 

| 参数 | 说明 | 举例 
| :--------------- | :------------| :------------------------ 
| HOST | 请求的host(基本地址) | ~
| COS_URL | COS(云存储的)host(基本地址) | ~
| COS_FILE | COS(云存储的)file(文件路径) | ~
| THEME | 使用主题(需要自己定义) | ~

> demo : npm run dev HOST=https://api.XXXX.net COS_URL=https://hh-image-small-XXXX.cos.ap-guangzhou.myqcloud.com COS_FILE=/wechatfile/pagedata/ wx
> [P.S 命令如果携带参数 需要以 wx(微信) swan(百度) tt(头条) my(支付宝) 结尾,以选择打包对应小程序]

```
指定平台的开发时构建(微信、百度、头条、支付宝)
npm run dev:wx
npm run dev:swan
npm run dev:tt
npm run dev:my

指定平台的打包构建
npm run build:wx
npm run build:swan
npm run build:tt
npm run build:my

生成 bundle 分析报告
npm run build --report
```
## 挂代理

```
直接执行 npm run link:taobao

 以下是说明:
 淘宝 npm 地址：
 http://npm.taobao.org/

 临时使用命令
 npm --registry https://registry.npm.taobao.org install express

 设置成永久配置
 npm config set registry https://registry.npm.taobao.org

 验证安装成功：
 npm config get registry
 安装成功会输出: https://registry.npm.taobao.org
 或者 用 npm info express 应该也可以查看
```

# 3.项目目录 参考

```bash
├── build                             编译配置  
├── config                            编译配置  
|   ├── dev.env.js                    开发环境配置
|   └── prod.env.js                   生产环境配置
├── dist                              小程序运行代码目录(该目录由编译生成) 
├── node_modules
├── src                               开发目录  
|...├── api                           页面请求api统一管理  
|   |   ├── basic.js                    全局基本api(首页)
|   |   ├── cloudTools.js             云函数方法
|   |   └── dataTools.js              一些工具api
|   ├── components                    组件目录  
|   |   ├── homeAd                    首页使用的组件
|   |   ...
|   |   └── upLoadImages.vue          图片批量上传
|   ├── utils                         项目工具函数目录  
|   |   ├── cloudfunc                 云函数方法
|   |   ├── cos                       腾讯云COS 相关工具方法
|   |   ├── logs.js                   全局页面记录,页面onShow钩子包含pagelogs方法将记录访问
|   |   ├── tools.js                  一些全局工具
|   |   └── Wxrequest.js              访问请求封装
|   ├── pages                         页面目录  
|   |   ├── 页面文件说明               index页面(默认会在src/main.js主入口生成pages配置，路径为pages/index/main)  
|   |       ├── index.vue             由其入口文件编译main.js后，生成index/main.js、index/main.wxml和index/main.wxss文件  
|   |       ├── main.js               页面默认入口文件  
|   |       └── main.json             单独页面的微信.json 配置文件  
|   |   ├── home                      小程序首页
|   |   └── test                      测试页面(正式环境可移除，禁止依赖此文件夹内内容) 包含 componentsDemo 组件demo
|   |       ...
|   |       └── newpagedemo           新页面模板，新建页面时可以复制次文件
|   ├── store                         vuex 全局信息
|   |   ├── basicInfo                 全局需要使用的用户基本信息
|   |   ├── cache                     业务临时缓存
|   |   └── cloudConfig               项目的运行时生效的配置文件
|   ├── app.json                      小程序配置项  
|   ├── config.js                     小程序运行环境配置项  
|   └── app.vue                       小程序启动项(全局数据、样式、声明钩子等;经build后,会在dist目录下生成app.js、app.json和app.wxss文件)  
└── static                            静态文件，会直接被复制到dist/下  
    ├── images                        图片文件夹
        ├── icon                      菜单图标
    └── components                    组件库 基于vant 略作了一些适应项目到修改
└── package.json                      项目的package配置  
└── project.config.json               小程序开发工具的配置  
```
# 4.项目其他说明
## 如果出现 px2rpx-loader 到/_px_/ 注释 标注依然 会失效到情况 可以尝试以下解决方案：

```
1.使用 PX 代替px  如
width：12PX

2.调整  ~/build/utils.js 下 loaders 到顺序
var loaders = [cssLoader, px2rpxLoader, postcssLoader ]  => var loaders = [cssLoader, postcssLoader, px2rpxLoader]
```

>如果想要了解此项目详细工作原理,可浏览
>[mpvue-docs](http://mpvue.com/) ,
>[mpvue](https://github.com/Meituan-Dianping/mpvue),
>[guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
