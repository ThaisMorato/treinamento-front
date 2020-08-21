import { Todo } from 'src/models/todo.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TarefaService {
  private baseUrl: string = "http://localhost:3000/tarefas";
  constructor(private http: HttpClient) { }

  adicionarTarefa(todo: Todo): Observable<Todo> {
    return this.http.post<Todo>(this.baseUrl, todo);
  }

  atualizarTarefa(todo: Todo): Observable<Todo>{
    const url: string = `${this.baseUrl}/${todo.id}`
    return this.http.put<Todo>(url, todo);
  }

  deletarTarefa(id: number): Observable<Todo>{
    const url: string = `${this.baseUrl}/${id}`;
    return this.http.delete<Todo>(url);
  }

  buscarTarefas(): Observable<Todo[]>{
    return this.http.get<Todo[]>(this.baseUrl);
  }

}
