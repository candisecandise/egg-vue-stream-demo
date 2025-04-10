import { Controller } from 'egg';
import { Readable } from 'stream';
import { delay } from '../utils';

export default class Simple extends Controller {

  async index() {
    const { ctx } = this;
    // 设置响应类型为 HTML
    ctx.type = 'html';

    const stream = new Readable({ read() {} });
    ctx.body = stream;

    // stream.write('<!DOCTYPE html><html><head><title>Streamed Page</title></head><body>');

    // stream.push(`<div id='app'>
    //     <!-- 显示 count -->
    //     <p>{{ count }}</p>
    //     <!-- 点击按钮时增加 count -->
    //     <button @click="increment">Increment</button>
    // </div>`);
    // stream.push(`
    //   <script src="https://cdn.jsdelivr.net/npm/vue@2.6.14/dist/vue.js"></script>
    //   <script type="module" async>
    //     // 创建 Vue 实例
    //     new Vue({
    //         el: '#app', // 指定挂载点
    //         data: {
    //             count: 0 // 初始化 count 值
    //         },
    //         methods: {
    //             // 定义一个方法用于增加 count
    //             increment() {
    //                 this.count += 1;
    //             }
    //         }
    //     });
    //   </script>
    // `);


    // setTimeout(() => {
    //   stream.push('<h1>Hello, this is a streamed response</h1>');
    // }, 2000); // 2秒后发送页面内容和 JavaScript 标签

    // setTimeout(() => {
    //   stream.push('<h1>Hello, this is a streamed response 2</h1>');
    // }, 3000); // 3秒后发送更多页面内容

    // setTimeout(() => {
    //   stream.push('<h1>Hello, this is a streamed response 3</h1>');
    // }, 4000); // 4秒后继续发送页面内容

    // setTimeout(() => {
    //   stream.push('</body></html>');
    // }, 5000); // 5秒后发送 HTML 尾部并结束流

    // await 会阻塞
    // await delay(5000);

    // await delay(2000);
    // stream.push('<div>这是第 1 条数据</div>');
    // await delay(2000);
    // stream.push('<div>这是第 2 条数据</div>');
    // await delay(2000);
    // stream.push('<div>这是第 3 条数据</div>');
    // stream.push(null);

    await delay(1000);
    stream.push('<div>这是第 1 条数据</div>');
    // await delay(1000);
    // stream.push('<div>这是第 2 条数据</div>');
    // await delay(1000);
    // stream.push('<div>这是第 3 条数据</div>');
    // stream.push('</body></html>');
    stream.push(null);

  }
}
