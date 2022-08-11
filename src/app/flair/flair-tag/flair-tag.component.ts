import { Component, Input, OnInit } from '@angular/core';
import { Flair } from '../model/flair.model';

@Component({
  selector: 'app-flair-tag',
  templateUrl: './flair-tag.component.html',
  styleUrls: ['./flair-tag.component.css']
})
export class FlairTagComponent implements OnInit {

  @Input()
  _flair! :Flair;

  constructor() { }

  ngOnInit(): void { }

}
