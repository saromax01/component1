import { Injectable } from '@angular/core';
import { post } from './post';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  constructor() {}

  fetchPosts(): Promise<post[]> {
    return fetch('/assets/db.json')
      .then((response) => response.json())
      .catch((error) => console.error('Error fetching posts:', error));
  }
}
