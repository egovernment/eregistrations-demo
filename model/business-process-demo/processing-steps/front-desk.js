'use strict';

var db                      = require('../../../db')
  , _                       = require('../../../i18n')
  , FrontDeskProcessingStep = require('eregistrations/model/processing-steps/front-desk')(db)
  , BusinessProcessDemo     = require('./base');

BusinessProcessDemo.prototype.processingSteps.map.defineProperties({
	frontDesk: { type: FrontDeskProcessingStep, nested: true }
});

BusinessProcessDemo.prototype.processingSteps.map.frontDesk.setProperties({
	label: _("Front Desk"),
	isApplicable: true,
	previousSteps: function () { return [this.owner.socialSecurity]; }
});

module.exports = BusinessProcessDemo;
