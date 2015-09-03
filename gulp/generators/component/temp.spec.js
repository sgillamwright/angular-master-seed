import <%= upperCaseName %>Controller from './<%= name %>.controller';
import <%= upperCaseName %>Component from './<%= name %>.component';
import <%= upperCaseName %>Template from './<%= name %>.html';

describe('Component::<%= upperCaseName %>', ()=>{
    let $controller;

    //load up the app
    beforeEach(window.module('app'));

    //test dependency injection
    beforeEach(inject((_$log_)=>{
        $controller = new <%= upperCaseName %>Controller(_$log_);
    }));

    //controller tests
    describe('Controller', ()=>{
        //di checks
        it('should have a $log service', ()=>{
            expect($controller.$log).toBeDefined();
        });

    });

    //Component / Directive Definition Object Tests
    describe('Component', ()=>{
        let component = <%= upperCaseName %>Component();

        //component controller is rigged properly
        it('should use the correct controller', ()=>{
            expect(component.controller).toEqual(<%= upperCaseName %>Controller);
        });

        //component template is rigged properly
        it('should use the correct template',()=>{
            expect(component.template).toEqual(<%= upperCaseName %>Template);
        });

        //component is set to be an element tag component
        it('should restrict to element', ()=>{
            expect(component.restrict).toContain('E');
        });

        //component uses controllerAs = 'vm'
        it('should use controllerAs "vm"', ()=>{
            //by using controllerAs, the controllers’ scope is bound
            //to the controllers’ this object, basically namespaces scopes
            expect(component.controllerAs).toBeDefined();
            expect(component.controllerAs).toEqual('vm');
        });

        //component uses bindToController to avoid needing to use $scope
        it('should use bindToController when isolated scope exists', ()=>{
            //When bindToController is set to true in a directive
            //with isolated scope that uses controllerAs,
            //the component’s properties are bound to the controller
            //rather than to the scope.
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



