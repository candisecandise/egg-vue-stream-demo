import { Application } from 'egg';

export default (app: Application) => {
  const { router, controller } = app;

  // 定义根路径的 GET 请求，映射到 HomeController 的 index 方法
  router.get('/simple-demo', controller.home.simpleDemo);
  router.get('/prod', controller.home.prod);
  router.get('/prod-es', controller.home.prodEs);
};