const express = require('express')
var cors = require('cors')
let data = {}
const app = express()
const port = process.env.PORT || 3002

app.post('/place', function(request, response) {
// change
})

app.get('/places', function(request, response) {

})

app.get('/search/:searchTerm/:location', function(request, response) {

})