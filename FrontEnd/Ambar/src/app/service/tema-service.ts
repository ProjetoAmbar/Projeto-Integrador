import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { Temas } from '../model/Temas';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class temaService {

  constructor(private http: HttpClient) { }

  token = {headers : new HttpHeaders().set('Authorization', environment.token)}


  getAllTema(): Observable<Temas[]>{
    return this.http.get<Temas[]>('http://localhost:8080/temas',this.token)
  }

  getByIdTema(id: number): Observable<Temas>{
    return this.http.get<Temas>(`http://localhost:8080/temas/${id}`, this.token)
  }

  postTema(temas: Temas): Observable<Temas>{
    return this.http.post<Temas>('http://localhost:8080/temas',temas, this.token)
  }
  
  putTema(temas: Temas): Observable<Temas>{
    return this.http.put<Temas>('http://localhost:8080/temas', temas, this.token)
  }

  deleteTema(id: number){
    return this.http.delete(`https://projetoambar.herokuapp.com/temas/${id}`, this.token)
  }


}

