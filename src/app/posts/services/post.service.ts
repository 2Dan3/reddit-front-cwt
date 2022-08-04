import { Injectable } from '@angular/core';
import { Post } from '../model/post';

const POSTS = [
  {"_id":1, "title":"We are the champions", "text":"POWADKPOADK1KK2kwopadkapwokdk23kopOPDOPWMAPOmqodmapomdpoamda123", "creation_date":23-7-2022, "author_display_name":"mika123"},
  {"_id":2, "title":"Ayo, but check this out", "text":"iOJLML12MLKDMLmlkamwdlmL1KMdpoamda123", "creation_date":24-7-2022, "author_display_name":"pera789"},
  {"_id":3, "title":"You are not gonna believe this", "text":"lJWDLJWALDJAW1O2IJ3OJDJoijaodijpoamda123", "creation_date":25-7-2022, "author_display_name":"sava456"},
  {}
]

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private postList: Post[] = [];

  constructor() {
    for(let postObj of POSTS) {
      this.postList.push(new Post(postObj));
    }

   }

   getAll() :Post[] {
    return this.postList;
   }

}
