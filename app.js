const express = require('express')
const app = express()


app.get('/', (req, res) => {
    res.json({
        message: "welcome to node server"
    })
})

app.get('*', (req, res) => {
    res.status(404).json({
        message: "Not found"
    })
})




app.listen(3000, () => console.log('server is running on port 3000'))