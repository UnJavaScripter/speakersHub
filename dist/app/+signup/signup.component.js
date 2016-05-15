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
var angularfire2_1 = require('angularfire2');
var signup_form_1 = require('../signup-form');
var SignupComponent = (function () {
    function SignupComponent(af) {
        this.af = af;
        this.userAuth = {};
        this.item = af.database.object('/item');
        var itemObservable = af.database.object('/item');
        itemObservable.set({ name: 'new name!' });
        this.firebaseLogin_google(af);
    }
    SignupComponent.prototype.ngOnInit = function () {
    };
    SignupComponent.prototype.firebaseLogin_google = function (af) {
        var _this = this;
        console.log("Wil prompt");
        af.auth.subscribe(function (auth) {
            if (auth) {
                _this.userAuth.name = auth.google.displayName;
                _this.userAuth.email = auth.google.email;
                _this.userAuth.avatar = auth.google.profileImageURL;
            }
        });
        af.auth.login({
            provider: angularfire2_1.AuthProviders.Google,
            method: angularfire2_1.AuthMethods.Popup,
            scope: ["email"]
        });
    };
    SignupComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-signup',
            templateUrl: 'signup.component.html',
            styleUrls: ['signup.component.css'],
            directives: [signup_form_1.SignupFormComponent]
        }), 
        __metadata('design:paramtypes', [angularfire2_1.AngularFire])
    ], SignupComponent);
    return SignupComponent;
}());
exports.SignupComponent = SignupComponent;
//# sourceMappingURL=signup.component.js.map