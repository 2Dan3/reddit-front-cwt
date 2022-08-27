import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  total_karma_points: string|number;

  constructor() {
    this.total_karma_points = this.getKarmaForUser();
  }

  ngOnInit(): void {
  }

  choosePic() {
    // TODO*: Implement
  }

  private getKarmaForUser() :string|number {
    // TODO*: Implement
    return 285;
  }

}
