import { Component, OnInit } from '@angular/core';
import { SearchFormComponent } from '../search-form';
import { UserServiceService } from '../user-service.service';

@Component({
  moduleId: module.id,
  selector: 'app-find',
  templateUrl: 'find.component.html',
  styleUrls: ['find.component.css'],
  directives: [SearchFormComponent],
  providers: [UserServiceService]
})
export class FindComponent implements OnInit {

  constructor(public us: UserServiceService) {
    if (!us.get()) {
      window.location.href = '/signup';
    }
  }

  ngOnInit() {
  }

}
