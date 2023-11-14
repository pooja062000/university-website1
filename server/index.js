
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const UserModels = require('./models/information')

const app = express()

app.use(cors())

app.use(express.json())

mongoose.connect('mongodb://127.0.0.1:27017/school-dev-db')

app.get('/information', (req, res) => {
    UserModels.find()
        .then(information => res.json(information))
        .catch(err => res.json(err))
})

app.listen(9991, () => {
    console.log("Server is running on port 9991")
})