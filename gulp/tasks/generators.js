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
    switch (type) {
        case "component":
            targetPath = path.join(config.src.components, name);
            break;
        case "filter":
            targetPath = path.join(config.src.filters, name);
            break;
        case "service":
            targetPath = path.join(config.src.services, name);
            break;
        case "feature":
            targetPath = path.join(config.src.services, name);
            break;
        case "feature:component":
            targetPath = path.join(config.src.services, parent, 'compoennts');
            break;
        case "feature:service":
            targetPath = path.join(config.src.services, parent, 'services');
            break;
        case "feature:view":
            targetPath = path.join(config.src.services, parent, 'views');
            break;
        default:
            console.log("Unknown generator type!  Aborted!");
            return;
            break;
    }

    return gulp.src(config.generators.component.templates)
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

//generate a new common service boilerplate inside the app
gulp.task('service:common', function(){
    var name = yargs.name;
    var camelCaseName = S(name).camelize().s;
    var upperCaseName = camelCaseName.charAt(0).toUpperCase() + camelCaseName.slice(1);
    var lowerCaseName = camelCaseName.charAt(0).toLowerCase() + camelCaseName.slice(1);
    var targetPath = path.join(config.src.services, name);

    return gulp.src(config.generators.service.templates)
        .pipe(template({
            name: name,
            upperCaseName: upperCaseName,
            lowerCaseName: lowerCaseName,
            camelCaseName: camelCaseName
        }))
        .pipe(rename(function(path){
            path.basename = path.basename.replace('temp', name);
        }))
        .pipe(gulp.dest(targetPath));
});

//generate a new filter boilerplate inside the app
gulp.task('filter:common', function(){
    var name = yargs.name;
    var camelCaseName = S(name).camelize().s;
    var upperCaseName = camelCaseName.charAt(0).toUpperCase() + camelCaseName.slice(1);
    var targetPath = path.join(config.src.filters, name);

    return gulp.src(config.generators.filter.templates)
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