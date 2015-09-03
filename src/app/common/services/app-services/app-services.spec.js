describe('Service::AppServices', () => {
  let AppServices;

  beforeEach(window.module('app'));

  beforeEach(inject((_AppServices_) => {
    AppServices = _AppServices_;
  }));

  describe('constructor()', () => {
    it('should have a $log service ', () => {
      expect(AppServices.$log).toBeDefined();
    });

    it('should have the DevTools service ', () => {
      expect(AppServices.DevTools).toBeDefined();
    });

    it('should have the API service ', () => {
      expect(AppServices.API).toBeDefined();
    });

    it('should have the lodash service ', () => {
      expect(AppServices.lodash).toBeDefined();
    });
  });

  describe('has developer bar info', () => {
    it('should have an object to store developer bar info', () => {
      expect(AppServices.developerBarConfig).toBeDefined();
    });
    it('should have an href path to esdocs ', () => {
      expect(AppServices.developerBarConfig.esdocPath).toBeDefined();
    });

    it('should have an href path to sassdocs ', () => {
      expect(AppServices.developerBarConfig.sassdocPath).toBeDefined();
    });

    it('should have an href path to code coverage reports ', () => {
      expect(AppServices.developerBarConfig.coveragePath).toBeDefined();
    });
  });

});
