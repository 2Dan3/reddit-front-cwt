import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-comment-form',
  templateUrl: './comment-form.component.html',
  styleUrls: ['./comment-form.component.css']
})
export class CommentFormComponent implements OnInit {

  protected comment_form : FormGroup;

  constructor(
    private formBuilder: FormBuilder,
  ) 
  {
    this.comment_form = this.formBuilder.group({
      "content": ['', Validators.compose([Validators.required])],
    });
  
  }

  ngOnInit(): void {
  }

  protected saveComment(){

  }

  

}
