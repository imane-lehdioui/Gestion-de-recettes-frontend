import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../user';

const API_URL = 'http://localhost:8080/api/test/';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseURL='http://localhost:8080/api/test/listuser';
  constructor(private http: HttpClient) { }

  getUserList(): Observable<User[]>{
    return this.http.get<User[]>(`${this.baseURL}`);
  }

  deleteUser(id: number): Observable<Object>{
    return this.http.delete(`${this.baseURL}/${id}`);
  }

  updateUser(id: number, user: User): Observable<Object>{
    return this.http.put(`${this.baseURL}/${id}`,user);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${this.baseURL}/${id}`, data);
  }


  getUserById(id: number): Observable<User>{
    return this.http.get<User>(`${this.baseURL}/${id}`);
  }

  getPublicContent(): Observable<any> {
    return this.http.get(API_URL + 'all', { responseType: 'text' });
  }

  getUserBoard(): Observable<any> {
    return this.http.get(API_URL + 'user', { responseType: 'text' });
  }

  getModeratorBoard(): Observable<any> {
    return this.http.get(API_URL + 'mod', { responseType: 'text' });
  }

  getAdminBoard(): Observable<any> {
    return this.http.get(API_URL + 'admin', { responseType: 'text' });
  }
}
