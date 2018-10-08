# mpvue-demo-project-0

> A Mpvue project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).


# 项目目录 参考
├── build                  编译配置
├── config                 编译配置
├── dist                   小程序运行代码目录（该目录由编译生成）
├── node_modules           
├── src                    开发目录
|   ├── components         组件目录
|   |   ├── com_a.vue      组件a
|   |   └── com_b.vue      组件b
|   ├── utils              项目工具函数目录
|   |   ├── request.js     请求服务器方法
|   |   ├── utils_a.js     工具/方法a
|   |   └── utils_a.js     工具/方法b
|   ├── pages              页面目录
|   |   ├── index          index页面（默认会在src/main.js主入口生成pages配置，路径为pages/index/main）
            ├── index.vue  由其入口文件编译main.js后，生成index/main.js、index/main.wxml和index/main.wxss文件
            ├── main.js    页面默认入口文件
            ├── main.json 单独页面的微信.json 配置文件
|   |   └── other           other页面（默认会在src/main.js主入口生成pages配置，路径为pages/other/main）
            ├── index.vue  由其入口文件编译main.js后，生成other/main.js、other/main.wxml和other/main.wxss文件
            ├── main.js    页面默认入口文件
|   ├── app.json           小程序配置项
|   └── app.vue            小程序启动项（全局数据、样式、声明钩子等；经build后，会在dist目录下生成app.js、app.json和app.wxss文件）
└── static                 静态文件，会直接被复制到dist/下
    └── vant               vant的组件库
└── package.json           项目的package配置
└── project.config.json    小程序开发工具的配置
