'use strict';

var db                  = require('../../../db')
  , _                   = require('../../../i18n')
  , FormSection         = require('eregistrations/model/form-section')(db)
  , FormSectionGroup    = require('eregistrations/model/form-section-group')(db)
  , BusinessProcessDemo = require('../fields');

BusinessProcessDemo.prototype.dataForms.map.define('companyInformation', {
	nested: true,
	type: FormSectionGroup
});

BusinessProcessDemo.prototype.dataForms.map.companyInformation.setProperties({
	label: _("Company Information"),
	actionUrl: 'company-information'
});

var companyInformation = BusinessProcessDemo.prototype.dataForms.map.companyInformation;

companyInformation.sections.defineProperties({
	details: { type: FormSection, nested: true },
	address: { type: FormSection, nested: true }
});

companyInformation.sections.details.setProperties({
	propertyNames: []
});

companyInformation.sections.address.setProperties({
	label: _("Address"),
	propertyNames: []
});
module.exports = BusinessProcessDemo;
