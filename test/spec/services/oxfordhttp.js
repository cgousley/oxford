'use strict';

describe('Service: oxfordHttp', function () {

  // load the service's module
  beforeEach(module('oxfordApp'));

  // instantiate service
  var oxfordHttp;
  beforeEach(inject(function (_oxfordHttp_) {
    oxfordHttp = _oxfordHttp_;
  }));

  it('should do something', function () {
    expect(!!oxfordHttp).toBe(true);
  });

});
