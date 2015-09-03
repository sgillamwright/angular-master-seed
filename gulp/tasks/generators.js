var config = require('../gulp.config.js');
var gulp = require('gulp');
var yargs = require('yargs').argv;
var path = require('path');
var S = require('string');
var rename = require('gulp-rename');
var template = require('gulp-template');

//generate a new common component boilerplate inside the app
gulp.task('generator', function() {
  var type = yargs.type;

  var name = yargs.name;
  var camelCaseName = S(name).camelize().s;
  var upperCaseName = camelCaseName.charAt(0).toUpperCase() + camelCaseName.slice(1);
  var lowerCaseName = camelCaseName.charAt(0).toLowerCase() + camelCaseName.slice(1);

  var parent = yargs.parent;

  var targetPath = "";
  var templatePath = "";
  var scssCommonPath = "";
  var dependencyInjections = "";
  var constructorParams = "";
  var angularModuleName = "";
  var logger = "";

  switch (type.toLowerCase()) {
    case "common:component":
      targetPath = path.join(config.src.components, name);
      templatePath = config.generators.component.templates;
      scssCommonPath = "../../variables";
      constructorParams = "$log";
      dependencyInjections = "'$log'";
      angularModuleName = "app.common.components." + name;
      logger = "$log.getInstance";
      break;
    case "common:filter":
      targetPath = path.join(config.src.filters, name);
      templatePath = config.generators.filter.templates;
      angularModuleName = "app.common.filters." + upperCaseName + "Filter";
      logger = "$log.getInstance";
      break;
    case "common:service":
      targetPath = path.join(config.src.services, name);
      templatePath = config.generators.service.templates;
      constructorParams = "$log";
      dependencyInjections = "'$log'";
      angularModuleName = "app.common.services." + upperCaseName;
      logger = "$log.getInstance";
      break;
    case "feature":
      targetPath = path.join(config.src.features, name);
      templatePath = config.generators.component.templates;
      scssCommonPath = "../../common/variables";
      constructorParams = "AngularServices, AppServices";
      dependencyInjections = "'AngularServices', 'AppServices'";
      angularModuleName = "app.features." + name;
      logger = "AngularServices.getLogInstance";
      break;
    case "feature:component":
      targetPath = path.join(config.src.features, parent, 'components', name);
      templatePath = config.generators.component.templates;
      scssCommonPath = "../../../../common/variables";
      constructorParams = "AngularServices, AppServices";
      dependencyInjections = "'AngularServices', 'AppServices'";
      angularModuleName = "app.features." + parent + ".components." + name;
      logger = "AngularServices.getLogInstance";
      break;
    case "feature:service":
      targetPath = path.join(config.src.features, parent, 'services', name);
      templatePath = config.generators.service.templates;
      constructorParams = "AngularServices, AppServices";
      dependencyInjections = "'AngularServices', 'AppServices'";
      angularModuleName = "app.features." + parent + ".services." + name;
      logger = "AngularServices.getLogInstance";
      break;
    case "feature:view":
      targetPath = path.join(config.src.features, parent, 'views', name);
      templatePath = config.generators.component.templates;
      scssCommonPath = "../../../../common/variables";
      constructorParams = "AngularServices, AppServices";
      dependencyInjections = "'AngularServices', 'AppServices'";
      angularModuleName = "app.features." + parent + ".views." + name;
      logger = "AngularServices.getLogInstance";
      break;
    default:
      console.log("Unknown generator type!  Aborted!");
      return;
      break;
  }

  return gulp.src(templatePath)
    .pipe(template({
      name: name,
      upperCaseName: upperCaseName,
      camelCaseName: camelCaseName,
      lowerCaseName: lowerCaseName,
      scssCommonPath: scssCommonPath,
      constructorParams: constructorParams,
      dependencyInjections: dependencyInjections,
      angularModuleName: angularModuleName
    }))
    .pipe(rename(function(path) {
      path.basename = path.basename.replace('temp', name);
    }))
    .pipe(gulp.dest(targetPath));
});
