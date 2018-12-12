import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostsListComponent } from './posts-list/posts-list.component';
import { PostsDetailComponent } from './posts-detail/posts-detail.component';

const postRoutes: Routes = [
  { path: 'list', component: PostsListComponent },
  { path: 'detail/:postId', component: PostsDetailComponent },
  { path: '', redirectTo: '/posts/list', pathMatch: 'full' },
];

@NgModule({
  imports: [
    RouterModule.forChild(postRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class PostsRoutingModule { }
