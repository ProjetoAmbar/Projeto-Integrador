import { Postagens } from "./Postagens"

export class Temas{
    public id: number
    public tituloTema: string
    public descricao: string
    public hashtags: string
    public postagens: Postagens[]
}