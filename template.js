/*
 * grunt-init-jquery
 * https://gruntjs.com/
 *
 * Copyright (c) 2013 "Cowboy" Ben Alman, contributors
 * Licensed under the MIT license.
 */

'use strict';

// Basic template description.
exports.description = 'Create a jQuery plugin, including QUnit unit tests.';

exports.template = function(grunt, init, done) {

  init.process({type: 'jquery'}, [
    // Prompt for these values.
    init.prompt('question 1'),
    // init.prompt('title', function(value, data, done) {
    //   // Fix jQuery capitalization.
    //   value = value.replace(/jquery/gi, 'jQuery');
    //   done(null, value);
    // }),
    init.prompt('question 2'),
    init.prompt('question 3')
  ], function(err, props) {

    // Files to copy (and process).
    var files = init.filesToCopy(props);

    // Actually copy (and process) files.
    init.copyAndProcess(files, props, {noProcess: 'libs/**'});

    // init.writePackageJSON('package.json', {
    //   name : 111,
    //   'question 2' : "111",
    //   tplVersion : 'eee',
    //   version : '2222',
    //   homepage : '2222'
    // })

    // init.writePackageJSON('project.package.json', {
    //   name : 111,
    //   'question 2' : "111",
    //   tplVersion : 'eee',
    //   version : '2222',
    //   homepage : '2222'
    // }, function(pkg, props) {
    //   // The jQuery site needs the "bugs" value as a string.
    //   // if ('bugs' in props) { pkg.bugs = props.bugs; }
    //   return {a:1};
    // })

    // All done!
    done();
  });

};