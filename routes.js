import { Router } from 'express'
import controllers from "./controllers.js"

const routes = Router()
const [getRecordsController, postRecordController, getRecordController] = controllers

routes.get('/', getRecordsController)
routes.get('/records', getRecordsController)
routes.post('/record', postRecordController)
routes.get('/records/:id', getRecordController)

export default routes