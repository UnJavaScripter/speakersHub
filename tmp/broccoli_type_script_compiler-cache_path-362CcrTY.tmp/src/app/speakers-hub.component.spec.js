"use strict";
var testing_1 = require('@angular/core/testing');
var speakers_hub_component_1 = require('../app/speakers-hub.component');
testing_1.beforeEachProviders(function () { return [speakers_hub_component_1.SpeakersHubAppComponent]; });
testing_1.describe('App: SpeakersHub', function () {
    testing_1.it('should create the app', testing_1.inject([speakers_hub_component_1.SpeakersHubAppComponent], function (app) {
        testing_1.expect(app).toBeTruthy();
    }));
    testing_1.it('should have as title \'speakers-hub works!\'', testing_1.inject([speakers_hub_component_1.SpeakersHubAppComponent], function (app) {
        testing_1.expect(app.title).toEqual('speakers-hub works!');
    }));
});
//# sourceMappingURL=speakers-hub.component.spec.js.map