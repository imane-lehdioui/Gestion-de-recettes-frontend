import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Offre } from '../offre';

const API_URL = 'http://localhost:8080/api/test/';

@Injectable({
  providedIn: 'root'
})
export class OffreService {

  private baseURL='http://localhost:8080/api/test/listoffre';
  private baseURL2 = "http://localhost:8080/api/test/creeroffre";
  private baseURL3 = "http://localhost:8080/api/test";
  private baseURL4='http://localhost:8080/api/test/deleteoffre';
  private baseURL5='http://localhost:8080/api/test/update';
  private baseURL6 = "http://localhost:8080/api/test/recetteimage";



  constructor(private http: HttpClient) { }

  getOffre(): Observable<Offre[]>{
    return this.http.get<Offre[]>(`${this.baseURL}`);
  }


  find(id: number): Observable<any> {
		console.log("id==========================>", id);
		let headers = new HttpHeaders()
			.set("content-type", "application/json")
			.set("Access-Control-Allow-Origin", "*");
		return this.http.get<Offre>(`${this.baseURL5}/${id}`, {
			observe: "response",
			headers: headers,
		});
	}

  
  createOffre(data: any): Observable<any> {debugger
    return this.http.post(`${this.baseURL2}`, data);debugger
  }
  // creer offre with image 
  createData(formData: FormData): Observable<any> {debugger
    return this.http.post(`${this.baseURL6}`, formData);debugger
  }

  deleteOffre(id: number): Observable<string> {debugger
    return this.http.delete<string>(`${this.baseURL4}/${id}`);
  }

  // updateOffre(id: number, updatedOffre: Offre): Observable<Offre> {
  //   return this.http.put<Offre>(`${this.baseURL5}/${id}`, updatedOffre);
  // }

  updateOffre(id: number,offre: Offre): Observable<Object>{debugger
    return this.http.put(`${this.baseURL5}/${id}`,offre);
  }
  


  goToUserListPostuler(id: number, offre: Offre): Observable<Object>{
    return this.http.put(`${this.baseURL}/${id}`, offre);
  }

  getOffreById(id: number): Observable<Offre>{
    return this.http.get<Offre>(`${this.baseURL}/${id}`);
  }

  searchRecettesByCategorie(categorie: string): Observable<Offre[]> {
    return this.http.get<Offre[]>(`${this.baseURL3}/searchByCategorie?categorie=${categorie}`);
  }

  
}
