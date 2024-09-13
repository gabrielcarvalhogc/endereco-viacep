import { Component, forwardRef } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { PrimaryInputComponent } from "../primary-input/primary-input.component";
import { EnderecoService } from '../../services/endereco.service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-form-component',
  standalone: true,
  imports: [PrimaryInputComponent, ReactiveFormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent {
  form: FormGroup;
  endereco: any;
  infoList = [
    {name: "logradouro",placeholder: "Praça da Sé"},
    {name: "bairro",placeholder: "Sé"},
    {name: "cidade",placeholder: "São Paulo"},
    {name: "uf",placeholder: "SP"}
  ];

  constructor(private enderecoService: EnderecoService, private router: Router) {
    this.form = new FormGroup({
      cep: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(8)
      ]),
      logradouro: new FormControl('', Validators.required),
      bairro: new FormControl('', Validators.required),
      cidade: new FormControl('', Validators.required),
      uf: new FormControl('', Validators.required),
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

  onSubmit() {
    if (this.form.valid) {
      this.router.navigate(['/confirmacao']);
    }
  }

  get cep() {return this.form.get('cep');}
  get logradouro() { return this.form.get('logradouro'); }
  get bairro() { return this.form.get('bairro'); }
  get cidade() { return this.form.get('cidade'); }
  get uf() { return this.form.get('uf'); }
}
