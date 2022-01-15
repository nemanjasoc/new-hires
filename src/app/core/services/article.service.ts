import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Article } from '../../shared/models/article.model';
import { environment } from '../../../environments/environment';
import { PagingResponse } from 'src/app/shared/models/paging-response.model';
import { SingleResponse } from 'src/app/shared/models/single-response.model';

const apiUrl = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<PagingResponse<Article>> {
    return this.http.get<PagingResponse<Article>>(`${apiUrl}/api/articles`)
  }

  getById(id: number): Observable<SingleResponse<Article>> {
    return this.http.get<SingleResponse<Article>>(`${apiUrl}/api/articles/${id}`)
  }
}