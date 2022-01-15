import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Category } from '../../shared/models/category.model';
import { environment } from '../../../environments/environment';
import { SingleResponse } from 'src/app/shared/models/single-response.model';

const apiUrl = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})

export class CategoryService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Category> {
    return this.http.get<Category>(`${apiUrl}/api/categories`)
  }

  getById(id: number): Observable<SingleResponse<Category>> {
    return this.http.get<SingleResponse<Category>>(`${apiUrl}/api/categories/${id}`)
  }
}
