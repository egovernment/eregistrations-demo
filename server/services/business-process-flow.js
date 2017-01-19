'use strict';

var includes            = require('es5-ext/array/#/contains')
  , initialize          = require('eregistrations/server/services/business-process-flow')
  , db                  = require('../../db')
  , processingStepsMeta = require('../../processing-steps-meta/meta');

initialize(
	db.BusinessProcessDemo,
	Object.keys(processingStepsMeta).filter(function (stepShortPath) {
		return includes.call(processingStepsMeta[stepShortPath]._services, 'demo');
	})
);
