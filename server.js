const express = require('express')
var cors = require('cors')
let data = {}
const app = express()
const port = process.env.PORT || 3002


app.get('/', (request, response) =>  {
    response.send("Gamer, you made it")
})

app.post('/place', (request, response) => {
// change
})

app.get('/places', (request, response) => {

})

app.get('/search/:searchTerm/:location', (request, response) => {

})