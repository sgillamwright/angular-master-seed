export default class HeroFormController {
  constructor(AngularServices, AppServices) {
    this.$log = AngularServices.getLogInstance('HeroFormController', true);
    this.$log.debug("constructor");
    this._ = AppServices.lodash;

    this.origins = this._.shuffle([
      'fell into some toxic waste as a child.',
      'is the child of a norse god.',
      'was exposed to some strange radiation.',
      'was trained by a governement organization.'
    ]);

    this.powers = [
      'Norse God',
      'Sharpshooter',
      'Gamma Monster',
      'Super Soldier',
      'Rich Smart Guy',
      'Insane Assassin',
      ''
    ];

    this.data = {
        name: "",
        power: "",
        status: ""
    };

    this.reset();
	}

  submit() {
      // submit code goes here
  }

  reset() {
      this.data = {
          name: "",
          power: "",
          status: ""
      };
  }
}

HeroFormController.$inject = ['AngularServices', 'AppServices'];
