const http = require("node:http");

const delay = (number) =>
  new Promise((resolve) => {
    setTimeout(resolve, number);
  });
http
  .createServer(async (req, res) => {
    if (req.url === "/favicon.ico") {
      res.writeHead(200);
      res.end("");
      return;
    }
    res.writeHead(200);
    const write = (content) => res.write(content);
    write(`<!DOCTYPE html>`);
    write(`<html>`);
    write(`<head>`);

    write(`<title></title>`);

    write(`<meta charset="UTF-8">`);

    // 延时两秒，即使 head 未正确的传递完成、浏览器也能正确的响应提前返回的头部
    await delay(2000);

    write(
      `<meta name="viewport" content="width=device-width, initial-scale=1">`
    );
    write(`</head>`);
    write(`<body>`);
    
    const initData = {
      name: "xiaowang",
    };
    console.log("initData from server");
    write(`initData from server, ${JSON.stringify(initData)}`);
    write(`</body>`);


    // 延时两秒, 这里模拟的是服务器端需要去请求业务数据，比如公共头尾，账户信息等
    await delay(2000);
    console.log("返回 script react.development.js");
    write(
      `<script src="https://unpkg.com/react@17.0.2/umd/react.development.js" crossorigin></script>`
    );

    console.log("返回 script react-dom.development.js");
    write(
      `<script src="https://unpkg.com/react-dom@17.0.2/umd/react-dom.development.js" crossorigin></script>`
    );
    res.end(`</html>`);
  })
  .listen(8000);
