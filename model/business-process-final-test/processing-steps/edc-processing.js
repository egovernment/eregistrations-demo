'use strict';

var BusinessProcessFinalTest    = require('../base')
  , EdcProcessingProcessingStep = require('../../business-process/processing-steps/edc-processing');

require('eregistrations/model/business-process-new/processing-steps')(require('../../../db'));

BusinessProcessFinalTest.prototype.processingSteps.map.defineProperties({
	edcProcessing: { type: EdcProcessingProcessingStep, nested: true }
});

module.exports = BusinessProcessFinalTest;
