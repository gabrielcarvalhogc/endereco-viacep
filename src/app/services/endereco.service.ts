import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Endereco } from '../types/endereco';
@Injectable({
  providedIn: 'root'
})
export class EnderecoService {

  private apiURL = "http://localhost:8080/api/enderecos";

  constructor(private http: HttpClient) { }

  buscarEndereco(cep: string): Observable<Endereco> {
    const url = `${this.apiURL}/${cep}`;
    return this.http.get<Endereco>(url);
  }
}
