import { Component, OnInit } from '@angular/core';
import { Temas } from '../model/Temas';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { temaService } from '../service/tema-service';

@Component({
  selector: 'app-tema',
  templateUrl: './tema.component.html',
  styleUrls: ['./tema.component.css']
})
export class TemaComponent implements OnInit {

  temas: Temas = new Temas()
  listaTemas: Temas[]

  constructor(private router: Router,
    private httpService: temaService) { }


  ngOnInit() {
    if(environment.token == ''){
      this.router.navigate(["/entrar"])
    }
    this.findAllTemas()
  }

  findAllTemas(){
    this.httpService.getAllTema().subscribe((resp: Temas[])=>{
      this.listaTemas = resp
    })
  }
  cadastrarTema(){this.httpService.postTema(this.temas).subscribe((resp: Temas)=>{
    this.temas = resp
    alert('Tema cadastrado com sucesso!')
    this.findAllTemas()
    this.temas = new Temas()
  })}

  
}
