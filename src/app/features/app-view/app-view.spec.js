// import app from '../../../app';
// import AppViewModule from './app-view';
// import AppViewController from './app-view.controller';
// import AppViewComponent from './app-view.component';
// import AppViewTemplate from './app-view.html';

// describe('Component::AppView', ()=>{
//     let $controller, API;

//     beforeEach(window.module('app'));

//     beforeEach(inject((_API_)=>{
//         API = _API_;
//         $controller = (API)=>{
//             return new AppViewController(API);
//         };
//     }));

//     describe('Controller', ()=>{
//         //di example
//         it('should have a API', ()=>{
//             let controller = $controller(API);
//             expect(controller['API']).toBeDefined();
//         });

//     });

//     describe('Template', ()=>{
//         // use Regexes to test that you are using the right bindings {{  }}
//         // it('should contain a list of devices', ()=>{
//         //     let deviceListBinding = /\s?vm\.API\.devices\.length\s?/g
//         //     expect(AppViewTemplate).toMatch(deviceListBinding);
//         // });
//     });

//     describe('Component', ()=>{
//         let component = AppViewComponent();

//         it('should use the correct controller', ()=>{
//             expect(component.controller).toEqual(AppViewController);
//         });

//         it('should use the correct template',()=>{
//             expect(component.template).toEqual(AppViewTemplate);
//         });

//         it('should restrict to element', ()=>{
//             expect(component.restrict).toContain('E');
//         });

//         it('should use controllerAs "vm"', ()=>{
//             //by using controllerAs, the controllers’ scope is bound
//             //to the controllers’ this object, basically namespaces scopes
//             expect(component.controllerAs).toBeDefined();
//             expect(component.controllerAs).toEqual('vm');
//         });

//         it('should use bindToController when isolated scope exists', ()=>{
//             //When bindToController is set to true in a directive
//             //with isolated scope that uses controllerAs,
//             //the component’s properties are bound to the controller
//             //rather than to the scope.
//             //
//             if (component.scope === true || component.scope === false) {
//                 //scope: true -  Directive gets a new scope but inherits from parent scope
//                 //scope: false - Directive uses its parent scope
//                 expect(component.bindToController).not.toBeDefined();
//             } else {
//                 //scope: {} - Directive gets a new isolated scope
//                 expect(component.bindToController).toEqual(true);
//             }
//         });
//     });

// });



