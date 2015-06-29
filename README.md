#Angular Master Seed

##NOTES:
* I will avoid referencing 'directives' in the traditional Angular 1.x sense in favour of 'components' which is more inline with Angular 2.0 proposals.
* When I refer to a 'view' it means a component which is built by combining other components.

---
#Overview
This project is a **very** opinitionated Angular seed project full of Angular 1.x, and tooling best practices. The code is written using Javascript 2015 (ES6) and transpiled and built using Babel & Webpack. To assist with making the app flexible and transitional down the road I have adopted a component based strategy similiar to that proposed for Angular 2.0.  The component strategy consists of the app being broken down into as small components as possible to maximize reusability, keep logic simple and testing as uncomplicated as possible.  These components operate as little mini apps in their own right and contain their own CSS, JS, Templates and tests together for clarity.  This approach is inline with the Web Component spec and just makes sense to build a flexible and future friendly application.

###Approach
* The app and its views are built by building templates using components with light view controllers that orchastrate communication between the components & business Logic in services.
*  The app code is organized by feature with the most reusable parts existing in the common namespace.  Features by their nature are more complex and may contain any number of feature specific components, services and views.  When you start finding aspects of your features being used across multiple features, you should look at breaking out those aspects to the common namespace to keep the code DRY.
Any 3rd party code should be managed in the vendor namespace.

###Angular 1.x Best Practices
* Use of controllerAS and bindToController syntax to minimize the need to reference $scope in templates, controllers and components.
* Use of 'vm' (view model) for all controllerAs values for consistency.
* Use of angular modules to organize and channel components into easily followable dependancy chains.
* Using $inject to make minification safe dependancy injection for angular modules
* Preference given to using isolate scopes to maximize component resability.
* Routing hooks should be contained to individual views to allow for increased flexibility and organization.
* Avoid complex DI chains in features by having a single 'AppServices' service which contains references to all app specific common services.
* Avoid complex DI chains in features by having a single 'AngularServices' service which contains references to the most commonly used Angular services.
* Common components/services should not use 'AppServices' or 'AngularServices' so they can be easily decoupled and shared between projects if needed.

###Code Stack
* AngularJS
* Javascript 2015 (ES6)
* Sass

###Bundled Vendor Modules
* Angular Material - Material Design component library & styles
* Angular UI Router - Robust Angular routing
* Restangular - Easy Rest API Interactions
* NgStats - Angular Performance Monitor
* LogUnobtrusiveExtension - Add additional features to Angular $log service.
* Lodash - Utility Toolset

---
#Tooling

###Build Tools
* Gulp - Build System Task Runner
* Webpack - Code Bundler
* Babel - Javascript 2015 Transpiler
* BrowserSync - Live reload and synchronised device testing.
* Json Server - Allows for development without finalized backend systems & excellent support for running tests without affecting real databases.
* ESLint - Javascript 2015 Linter to assist with code quality

###Testing Tools
* Karma - Test Runner
* Jasmine - Unit & Integration Testing
* Protractor - End to End Testing
* Istanbul - Code Coverage Reporter

##Documentation Tools
* SassDoc - Generate documents from application styles.
* ESDoc - Generate documents from javascript code.

##Pre-Commit
I use the pre-commit node module to run the eslint and karma gulp tasks to ensure code is checked and functional before commited to a repo.

---
#Gulp Tasks
* Gulp tasks are organized inside the /gulp/tasks folder by function.
* gulp.config.js contains the project specific variables used by the tasks.

####Build Tasks
* gulp - start local development workflow
* gulp release-dryrun - bundle app for release and run all its tests against the app running with a mocked db of test data.
* gulp release - bundle app for release (minification & tests

####Testing Tasks
* gulp karma - Single run of Jasmine integration & Unit tests. Also generates code coverage info in /.dist/tests.
* gulp tdd - Run 'karma' task with watchers so its rerun after every code change.
* gulp protractor - Single run of Protractor E2E tests against the running local development code bundle.
* gulp protractor-release - Single run of E2E against a local instance of a release code bundle.

###Documentation Tasks
* gulp esdoc - Generates esdoc website into the ./dist/docs folder.
* gulp sassdoc - Generates sassdoc website into the ./dist/docs folder.

For more information on the gulp tasks checkout ./gulp/tasks.

---
#Generators
To assist with development I have created a series of gulp tasks to generate the boilerplates for components, services, filters and views.

* TODO - Fill out this section

---
#Other Tooling Suggestions
* You should install a Javascript 2015 linter into your editor - http://eslint.org/
* DocBlockr - Simplify JSDOC Comments
* Emmet - HTML & CSS shortcuts
* Git Gutter - See local changes of files easily
* Elementor - Excellent tool for assisting with writing Angular End to End Tests.

---
#TODO
* Investigate using Javascript 2015 to write gulpfile + tasks.
* Keeping checking in on JSDOC project to see how Javascript 2015 support is.  Would prefer to be using this over ESDOC as its more robust.
* Complete Generators Code
