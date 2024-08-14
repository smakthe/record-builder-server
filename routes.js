import { Router } from 'express'
import controllers from "./controllers.js"

const routes = Router()
const [getRecordsController, postRecordController, getRecordController, updateRecordController, deleteRecordController] = controllers

routes.get('/', getRecordsController)
routes.get('/records', getRecordsController)
routes.post('/record', postRecordController)
routes.get('/records/:id', getRecordController)
routes.patch('/records/:id/', updateRecordController)
routes.delete('/records/:id', deleteRecordController)

export default routes