import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ApiService } from '../api/api.service';



@Component({
  selector: 'app-karma',
  templateUrl: './karma.component.html',
  styleUrls: ['./karma.component.css']
})
export class KarmaComponent implements OnInit {

  protected reaction_downvote = "DOWNVOTE";
  protected reaction_upvote = "UPVOTE";

  @Input()
  upvote_count!: number;
  @Input()
  downvote_count!: number;

  @Input()
  total_karma!: number | string;
  @Output()
  triggeredReaction : EventEmitter<string>;

  constructor(
    private apiService: ApiService,

  )
  {
    this.triggeredReaction = new EventEmitter();

  }

  ngOnInit(): void {
    // TODO*: delete - temporary mock-data:
    this.upvote_count = 380;
    this.downvote_count = 23;
  }

  protected saveReaction(reaction_type: string) {

    this.triggeredReaction.emit(reaction_type);
    
  }



}
