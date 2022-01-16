import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Article } from '../../shared/models/article.model';
import { Comment } from '../../shared/models/comment.model';
import { environment } from '../../../environments/environment';
import { PagingResponse } from '../../shared/models/paging-response.model';
import { SingleResponse } from '../../shared/models/single-response.model';

const apiUrl = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<PagingResponse<Article>> {
    return this.http.get<PagingResponse<Article>>(`${apiUrl}/api/articles`)
  }

  getAllByPath(url: string): Observable<PagingResponse<Article>> {
    return this.http.get<PagingResponse<Article>>(url);
  }

  getById(id: number): Observable<SingleResponse<Article>> {
    return this.http.get<SingleResponse<Article>>(`${apiUrl}/api/articles/${id}`)
  }

  getComments(id: number): Observable<SingleResponse<Comment[]>> {
    return this.http.get<SingleResponse<Comment[]>>(`${apiUrl}/api/articles/${id}/comments`)
  }
}