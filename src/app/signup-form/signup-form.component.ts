import { Component, OnInit, Input, OnChanges, SimpleChange } from '@angular/core';
import { AngularFire, FirebaseListObservable, AuthProviders, AuthMethods } from 'angularfire2';
import { DataServiceService } from '../data-service.service';


@Component({
  moduleId: module.id,
  selector: 'app-signup-form',
  templateUrl: 'signup-form.component.html',
  styleUrls: ['signup-form.component.css', '../speakers-hub.component.css'],
  providers: [DataServiceService]
})
export class SignupFormComponent implements OnInit {

  @Input() userData: {
    name: string;
    email: string;
    avatar: string;
    id: string;

  };
  formData: { location?: string; subject?: string;} = {};

  userModel;
  countries: string[];


  ngOnChanges(changes: { [propertyName: string]: SimpleChange }) {
    if (changes["userData"]) {
      this.af.database.object('/users/' + changes["userData"].currentValue.id).subscribe(data => {
        this.formData.location = data.location;
        this.formData.subject = data.subject;
      })
    }
  }


  constructor(public af: AngularFire, ds: DataServiceService) {
    this.countries = ds.getCountries();
  }

  ngOnInit() {
  }



  updateData(_formData) {
    let data = _formData;
    data.name = this.userData.name;
    data.email = this.userData.email;
    data.avatar = this.userData.avatar;
  
    this.userModel = this.af.database.object('/users');
    const itemObservable = this.af.database.object('/users');

    itemObservable.update({ [this.userData.id]: data });
  }

}
