import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { SpeakersHubAppComponent } from '../app/speakers-hub.component';

beforeEachProviders(() => [SpeakersHubAppComponent]);

describe('App: SpeakersHub', () => {
  it('should create the app',
      inject([SpeakersHubAppComponent], (app: SpeakersHubAppComponent) => {
    expect(app).toBeTruthy();
  }));

  // it('should have as title \'speakers-hub works!\'',
  //     inject([SpeakersHubAppComponent], (app: SpeakersHubAppComponent) => {
  //   expect(app.title).toEqual('speakers-hub works!');
  // }));
});
