import express from 'express'
import { userController } from '../user.controller/user.controller'
import { userBusiness } from '../../domain/userBusiness/user.business'
import { IdGenerator } from '../../infraestruture/service/IdGenerator'
import { userDatabase } from '../../infraestruture/use.database'



export const userRouter = express.Router()

const instUserDataBase = new userDatabase()
const instUserBusiness = new userBusiness(instUserDataBase, new IdGenerator)
const instUserController = new userController(instUserBusiness) 

console.log('aqui router');

userRouter.post("/", instUserController.createUser) 