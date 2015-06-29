import app from '../../app';

describe('Service::<%= upperCaseName %>', () => {
    let <%= upperCaseName %>;

    //load up the app
    beforeEach(window.module('app'));

    //test dependency injection
    beforeEach(inject((_<%= upperCaseName %>_) => {
        <%= upperCaseName %> = _<%= upperCaseName %>_;
    }));

    describe('myServiceMethod()', () => {
        it('should be defined', () => {
            expect(<%= upperCaseName %>.myServiceMethod).toBeDefined();
        });
    });

});