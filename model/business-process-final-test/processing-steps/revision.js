'use strict';

var db                     = require('../../../db')
  , RevisionProcessingStep = require('eregistrations/model/processing-steps/revision')(db)
  , BusinessProcessDemo    = require('./base');

BusinessProcessDemo.prototype.processingSteps.map.defineProperties({
	revision: { type: RevisionProcessingStep, nested: true }
});

module.exports = BusinessProcessDemo;
