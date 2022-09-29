const express = require('express')
const cors = require('cors')

// data 
const { books, users } = require('./db')

const app = express()
app.use(cors())



app.get('/', (req, res) => {
    res.json({
        message: "welcome to node server"
    })
})


app.get('/users', (req, res) => {
    res.json(users)
})

app.get('/books', (req, res) => {
    res.json(books)
})


app.get('*', (req, res) => {
    res.status(404).json({
        message: "Not found"
    })
})


module.exports = app 