'use strict';

/*!
 * imports.
 */

var env = require('envc')();
var fmt = require('util').format;

/*!
 * exports.
 */

module.exports = run;

/**
 * execute `docker run -e ... --rm -ti $(basename $PWD)`.
 */

function run() {
  var cmd = [ 'docker run', vars(), args() ];
  var exe = cmd.join(' ');
  console.log(exe);
}

/**
 * formats arguments.
 */

function args() {
  return process.argv.slice(3).filter(function (arg) {
    return arg !== '--';
  }).join(' ');
}

/**
 * formats a list of environment variables as `-e KEY="..."`
 */

function vars() {
  var out = [];

  for (var key in env) {
    out.push(fmt('-e %s="%s"', key, env[key]));
  }

  return out.join(' ');
}
