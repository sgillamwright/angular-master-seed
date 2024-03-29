import DeveloperBarController from './developer-bar.controller';
import DeveloperBarComponent from './developer-bar.component';
import DeveloperBarTemplate from './developer-bar.html';

describe('Component::DeveloperBar', () => {
  let $controller;

  beforeEach(window.module('app'));

  beforeEach(inject((_$log_, _AppServices_) => {
    $controller = new DeveloperBarController(_$log_, _AppServices_);
  }));

  describe('Controller', () => {
    //di example
    it('should have a $log', () => {
      expect($controller.$log).toBeDefined();
    });

    it('should have access to AppServices.dev', () => {
      expect($controller.AppServices).toBeDefined();
      expect($controller.AppServices.developerBarConfig).toBeDefined();
    });

    it('should have href paths for esdocs, sassdocs & coverage reports', () => {
      expect($controller.AppServices.developerBarConfig.esdocPath).toBeDefined();
      expect($controller.AppServices.developerBarConfig.sassdocPath).toBeDefined();
      expect($controller.AppServices.developerBarConfig.coveragePath).toBeDefined();
    });

  });

  describe('Component', () => {
    let component = DeveloperBarComponent();

    it('should use the correct controller', () => {
      expect(component.controller).toEqual(DeveloperBarController);
    });

    it('should use the correct template', () => {
      expect(component.template).toEqual(DeveloperBarTemplate);
    });

    it('should restrict to element', () => {
      expect(component.restrict).toContain('E');
    });

    it('should use controllerAs "vm"', () => {
      //by using controllerAs, the controllers’ scope is bound
      //to the controllers’ this object, basically namespaces scopes
      expect(component.controllerAs).toBeDefined();
      expect(component.controllerAs).toEqual('vm');
    });

    it('should use bindToController when isolated scope exists', () => {
      //When bindToController is set to true in a directive
      //with isolated scope that uses controllerAs,
      //the component’s properties are bound to the controller
      //rather than to the scope.
      //
      if (component.scope === true || component.scope === false) {
        //scope: true -  Directive gets a new scope but inherits from parent scope
        //scope: false - Directive uses its parent scope
        expect(component.bindToController).not.toBeDefined();
      } else {
        //scope: {} - Directive gets a new isolated scope
        expect(component.bindToController).toEqual(true);
      }
    });
  });

});



