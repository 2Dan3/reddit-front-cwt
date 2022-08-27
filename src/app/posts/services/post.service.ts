import { Injectable } from '@angular/core';
import { Post } from '../model/post';

const POSTS = [
  {"_id":1, "title":"We are the champions", "text":"POWADKPOADK1KK2kwopadkapwo kdk23kopOPDOPWMAPOmqodm apomdpoamda 123", "creation_date":Date(), "author_display_name":"mika123"},
  {"_id":2, "title":"Ayo, but check this out", "text":"iOJLML12MLKDM LmlkamwdlmL1 KMdpoamda123", "creation_date":Date(), "author_display_name":"pera789"},
  {"_id":3, "title":"You are not gonna believe this", "text":"lJWDLJWALDJA W1O2IJ3OJDJoijaodijpoamda123", "creation_date":Date(), "author_display_name":"sava456"},
  {"_id":2, "title":"Back at it again, with another meme", "text":"iOJLML12MLKDM LmlkamwdlmL1 KMdpoamda123", "creation_date":Date(), "author_display_name":"pera789"},
  {"_id":2, "title":"Anyone else had this happen to them?", "text":"iOJawdwaKDM LmlkawdmL1 1M3p1a54123", "creation_date":Date(), "author_display_name":"maree123"},
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

   getAll(community_id: string|number) :Post[] {
    return this.postList;
   }

   findById(post_id: string|number) :Post {
    for(let postt of this.postList){
      if (postt._id == post_id) {
        return postt;
      }
    }
    return new Post();
   }

}
