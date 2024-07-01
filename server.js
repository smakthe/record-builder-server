const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors');
const routes = require('./routes')

const app = express()
const PORT = process.env.PORT || 3000

mongoose.connect('mongodb://0.0.0.0:27017/firstapi',  {useNewUrlParser: true, useUnifiedTopology: true })
.then(()=>{
    console.log("Connected to database")
})
.catch((err)=>{
    console.log(err)
})
app.use(cors())
app.use(express.json())
app.use(routes)



app.listen(PORT,()=>{
    console.log("Application listening on Port ",PORT)
})
