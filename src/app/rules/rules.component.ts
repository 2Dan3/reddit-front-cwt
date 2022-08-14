import { Component, Input, OnInit } from '@angular/core';
import { Rule } from './model/rule.model';

@Component({
  selector: 'app-rules',
  templateUrl: './rules.component.html',
  styleUrls: ['./rules.component.css']
})
export class RulesComponent implements OnInit {

  @Input()
  rules! :Rule[];

  constructor() { }

  ngOnInit(): void {
  }

}
