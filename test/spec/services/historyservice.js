'use strict';

describe('Service: historyService', function () {

  // load the service's module
  beforeEach(module('oxfordApp'));

  // instantiate service
  var historyService;
  beforeEach(inject(function (_historyService_) {
    historyService = _historyService_;
  }));

  it('should do something', function () {
    expect(!!historyService).toBe(true);
  });

});
