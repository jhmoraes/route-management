import z from "zod"

export enum TypeUser {
    ADM = "adm",
    NORMAL = "normal"
} 

export interface CreateUserInput {
    name: string,
    email: string,
    password: string,
    type: TypeUser
}

export interface DBCreateUserInput {
    id: string,
    name: string,
    email: string,
    password: string,
    type: TypeUser
}

export const CreateProductSchema = z.object({
    id: z.string(),
    name: z.string().min(2),
    email: z.string().email({ message: "Invalid email address zod" }),
    password: z.string().min(4),
    type: z.string().min(3) 

  }).transform(data => data as DBCreateUserInput)