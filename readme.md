# env-docker

[![Build Status](http://img.shields.io/travis/wilmoore/node-env-docker.svg)](https://travis-ci.org/wilmoore/node-env-docker) [![NPM version](http://img.shields.io/npm/v/env-docker.svg)](https://www.npmjs.org/package/env-docker) [![NPM downloads](http://img.shields.io/npm/dm/env-docker.svg)](https://www.npmjs.org/package/env-docker) [![LICENSE](http://img.shields.io/npm/l/env-docker.svg)](license)

> Run a docker command with environment variables populated via .env.

    $ npm install env-docker --save

## Available Commands

###### run

    $ env-docker run -- --rm -ti $(basename $PWD)

This can be conveniently used via `npm run-scripts` as depicted below:

    "scripts": {
      "docker:build": "docker build -t $npm_package_name .",
      "docker:run": "eval $(env-docker run -- -p 3000:3000 --rm -ti $npm_package_name) || true",
      "predocker:run": "npm run docker:build",
    },

To re-build and run, just type the following:

    $ npm run docker:run

## License

  [MIT](license)
