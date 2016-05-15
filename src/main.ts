import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode, provide } from '@angular/core';
import { SpeakersHubAppComponent, environment } from './app/';

import { FIREBASE_PROVIDERS, defaultFirebase, AngularFire, AuthMethods, AuthProviders, firebaseAuthConfig } from 'angularfire2';

if (environment.production) {
  enableProdMode();
}

bootstrap(SpeakersHubAppComponent, [
  FIREBASE_PROVIDERS,
  defaultFirebase('https://speakershub.firebaseio.com'),
  firebaseAuthConfig({
    provider: AuthProviders.Google,
    method: AuthMethods.Redirect
  })
]);
