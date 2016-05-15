"use strict";
var testing_1 = require('@angular/core/testing');
var data_service_service_1 = require('./data-service.service');
testing_1.describe('DataService Service', function () {
    testing_1.beforeEachProviders(function () { return [data_service_service_1.DataServiceService]; });
    testing_1.it('should ...', testing_1.inject([data_service_service_1.DataServiceService], function (service) {
        testing_1.expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=data-service.service.spec.js.map