import { Injectable } from '@angular/core';
import { Commentaire } from '../Commentaire';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Cv } from '../cv';


@Injectable({
  providedIn: 'root'
})
export class CommentaireService {

  private baseURL='http://localhost:8080/api/test/listeCommentaire';
  private baseURL1='http://localhost:8080/api/test/creercommentaire';
  private baseURL3='http://localhost:8080/api/test/listefavoris';
  private baseURL4='http://localhost:8080/api/test/ajouterfavori';



  constructor(private http: HttpClient) { }

  getAllCommentaire(): Observable<Commentaire[]>{
    return this.http.get<Commentaire[]>(`${this.baseURL}`);
  }

  createCommentire(data: any): Observable<any> {debugger
    return this.http.post(`${this.baseURL1}`, data);debugger
  }
  //=====Favoris=================
  getAllFavoris(): Observable<Cv[]>{
    return this.http.get<Cv[]>(`${this.baseURL3}`);
  }
  addFavoris(data: any): Observable<any> {debugger
    return this.http.post(`${this.baseURL4}`, data);debugger
  }

  

}
