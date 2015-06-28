import AppModule from './app';
import AppController from './app.controller';
import AppComponent from './app.component';
import AppTemplate from './app.html';

describe('Component::App', ()=>{
    let $controller, AngularServices, AppServices;

    beforeEach(window.module('app'));

    beforeEach(inject((_AngularServices_, _AppServices_)=>{
        AngularServices = _AngularServices_;
        AppServices = _AppServices_;
        $controller = (AngularServices, AppServices)=>{
            return new AppController(AngularServices, AppServices);
        };
    }));

    describe('Controller', ()=>{
        it('should have access to AngularServices', ()=>{
            let controller = $controller(AngularServices, AppServices);
            expect(controller['AngularServices']).toBeDefined();
        });

        it('should have access to AppServices', ()=>{
            let controller = $controller(AngularServices, AppServices);
            expect(controller['AppServices']).toBeDefined();
        });

    });

    describe('Template', ()=>{
        // use Regexes to test that you are using the right bindings {{  }}
        it('should control ng stats performance bar', ()=>{
            let deviceListBinding = /\s?vm\.DevTools\.performanceBarIsVisible\s?/g
            expect(AppTemplate).toMatch(deviceListBinding);
        });
    });

    describe('Component', ()=>{
        let component = AppComponent();

        it('should use the correct controller', ()=>{
            expect(component.controller).toEqual(AppController);
        });

        it('should use the correct template',()=>{
            expect(component.template).toEqual(AppTemplate);
        });

        it('should restrict to element', ()=>{
            expect(component.restrict).toContain('E');
        });

        it('should use controllerAs "vm"', ()=>{
            //by using controllerAs, the controllers’ scope is bound
            //to the controllers’ this object, basically namespaces scopes
            expect(component.controllerAs).toBeDefined();
            expect(component.controllerAs).toEqual('vm');
        });

        it('should use bindToController when isolated scope exists', ()=>{
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



