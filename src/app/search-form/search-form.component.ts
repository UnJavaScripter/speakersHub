import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../data-service.service'
import { AngularFire } from 'angularfire2';


@Component({
  moduleId: module.id,
  selector: 'app-search-form',
  templateUrl: 'search-form.component.html',
  styleUrls: ['search-form.component.css', '../speakers-hub.component.css'],
  providers: [DataServiceService]
})
export class SearchFormComponent implements OnInit {

  countries: string[];
  results;
  selectedCountry: string;
  slectedSubject: string;

  constructor(public af: AngularFire, public ds: DataServiceService) {
    this.countries = ds.getCountries();

  }

  ngOnInit() {
  }

  find() {
    if (!this.selectedCountry){
      return
    }

    const queryObservable = this.af.database.list('/users/', {
      query: {
        orderByChild: 'location',
        equalTo: this.selectedCountry,
      }

    })

    .subscribe(
      data => {
        this.results = data.filter(result => {
          if (result.subject) {
            if (this.slectedSubject){
              return result.subject === this.slectedSubject;
            }else{
              return result.subject;
            }
          }
        })
      },
      err => console.log(err),
      () => console.log('Completed!')
    )
  }

}
