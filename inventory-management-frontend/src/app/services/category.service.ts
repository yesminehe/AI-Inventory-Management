import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  private apiUrl = 'http://localhost:5147/api/Categories'; // Your API URL

  constructor(private http: HttpClient) {}

  // Method to fetch categories
  getCategories(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  // Method to add a new category
  addCategory(category: any): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    console.log('catergory to add .', category);
    return this.http.post<any>(this.apiUrl, category, { headers });
  }
}
