import { Controller } from 'egg';
import { Readable } from 'stream';
// import { delay } from '../utils';

export default class Simple extends Controller {

  async index() {
    const { ctx } = this;
    // 设置响应类型为 HTML
    ctx.type = 'html';

    const stream = new Readable({
      read() {}, // 这是一个必须的方法，即使是空的
    });

    ctx.body = stream;

    stream.push('<!DOCTYPE html><html><head><title>Streamed Page</title></head><body>');

    stream.push(`<div id='app'>
        <!-- 显示 count -->
        <p>{{ count }}</p>
        <!-- 点击按钮时增加 count -->
        <button @click="increment">Increment</button>
    </div>`);
    stream.push(`
      <script src="https://cdn.jsdelivr.net/npm/vue@2.6.14/dist/vue.js"></script>
      <script type="module" async>
        // 创建 Vue 实例
        new Vue({
            el: '#app', // 指定挂载点
            data: {
                count: 0 // 初始化 count 值
            },
            methods: {
                // 定义一个方法用于增加 count
                increment() {
                    this.count += 1;
                }
            }
        });
      </script>
    `);


    setTimeout(() => {
      stream.push('<h1>Hello, this is a streamed response</h1>');
    }, 2000); // 2秒后发送页面内容和 JavaScript 标签

    setTimeout(() => {
      stream.push('<h1>Hello, this is a streamed response 2</h1>');
    }, 3000); // 3秒后发送更多页面内容

    setTimeout(() => {
      stream.push('<h1>Hello, this is a streamed response 3</h1>');
    }, 4000); // 4秒后继续发送页面内容

    setTimeout(() => {
      stream.push('</body></html>');
    }, 5000); // 5秒后发送 HTML 尾部并结束流

    // await 会阻塞
    // await delay(5000);
  }
}
