import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {

  protected post_form: FormGroup;
  @Output()
  createdPost: EventEmitter<any>;

  constructor(
    private formBuilder: FormBuilder,
    
  )
  {
    this.createdPost = new EventEmitter();

    this.post_form = this.formBuilder.group({
      "title": ['', Validators.compose([Validators.required])],
      "text": ['', Validators.compose([Validators.required])],
    });
   }

  ngOnInit(): void {
  }

  protected savePost(postObj: any){
    this.createdPost.emit(postObj);
    this.post_form.reset();
  }

}
