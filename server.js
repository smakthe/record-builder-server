import express, { json } from 'express'
import cors from 'cors'
import connectDB from './db.js'
import routes from './routes.js'

const app = express()
const PORT = process.env.PORT || 3000

connectDB()
app.use(cors(),json(),routes).listen(PORT,() => {
    console.log("Application listening on Port",PORT)
})