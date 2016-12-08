'use strict';

var db                  = require('../../../db')
  , _                   = require('../../../i18n')
  , FormSectionGroup    = require('eregistrations/model/form-section-group')(db)
  , FormSection         = require('eregistrations/model/form-section')(db)
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
	personalDetails: { type: FormSection, nested: true },
	address: { type: FormSection, nested: true }
});

companyInformation.sections.personalDetails.setProperties({
	label: _("Personal Details"),
	propertyNames: ['businessName']
});

companyInformation.sections.address.setProperties({
	label: _("Address"),
	propertyNames: ['address/country', 'address/city', 'address/street']
});

module.exports = BusinessProcessDemo;
