import { Component } from '@angular/core';
import { SignupComponent } from './+signup';
import { Routes , ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router';
import { MainComponent } from './+main';

@Component({
  moduleId: module.id,
  selector: 'speakers-hub-app',
  templateUrl: 'speakers-hub.component.html',
  styleUrls: ['speakers-hub.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [ROUTER_PROVIDERS]
})
@Routes([
  {path: '/signup', component: SignupComponent},
  {path: '/', component: MainComponent}
])
export class SpeakersHubAppComponent {
  title = 'speakers-hub works!';
}
