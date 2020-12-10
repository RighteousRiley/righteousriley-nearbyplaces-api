const express = require('express')
var cors = require('cors')
var bodyParser = require('body-parser');
let data = require('./data')
const app = express()
const port = process.env.PORT || 3002

app.use('cors')
app.use(bodyParser)

app.get('/', (request, response) =>  {
    response.send("Gamer, you made it")
})

app.post('/place', (request, response) => {
// change
})

app.get('/places', (request, response) => {
    response.json({
        name: "Applebee's Grill + Bar",
        hasDelivery: "Yes",
        hasTakeOut: "Yes",
        address: "5870 East Broadway",
        phoneNum: "(520) 750-9780",
        type: "American, Sports Bar",
        thumb: applePic
    })
})

app.get('/search/:searchTerm/:location', (request, response) => {

})

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})