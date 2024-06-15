import { Directive, HostListener } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[positiveNumber]'
})
export class PositiveNumberDirective {

  constructor(private control: NgControl) {}

  @HostListener('input', ['$event']) onInput(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    let value = inputElement.value;
    console.log('PositiveNumberDirective: Input event detected, value:', value); // Add this line

    // Prevent typing 0
    if (value === '0' || value === '' || parseInt(value, 10) <= 0) {
      value = '1';
    }

    // Update the model
    this.control.control?.setValue(value, { emitEvent: false });
  }
}
