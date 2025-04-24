import mongoose from 'mongoose'

export default async () => {
    try{
        await mongoose.connect(process.env.MONGODB_URL,  {useNewUrlParser: true, useUnifiedTopology: true })
        console.log('Connected to Database')
    }catch(err){
        console.log(err)
    }
}