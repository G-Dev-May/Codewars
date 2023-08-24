const express = require('express')
const bodyParser = require('body-parser')
const { MongoClient } = require('mongodb')
const app = express()

MongoClient.connect('mongodb+srv://gregorymayorov:12gggg@cluster0.vz5ljir.mongodb.net/?retryWrites=true&w=majority', (err, client) => {
    if (err) return console.error(err)
    console.log('Connected to Database')
  })
app.use(bodyParser.urlencoded( {extended: true} ))
app.listen(3000, function(){
    console.log('Hello')
})

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.post('/quotes', (req, res) => {
    console.log(req.body)
  })

console.log('May Node be with you')