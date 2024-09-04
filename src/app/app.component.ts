import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EnderecoService } from './services/endereco.service';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'endereco-viacep';
  endereco: any;

  constructor(private enderecoService: EnderecoService) { }

  buscarEndereco(cep: string) {
    this.enderecoService.buscarEndereco(cep).subscribe({
      next: data => this.endereco = data,
      error: e => console.error("Erro ao buscar o endereço ", e)
    });
  }
}
