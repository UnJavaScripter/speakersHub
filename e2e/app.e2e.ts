import { SpeakersHubPage } from './app.po';

describe('speakers-hub App', function() {
  let page: SpeakersHubPage;

  beforeEach(() => {
    page = new SpeakersHubPage();
  })

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('speakers-hub works!');
  });
});
