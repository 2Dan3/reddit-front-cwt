import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-comment-form',
  templateUrl: './comment-form.component.html',
  styleUrls: ['./comment-form.component.css']
})
export class CommentFormComponent implements OnInit {

  protected comment_form : FormGroup;

  @Output()
  createdComment: EventEmitter<any>;

  constructor(
    private formBuilder: FormBuilder,
  ) 
  {
    this.comment_form = this.formBuilder.group({
      "text": ['', Validators.compose([Validators.required])],
    });
  
    this.createdComment = new EventEmitter();
  }

  ngOnInit(): void {
  }

  protected saveComment(commentObj : any){
    this.createdComment.emit(commentObj);
    this.comment_form.reset();
  }

  

}
