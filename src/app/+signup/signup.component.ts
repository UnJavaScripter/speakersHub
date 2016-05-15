import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable, AuthProviders, AuthMethods } from 'angularfire2';
import { SignupFormComponent } from '../signup-form';

@Component({
  moduleId: module.id,
  selector: 'app-signup',
  templateUrl: 'signup.component.html',
  styleUrls: ['signup.component.css'],
  directives: [SignupFormComponent]
})


export class SignupComponent implements OnInit {

  userAuth: any = {};

  item;

  constructor(public af: AngularFire) {
    this.item = af.database.object('/item');
    const itemObservable = af.database.object('/item');
    itemObservable.set({ name: 'new name!' });

    this.firebaseLogin_google(af);
  }
  
  ngOnInit() {
  }

  firebaseLogin_google(af: AngularFire) {
    console.log("Wil prompt");
    af.auth.subscribe(auth => {
      if (auth){
        this.userAuth.name = auth.google.displayName;
        this.userAuth.email = auth.google.email;
        this.userAuth.avatar = auth.google.profileImageURL;
      }
    });
    
    af.auth.login({
      provider: AuthProviders.Google,
      method: AuthMethods.Popup,
      scope: ["email"]
    })    
  }

}
