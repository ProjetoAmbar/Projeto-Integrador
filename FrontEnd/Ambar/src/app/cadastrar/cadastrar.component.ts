import { AuthService } from './../service/auth.service';
import { Component, OnInit } from '@angular/core';
import { Usuarios } from '../model/Usuarios';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {

  usuarios: Usuarios = new Usuarios
  confirmarSenha: string

  constructor(
    private authService: AuthService, 
    private router: Router
  ) { }

  ngOnInit() {
    window.scroll(0,0)
  }

  confirmSenha(event: any) {
    this.confirmarSenha = event.target.value 

  }


  cadastrar(){

    if(this.usuarios.senha != this.confirmarSenha){
      alert('A senhas estão incorretas.')
    } else {
      this.authService.cadastrar(this.usuarios).subscribe((resp: Usuarios) => {
        this.usuarios = resp
        this.router.navigate(['/entrar'])
        alert('Usuário cadastrado com sucesso!')
      })

    }
  }

}