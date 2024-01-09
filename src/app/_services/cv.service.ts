import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cv } from '../cv';

const API_URL = 'http://localhost:8080/api/test/';

@Injectable({
  providedIn: 'root'
})
export class CvService {

  private baseURL='http://localhost:8080/api/test/liscv';
  private baseURL2 = "http://localhost:8080/api/test/creercv";
  constructor(private http: HttpClient) { }

  getCv(): Observable<Cv[]>{
    return this.http.get<Cv[]>(`${this.baseURL}`);
  }

  createCv(cv: Cv): Observable<Object>{
    return this.http.post(`${this.baseURL}`, cv);
  }

  

  
}
