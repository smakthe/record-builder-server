import mongoose from 'mongoose'

export default async () => {
    try{
        await mongoose.connect('mongodb://0.0.0.0:27017/firstapi',  {useNewUrlParser: true, useUnifiedTopology: true })
        console.log('Connected to Database')
    }catch(err){
        console.log(err)
    }
}