const Record = require('./record')

const getRecordsController = async (req, res)=> {
    try{
        const records = await Record.find()
        res.json(records)
    }catch(err){
        res.json(err)
    }
}

const postRecordController = async (req, res)=>{
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

const getRecordController = async (req, res)=> {
    
    Record.findById(req.params.id)
   .then((record)=>{
       res.send(record)
   })
   .catch(()=>{
       res.status(401).send("Record not found")
   })

}

module.exports = [getRecordsController, postRecordController, getRecordController]