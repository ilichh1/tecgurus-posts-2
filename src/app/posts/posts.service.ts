import { Injectable } from '@angular/core';
import { Post } from './post';
import { HttpService } from '../http.service';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(
    private httpService: HttpService
  ) { }

  public getAllPosts(): Promise<Post[]> {
    return this.httpService.get('posts');
  }

  public getPostById(postId: number): Promise<Post> {
    return this.httpService.get(`posts/${postId}`);
  }

}
