import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MortgageService {
  private apiUrl = 'http://localhost:8000/api/mortgages/'; // Adjust this to your backend

  constructor(private http: HttpClient) {}

  getMortgages(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  addMortgage(mortgage: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, mortgage);
  }

  // Method to update a mortgage by ID
  updateMortgage(id: number, mortgageData: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}${id}/`, mortgageData);
  }

  // Delete a mortgage by ID
  deleteMortgage(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}${id}/`);
  }
}