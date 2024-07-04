import express, { json } from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import routes from './routes.js'

const app = express()
const PORT = process.env.PORT || 3000
const connectDB = async () => {
    try{
        await mongoose.connect('mongodb://0.0.0.0:27017/firstapi',  {useNewUrlParser: true, useUnifiedTopology: true })
        console.log('Connected to Database')
    }catch(err){
        console.log(err)
    }
}

connectDB()
app.use(cors())
app.use(json())
app.use(routes)
app.listen(PORT,() => {
    console.log("Application listening on Port ",PORT)
})
