describe('the application', function() {

    it('should have loaded', function() {
        browser.get('http://localhost:8000/');
        let title = browser.getTitle();
        expect(title).toEqual('Angular Master Seed');
    });

});
