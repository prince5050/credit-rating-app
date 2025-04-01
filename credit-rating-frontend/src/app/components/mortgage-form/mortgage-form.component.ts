import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MortgageService } from '../../services/mortgage.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-mortgage-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule,HttpClientModule],
  templateUrl: './mortgage-form.component.html',
  styleUrls: ['./mortgage-form.component.css'],
})
export class MortgageFormComponent {
  mortgageForm = this.fb.group({
    credit_score: [null, [Validators.required, Validators.min(300), Validators.max(850)]],
    loan_amount: [null, [Validators.required, Validators.min(1)]],
    property_value: [null, [Validators.required, Validators.min(1)]],
    annual_income: [null, [Validators.required, Validators.min(1)]],
    debt_amount: [null, [Validators.required, Validators.min(0)]],
    loan_type: ['fixed', Validators.required],
    property_type: ['single_family', Validators.required],
  });

  rating: string = '';

  constructor(private fb: FormBuilder, private mortgageService: MortgageService) {}

  submitMortgage() {
    if (this.mortgageForm.valid) {
      this.mortgageService.addMortgage(this.mortgageForm.value).subscribe((response) => {
        this.rating = response.credit_rating;
        alert("Mortgage created successfully !")
      });
    }
  }
}