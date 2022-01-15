import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { PostsListComponent } from './posts-list/posts-list.component';
import { SinglePostComponent } from './single-post/single-post.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminDashboardComponent,
    PostsListComponent,
    SinglePostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
