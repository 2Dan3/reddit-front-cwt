import { Injectable } from '@angular/core';
import { Comment } from '../model/comment.model';

const COMMENTS = [
  {"_id":1, "author":"Akio Toyoda", "text":"A short Comment regarding ...", "timestamp":Date()},
  {"_id":2, "author":"TheOneAndOnlyUser123", "text":"Another, longer Comment regarding this post ...", "timestamp":Date()},
  {"_id":3, "author":"Redditor457", "text":"Aaand yet another & yet longer Comment regarding this exact same post ...", "timestamp":Date()},
  {"_id":4, "author":"Redditor878", "text":"Aaand yet ANOTHER & yet LONGER Comment regarding this exact same post ...", "timestamp":Date()},
]

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  private commentList :Comment[] = [];

  constructor() {
    for(let commentObj of COMMENTS) {
      this.commentList.push(new Comment(commentObj));
    }
   }

   getAll() :Comment[] {
    return this.commentList;
   }
}
