'use strict';

/*!
 * imports.
 */

var debug = require('debug')('env-docker:run');
var env = require('envc')();
var exec = require('shelljs').exec;
var fmt = require('util').format;

/*!
 * exports.
 */

module.exports = run;

/**
 * execute `docker run -e ... --rm -ti $(basename $PWD)`.
 */

function run() {
  var cmd = fmt('docker run %s --rm -ti $(basename $PWD)', vars());
  debug(cmd);
  exec(cmd);
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
};
