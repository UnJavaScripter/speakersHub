export class SpeakersHubPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('speakers-hub-app h1')).getText();
  }
}
