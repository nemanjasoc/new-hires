import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { forkJoin } from 'rxjs';
import { mergeMap, tap } from 'rxjs/operators';
import { ArticleService } from '../core/services/article.service';
import { CategoryService } from '../core/services/category.service';
import { Article } from '../shared/models/article.model';
import { Category } from '../shared/models/category.model';
import { Comment } from '../shared/models/comment.model';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.scss']
})
export class SinglePostComponent implements OnInit {
  article: Article;
  comments: Comment[] = [];
  category: Category;

  constructor(private route: ActivatedRoute,
    private articleService: ArticleService,
    private categoryService: CategoryService) { }

  ngOnInit(): void {
    const articleId = this.route.snapshot.params.id;
    this.loadData(Number(articleId));
  }

  private loadData(articleId: number) {
    forkJoin([
      this.articleService.getById(articleId),
      this.articleService.getComments(articleId)
    ])
      .pipe(
        tap(([article, comments]) => {
          this.article = article.data;
          this.comments = comments.data;
        }),
        mergeMap(([article, comments]) => {
          return this.categoryService.getById(article.data.category_id);
        })
      ).subscribe(category => {
        this.category = category.data;
      }, error => {
        console.log('Error while loading single category: ', error);
      })
  }

}
