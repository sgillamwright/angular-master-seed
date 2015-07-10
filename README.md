#Angular Master Seed

[Tooling](#tooling) | [Gulp Tasks](#gulp-tasks) | [Generators](#generators) | [Inspiration & Thanks](#inspiration--thanks) | [Todo](#todo)

##Overview

#####NOTES:
* I will avoid referencing 'directives' in the traditional Angular 1.x sense in favor of 'components' which is more inline with Angular 2.0 proposals.
* When I refer to a 'view' it means a component which is built by combining other components.

This project is a **very** opinionated Angular seed project full of my preferred Angular 1.x, and tooling best practices based on my experience using Angular 1.x on large projects.

The code is written using ES2015 and transpiled using Babel & Webpack.

To assist with making the project flexible I have adopted a component based strategy similar to that proposed for Angular 2.0.

This strategy consists of the app being broken down into small components with a focus on reusability.  This strategy keeps code isolated and is easier to maintain and test.  These Components contain their own Controllers, Directives, Services, CSS, JS, HTML templates and tests living together in the file structure.  This allows for maximum flexibility with transitional Angular 1.x components to Angular 2.0 in the future.

####My Angular 1.x Best Practices
* Keep controllers are light as possible.
They should only deal with a views UI logic and data flow from the services.

* Services should contain all of your business logic.
This allows for full reusability of your logic with minimal changes for your code to work with any Javascript system down the road.

*  The app code is organized by feature with the most reusable parts existing in the common namespace.
Features by their nature are more complex and may contain any number of feature specific components, services and views.  When you start finding aspects of your features being used across multiple features, you should look at breaking out those aspects to the common namespace to keep the code DRY.

* Use of angular modules to organize and channel components into easily followable dependency chains.

* Using $inject to make minification safe dependency injection for angular modules.

* Routing hooks should be contained to individual views to allow for increased flexibility and organization.

* Avoid complex DI chains in features by having a single 'AppServices' service which contains references to all app specific common services.

* Avoid complex DI chains in features by having a single 'AngularServices' service which contains references to the most commonly used Angular services.

* Common components/services should not use 'AppServices' or 'AngularServices' so they can be easily decoupled and shared between projects if needed.

* Angular Components
  * Any 3rd party code should be managed in the vendor namespace.
  * Use of controllerAS and bindToController syntax to minimize the need to reference $scope in templates, controllers and components.
  * Use of 'vm' (view model) for all controllerAs values for consistency.
  * Preference given to using isolate scopes to maximize component reusability.

####Code Stack
* [AngularJS](https://angularjs.org/)
* [ES2015](https://babeljs.io/docs/learn-es2015/) - Future of Javascript
* [Sass](http://sass-lang.com/) - CSS Preprocessor

####Bundled Vendor Modules
* [Angular Material](https://material.angularjs.org/) - Material Design Library & Styles
* [Material Design Icon Webfont](https://www.google.com/design/icons/)
* [Angular UI Router](https://github.com/angular-ui/ui-router) - Robust Angular Routing
* [Restangular](https://github.com/mgonto/restangular) - Easy Rest API Interactions
* [NgStats](https://github.com/kentcdodds/ng-stats) - Angular Performance Monitor
* [AngularLogExtender](https://github.com/lwhiteley/AngularLogExtender) - Additional features for Angular $log.
* [Lodash](https://lodash.com/) - Utility Toolset

---
##Tooling

####Build Tools
* [Gulp](http://gulpjs.com/) - Build System Task Runner
* [Webpack](http://webpack.github.io/) - Code Bundler & Loader
* [Babel](https://babeljs.io/) - ES2015 Transpiler
* [BrowserSync](http://www.browsersync.io/) - Live reload and synchronized device testing.
* [Json Server](https://github.com/typicode/json-server) - Allows for development without finalized backend systems & mocking databases.

####Testing Tools
* [Karma](http://karma-runner.github.io/) - Test Runner
* [Jasmine](http://jasmine.github.io/2.3/introduction.html) - Unit & Integration Testing
* [Jasmine Matchers](https://github.com/JamieMason/Jasmine-Matchers) - Additional Matchers for Jasmine
* [Protractor](https://angular.github.io/protractor/#/) - End to End Testing
* [Isparta](https://github.com/douglasduteil/isparta) - ES2015 Code Coverage Tool
* [Istanbul](https://gotwarlost.github.io/istanbul/) - Code Coverage Reporter

####Code Quality Tools
* [ESLint](http://eslint.org/) - eslint webpack loader to help with code quality
* [CSSLint](https://github.com/CSSLint/csslint/) - perform css audit on final css bundle
* [Purify CSS](https://github.com/purifycss/purifycss/) - remove unused css from css build file

####Documentation Tools
* [SassDoc](http://sassdoc.com/) - Generate documents from application styles.
* [ESDoc](https://esdoc.org/) - Generate documents from javascript code.

####GIT Pre-Commit Check
I use [pre-commit](https://github.com/observing/pre-commit) to run the eslint and test gulp tasks before each commit is processed.  The commit fails if any issues arise from either task. This helps prevent breaking code from being added to the repo.  You can skip this check by included '--no-verify' in your commit command.

---
##Gulp Tasks
* Gulp tasks are organized inside the ./gulp/tasks folder by function.
* gulp.config.js contains the project specific variables used by the tasks.

####Build Tasks
* gulp - start local development workflow
* gulp release-dryrun - bundle app for release and run all its tests against the app running with a mocked db of test data.
* gulp release - bundle app for release. (minification & tests)

####Testing Tasks
* gulp test - Single run of Jasmine integration & Unit tests with Karma. Also generates code coverage info in /.dist/tests.
* gulp tdd - Run 'test' task with watchers so its rerun after every code change.
* gulp e2e - Single run of Protractor E2E tests against the running local development environment.
* gulp e2e-release - Single run of E2E tests against a local instance of a release build.

####Code Quality Tasks
* gulp eslint - Scan ./src js files for issues.
* gulp csslint - Scan ./dist css for issues.
* gulp purify-css - Run purify-css against ./dist content.

###Documentation Tasks
* gulp esdoc - Generates esdoc website into the ./dist/docs folder.

For more information on the gulp tasks checkout ./gulp/tasks.

---
##Generators
To assist with development I have created a series of gulp tasks to generate the boilerplates for components, services and filters in various locations inside the app code.  Please note that you need to manually include the generated codes module into the app after its been generated to use it.

#####Common component
Syntax:
```
gulp generator --type common:component --name component-name
```
Example:
```
 gulp generator --type common:component --name performance-bar
```
---
#####Common service
Syntax:
```
gulp generator --type common:service --name service-name
```
Example:
```
 gulp generator --type common:service --name api
```
---
#####Common filter
Syntax:
```
gulp generator --type common:filter --name filter-name
```
Example:
```
 gulp generator --type common:filter --name superpowers
```
---
#####Feature
Syntax:
```
gulp generator --type feature --name feature-name
```
Example:
```
 gulp generator --type feature --name app-view
```
---

#####Feature specific component
Syntax:
```
gulp generator --type feature:component --name component-name --parent parent-feature-folder
```
Example:
```
 gulp generator --type feature:component --name hero-block --parent app-view
```
---
#####Feature specific service
Syntax:
```
gulp generator --type feature:service --name service-name --parent parent-feature-folder
```
Example:
```
 gulp generator --type feature:service --name hero-service --parent app-view
```
---
#####Feature specific view
Syntax:
```
gulp generator --type feature:view --name view-name --parent parent-feature-folder
```
Example:
```
 gulp generator --type feature:view --name hero-view --parent app-view
```
---

##Other Tooling & Resource Suggestions
* [Angular Testing Patterns](https://github.com/daniellmb/angular-test-patterns) - A High-Quality Guide for Testing Angular 1.x Applications
* [Elementor](https://github.com/andresdominguez/elementor) - Excellent tool for assisting with writing Protractor E2E tests.
* [NG Inspector](http://ng-inspector.org/) - Angular Debugging Tool
* [Emmet](http://emmet.io/) - HTML & CSS Shortcuts
* [Git Gutter](https://github.com/gitgutter) - See local changes of files easily
* [ESLINT](http://eslint.org/) - Run an ES2015 linter in your editor of choice

---
##Inspiration & Thanks
The [NG6-Starter Repo](https://github.com/angular-class/NG6-starter) is where I originally got my inspiration for the component style approach of this repo.  If your looking for a much lighter build tool setup I highly recommend you take a look.

---
##TODO
* Investigate using ES2015 to write gulpfile + tasks.
* Keeping checking in on JSDOC project to see how ES2015 support is.  Would prefer to be using this over ESDOC as its more robust.
* Setup csslint to use only a bundle of app css without vendor css.
* clean up gulp.config.js.
