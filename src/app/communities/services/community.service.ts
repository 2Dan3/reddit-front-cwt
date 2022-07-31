import { Injectable } from '@angular/core';
import { Community } from '../model/community.model';

const COMMUNITIES = [
  {"_id":1, "name":"JapaneseCars", "description":"A short Community description...", "creation_date":Date.now().toString(), "is_suspended":false},
  {"_id":2, "name":"GermanLanguage", "description":"Another short Community description...", "creation_date":Date.now().toString(), "is_suspended":true},
  {"_id":3, "name":"DogPersons", "description":"Just another Community description... This one won't be as short as the previous two. This is a community dedicated to dog owners and people who enjoy sharing fun facts, interesting experiences, stories, and unique tips and tricks on dog ownership, treatment etc. Join us today to be able to participate in discussions!", "creation_date":Date.now().toString(), "is_suspended":true}
];

@Injectable({
  providedIn: 'root'
})
export class CommunityService {
  private communityList :Community[] = [];
  // private lastId = ?;

  constructor() {
    for(let commObj of COMMUNITIES) {
      this.communityList.push(new Community(commObj));
    }

    // TODO: rxjs - async GET request towards API - call
   }

   getAll() :Community[]{
    return this.communityList;
  }

}
