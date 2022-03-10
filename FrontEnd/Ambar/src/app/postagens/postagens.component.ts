import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Postagens } from '../model/Postagens';
import { Temas } from '../model/Temas';
import { Usuarios } from '../model/Usuarios';
import { AuthService } from '../service/auth.service';
import { postagemService } from '../service/postagem-service';
import { temaService } from '../service/tema-service';

@Component({
  selector: 'app-postagens',
  templateUrl: './postagens.component.html',
  styleUrls: ['./postagens.component.css']
})
export class PostagensComponent implements OnInit {

  postagem: Postagens = new Postagens()
  tema: Temas = new Temas
  listaTemas: Temas[]
  listaPostagens: Postagens[]
  idTema: number

  usuario: Usuarios = new Usuarios()
  idUser = environment.id

  constructor(private router: Router,
    private PostagemService: postagemService,
    private TemaService: temaService,
    private authService: AuthService) { }

  ngOnInit() {
    if(environment.token == ''){
      this.router.navigate(["/entrar"])
    }
    this.getAllTemas()
    this.getAllPostagens()
    this.findByIdUsuario()
  }

  getAllTemas(){
    this.TemaService.getAllTema().subscribe((resp: Temas[])=>{
      this.listaTemas = resp
    })
  }

  findByIdTema(){    this.TemaService.getByIdTema(this.idTema).subscribe((resp: Temas)=>{
    this.tema = resp
  })}

  getAllPostagens(){
    this.PostagemService.getAllPostagens().subscribe((resp: Postagens[])=> {
      this.listaPostagens = resp
    })
  }

  findByIdUsuario(){
    this.authService.getByIdUsuario(this.idUser).subscribe((resp: Usuarios)=>{this.usuario = resp})
  }  

  publicar(){
    this.tema.id = this.idTema
    this.postagem.temas = this.tema

    this.usuario.id = this.idUser
    this.postagem.usuarios = this.usuario 
    this.PostagemService.postPostagens(this.postagem).subscribe((resp: Postagens) => {
      this.postagem = resp
      alert('Postagem realizada com sucesso!')
      this.postagem = new Postagens()
      this.getAllPostagens() })
  }

}
