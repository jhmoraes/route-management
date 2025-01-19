import { DBCreateUserInput } from "../../common/dto/user.dto";


export interface IuserDatabase {
    createUser: (input:DBCreateUserInput)=>Promise<void>
    //getAllProducts: () =>Promise<Product[]>
    //getProductById: (id:string)=>Promise<Product>
    
}