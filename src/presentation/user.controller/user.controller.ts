import { Request, Response } from "express"
import { CreateUserInput } from "../../common/dto/user.dto"
import { IuserBusiness } from "../repositories/repositories.user.controller"


export class userController {
    constructor(
        private userBusiness: IuserBusiness
    ){}

    //USER

    public createUser = async (req: Request, res: Response): Promise<void> => {

        try {

            console.log('user controler');

            const { name, email, password, type } = req.body

            console.log(name, email, password, type);
            

            const input: CreateUserInput = {
                name,
                email,
                type,
                password
            }

         await this.userBusiness.createUser(input)

         res.status(201).send("Usuário criado!")

        } catch(error) {
            console.log('error', error)

           /*  if (error instanceof ZodError) {
                res.status(400).send(error.issues)
            } else if (error instanceof BaseError) {
                res.status(error.statusCode).send(error.message)
            } else {
                res.status(500).send("Erro inesperado")
            } */

        }

    }
    public getAllUser = async () => {

    }
    public getUserByEmail = async () => {

    }
    public getUserById = async () => {

    }

    //EDIFICE

    public createEdifice = async () => {

    }
    public getAllEdifice = async () => {

    }
    public getEdificeById = async () => {

    }

    //ROOM

    public createRoom = async () => {

    }
    public getAllRoom = async () => {

    }
    public getRoomByName = async () => {

    }


}
