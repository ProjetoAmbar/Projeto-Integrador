import { Postagens } from "./Postagens"

export class Usuarios{
    public id: number
    public nome: string
    public email: string
    public senha: string
    public postagens: Postagens[]
}