import AppViewController from './app-view.controller';
import AppViewComponent from './app-view.component';
import AppViewTemplate from './app-view.html';

describe('Component::AppView', ()=>{
    let $controller, AppServices, rootScope;

    beforeEach(window.module('app'));

    beforeEach(inject((_AngularServices_, _AppServices_, _$q_, _$rootScope_)=>{
        let deferred = _$q_.defer();
        AppServices = _AppServices_;
        rootScope = _$rootScope_;

        let mockData = [
            { "id": 1, "name": "Thor", "icon": "assets/Avengers-Thor-icon.png" },
            { "id": 2, "name": "Captain America", "icon": "assets/Avengers-Captain-America-icon.png" }
        ];
        deferred.resolve(mockData);
        spyOn(AppServices.API, 'getHeros').and.returnValue(deferred.promise);

        $controller = new AppViewController(_AngularServices_, _AppServices_);
    }));

    describe('Controller', ()=>{

        it('should have a $log', ()=>{
            expect($controller['$log']).toBeDefined();
        });

        it('should have access to the AppServices.API', ()=>{
            expect($controller['API']).toBeDefined();
        });

        it('should have a heros array', ()=> {
            expect($controller['heros']).toBeDefined();
            expect($controller['heros']).toBeArray();
        });

        it('should load data from API.getHeros()', ()=> {
            expect($controller['loadData']).toBeDefined();
            $controller.loadData();
            //need to trigger $apply to have promises resolve properly
            rootScope.$apply();
            expect($controller.API.getHeros).toHaveBeenCalled();
            expect($controller.heros).toBeArrayOfSize(2);
            //we don't need to test the internals of API.getHeros as it just maps
            //to a service which we already have tests on.
            //Avoid actually testing dependancies in unit tests.
        });

    });

    describe('Component', ()=>{
        let component = AppViewComponent();

        it('should use the correct controller', ()=>{
            expect(component.controller).toEqual(AppViewController);
        });

        it('should use the correct template',()=>{
            expect(component.template).toEqual(AppViewTemplate);
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



