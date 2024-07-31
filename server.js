const http = require ('node:http')
const obj = require('./data.js')

const server = http.createServer((req,res) => {
    res.end(`
        <!DOCTYPE html>
    <html lang="es">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${obj.title}</title>
    </head>
    <body>
        <h1>${obj.subtitle}</h1>
        <p>${obj.p}</p>
    </body>
    </html>
`)        
})


const PORT = 3000

server.listen(PORT, ()=> {
    console.log(`server listening on port http://localhost:${PORT}`)
})

/*
server.listen(0, ()=> {
    console.log(`server listening on port http://localhost:${server.address().port}`)
})
*/