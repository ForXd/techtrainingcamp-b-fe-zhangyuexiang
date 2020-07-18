### 项目说明

#### 技术架构

- 前端使用React框架
- 后端使用koa框架
- 目前没有采用服务端渲染的方式，使用了静态页面部署的方式，前端使用ajax与后端通信

#### 运行方式

​	克隆仓库后，在`react-frontend`文件夹下安装好依赖，使用`yarn build`命令生成build命令，前端部分就准备完毕。

​	在`koa-backend`文件夹下安装好依赖，把`react-frontend/build`文件夹下的全部文件移动到`koa-backend/www`文件夹下，服务端使用了`koa-static`提供静态资源访问服务。

​	之后访问`http://localhost:8000/index.html`就可以使用了。

