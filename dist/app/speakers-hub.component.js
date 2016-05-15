"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var _signup_1 = require('./+signup');
var router_1 = require('@angular/router');
var _main_1 = require('./+main');
var SpeakersHubAppComponent = (function () {
    function SpeakersHubAppComponent() {
    }
    SpeakersHubAppComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'speakers-hub-app',
            templateUrl: 'speakers-hub.component.html',
            styleUrls: ['speakers-hub.component.css'],
            directives: [router_1.ROUTER_DIRECTIVES],
            providers: [router_1.ROUTER_PROVIDERS]
        }),
        router_1.Routes([
            { path: '/signup', component: _signup_1.SignupComponent },
            { path: '/', component: _main_1.MainComponent }
        ]), 
        __metadata('design:paramtypes', [])
    ], SpeakersHubAppComponent);
    return SpeakersHubAppComponent;
}());
exports.SpeakersHubAppComponent = SpeakersHubAppComponent;
//# sourceMappingURL=speakers-hub.component.js.map