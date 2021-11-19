import { Router } from "express"

import * as CLientsController from '../domain/logic/client.logic'

const router = Router()


router.get('/', CLientsController.findAllClients)

router.post('/', CLientsController.createClient)

router.get('/:id', CLientsController.finOneClient)

router.delete('/:id', CLientsController.deleteClient)

router.put('/:id', CLientsController.updateClient)


export default router;