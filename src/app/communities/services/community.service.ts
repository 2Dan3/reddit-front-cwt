import { Injectable } from '@angular/core';
import { ApiService } from 'src/app/api/api.service';
import { Community } from '../model/community.model';

const COMMUNITIES: Community[] = [
  // {"_id":1, "name":"Japanese Cars", "description":"A short Community description...", "creation_date":Date(), "is_suspended":false},
  // {"_id":2, "name":"German Language", "description":"Another short Community description...", "creation_date":Date(), "is_suspended":true},
  // {"_id":3, "name":"Dog Persons", "description":"Just another Community description... This one won't be as short as the previous two. This is a community dedicated to dog owners and people who enjoy sharing fun facts, interesting experiences, stories, and unique tips and tricks on dog ownership, treatment etc. Join us today to be able to participate in discussions!", "creation_date":Date(), "is_suspended":true},
  // {"_id":4, "name":"Dog Persons", "description":"Just another Community description... This one won't be as short as the previous two. This is a community dedicated to dog owners and people who enjoy sharing fun facts, interesting experiences, stories, and unique tips and tricks on dog ownership, treatment etc. Join us today to be able to participate in discussions!", "creation_date":Date(), "is_suspended":true},
  // {"_id":5, "name":"Dog Persons", "description":"Just another Community description... This one won't be as short as the previous two. This is a community dedicated to dog owners and people who enjoy sharing fun facts, interesting experiences, stories, and unique tips and tricks on dog ownership, treatment etc. Join us today to be able to participate in discussions!", "creation_date":Date(), "is_suspended":true},
  // {"_id":6, "name":"Dog Persons", "description":"Just another Community description... This one won't be as short as the previous two. This is a community dedicated to dog owners and people who enjoy sharing fun facts, interesting experiences, stories, and unique tips and tricks on dog ownership, treatment etc. Join us today to be able to participate in discussions!", "creation_date":Date(), "is_suspended":true},
  // {"_id":7, "name":"Dog Persons", "description":"Just another Community description... This one won't be as short as the previous two. This is a community dedicated to dog owners and people who enjoy sharing fun facts, interesting experiences, stories, and unique tips and tricks on dog ownership, treatment etc. Join us today to be able to participate in discussions!", "creation_date":Date(), "is_suspended":true},
  // {"_id":8, "name":"Dog Persons", "description":"Just another Community description... This one won't be as short as the previous two. This is a community dedicated to dog owners and people who enjoy sharing fun facts, interesting experiences, stories, and unique tips and tricks on dog ownership, treatment etc. Join us today to be able to participate in discussions!", "creation_date":Date(), "is_suspended":true},
  // {"_id":9, "name":"Dog Persons", "description":"Just another Community description... This one won't be as short as the previous two. This is a community dedicated to dog owners and people who enjoy sharing fun facts, interesting experiences, stories, and unique tips and tricks on dog ownership, treatment etc. Join us today to be able to participate in discussions!", "creation_date":Date(), "is_suspended":true},
  // {"_id":10, "name":"Dog Persons", "description":"Just another Community description... This one won't be as short as the previous two. This is a community dedicated to dog owners and people who enjoy sharing fun facts, interesting experiences, stories, and unique tips and tricks on dog ownership, treatment etc. Join us today to be able to participate in discussions!", "creation_date":Date(), "is_suspended":true},
  // {"_id":11, "name":"Dog Persons", "description":"Just another Community description... This one won't be as short as the previous two. This is a community dedicated to dog owners and people who enjoy sharing fun facts, interesting experiences, stories, and unique tips and tricks on dog ownership, treatment etc. Join us today to be able to participate in discussions!", "creation_date":Date(), "is_suspended":true}
];

@Injectable({
  providedIn: 'root'
})
export class CommunityService {
  private communityList :Community[] = [];
  // private lastId = ?;

  constructor(
    private apiService: ApiService,
  ) {
    for(let commObj of COMMUNITIES) {
      this.communityList.push(new Community(commObj));
    }

    // TODO: rxjs - async GET request towards API - call
   }
            // :Community[]
   getAll() :any[]{
    // return this.communityList;
    this.apiService.get("/communities")
    .subscribe( 
      (res) => {
        this.communityList = res;
        // console.log("response status;" + res['status']);
        console.log("Result:" +JSON.stringify(res));
        return this.communityList;
      },
      (_error: any) => {
        console.log("Error caught ; " + _error);
        // this.notification = {msgType: 'error', msgBody: 'Incorrect username or password.'};
      });
      
      return this.communityList;
    };

}
