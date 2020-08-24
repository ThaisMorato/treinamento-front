import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AreaService {

  private baseUrl: string = "http://localhost:3000/areas";

  constructor(private http: HttpClient) { }

  buscarAreas(){
    return this.http.get<any[]>(this.baseUrl);
  }

}
