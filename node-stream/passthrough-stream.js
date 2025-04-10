const http = require('http');
const { PassThrough } = require('stream');
const { delay } = require('./utils');

const server = http.createServer(async (req, res) => {
  // 设置响应头
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  
  const stream = new PassThrough();
  stream.pipe(res);
  
  // 写入初始 HTML
  stream.write(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>异步流式输出</title>
    </head>
    <body>
  `);

  // let count = 0;
  // const interval = setInterval(() => {
  //   if (count >= 5) {
  //     clearInterval(interval);
  //     stream.end('</body></html>');
  //     return;
  //   }
    
  //   stream.write(`<div>这是第 ${count + 1} 条数据</div>`);
  //   count++;
  // }, 1000);

  await delay(2000);
  stream.write(`<div>这是第 1 条数据</div>`);
  await delay(2000);
  stream.write(`<div>这是第 2 条数据</div>`);
  await delay(2000);
  stream.write(`<div>这是第 3 条数据</div>`);
  stream.end('</body></html>');
});

server.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});