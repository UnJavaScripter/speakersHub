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

  constructor(public af: AngularFire, public ds: DataServiceService) {
    this.countries = ds.getCountries();
  }

  ngOnInit() {
  }

  find() {
    const queryObservable = this.af.database.list('/users/', {
      query: {
        orderByChild: 'location',
        equalTo: this.selectedCountry,
      }

    })

    .subscribe(
      data => this.results = data,
      err => console.log(err),
      () => console.log('Completed!')
    )
  }

}
