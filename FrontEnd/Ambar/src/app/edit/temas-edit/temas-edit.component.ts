import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Temas } from 'src/app/model/Temas';
import { temaService } from 'src/app/service/tema-service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-temas-edit',
  templateUrl: './temas-edit.component.html',
  styleUrls: ['./temas-edit.component.css']
})
export class TemasEditComponent implements OnInit {

  temas: Temas = new Temas()

  constructor(
    private temaService: temaService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(){

    if(environment.token == ''){
      this.router.navigate(['/entrar'])
    }

    let id = this.route.snapshot.params['id']
    this.findByIdTema(id)
  }

  findByIdTema(id: number){
  this.temaService.getByIdTema(id).subscribe((resp: Temas) => {
    this.temas = resp
   })
 }

 atualizar(){
   this.temaService.putTema(this.temas).subscribe((resp: Temas)=>{
     this.temas = resp
     alert('Tema atualizado com sucesso!')
     this.router.navigate(['/temas'])
   })

  }

}
