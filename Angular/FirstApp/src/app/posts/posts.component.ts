import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})

export class PostsComponent {

  posts: any[] = [];
  private url = 'https://jsonplaceholder.typicode.com/posts';
  constructor(private http: HttpClient) {
    this.http.get<Post[]>(this.url)
      .subscribe(response => {
        this.posts = response; // httpClient automatically get json object
        //console.log(response);
      });
  }

  createPost(input: HTMLInputElement) {
    let post: any = { title: input.value };
    input.value = '';
    this.http.post(this.url, JSON.stringify(post))
      .subscribe(response => {
        post.id = response;
        this.posts.splice(0, 0, post);
        console.log(response);
      })
  }

  updatePost(post: any) {
    //this.http.put(this.url, JSON.stringify(post));
    this.http.patch(this.url + '/' + post.id, JSON.stringify({ isRead: true }))
      .subscribe(response => {
        console.log(response);
      })
  }

}
