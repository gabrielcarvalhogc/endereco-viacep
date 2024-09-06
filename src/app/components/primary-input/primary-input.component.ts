import { Component, Input, input, Type } from '@angular/core';
import { ControlValueAccessor, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-primary-input',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './primary-input.component.html',
  styleUrl: './primary-input.component.scss'
})
export class PrimaryInputComponent implements ControlValueAccessor {
  @Input() type: string = "text";
  @Input() placeholder: string = "";
  @Input() label: string = "";
  @Input() inputName: string = "";

  value: string = '';
  onChange: any = () => {};
  onTouched: any = () => {};

  writeValue(value: any): void {
    this.value = this.value
  }

  registerOnChange(fn: any): void {
    this.onChange =fn
  }

    registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
}
