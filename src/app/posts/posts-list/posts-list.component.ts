import { Component, OnInit } from '@angular/core';
import { PostsService } from '../posts.service';
import { Post } from '../post';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.scss']
})
export class PostsListComponent implements OnInit {

  public allPosts: Post[];

  constructor(
    private service: PostsService
  ) { }

  ngOnInit() {
    this.initComponent();
  }

  public initComponent(): void {
    this.service.getAllPosts()
      .then(response => {
        this.allPosts = response;
      });
  }

}
