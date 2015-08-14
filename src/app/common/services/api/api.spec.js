describe('Service::API', () => {
  let API, $httpBackend;

  beforeEach(window.module('app'));

  beforeEach(inject((_API_, _$httpBackend_) => {
    API = _API_;
    $httpBackend = _$httpBackend_;
  }));

  // make sure no expectations were missed in your tests.
  // (e.g. expectGET or expectPOST)
  afterEach(function() {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  });

  describe('has required services', () => {
    it('should have the $log service ', () => {
      expect(API['$log']).toBeDefined();
    });

    it('should have the Restangular service ', () => {
      expect(API['Restangular']).toBeDefined();
    });
  });

  describe('heros', () => {
    it('should have a heros restangular obj', () => {
      expect(API['heros']).toBeDefined();

    });
  });

  describe('getHeros()', () => {
    it('should be defined', () => {
      expect(API.getHeros).toBeDefined();
    });

    //example of working with ajax data
    it('should make $http call', function() {
      let data;

      //provide mock data for mocked http response
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

      //mock request url and have it response with the mockdata
      $httpBackend.whenGET('http://localhost:3000/api/heros').respond(mockData);

      //make the call from the service, it won't really occur until we trigger $httpBackend.flush.
      API.getHeros().then(function(response) {
        data = response;
      });

      //trigger $httpBackend to mock the request and simulate the ajax call
      $httpBackend.flush();

      //flush has occured so our data is now the response data from our service call
      //treat that data from this point on as if the call had occured normally
      expect(data).toBeDefined();
      expect(data).toBeArray();
      expect(data).toBeArrayOfSize(2);
    });

  });

});
