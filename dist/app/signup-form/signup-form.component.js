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
var data_service_service_1 = require('../data-service.service');
var SignupFormComponent = (function () {
    function SignupFormComponent(af, ds) {
        this.af = af;
        this.formData = {};
        this.countries = ds.getCountries();
    }
    SignupFormComponent.prototype.ngOnChanges = function (changes) {
        var _this = this;
        if (changes["userData"]) {
            this.af.database.object('/users/' + changes["userData"].currentValue.id).subscribe(function (data) {
                _this.formData.location = data.location;
                _this.formData.subject = data.subject;
            });
        }
    };
    SignupFormComponent.prototype.ngOnInit = function () {
    };
    SignupFormComponent.prototype.updateData = function (_formData) {
        var data = _formData;
        data.name = this.userData.name;
        data.email = this.userData.email;
        data.avatar = this.userData.avatar;
        this.userModel = this.af.database.object('/users');
        var itemObservable = this.af.database.object('/users');
        itemObservable.update((_a = {}, _a[this.userData.id] = data, _a));
        var _a;
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], SignupFormComponent.prototype, "userData", void 0);
    SignupFormComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-signup-form',
            templateUrl: 'signup-form.component.html',
            styleUrls: ['signup-form.component.css', '../speakers-hub.component.css'],
            providers: [data_service_service_1.DataServiceService]
        }), 
        __metadata('design:paramtypes', [angularfire2_1.AngularFire, data_service_service_1.DataServiceService])
    ], SignupFormComponent);
    return SignupFormComponent;
}());
exports.SignupFormComponent = SignupFormComponent;
//# sourceMappingURL=signup-form.component.js.map