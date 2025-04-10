const http = require('http');
const { Writable } = require('stream');
const { delay } = require('./utils');

const server = http.createServer(async (req, res) => {
  // 设置响应头
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  
  // 创建可读流
  const writable = new Writable({
    write(chunk, encoding, callback) {
      console.log('write', chunk);
      res.write(chunk);
      callback();
    }
  });
  
  // 写入初始 HTML
  writable.write(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>流式输出</title>
    </head>
    <body>
  `);

  await delay(2000);
  writable.write(`<div>这是第 1 条数据</div>`);
  await delay(2000);
  writable.write(`<div>这是第 2 条数据</div>`);
  await delay(2000);
  writable.write(`<div>这是第 3 条数据</div>`);
  writable.end('</body></html>');

});

server.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});