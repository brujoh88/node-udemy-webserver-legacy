const express = require('express')
const hbs = require('hbs')
const app = express()
require('dotenv').config()
const port = process.env.PORT

//Partials
hbs.registerPartials(__dirname + '/views/partials')

app.set('view engine', 'hbs')

app.use( express.static('public'))

app.get('/', (req, res) => {    
    res.render('home',{
        nombre: 'Gustavo',
        titulo: "Curso de NodeJS"
    })

  })

app.get('/generic', (req, res) => {
    res.render('home',{
        nombre: 'Gustavo',
        titulo: "Curso de NodeJS"
    })

  })

app.get('/elements', (req, res) => {
    res.render('home',{
        nombre: 'Gustavo',
        titulo: "Curso de NodeJS"
    })

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