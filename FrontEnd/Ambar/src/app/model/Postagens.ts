import { Temas } from "./Temas"
import { Usuarios } from "./Usuarios"

export class Postagens{
    public id: number
    public titulo: string
    public post: string
    public imagens_url: string
    public data: Date
    public usuarios: Usuarios
    public temas: Temas
}