const http = require('http');
const { Writable } = require('stream');

const server = http.createServer((req, res) => {
  // 设置响应头
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  
  // 创建可读流
  const readable = new Writable({
    write(chunk, encoding, callback) {
      console.log('write', chunk);
      res.write(chunk);
      callback();
    }
  });
  
  // 写入初始 HTML
  readable.write(`
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
      readable.write('</body></html>');
      readable.end();
      return;
    }
    
    readable.write(`<div>这是第 ${count + 1} 条数据</div>`);
    count++;
  }, 1000);
});

server.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});