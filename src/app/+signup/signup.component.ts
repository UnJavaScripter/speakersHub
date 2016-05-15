import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable, AuthProviders, AuthMethods } from 'angularfire2';
import { SignupFormComponent } from '../signup-form';
import { UserServiceService } from '../user-service.service';

@Component({
  moduleId: module.id,
  selector: 'app-signup',
  templateUrl: 'signup.component.html',
  styleUrls: ['signup.component.css', '../speakers-hub.component.css'],
  directives: [SignupFormComponent],
  providers: [UserServiceService]
})


export class SignupComponent implements OnInit {

  userAuth: any = {};

  constructor(public af: AngularFire, public us: UserServiceService) {

    this.af.auth.subscribe(auth => {
      if (auth){
        this.userAuth.name = auth.google.displayName;
        this.userAuth.email = auth.google.email;
        this.userAuth.avatar = auth.google.profileImageURL;
        this.userAuth.id = auth.uid;
        us.set(this.userAuth);
      }
    });
    
    this.firebaseLogin_google();
  }
  
  ngOnInit() {
  }

  firebaseLogin_google() {
    
    this.af.auth.login({
      provider: AuthProviders.Google,
      method: AuthMethods.Popup,
      scope: ["email"]
    })    
  }

}
