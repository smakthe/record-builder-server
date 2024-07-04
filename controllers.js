import Record from './record.js'

const getRecordsController = async (req, res) => {
    try{
        const records = await Record.find()
        res.json(records)
    }catch(err){
        res.json(err)
    }
}

const postRecordController = async (req, res) => {
    console.log("POST data",req.body)
    const record = new Record({
        name: req.body.name,
        number: req.body.number
    })
    try{
        const savedRecord = await record.save()
        res.json(savedRecord)
    }catch(err){
        res.json(err)
    }

}

const getRecordController = async (req, res) => {
    try{
        const record = await Record.findById(req.params.id)
        res.send(record)
    }catch(err){
       res.json(err)
   }

}

export default [getRecordsController, postRecordController, getRecordController]