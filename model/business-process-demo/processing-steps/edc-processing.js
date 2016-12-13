'use strict';

var BusinessProcessDemo         = require('../base')
  , EdcProcessingProcessingStep = require('../../business-process/processing-steps/edc-processing');

require('eregistrations/model/business-process-new/processing-steps')(require('../../../db'));

BusinessProcessDemo.prototype.processingSteps.map.defineProperties({
	edcProcessing: { type: EdcProcessingProcessingStep, nested: true }
});

module.exports = BusinessProcessDemo;
