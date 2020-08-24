import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LocalService {

  private baseUrl: string = "http://localhost:3000/locais";

  constructor(private http: HttpClient) { }

  buscarLocais(){
    return this.http.get<any[]>(this.baseUrl);
  }

}
