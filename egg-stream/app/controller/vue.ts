import { Controller } from 'egg';
import { PassThrough } from 'stream';
import path from 'path';
import fs from 'fs';
// import { delay } from '../utils';

export default class Vue extends Controller {

  async prod() {
    const { ctx } = this;
    ctx.type = 'html';
    const stream = new PassThrough();
    ctx.body = stream;

    stream.write('<!DOCTYPE html><html><head><title>Streamed Page</title></head><body>');
    stream.write('<div id=\'app\'></div>');

    // 引入主脚本
    const manifestPath = path.resolve(
      __dirname,
      '../public/dist/.vite/manifest.json',
    );
    const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf-8'));
    const entryKey = 'index.html';
    const entryFile = manifest[entryKey]?.file;
    // const entryLoadScript = `<script type="module" crossorigin src="dist/${entryFile}"></script>`;
    const entryLoadScript = `<script crossorigin src="dist/${entryFile}"></script>`;

    stream.write(entryLoadScript);

    // 注入获取的数据
    setTimeout(() => {
      stream.write('<h1>Hello, this is a streamed response</h1>');
    }, 2000); // 2秒后发送页面内容和 JavaScript 标签

    setTimeout(() => {
      stream.write('<h1>Hello, this is a streamed response 2</h1>');
    }, 3000); // 3秒后发送更多页面内容

    setTimeout(() => {
      stream.write('<h1>Hello, this is a streamed response 3</h1>');
    }, 4000); // 4秒后继续发送页面内容

    setTimeout(() => {
      stream.write('</body></html>');
      stream.end(); // 结束流
    }, 5000); // 5秒后发送 HTML 尾部并结束流
  }

  async prodEs() {
    const { ctx } = this;
    ctx.type = 'html';
    const stream = new PassThrough();
    ctx.body = stream;

    stream.write('<!DOCTYPE html><html><head><title>Streamed Page</title></head><body>');
    stream.write('<div id=\'app\'></div>');

    // 引入主脚本
    const manifestPath = path.resolve(
      __dirname,
      '../public/dist/.vite/manifest.json',
    );
    const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf-8'));
    const entryKey = 'index.html';
    const entryFile = manifest[entryKey]?.file;
    const entryLoadScript = `<script type="module" async crossorigin src="dist/${entryFile}"></script>`;

    stream.write(entryLoadScript);

    setTimeout(() => {
      stream.write('<h1>Hello, this is a streamed response</h1>');
    }, 2000); // 2秒后发送页面内容和 JavaScript 标签

    setTimeout(() => {
      stream.write('<h1>Hello, this is a streamed response 2</h1>');
    }, 3000); // 3秒后发送更多页面内容

    setTimeout(() => {
      stream.write('<h1>Hello, this is a streamed response 3</h1>');
    }, 4000); // 4秒后继续发送页面内容

    setTimeout(() => {
      stream.write('</body></html>');
      stream.end(); // 结束流
    }, 5000); // 5秒后发送 HTML 尾部并结束流
  }
}
