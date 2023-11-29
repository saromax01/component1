import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post';
import { PostsService } from 'src/app/service/posts.service';

@Component({
  selector: 'app-inactive-post',
  templateUrl: './inactive-post.component.html',
  styleUrls: ['./inactive-post.component.scss'],
})
export class InactivePostComponent implements OnInit {
  posts: Post[] = [];
  constructor(private postSrv: PostsService) {
    this.postSrv.recuperaPost().then((posts) => {
      this.posts = posts;
    });
  }

  ngOnInit(): void {}
}
