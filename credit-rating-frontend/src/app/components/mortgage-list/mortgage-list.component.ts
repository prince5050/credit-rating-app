import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MortgageService } from '../../services/mortgage.service';
import { FormsModule } from '@angular/forms';  // Import FormsModule


@Component({
  selector: 'app-mortgage-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './mortgage-list.component.html',
  styleUrls: ['./mortgage-list.component.css'],
})
export class MortgageListComponent implements OnInit {
  mortgages: any[] = [];
  selectedMortgage: any = null;

  constructor(private mortgageService: MortgageService) {}

 
  ngOnInit(): void {
    this.getMortgages();
  }

  // Get all mortgages
  getMortgages(): void {
    this.mortgageService.getMortgages().subscribe((data) => {
      this.mortgages = data;
    });
  }

  deleteMortgage(id: number) {
    if (confirm('Are you sure you want to delete this mortgage?')) {
      this.mortgageService.deleteMortgage(id).subscribe(() => {
        this.mortgages = this.mortgages.filter(mortgage => mortgage.id !== id);
        alert('Mortgage deleted successfully');
      });
}
  }

  // Set mortgage for update
  editMortgage(mortgage: any): void {
    if (confirm('Are you sure you want to Update this mortgage?')) {
    this.selectedMortgage = { ...mortgage };
    }
  }

  // Save updated mortgage
  updateMortgage(): void {
    if (this.selectedMortgage) {
      this.mortgageService.updateMortgage(this.selectedMortgage.id, this.selectedMortgage).subscribe(() => {
        this.getMortgages();
        this.selectedMortgage = null;
        alert("Mortgage updated Successfully !")
        
      });
    }
  }
  cancelMortgage(): void {
    this.getMortgages();
    this.selectedMortgage = null;
  }
}