import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsListComponent } from './posts-list/posts-list.component';
import { PostsDetailComponent } from './posts-detail/posts-detail.component';
import { PostsRoutingModule } from './posts-routing.module';

@NgModule({
  declarations: [PostsListComponent, PostsDetailComponent],
  imports: [
    CommonModule,
    PostsRoutingModule
  ]
})
export class PostsModule { }
