'use strict';

describe('Service: word', function () {

  // load the service's module
  beforeEach(module('oxfordApp'));

  // instantiate service
  var word;
  beforeEach(inject(function (_word_) {
    word = _word_;
  }));

  it('should do something', function () {
    expect(!!word).toBe(true);
  });

});
