import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Temas } from 'src/app/model/Temas';
import { temaService } from 'src/app/service/tema-service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-temas-delete',
  templateUrl: './temas-delete.component.html',
  styleUrls: ['./temas-delete.component.css']
})
export class TemasDeleteComponent implements OnInit {

  temas: Temas = new Temas()
  idTemas: number

  constructor(
    private temaService: temaService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(){

    if(environment.token == ''){
      this.router.navigate(['/entrar'])
    }

    this.idTemas = this.route.snapshot.params['id']
    this.findBiIdTema(this.idTemas)

  }

  findBiIdTema(id: number){
    this.temaService.getByIdTema(id).subscribe((resp: Temas)=>{
      this.temas = resp
    })
  }
  
  apagar(){
    this.temaService.deleteTema(this.idTemas).subscribe(()=>{
      alert('Tema apagado com sucesso!')
      this.router.navigate(['/temas'])
    })
  }


  }


