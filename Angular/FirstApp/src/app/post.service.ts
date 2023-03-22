import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NotFoundError, throwError } from 'rxjs';

import { catchError } from 'rxjs/operators';
import { AppError } from './app-error';


interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private url = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) { }
  // this.http.get<Post[]>(this.url)
  getPosts() {
    return this.http.get<Post[]>(this.url);
  }

  createPost(post: any) {
    return this.http.post(this.url, JSON.stringify(post));
  }

  updatePost(post: any){
    return this.http.patch(this.url + '/' + post.id, JSON.stringify({ isRead: true }));
  }

  deletePost(id: any){
    return this.http.delete(this.url + '/' + id);
  }
}
