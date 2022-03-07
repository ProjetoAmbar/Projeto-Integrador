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
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  postagem: Postagens = new Postagens()
  tema: Temas = new Temas
  listaTemas: Temas[]
  listaPostagens: Postagens[]
  idTema: number

  user: Usuarios = new Usuarios()
  idUser = environment.id

  constructor(private router: Router,
    private postagemService: postagemService,
    private temaService: temaService,
    private authService: AuthService) { }
    
  ngOnInit() {
    if(environment.token == ''){
      this.router.navigate(["/entrar"])
    }
    this.getAllTemas()
    this.getAllPostagens()
  }

  getAllTemas(){
    this.temaService.getAllTema().subscribe((resp: Temas[])=>{
      this.listaTemas = resp
    })
  }

  findByIdTema(){    this.temaService.getByIdTema(this.idTema).subscribe((resp: Temas)=>{
    this.tema = resp
  })} // Depende de modificação do backend

  getAllPostagens(){
    this.postagemService.getAllPostagens().subscribe((resp: Postagens[])=> {
      this.listaPostagens = resp
    })
  }

  // findByIdUser(){
  //  this.authService.getByIdUser(this.idUser).subscribe((resp: Usuarios)=>{this.user = resp})
  //}  

  publicar(){
    this.tema.id = this.idTema
    this.postagem.temas = this.tema

    this.user.id = this.idUser
    this.postagem.usuarios = this.user 
    this.postagemService.postPostagem(this.postagem).subscribe((resp: Postagens) => {
      this.postagem = resp
      alert('Postagem realizada com sucesso!')
      this.postagem = new Postagens()
      this.getAllPostagens() })
  }

}
