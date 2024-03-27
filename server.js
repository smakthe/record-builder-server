const express = require('express')
const routes = require('./routes')

const mongoose = require('mongoose')
const app = express()
const PORT = process.env.PORT || 3000

mongoose.connect('mongodb://0.0.0.0:27017/firstapi',  {useNewUrlParser: true, useUnifiedTopology: true })
.then(()=>{
    console.log("Connected to database")
})
.catch((err)=>{
    console.log(err)
})
app.use(express.json())
app.use('/', routes)
app.get('/', (req, res)=>{
    res.send("<h1><b>WELCOME</b></h1>")
})



app.listen(PORT,()=>{
    console.log("Application listening on Port ",PORT)
})
