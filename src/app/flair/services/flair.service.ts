import { Injectable } from '@angular/core';
import { Flair } from '../model/flair.model';

const FLAIRS = [
  {"_id":1, "name":"Sport"},
  {"_id":2, "name":"Animal"},
  {"_id":3, "name":"Car Guys"},
  {"_id":4, "name":"Fashion"},
  {"_id":5, "name":"Gifts"},
  {"_id":6, "name":"Travel"},
  {"_id":7, "name":"German"},
  {"_id":8, "name":"Japanese"},
  {"_id":9, "name":"Sailing"},
  {"_id":10, "name":"Fishing"},
  {"_id":11, "name":"Fitness"},
  {"_id":12, "name":"Cardio"},
  {"_id":13, "name":"Physics"},
  {"_id":14, "name":"Nautica"},
  {"_id":15, "name":"Space & Astronomy"}
];

@Injectable({
  providedIn: 'root'
})
export class FlairService {

  private flairList :Flair[] = [];

  constructor() {
    for(let flairObj of FLAIRS) {
      this.flairList.push(new Flair(flairObj));
    }

   }

   getAll() :Flair[] {
    return this.flairList;
   }
}
