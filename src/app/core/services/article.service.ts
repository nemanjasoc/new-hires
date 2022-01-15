import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Article } from '../../shared/models/article.model';
import { environment } from '../../../environments/environment';

const apiUrl = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Article> {
    return this.http.get<Article>(`${apiUrl}/api/categories`)
  }
}