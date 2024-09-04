import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

interface Endereco {
  cep: string;
  logradouro: string;
  complemento: string;
  bairro: string;
  localidade: string;
  uf: string;
  ibge: string;
  gia: string;
  ddd: string;
  siafi: string;
}
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
