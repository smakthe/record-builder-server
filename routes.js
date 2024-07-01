const express = require('express')
const routes = express.Router()
const [getRecordsController, postRecordController, getRecordController] = require("./controllers")

routes.get('/', getRecordsController)

routes.get('/records', getRecordsController)

routes.post('/record', postRecordController)

routes.get('/records/:id', getRecordController)

module.exports = routes