'use strict';

try {
	require('mano').env = require('../env');
} catch (e) {
	if (e.code !== 'MODULE_NOT_FOUND') throw e;
	if (e.message !== 'Cannot find module \'../env\'') throw e;
}

module.exports = require('eregistrations/server/env');
