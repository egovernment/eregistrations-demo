'use strict';

var db                  = require('../../../db')
  , _                   = require('../../../i18n')
  , ProcessingStep      = require('eregistrations/model/processing-step')(db)
  , BusinessProcessDemo = require('./base')
  , FormSection         = require('eregistrations/model/form-section')(db)
  , DateType            = require('dbjs-ext/date-time/date')(db)
  , socialSecurityStep;

BusinessProcessDemo.prototype.processingSteps.map.defineProperties({
	socialSecurity: { type: ProcessingStep, nested: true }
});

socialSecurityStep = BusinessProcessDemo.prototype.processingSteps.map.socialSecurity;

socialSecurityStep.defineProperties({
	isSealConfirmed: {
		type: db.Boolean,
		label: _("Are the seals of the certificates confirmed?"),
		required: true
	},
	sealDate: {
		type: DateType,
		label: _("What is the date of sealing the last certificate?"),
		required: true
	}
});

socialSecurityStep.setProperties({
	label: _("Social Security"),
	previousSteps: function () { return [this.owner.processing]; }
});

socialSecurityStep.getOwnDescriptor('dataForm').type = FormSection;

socialSecurityStep.dataForm.setProperties({
	actionUrl: function () {
		return this.master.__id__ + '/social-security-form';
	},
	label: _("Seals confirmation"),
	propertyMasterType: socialSecurityStep.constructor,
	propertyNames: ['isSealConfirmed', 'sealDate']
});

module.exports = BusinessProcessDemo;
