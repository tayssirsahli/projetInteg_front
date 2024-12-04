import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent {
  paymentForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.paymentForm = this.fb.group({
      nom: ['', [Validators.required, Validators.pattern(/^[A-Za-z\s]+$/)]],
      prenom: ['', [Validators.required, Validators.pattern(/^[A-Za-z\s]+$/)]],
      email: ['', [Validators.required, Validators.email]],
      tel: ['', [Validators.required, Validators.pattern(/^[0-9]{8,15}$/)]],
      cardName: ['', [Validators.required]],
      cardNumber: ['', [Validators.required, Validators.pattern(/^\d{16}$/)]],
      expiryDate: ['', [Validators.required, this.expiryDateValidator]],
      cvc: ['', [Validators.required, Validators.pattern(/^\d{3}$/)]]
    });
  }

  expiryDateValidator(control: any) {
    const today = new Date();
    const enteredDate = new Date(control.value);
    return enteredDate > today ? null : { invalidDate: true };
  }

  onSubmit() {
    if (this.paymentForm.valid) {
      console.log('Payment Information:', this.paymentForm.value);
    } else {
      console.log('Form is invalid');
    }
  }
}
