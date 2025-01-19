import { CreateUserInput} from "../../common/dto/user.dto"
 

export interface IuserBusiness {
    createUser: (input:CreateUserInput)=>Promise<void>
    //getAllProducts: () =>Promise<Product[]>
    //getProductById: (id:string)=>Promise<Product>
    
}




