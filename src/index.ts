import express, { Request, Response } from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { userRouter } from './presentation/router/use.router'


dotenv.config()

const app = express()

app.use(cors())
app.use(express.json())

app.listen(process.env.PORT, () => {
    console.log(`Servidor rodando na porta ${3003}`)
})

/* app.get('/ping', (req: Request, res: Response) =>{
    res.status(200).send({massage: 'Pong!'})
    
}) */

app.use("/user", userRouter)