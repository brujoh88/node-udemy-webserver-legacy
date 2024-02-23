const express = require('express')
const app = express()
const port = 8080

app.use( express.static('public'))


app.get('/generic', (req, res) => {
    //res.send('404 | Page not found')
    res.sendFile(__dirname + '/public/generic.html')

  })

app.get('/elements', (req, res) => {
    //res.send('404 | Page not found')
    res.sendFile(__dirname + '/public/elements.html')

  })  

//Ruta que ingresa por estatico y no por esta
app.get('/ruta', (req, res) => {
    res.send('aca nunca voy a entrar')
  })

//Ruta que ingresa por aca no existe en el estatico
app.get('/hola-mundo', (req, res) => {
    res.send('Hello World!')
  })

app.get('*', (req, res) => {
    //res.send('404 | Page not found')
    res.sendFile(__dirname + '/public/404.html')

  })

app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`)
})