describe('Service::<%= upperCaseName %>', () => {
    let <%= upperCaseName %>;

    //load up the app
    beforeEach(window.module('app'));

    //test dependency injection
    beforeEach(inject((_<%= upperCaseName %>_) => {
        <%= upperCaseName %> = _<%= upperCaseName %>_;
    }));

    describe('constructor()', () => {
      it('should have a $log service', ()=>{
          expect(<%= upperCaseName %>.$log).toBeDefined();
      });
    });

});
