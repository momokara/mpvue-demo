# mpvue-demo

> A Mpvue project


## Build Setup

``` bash
# 先下载并安装node
附地址 http://nodejs.cn/download/

# install dependencies
npm install

# 需要安装以下插件 (从下往下依次安装 npm 命令即可)

## sass 支持
npm install -d node-sass
npm install -d sass-loader

## 小程序sdk
npm install -d wafer2-client-sdk

## mpvue-wxparse 小程序富文本工具
npm install -d mpvue-wxparse

# 开发时候使用命令运行,项目会监听文件变化实时刷新
npm run dev

# 生产打包需要使用此命令,会移除无用的包和内容
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

如果想要了解此项目详细工作原理,可浏览 
[mpvue-docs](http://mpvue.com/) , 
[mpvue](https://github.com/Meituan-Dianping/mpvue), 
[guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).



## 项目目录 参考
``` bash
├── build                    编译配置  
├── config                   编译配置  
├── dist                     小程序运行代码目录（该目录由编译生成）  
├── node_modules             
├── src                      开发目录  
|...├── api                  页面请求api统一管理  
|   |   ├── api.js           全局基本api(首页)
|   |   ├── api.article.js   文章模块
|   |   ├── api.api.exam.js  学车-笔试练习
|   |   ├── api.api.mall.js  商城模块
|   |   ├── api.api.poster.js全民营销
|   |   └── dataTools.js     一些工具api
|   ├── components           组件目录  
|   |   ├── exam             学车模块使用的组件
|   |   ├── homeAd           首页使用的组件
|   |   ├── poster           全民营销使用的组件
|   |   ├── userCenter       用户模块使用的组件
|   |   ...
|   |   └── headerSwipers.vue顶部大轮播
|   |   └── upLoadImages.vue 图片批量上传
|   ├── utils                项目工具函数目录  
|   |   ├── cloudfunc        云函数方法
|   |   ├── cos              腾讯云COS 相关工具方法
|   |   ├── oldfunction      旧项目相关方法（包含登录和旧登录请求）
|   |   ├── logs.js          全局页面记录,页面onShow钩子包含pagelogs方法将记录访问
|   |   ├── tools.js         一些全局工具
|   |   └── Wxrequest.js     访问请求封装
|   ├── pages                页面目录  
|   |   ├── 页面文件说明      index页面（默认会在src/main.js主入口生成pages配置，路径为pages/index/main）  
|   |       ├── index.vue    由其入口文件编译main.js后，生成index/main.js、index/main.wxml和index/main.wxss文件  
|   |       ├── main.js      页面默认入口文件  
|   |       └── main.json    单独页面的微信.json 配置文件  
|   |   ├── Article          文章内容模块
|   |       ├── detail       文章详情
|   |       └── menu         文章分类列表
|   |   ├── home             小程序首页
|   |   ├── loginpage        登录授权页
|   |   ├── mall             商城模块
|   |   ├── mallHome         商城首页
|   |       ├── detail       文章详情
|   |       └── menu         文章分类列表
|   |   ├── mockExam         模拟考试-笔试练习模块
|   |       ├── examHome     笔试练习首页
|   |       ├── examResult   模拟考试成绩列表
|   |       ├── qlist        模拟考试-练习列表
|   |       |                  (mode:1 顺序练习;mode:2 随机练习 mode:3 模拟考试 ;mode:4 错题列表 ;mode:5 收藏题目)
|   |       └── selectClass  选择驾照类型
|   |   ├── mockExamHome     学车首页
|   |   ├── poster           全民营销-模块
|   |       ├── posterDetail 全民营销-海报详情
|   |       ├── posterHome   全民营销-首页
|   |       └── posterList   全民营销-分类列表（搜索结果）
|   |   ├── user             用户模块
|   |       ├── editUserInfo 编辑用户基本信息
|   |       ├── forbidden    小程序被禁止使用时候的提示页面
|   |       ├── logs         用户日志记录页面(调试页面)
|   |       └── watchData    用户当前缓存信息(调试页面)
|   |   ├── userCenterHome   用户中心首页
|   |   └── test             测试页面（正式环境可移除，禁止依赖此文件夹内内容） 包含 componentsDemo 组件demo
|   |       ...
|   |       └── newpagedemo  新页面模板，新建页面时可以复制次文件
|   ├── store                vuex 全局信息
|   |   ├── basicInfo        全局需要使用的用户基本信息
|   |   ├── questionType     驾照类型信息
|   |   └── questionData     笔试练习缓存
|   ├── app.json             小程序配置项  
|   ├── config.js            小程序运行环境配置项  
|   └── app.vue              小程序启动项（全局数据、样式、声明钩子等;经build后,会在dist目录下生成app.js、app.json和app.wxss文件）  
└── static                   静态文件，会直接被复制到dist/下  
    ├── images               图片文件夹
        ├── icon             菜单图标
    └── components           组件库 基于vant 略作了一些适应项目到修改
└── package.json             项目的package配置  
└── project.config.json      小程序开发工具的配置  
```

## 一些说明

``` bash

## 如果出现 px2rpx-loader 到/*px*/ 注释 标注依然 会失效到情况 可以尝试以下解决方案：

### 1.使用 PX 代替px  如 
width：12PX

### 2.调整  ~/build/utils.js 下 loaders 到顺序 
var loaders = [cssLoader, px2rpxLoader, postcssLoader ]  => var loaders = [cssLoader, postcssLoader, px2rpxLoader] 

```
