import app from '../../app';
import <%= upperCaseName %>Module from './<%= name %>';
import <%= upperCaseName %>Controller from './<%= name %>.controller';
import <%= upperCaseName %>Component from './<%= name %>.component';
import <%= upperCaseName %>Template from './<%= name %>.html';

describe('Component::<%= upperCaseName %>', ()=>{
    let $controller, DataSvc;

    beforeEach(window.module('app'));

    beforeEach(inject((_DataSvc_)=>{
        DataSvc = _DataSvc_;
        $controller = (DataSvc)=>{
            return new <%= upperCaseName %>Controller(DataSvc);
        };
    }));

    describe('Controller', ()=>{
        //di example
        it('should have a DataSvc', ()=>{
            let controller = $controller(DataSvc);
            expect(controller['DataSvc']).toBeDefined();
        });

    });

    describe('Template', ()=>{
        // use Regexes to test that you are using the right bindings {{  }}
        // it('should contain a list of devices', ()=>{
        //     let deviceListBinding = /\s?vm\.DataSvc\.devices\.length\s?/g
        //     expect(<%= upperCaseName %>Template).toMatch(deviceListBinding);
        // });
    });

    describe('Component', ()=>{
        let component = <%= upperCaseName %>Component();

        it('should use the correct controller', ()=>{
            expect(component.controller).toEqual(<%= upperCaseName %>Controller);
        });

        it('should use the correct template',()=>{
            expect(component.template).toEqual(<%= upperCaseName %>Template);
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



