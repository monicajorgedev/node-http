const http = require ('node:http')
const {objeto} = require('./data.js')

const server = http.createServer((req,res) => {
    res.end(`
        <!DOCTYPE html>
    <html lang="es">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${objeto.title}</title>
    </head>
    <body>
        <h1>${objeto.subtitle}</h1>
        <p>${objeto.p}</p>
    </body>
    </html>
`)        
})

server.listen(0, ()=> {
    console.log(`server listening on port http://localhost:${server.address().port}`)
})
