'use strict';

module.exports = function (config) {
    config.set({
        // base path, that will be used to resolve files and exclude
        basePath: '../',

        // testing framework to use (jasmine/mocha/qunit/...)
        frameworks: ['mocha', 'angular-filesort'],
        reporters: ['dots', 'coverage'],

        // list of files / patterns to load in the browser
        files: [
            'node_modules/chai/chai.js',
            'node_modules/sinon-chai/lib/sinon-chai.js',
            'node_modules/sinon/pkg/sinon.js',
            'bower_components/angular/angular.js',
            'bower_components/angular-mocks/angular-mocks.js',
            'bower_components/angular-sanitize/angular-sanitize.js',
            'src/**/*.js',
            'test/mock/**/*.js',
            'test/spec/**/*.js'
        ],

        // sort these files in a proper way, so karma can run angular test in a proper way
        angularFilesort: {
            whitelist: [
                'src/**/*.js'
            ]
        },

        preprocessors: {
            'src/**/*.js': 'coverage'
        },

        coverageReporter: {
            reporters: [
                {type: 'html', dir: __dirname + '/../reports/coverage/'},
                {type: 'text-summary'}
            ]
        },

        // list of files / patterns to exclude
        exclude: [],

        // web server port
        port: 8080,

        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: false,

        browsers: ['PhantomJS'],

        singleRun: false
    });
};
