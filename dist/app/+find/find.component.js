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
var search_form_1 = require('../search-form');
var FindComponent = (function () {
    function FindComponent() {
    }
    FindComponent.prototype.ngOnInit = function () {
    };
    FindComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-find',
            templateUrl: 'find.component.html',
            styleUrls: ['find.component.css'],
            directives: [search_form_1.SearchFormComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], FindComponent);
    return FindComponent;
}());
exports.FindComponent = FindComponent;
//# sourceMappingURL=find.component.js.map