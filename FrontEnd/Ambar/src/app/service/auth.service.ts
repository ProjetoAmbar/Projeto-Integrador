import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Usuarios } from '../model/Usuarios';
import { UsuarioLogin } from '../model/UsuarioLogin';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }

  entrar(usuarioLogin: UsuarioLogin): Observable<UsuarioLogin>{
    return this.http.post<UsuarioLogin>('https://projetoambar.herokuapp.com/usuarios/logar', usuarioLogin)

  }

  cadastrar(usuarios: Usuarios): Observable<Usuarios>{
    return this.http.post<Usuarios>('https://projetoambar.herokuapp.com/usuarios/cadastrar', usuarios)

  }

  atualizar(usuarios: Usuarios): Observable<Usuarios>{
    return this.http.put<Usuarios>('https://projetoambar.herokuapp.com/usuarios/atualizar', usuarios)

  }

  getByIdUsuario(id: number): Observable<Usuarios>{
    return this.http.get<Usuarios>(`https://projetoambar.herokuapp.com/usuarios/${id}`)

  }

  logado(){

    let ok: boolean = false

    if(environment.token != ''){
      ok = true
    }

    return ok

  }
}