// Generates mock for legacy

'use strict';

// Ensure mano.env
require('../server/env');

var resolve          = require('path').resolve
  , debug            = require('debug-ext')('setup')
  , generateDbjsMock = require('eregistrations/scripts/generate-legacy-dbjs-mock')
  , BusinessProcess  = require('../model/business-process-final-test');

var path =
	'../apps/business-process-final-test/client/legacy/business-process-final-test-legacy-proto.js';

module.exports = function () {
	debug('generate-business-process-final-test-legacy-dbjs-mock');

	return generateDbjsMock(BusinessProcess,
		resolve(__dirname, path));
};
