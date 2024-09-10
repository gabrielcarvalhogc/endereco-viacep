import { Component, forwardRef } from '@angular/core';
import { FormControl, FormGroup, NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';
import { PrimaryInputComponent } from "../../components/primary-input/primary-input.component";
import { EnderecoService } from '../../services/endereco.service';

@Component({
  selector: 'app-form-component',
  standalone: true,
  imports: [PrimaryInputComponent, ReactiveFormsModule],
  templateUrl: './form-component.component.html',
  styleUrl: './form-component.component.scss'
})
export class FormComponentComponent {
  form: FormGroup;
  endereco: any;
  infoList = [
    {
      name: "logradouro",
      placeholder: "Praça da Sé"
    },
    {
      name: "bairro",
      placeholder: "Sé"
    },
    {
      name: "cidade",
      placeholder: "São Paulo"
    },
    {
      name: "uf",
      placeholder: "SP"
    }
  ];

  constructor(private enderecoService: EnderecoService) {
    this.form = new FormGroup({
      cep: new FormControl(''),
      logradouro: new FormControl(''),
      bairro: new FormControl(''),
      cidade: new FormControl(''),
      uf: new FormControl(''),
    })
  }

  buscarEndereco() {
    const cep = this.form.get('cep')?.value;

    this.enderecoService.buscarEndereco(cep).subscribe({
      next: data => {
        this.endereco = data;

        this.form.patchValue({
          logradouro: data.logradouro,
          bairro: data.bairro,
          cidade: data.localidade,
          uf: data.uf
        });
      },
      error: e => console.error("Erro ao buscar o endereço ", e)
    });
  }
}
