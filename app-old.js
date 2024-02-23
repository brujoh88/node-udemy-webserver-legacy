const http = require('http')

http.createServer((req,res)=>{
    /* res.writeHead(200, {'Content-Type': 'application/json'})
    const persona = {
        id: 1,
        nombre: "Gustavo"
    }
    res.write(JSON.stringify(persona)) */

    /* res.setHeader('Content-Disposition', 'attachment; filename=lista.csv')
    res.writeHead(200, {'Content-Type': 'application/csv'})
    
    res.write('id,nombre\n')
    res.write('1,Gustavo\n')
    res.write('2,Fernando\n')
    res.write('3,Hernan\n') */

    res.write(' Hola mundo ')
    res.end()




    res.end()
}).listen(8080)

console.log("Escuchando en el puerto http://localhost:8080");