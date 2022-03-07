import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { Postagens } from '../model/Postagens';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class postagemService {

  constructor(private http: HttpClient) { }

  token = {headers : new HttpHeaders().set('Authorization', environment.token)}

  getAllPostagens(): Observable<Postagens[]>{
    return this.http.get<Postagens[]>('https://projetoambar.herokuapp.com/postagens', this.token)
  }

  getByIdPostagem(id: number): Observable<Postagens>{
    return this.http.get<Postagens>(`https://projetoambar.herokuapp.com/postagens/${id}`,this.token)
  }
  postPostagem (postagem: Postagens): Observable<Postagens>{
    return this.http.post<Postagens>('https://projetoambar.herokuapp.com/postagens',postagem,this.token)
  }

  putPostagem(postagem: Postagens): Observable<Postagens>{
    return this.http.put<Postagens>('https://projetoambar.herokuapp.com/postagens',postagem,this.token)
  }

  deletePostagem(id: number){
    return this.http.delete(`https://projetoambar.herokuapp.com/postagens/${id}`,this.token)
  } 

}
