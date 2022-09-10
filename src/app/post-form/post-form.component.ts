import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {

  protected post_form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    
  )
  {
    this.post_form = this.formBuilder.group({
      "title": ['', Validators.compose([Validators.required])],
      "content": ['', Validators.compose([Validators.required])],
    });
   }

  ngOnInit(): void {
  }

  protected savePost(){
    // TODO*
  }

}
