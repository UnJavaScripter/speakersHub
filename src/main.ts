import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode, provide } from '@angular/core';
import { SpeakersHubAppComponent, environment } from './app/';

if (environment.production) {
  enableProdMode();
}

bootstrap(SpeakersHubAppComponent, [
  provide(Window, { useValue: window })
]);
