const http = require('http');
const { Readable } = require('stream');

const server = http.createServer((req, res) => {
  // 设置响应头
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  
  // 创建可读流
  const readable = new Readable({
    read() {} // 执行 push 会触发 read 回调，但我们已经建立管道了，因此不用处理
  });
  
  // 将可读流 pipe 到响应
  readable.pipe(res);
  
  // 写入初始 HTML
  readable.push(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>流式输出</title>
    </head>
    <body>
  `);
  
  // 模拟数据流式输出
  let count = 0;
  const interval = setInterval(() => {
    if (count >= 5) {
      clearInterval(interval);
      readable.push('</body></html>');
      readable.push(null); // 结束流
      return;
    }
    
    readable.push(`<div>这是第 ${count + 1} 条数据</div>`);
    count++;
  }, 1000);
});

server.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});