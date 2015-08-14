import app from '../../../app';
import DevToolsModule from './dev-tools';

describe('Service::DevTools', () => {
  let DevTools;
  let domains = ['localhost', '127.0.0.1', 'domain.com'];

  beforeEach(window.module('app'));

  beforeEach(inject((_DevTools_) => {
    DevTools = _DevTools_;
  }));

  describe('isDevelopmentEnvironment()', () => {
    it('should be defined', () => {
      expect(DevTools.isDevelopmentEnvironment).toBeDefined();
    });

    it('should return true when whitelisted domain is found', () => {
      expect(DevTools.isDevelopmentEnvironment(domains[0])).toBe(true);
      expect(DevTools.isDevelopmentEnvironment(domains[1])).toBe(true);
      expect(DevTools.isDevelopmentEnvironment(domains[2])).toBe(false);
    });
  });

  describe('togglePerformanceStats()', () => {
    it('should be defined', () => {
      expect(DevTools.togglePerformanceStats).toBeDefined();
    });

    it('should only allow performance bar to be visible on development environment', () => {

      //valid development domain made visible
      let performanceBarIsVisible = DevTools.togglePerformanceStats(domains[0], true);
      expect(performanceBarIsVisible).toBe(true);

      //valid development domain made hidden
      performanceBarIsVisible = DevTools.togglePerformanceStats(domains[1], false);
      expect(performanceBarIsVisible).toBe(false);

      // //invalid development domain made visible
      performanceBarIsVisible = DevTools.togglePerformanceStats(domains[2], true);
      expect(performanceBarIsVisible).toBe(false);
    });
  });

});
