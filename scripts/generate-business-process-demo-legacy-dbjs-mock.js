// Generates mock for legacy

'use strict';

// Ensure mano.env
require('../server/env');

var resolve          = require('path').resolve
  , debug            = require('debug-ext')('setup')
  , generateDbjsMock = require('eregistrations/scripts/generate-legacy-dbjs-mock')
  , BusinessProcess  = require('../model/business-process-demo');

module.exports = function () {
	debug('generate-business-process-demo-legacy-dbjs-mock');

	return generateDbjsMock(BusinessProcess,
		resolve(__dirname,
			'../apps/business-process-demo/client/legacy/business-process-demo-legacy-proto.js'));
};
