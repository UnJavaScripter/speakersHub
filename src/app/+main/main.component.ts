import { Component, OnInit } from '@angular/core';
import { Routes, ROUTER_DIRECTIVES} from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'app-main',
  templateUrl: 'main.component.html',
  styleUrls: ['main.component.css', '../speakers-hub.component.css'],
  directives: [ROUTER_DIRECTIVES],
})


export class MainComponent implements OnInit {


  constructor() {

  }

  ngOnInit() {

  }


}
