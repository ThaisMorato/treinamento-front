import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TODO } from 'src/models/todo.interface';
import { from, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  public baseUrl = "http://localhost:3001/tarefas"

  constructor(private http:HttpClient) { }



  create (teste: TODO): Observable<TODO> {
    return this.http.post<TODO>(this.baseUrl, teste)
  }

  read (): Observable<TODO[]> {
    return this.http.get<TODO[]>(this.baseUrl)
  }

  delete (tarefa:TODO): Observable<TODO>{
    return this.http.delete<TODO>(`${this.baseUrl}/${tarefa.id}`)
  }



}
