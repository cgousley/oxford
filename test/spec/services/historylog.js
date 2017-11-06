'use strict';

describe('Service: historyLog', function () {

  // load the service's module
  beforeEach(module('oxfordApp'));

  // instantiate service
  var historyLog;
  beforeEach(inject(function (_historyLog_) {
    historyLog = _historyLog_;
  }));

  it('should do something', function () {
    expect(!!historyLog).toBe(true);
  });

});
