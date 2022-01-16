import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../core/services/article.service';
import { Article } from '../shared/models/article.model';
import { PagingResponse } from '../shared/models/paging-response.model';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.scss']
})
export class PostsListComponent implements OnInit {

  response: PagingResponse<Article>;

  constructor(private articleService: ArticleService) { }

  ngOnInit(): void {
    this.loadArticles();
  }

  private loadArticles() {
    this.articleService.getAll().subscribe(result => {
      this.response = result;
    }, error => {
      console.log('Error while loading articles: ', error);
    })
  }

  refreshData(dataPath: string) {
    this.articleService.getAllByPath(dataPath).subscribe(result => {
      this.response = result;
    }, error => {
      console.log('Error while loading articles: ', error);
    })
  }

}
