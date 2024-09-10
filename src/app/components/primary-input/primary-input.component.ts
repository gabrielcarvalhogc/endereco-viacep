import { Component, forwardRef, Input, input, Type } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-primary-input',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PrimaryInputComponent),
      multi: true,
    }
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
    this.value = value;
  }

  registerOnChange(fn: any): void {
    this.onChange =fn
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setValue(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    const value = inputElement?.value ?? '';  // Garante que o valor não seja null
    this.value = value;
    this.onChange(this.value);
    this.onTouched();
  }
}
