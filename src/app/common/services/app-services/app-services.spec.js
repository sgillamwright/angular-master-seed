describe('Service::AppServices', ()=>{
    let AppServices;

    beforeEach(window.module('app'));

    beforeEach(inject((_AppServices_)=>{
        AppServices = _AppServices_;
    }));

    describe('has required app services', ()=>{
        it('should have the DevTools service ', ()=>{
            expect(AppServices['DevTools']).toBeDefined();
        });

        it('should have the API service ', ()=>{
            expect(AppServices['API']).toBeDefined();
        });
    });

});