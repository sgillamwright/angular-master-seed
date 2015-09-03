describe('Service::AngularServices', () => {
  let AngularServices;

  beforeEach(window.module('app'));

  beforeEach(inject((_AngularServices_) => {
    AngularServices = _AngularServices_;
  }));

  describe('construtor()', () => {
    it('should have the $document service ', () => {
      expect(AngularServices.$document).toBeDefined();
    });

    it('should have the $filter service ', () => {
      expect(AngularServices.$filter).toBeDefined();
    });

    it('should have the $http service ', () => {
      expect(AngularServices.$http).toBeDefined();
    });

    it('should have the $interval service ', () => {
      expect(AngularServices.$interval).toBeDefined();
    });

    it('should have the $log service ', () => {
      expect(AngularServices.$logger).toBeDefined();
    });

    it('should have the $location service ', () => {
      expect(AngularServices.$location).toBeDefined();
    });

    it('should have the $q service ', () => {
      expect(AngularServices.$q).toBeDefined();
    });

    it('should have the $rootScope service ', () => {
      expect(AngularServices.$rootScope).toBeDefined();
    });

    it('should have the $timeout service ', () => {
      expect(AngularServices.$timeout).toBeDefined();
    });

    it('should have the $window service ', () => {
      expect(AngularServices.$window).toBeDefined();
    });
  });

  describe('getLogInstance()', () => {
    it('should be defined', () => {
      expect(AngularServices.getLogInstance).toBeDefined();
    });
  });

});
