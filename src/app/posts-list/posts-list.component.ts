import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../core/services/article.service';
import { Article } from '../shared/models/article.model';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.scss']
})
export class PostsListComponent implements OnInit {

  articles: Article[] = [];

  constructor(private articleService: ArticleService) { }

  ngOnInit(): void {
    this.loadArticles();
  }

  private loadArticles() {
    this.articleService.getAll().subscribe(result => {
      this.articles = result.data;
    }, error => {
      console.log('Error while loading articles: ', error);
    })
  }

}
