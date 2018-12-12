import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Post } from '../post';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-posts-detail',
  templateUrl: './posts-detail.component.html',
  styleUrls: ['./posts-detail.component.scss']
})
export class PostsDetailComponent implements OnInit, OnDestroy {

  private routeParamsSubscriber: Subscription;

  public postId: number;
  public post: Post;

  constructor(
    private service: PostsService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.subscribeToRouteParams();
  }

  ngOnDestroy() {
    this.routeParamsSubscriber.unsubscribe();
  }
  
  private subscribeToRouteParams(): void {
    this.routeParamsSubscriber = this.route.params.subscribe(
      params => {
        this.postId = Number(params.postId);
        this.service.getPostById(this.postId)
          .then(post => this.post = post);
      }
    );
  }

}
