import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AppTarefaListComponent } from './app.tarefa.list'; // Import the Comment interface

@Injectable({
 providedIn: 'root',
})
export class AppService {
 private baseUrl = 'http://localhost:3000/api';

constructor(private http: HttpClient) {}

getTarefas(): Observable<AppTarefaListComponent[]> {
 return this.http.get<AppTarefaListComponent[]>(`${this.baseUrl}/listar`);
 }

 
getTestePost(params: any): Observable<AppTarefaListComponent[]> {
    return this.http.post<AppTarefaListComponent[]>(`${this.baseUrl}/teste_post`, params);
 }
}