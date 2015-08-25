//This is a page object, used to keep test code for the page cleaner
//Can be shared between tests
var AppView = function() {
  this.loadButton = element(by.css('.load-button'));
  this.rosterTab  = element.all(by.css('md-tab-item')).get(0);
  this.formTab  = element.all(by.css('md-tab-item')).get(1);
  this.helpTab  = element.all(by.css('md-tab-item')).get(2);

  this.get = function(url) {
    browser.get(url);
  };
};

describe('the application', function() {
    var view;

    beforeEach(function() {
        view = new AppView();
    });

    it('should have loaded', function() {
        view.get('http://localhost:8000/');
        let title = browser.getTitle();
        expect(title).toEqual('Angular Master Seed');
    });

    it('should load up a list of heros when button is clicked', function() {
        view.get('http://localhost:8000/');
        view.loadButton.click();
        browser.wait(function() {
          //wait for a .hero-tile element to be present (data is loaded and rendered)
          return element(by.className('hero-tile')).isPresent();
        });
        //evaluate an angular expression to access scope data in real time
        var heroList = element.all(by.repeater('hero in vm.RosterService.heros'));
        expect(heroList.count()).toEqual(6);
    });

    it('should switch to the hero form when the form tab is clicked', function() {
      view.get('http://localhost:8000/');
      view.formTab.click();
      browser.wait(function() {
        //wait for a .hero-form element to be present (data is loaded and rendered)
        return element(by.className('hero-form')).isPresent();
      });
    });

    it('should switch to the help screen when the help tab is clicked', function() {
      view.get('http://localhost:8000/');
      view.helpTab.click();
      browser.wait(function() {
        //wait for a .hero-form element to be present (data is loaded and rendered)
        return element(by.className('help')).isPresent();
      });
    });
});
