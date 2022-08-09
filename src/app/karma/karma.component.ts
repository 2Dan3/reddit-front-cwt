import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-karma',
  templateUrl: './karma.component.html',
  styleUrls: ['./karma.component.css']
})
export class KarmaComponent implements OnInit {

  @Input()
  upvote_count!: number;
  @Input()
  downvote_count!: number;

  constructor() { }

  ngOnInit(): void {
    // TODO*: delete - temporary mock-data:
    this.upvote_count = 90;
    this.downvote_count = 23;
  }



}
