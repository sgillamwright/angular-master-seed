/**
 * HeroFormController is the controller for the Hero Form component of app-view.
 */
 export default class HeroFormController {

  /**
   * @param {AngularServices} AngularServices - Angular Common Services Helper
   * @param {AppServices} AppServices - App Common Services Helper
   * @param {RosterService} RosterService - Roster Service
   * @param {$mdToast} $mdToast - Angular Material Toast Service
   */
  constructor(AngularServices, AppServices, RosterService, $mdToast) {
    this.$log = AngularServices.getLogInstance('HeroFormController', true);
    this.$log.debug("constructor");

    this._ = AppServices.lodash;
    this.RosterService = RosterService;
    this.$mdToast = $mdToast;

    this.form = {};

    //form data model
    this.data = {
        name: "",
        power: "",
        origin: "",
        weakness: ""
    };

    //origins radio choices data
    this.origins = this._.shuffle([
      'fell into some toxic waste as a child.',
      'is the child of a norse god.',
      'was exposed to some strange radiation.',
      'was trained by a governement organization.'
    ]);

    //powers select box data
    this.powers = [
      'Norse God',
      'Sharpshooter',
      'Gamma Monster',
      'Super Soldier',
      'Rich Smart Guy',
      'Insane Assassin',
      ''
    ];

    this.weaknesses = [
      {
        id: '1', name: 'Afraid of Fire'
      },
      {
        id: '2', name: 'Being Cold'
      },
      {
        id: '3', name: 'Acid Blood'
      },
      {
        id: '4', name: 'Bullets & Sharp Objects'
      }
    ];

	}

  submit() {
    this.$log.debug(this.data);

    let hero = {
      "name": this.data.name
    }

    switch (this.data.power) {
      case "Norse God":
      case "Gamma Monster":
      case "Super Solider":
        hero.hasSuperPower = true;
        break;
      default:
        hero.hasSuperPower = false;
        break;
    }

    let _this = this;
    this.RosterService.addHero(hero).then(function() {
      _this.onAddHeroSuccess();
    }, function() {
      _this.onAddHeroFail();
    });

  }

  onAddHeroSuccess() {
    this.showToast('Hero Added!  Check the Roster!');
  }

  onAddHeroFail() {
    this.showToast('Attempt to add Hero Failed!');
  }

  //reset the form data model
  reset() {
      this.data = {
          name: "",
          power: "",
          origin: "",
          weakness: ""
      };
  }

  showToast(msg) {
    this.$mdToast.show(this.$mdToast.simple().content(msg));
  }
}

HeroFormController.$inject = ['AngularServices', 'AppServices', 'RosterService', '$mdToast'];
