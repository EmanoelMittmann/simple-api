import express from 'express'
import CORS from 'cors'
import { ROUTES } from './router.factory'

export class MainFactory {
    constructor(
        private readonly initialInput: {
            port: number,
            cors: boolean
        }
    ){}


    async Init_application(){
        const {cors,port} = this.initialInput
        const app = express()

        if(cors){
            app.options('*', CORS())
        }

        app.use(express.json())

        app.get('/', (req,res) => {
            res.setHeader('Content-Type','application/json')
            res.send('HELLO!')
        })

        
        app.listen(port, () => {
            console.info("[simple-api] : Running in port " + port)
        })
        
        return app.use(ROUTES)
    }
}