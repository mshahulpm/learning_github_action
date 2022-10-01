const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/mern_app',)

// data 
const { books, users } = require('./db')
const User = require('./schema/user')
const Books = require('./schema/books')


// seeding data 
setTimeout(async () => {
    if (await Books.count() === 0) {
        await Books.create(books)
    }
    if (await User.count() === 0) {
        await User.create(users)
    }
}, 3000)

const app = express()
app.use(cors())



app.get('/', (req, res) => {
    res.json({
        message: "welcome to node server"
    })
})

app.get('/users', async (req, res) => {
    res.json(await User.find())
})

app.get('/books', async (req, res) => {
    res.json(await Books.find())
})


app.get('*', (req, res) => {
    res.status(404).json({
        message: "Not found"
    })
})


module.exports = app 