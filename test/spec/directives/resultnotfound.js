'use strict';

describe('Directive: resultNotFound', function () {

  // load the directive's module
  beforeEach(module('oxfordApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<result-not-found></result-not-found>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the resultNotFound directive');
  }));
});
