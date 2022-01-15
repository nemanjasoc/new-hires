import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, mergeMap, tap } from 'rxjs/operators';
import { ArticleService } from '../core/services/article.service';
import { CategoryService } from '../core/services/category.service';
import { Article } from '../shared/models/article.model';
import { Category } from '../shared/models/category.model';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.scss']
})
export class SinglePostComponent implements OnInit {
  article: Article;
  category: Category;

  constructor(private route: ActivatedRoute,
    private articleService: ArticleService,
    private categoryService: CategoryService) { }

  ngOnInit(): void {
    const articleId = this.route.snapshot.params.id;
    this.loadData(Number(articleId));
  }

  private loadData(articleId: number) {
    this.articleService.getById(articleId)
      .pipe(
        tap(result => {
          this.article = result.data;
        }),
        mergeMap(result => {
          return this.categoryService.getById(result.data.category_id)
        })
      ).subscribe(result => {
        this.category = result.data;
      }, error => {
        console.log('Error while loading single category: ', error);
      })
  }

}
