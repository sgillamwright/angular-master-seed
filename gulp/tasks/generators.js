var config = require('../gulp.config.js');
var gulp = require('gulp');
var yargs = require('yargs').argv;
var path = require('path');
var S = require('string');
var rename = require('gulp-rename');
var template = require('gulp-template');

//generate a new component boilerplate inside the app
gulp.task('component', function(){
    var name = yargs.name;
    var camelCaseName = S(name).camelize().s;
    var upperCaseName = camelCaseName.charAt(0).toUpperCase() + camelCaseName.slice(1);
    var targetPath = path.join(config.src.components, name);
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

//generate a new view boilerplate inside the app
gulp.task('view', function(){
    var name = yargs.name;
    var camelCaseName = S(name).camelize().s;
    var upperCaseName = camelCaseName.charAt(0).toUpperCase() + camelCaseName.slice(1);
    var targetPath = path.join(config.src.views, name);
    return gulp.src(config.generators.view.templates)
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

//generate a new service boilerplate inside the app
gulp.task('service', function(){
    var name = yargs.name;
    var camelCaseName = S(name).camelize().s;
    var upperCaseName = camelCaseName.charAt(0).toUpperCase() + camelCaseName.slice(1);
    var lowerCaseName = camelCaseName.charAt(0).toLowerCase() + camelCaseName.slice(1);
    var targetPath = path.join(config.src.common, name);

    return gulp.src(config.generators.factory.templates)
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
gulp.task('filter', function(){
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