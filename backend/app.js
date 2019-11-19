const express = require('express')
const graphqlHTTP = require('express-graphql')
const bodyParser = require('body-parser')
const cors = require('cors')
const schema = require('./schema/schema');


const login = require('./user/login')

const app = express()

app.use(cors())

app.use('/graphql', graphqlHTTP({
    schema
}))

// parses url encoded body data for all requests
app.use(bodyParser.urlencoded({ extended: true}))
// parses json objects body data for all requests
app.use(bodyParser.json())


// routes
app.use('/login', login)



app.use('/cool',(req, res, next) => {
    console.log(req.body)
    res.send('You suck')
    next()
})

app.use('/nice', (req, res, next) => {
    res.send('Hello Earthlings')
})

module.exports = app