import { Component, OnInit } from '@angular/core';
import { NotFoundError } from 'rxjs';
import { AppError } from '../app-error';
import { PostService } from '../post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})

export class PostsComponent implements OnInit {


  posts: any[] = [];

  // Do not call http services in our constructor
  constructor(private service: PostService) {

  }
  
  ngOnInit(): void {
    this.service.getPosts()
      .subscribe(response => {
        this.posts = response; // httpClient automatically get json object
        //console.log(response);
      }, error => {
        alert('An unexpected error occurred.');
        console.log(error);
      });
  }

  createPost(input: HTMLInputElement) {
    let post: any = { title: input.value };
    input.value = '';
    this.service.createPost(post)
      .subscribe(response => {
        post.id = response;
        this.posts.splice(0, 0, post);
        console.log(response);
      }, (error: Response) => {
        if(error.status === 400)
          alert('This post has already been created.');
        else{
          alert('An unexpected error occurred.');
          console.log(error);
        }
      });
  }

  updatePost(post: any) {
    //this.http.put(this.url, JSON.stringify(post));
    this.service.updatePost(post)
      .subscribe(response => {
        console.log(response);
      }, error => {
        alert('An unexpected error occurred.');
        console.log(error);
      });
  }

  // http delete request don't have a body
  deletePost(post: any){
    this.service.deletePost(post.id)
      .subscribe(
        response => {
          let index = this.posts.indexOf(post);
          this.posts.splice(index, 1); // delete 1 object
        }, 
        (error: AppError) => {
          if(error instanceof NotFoundError)
            alert('This post has already been deleted.');
          else{
            alert('An unexpected error occurred.');
            console.log(error);
          }
        });
  }
}
