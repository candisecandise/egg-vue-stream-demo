const http = require("node:http");
const { delay } = require("./utils");

const server = http.createServer(async (req, res) => {
    const write = (content) => res.write(content);

    write(`<!DOCTYPE html>
    <html>
        <head>
            <title></title>
            <meta charset="UTF-8">
        </head>
        <body>
            <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
    `);
    await delay(3000);

    write(`
      <div id="app">{{ message }}</div>
      <script>
        const { createApp, ref } = Vue

        createApp({
          setup() {
            const message = ref('Hello vue ------ 3!')
            return {
              message
            }
          }
        }).mount('#app')
      </script>
    </body>`);

    write(`</html>`);
  })

server.listen(3000, () => {
  console.log('server is running at http://localhost:3000')
});
