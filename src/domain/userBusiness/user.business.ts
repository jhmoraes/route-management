import { CreateUserInput, DBCreateUserInput } from "../../common/dto/user.dto"
import { IuserDatabase } from "../../infraestruture/repositories/repositories.use.database";
import { IidGenerator } from "../../presentation/repositories/repositories.service.controller";

export class userBusiness {
    constructor(
        private userDatabase: IuserDatabase,
        private idGenerator: IidGenerator
    ){}
    

    public createUser = async (input: CreateUserInput): Promise<void> => {

        const { name, email, password, type } = input

        const id: string = this.idGenerator.generate()
        
        const newUserDB: DBCreateUserInput = {
            id,
            name,
            email,
            password,
            type
        }

        console.log(type);
        

        //faltou a modelagem

        await this.userDatabase.createUser(newUserDB)
    
    }

    public getAllUser = async () => {

    }
    public getUserByEmail = async () => {

    }
    public getUserById = async () => {

    }
}