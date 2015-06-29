describe('Service::API', ()=>{
    let API;

    beforeEach(window.module('app'));

    beforeEach(inject((_API_)=>{
        API = _API_;
    }));

    describe('has required services', ()=>{
        it('should have the $log service ', ()=>{
            expect(API['$log']).toBeDefined();
        });

        it('should have the Restangular service ', ()=>{
            expect(API['Restangular']).toBeDefined();
        });
    });

    describe('heros', ()=>{
        it('should have a heros restangular obj', ()=>{
            expect(API['heros']).toBeDefined();

        });
    });

    describe('getHeros()', ()=>{
        it('should be defined', ()=>{
            expect(API.getHeros).toBeDefined();
        });
    });

});