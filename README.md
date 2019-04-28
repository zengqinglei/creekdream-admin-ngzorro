# Creekdream.Admin.Ngzorro

基于angular、ng-zorro开发的后台管理控制台项目！

## 快速启动

``` bash
# 克隆项目代码，并确定所需环境已安装正确
npm install         # 还原包文件
npm start           # 启动项目完成后，浏览器导航至：http://localhost:4200 
```

> 开发工具推荐：[VS Code](https://code.visualstudio.com)  
> 推荐安装插件：[NG-ZORRO](https://marketplace.visualstudio.com/items?itemName=cipchk.ng-zorro-vscode)、
[Beautify css/sass/scss/less](https://marketplace.visualstudio.com/items?itemName=michelemelluso.code-beautifier)、
[Debugger for Chrome](https://marketplace.visualstudio.com/items?itemName=msjsdiag.debugger-for-chrome)、
[TSLint](https://marketplace.visualstudio.com/items?itemName=ms-vscode.vscode-typescript-tslint-plugin)、
[GitLens](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens)

## 链接

* [Demo](https://zengqinglei.github.io/creekdream-admin-ngzorro/)
* [Angular Document](https://zengqinglei.github.io/creekdream-admin-ngzorro/)
* [NG-ZORRO Document](https://www.angular.cn/guide/quickstart)

## 环境准备

### 1. 安装 [Node.js](https://nodejs.org/en/download/)。

运行命令： `node -v` 查看版本，要求10.x以上。  
运行命令： `npm -v` 查看版本，要求6.x以上。

### 2. 设置淘宝的镜像

运行命令：`npm config set registry https://registry.npm.taobao.org` ，*如需还原，运行命令：`npm config set registry https://registry.npmjs.org`*。

### 3. 安装全局 `Angular cli`

运行命令：npm install -g @angular/cli，*如需卸载，运行命令：`npm uninstall -g @angular/cli`*。

### 4. 安装node sass所需构建环境 (以下方式二选一即可)

#### 方式一

配置 `SASS_BINARY_SITE` 的地址，运行命令：`npm config set SASS_BINARY_SITE https://npm.taobao.org/mirrors/node-sass`

#### 方式二

(1). 安装 [python 2.x](https://www.python.org/downloads/) 版本  
(2). 安装windows构建工具，运行命令：`npm install -g windows-build-tools`

## 启动项目

运行命令：`ng serve` (默认为dev环境)， 浏览器导航到：`http://localhost:4200/`，如果您更改任文件，应用程序将自动新加重载。

## 项目结构说明

``` code
├── _mock                                       # Mock 数据规则
├── src
│   ├── app
│   │   ├── core                                # 核心模块
│   │   │   ├── i18n
│   │   │   ├── net
│   │   │   │   └── default.interceptor.ts      # 默认HTTP拦截器
│   │   │   ├── services
│   │   │   │   └── startup.service.ts          # 初始化项目配置
│   │   │   └── core.module.ts                  # 核心模块文件
│   │   ├── layout                              # 通用布局
│   │   ├── pages
│   │   │   ├── **                              # 业务目录
│   │   │   ├── pages.module.ts                 # 业务路由模块
│   │   │   └── pages-routing.module.ts         # 业务路由注册口
│   │   ├── shared                              # 共享模块
│   │   │   ├── page-header                     # 内容区域头部
│   │   │   └── shared.module.ts                # 共享模块文件
│   │   ├── app.component.ts                    # 根组件
│   │   └── app.module.ts                       # 根模块
│   ├── assets                                  # 本地静态资源
│   ├── environments                            # 环境变量配置
│   ├── styles                                  # 样式目录
└── └── style.less                              # 样式引导入口
```

## 代码脚手架

**运行 `ng generate component component-name` 生成新组件。**  
> 您还可以使用`ng generate directive | pipe | service | class | guard | interface | enum | module`。

**可选参数如下：**  
> `--spec=false` 不生产单元测试文件  
> `--module=module-name` 加入到指定的模块

## 构建

运行 `ng build` 来构建项目。 构建工件将存储在 `dist/` 目录中。 使用 `--prod` 标志进行生产构建。

## 运行代码检查

运行 `ng lint` 来检查代码规范。

## 运行单元测试

运行 `ng test` 以通过 [Karma](https://karma-runner.github.io) 执行单元测试。

## 运行端到端测试

运行 `ng e2e` 以通过 [Protractor](http://www.protractortest.org/) 执行端到端测试。

## 更多帮助

要获得Angular CLI的更多帮助，请使用 `ng help` 或查看 [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md) 。

## 环境配置常见错误及解决方案

##### 1. 发生错误：gyp ERR! stack Error: Can't find Python executable "python", you can set the PYTHON env variable.

> 需要安装 [python 2.x](https://www.python.org/downloads/) 版本

##### 2. 发的工具生错误：MSBUILD : error MSB4132: 无法识别工具版本“2.0”。可用版本为 “4.0”

> 打开【控制面板】——【程序】——【启用或关闭windows功能】—— 勾选低版本的 .net

##### 3. MSBUILD : error MSB3428: 未能加载 Visual C++ 组件"VCBuild.exe"

> 需要通过命令行安装：`npm install -g windows-build-tools`
