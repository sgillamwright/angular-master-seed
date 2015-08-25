import app from '../../../../app';

describe('Service::RosterService', () => {
    let RosterService, deferred, rootScope;

    //load up app
    beforeEach(window.module('app'));

    beforeEach(inject((_RosterService_, _$q_, _$rootScope_) => {
      //used by controller tests
      RosterService = _RosterService_;
      deferred = _$q_.defer();
      rootScope = _$rootScope_;
    }));

    it('should have a $log service', ()=>{
        expect(RosterService.$log).toBeDefined();
    });

    it('should have access to the AppServices.API', () => {
      expect(RosterService.API).toBeDefined();
    });

    it('should have a heros array', () => {
      expect(RosterService.heros).toBeDefined();
      expect(RosterService.heros).toBeArray();
    });

    it('should load data from API.getHeros()', () => {


      //arrange
      let mockData = [
        {
          "id": 1,
          "name": "Thor",
          "icon": "assets/Avengers-Thor-icon.png"
        },
        {
          "id": 2,
          "name": "Captain America",
          "icon": "assets/Avengers-Captain-America-icon.png"
        }
      ];

      deferred.resolve(mockData);
      spyOn(RosterService.API, 'getHeros').and.returnValue(deferred.promise);

      //act
      RosterService.loadData();
      rootScope.$apply(); //need to trigger $apply to have promises resolve properly

      //assert
      expect(RosterService.loadData).toBeDefined();
      expect(RosterService.API.getHeros).toHaveBeenCalled();
      expect(RosterService.heros).toBeArrayOfSize(2);
      //we don't need to test the internals of API.getHeros as it is tested in the services tests.
      //All we need to do is mock the reponse so we can confirm our controller method internally calls the service.
      //Avoid actually testing dependancies in unit tests.
    });

});
