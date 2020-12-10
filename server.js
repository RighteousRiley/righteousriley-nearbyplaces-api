const express = require('express')
var cors = require('cors')
var bodyParser = require('body-parser');
let data = require('./data')
const app = express()
const port = process.env.PORT || 3002

app.use(cors)
app.use(bodyParser)

app.get('/', (request, response) =>  {
    response.send("Gamer, you made it")
})

app.post('/place', (request, response) => {
// change
})

app.get('/places', (request, response) => {
    let metadata = data.places.map(x => {
        return {name: x.name, hasDelivery: "Yes", hasTakeOut: "Yes", address: "123 South Campbell", phoneNum: "(520) 125-1538", type: "Mexican, Small Plates", thumb: ""}
    });
    response.json(metadata)
});

app.get('/search/:searchTerm/:location', (request, response) => {

})

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})