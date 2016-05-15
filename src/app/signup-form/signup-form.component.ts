import { Component, OnInit, Input } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-signup-form',
  templateUrl: 'signup-form.component.html',
  styleUrls: ['signup-form.component.css']
})
export class SignupFormComponent implements OnInit {

  @Input() userData: {};

  constructor() {
    console.log(this.userData)
  }

  ngOnInit() {
  }

}
