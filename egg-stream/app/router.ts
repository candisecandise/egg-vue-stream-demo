import { Application } from 'egg';

export default (app: Application) => {
  const { router, controller } = app;

  // 定义根路径的 GET 请求，映射到 HomeController 的 index 方法
  router.get('/simple', controller.simple.index);
  router.get('/prod', controller.vue.prod);
  router.get('/prod-es', controller.vue.prodEs);
};
