import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TODO } from 'src/models/todo.interface';
import { from, Observable } from 'rxjs';
import { environment as env } from '../environments/environment'
import { Local } from '../../src/models/local.model'
//import { infoLocal } from '../'

@Injectable({
  providedIn: 'root'
})
export class AppService {

  public baseUrl = "http://localhost:3001/tarefas"
  public baseUrlMap = "http://localhost:3001/locais"

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

  getLocais (): Observable<Local[]> {
    return this.http.get<Local[]>(this.baseUrlMap)
  }
/*
  getInfoLocal (latlng: string): Observable<InfoLocal> {
    return this.http.get<InfoLocal>(this.baseUrlMap)
  }
*/
}
