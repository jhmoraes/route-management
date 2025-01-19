import { DBCreateUserInput } from "../common/dto/user.dto"
import { ConnectionBaseDatabase } from "./database.config/connectionBaseDatabase"



export class userDatabase extends ConnectionBaseDatabase{

    public static TABLE_USER = "user"


    public createUser = async (input: DBCreateUserInput): Promise<void> => {

        const {id, name, email, password, type} = input

        const newUser = {
            id,
            name_user: name,
            email,
            type_user: type,
            password
        }

        console.log('aquibd');
        
        await userDatabase.connection("user")
        .insert(newUser)

    }

    public getAllUser = async () => {

    }
    public getUserByEmail = async () => {

    }
    public getUserById = async () => {

    }
}