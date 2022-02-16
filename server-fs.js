const http = require('node:http')
const fs = require('node:fs')

const html = fs.readFileSync('./index.html')

const server = http.createServer((req, res) => res.end(html))

// 实际上，此处使用 Stream 处理为更好的方法，但此时需要额外处理下 Content-Length。因为是示例代码，所以不做强求。
// const server = http.createServer((req, res) => {
//   fs.createReadStream('./index.html').pipe(res)
// })

server.listen(3000, () => {
  console.log('Listening 3000')
})
