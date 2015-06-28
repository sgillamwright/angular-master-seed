module.exports =
{
    root: './',
    gulp: './gulp/',
    tasks: './gulp/tasks',
    port: 8000,
    src: {
        target: './src',
        index: './src/index.html',
        assets: './src/assets',
        app: './src/app',
        appEntry: './src/app/app.js',
        db: './src/db',
        common: './src/app/common',
        components: './src/app/common/components',
        services: './src/app/common/services',
        filters: './src/app/common/filters',
        features: './src/app/features',
    },
    dist: {
        target: './dist',
        assets: './dist/assets',
        docs: './dist/docs',
    },
    docs: {
        sassdoc: './dist/docs/sassdoc',
        esdoc: './dist/docs/esdoc'
    },
    files: {
        app: {
            js: './src/app/**/*.js',
            html: './src/app/**/*.html',
            scss: './src/app/**/*.scss',
            assets: './src/assets/**/*'
        },
        db: './src/db/db.json',
        build: {
            webpack: {
                release: '../../webpack.release.config',
                dev: '../../webpack.dev.config'
            }
        },
        tests: {
            configs: {
                protractor: './protractor.config.js',
                karma: './karma.config.js'
            },
            bundle: './spec.bundle.js',
            e2e: './src/e2e-tests/**/*.spec.js',
            bindPolyfill: './node_modules/phantomjs-polyfill/bind-polyfill.js'
        }
    },
    generators: {
        component: {
            templates: './generators/component/**/*.**'
        },
        view: {
            templates: './generators/view/**/*.**'
        },
        service: {
            templates: './generators/service/**/*.**'
        },
        filter: {
            templates: './generators/filter/**/*.**'
        }
    }
};