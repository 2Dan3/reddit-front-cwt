import { Injectable } from '@angular/core';
import { Rule } from '../model/rule.model';

const RULES = [
  {"_id":1, "text":"NO SPAM"},
  {"_id":2, "text":"NO HARRASSMENT"},
  {"_id":3, "text":"NO RACIAL SLUR"},
  {"_id":4, "text":"NO ABUSE"},
  {"_id":5, "text":"NO INSULTING"},
  {"_id":6, "text":"NO PROVOKING/SEXUAL CONTENT"},
  {"_id":7, "text":"NO ADVERTISING"}
]

@Injectable({
  providedIn: 'root'
})
export class RuleService {
  private ruleList: Rule[] = [];

  constructor() {
    for(let ruleObj of RULES) {
      this.ruleList.push(new Rule(ruleObj));
    }

   }


   getAll(community_id: string|number) :Rule[] {
    return this.ruleList;
   }
}
