import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { PrimaryInputComponent } from "../../components/primary-input/primary-input.component";

@Component({
  selector: 'app-form-component',
  standalone: true,
  imports: [PrimaryInputComponent],
  templateUrl: './form-component.component.html',
  styleUrl: './form-component.component.scss'
})
export class FormComponentComponent {
  formControl = new FormControl('');
  infoList = [
    {
      name: "CEP",
      placeholder: "0100100"
    },
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
      name: "UF",
      placeholder: "SP"
    }
  ];
}
