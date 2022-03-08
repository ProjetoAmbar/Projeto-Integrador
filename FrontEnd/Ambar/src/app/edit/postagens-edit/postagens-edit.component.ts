import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Postagens } from 'src/app/model/Postagens';
import { Temas } from 'src/app/model/Temas';
import { postagemService } from 'src/app/service/postagem-service';
import { temaService } from 'src/app/service/tema-service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-postagens-edit',
  templateUrl: './postagens-edit.component.html',
  styleUrls: ['./postagens-edit.component.css']
})
export class PostagensEditComponent implements OnInit {

  postagens: Postagens = new Postagens()

  temas: Temas = new Temas()
  listaTemas: Temas[]
  idTemas: number

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private postagemService: postagemService,
    private temaService: temaService
  ) { }

  ngOnInit() {
    window.scroll(0,0)

    if(environment.token == ''){
      this.router.navigate(['/entrar'])
    }

    let id = this.route.snapshot.params['id']
    this.findByIdPostagem(id)
    this.findAllTemas()
  }
  findByIdPostagem(id: number){
    this.postagemService.getByIdPostagens(id).subscribe((resp: Postagens) => {
      this.postagens = resp
    })
  }

  findByIdTema(){
    this.temaService.getByIdTema(this.idTemas).subscribe((resp: Temas) => {
      this.temas = resp
    })
  }

  findAllTemas(){
    this.temaService.getAllTema().subscribe((resp: Temas[]) =>{
      this.listaTemas = resp
    })
  }

  atualizar(){
    this.temas.id = this.idTemas
    this.postagens.temas = this.temas

    this.postagemService.putPostagens(this.postagens).subscribe((resp: Postagens) => {
      this.postagens = resp
      alert('Postagem atualizada com sucesso!')
      this.router.navigate(['/inicio'])
    })
  }

}
