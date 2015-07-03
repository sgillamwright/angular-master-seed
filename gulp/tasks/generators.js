var config = require('../gulp.config.js');
var gulp = require('gulp');
var yargs = require('yargs').argv;
var path = require('path');
var S = require('string');
var rename = require('gulp-rename');
var template = require('gulp-template');

//generate a new common component boilerplate inside the app
gulp.task('generator', function(){
    var type = yargs.type;
    var name = yargs.name;
    var parent = yargs.parent;
    var camelCaseName = S(name).camelize().s;
    var upperCaseName = camelCaseName.charAt(0).toUpperCase() + camelCaseName.slice(1);

    var targetPath = "";
    var templatePath = "";
    switch (type.toLowerCase()) {
        case "component":
            targetPath = path.join(config.src.components, name);
            templatePath = config.generators.component.templates;
            break;
        case "filter":
            targetPath = path.join(config.src.filters, name);
            templatePath = config.generators.filter.templates;
            break;
        case "service":
            targetPath = path.join(config.src.services, name);
            templatePath = config.generators.component.service;
            break;
        case "feature":
            targetPath = path.join(config.src.features, name);
            templatePath = config.generators.component.templates;
            break;
        case "feature:component":
            targetPath = path.join(config.src.component, parent, 'components');
            templatePath = config.generators.component.templates;
            break;
        case "feature:service":
            targetPath = path.join(config.src.services, parent, 'services');
            templatePath = config.generators.service.templates;
            break;
        case "feature:view":
            targetPath = path.join(config.src.component, parent, 'views');
            templatePath = config.generators.component.templates;
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
            camelCaseName: camelCaseName
        }))
        .pipe(rename(function(path){
            path.basename = path.basename.replace('temp', name);
        }))
        .pipe(gulp.dest(targetPath));
});