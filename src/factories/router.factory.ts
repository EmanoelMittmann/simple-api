import { ClientController } from "../controllers/clients.controllers";
import { ROUTES } from "../shared/routes/router.routes";

const {getClients, getClientById} = new ClientController()

ROUTES.get('/clients', async (req,res) => {    

    res.status(201).send(await getClients(req,res))
    res.end()
})

ROUTES.get('/client/:id', async(req,res)  => {
    return res.status(201).send(await getClientById(req,res))
})

export {ROUTES};