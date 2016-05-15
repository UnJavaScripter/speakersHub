import { Component, OnInit } from '@angular/core';
import { SearchFormComponent } from '../search-form';

@Component({
  moduleId: module.id,
  selector: 'app-find',
  templateUrl: 'find.component.html',
  styleUrls: ['find.component.css'],
  directives: [SearchFormComponent]
})
export class FindComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

}
