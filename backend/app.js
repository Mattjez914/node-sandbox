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

    // creates object
    testObj = {
        test: [
            {
                message: 'sup dude'
            },
            {
                message: 'nothing much, you?'
            }
        ]
    }

    // use this to send json objects in response
    res.json(testObj)
    next()
})

app.use('/nice', (req, res, next) => {
    // sends response
    res.send('Hello Earthlings')
})

module.exports = app