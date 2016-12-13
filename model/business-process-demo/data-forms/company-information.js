'use strict';

var db                  = require('../../../db')
  , _                   = require('../../../i18n')
  , FormSection         = require('eregistrations/model/form-section')(db)
  , BusinessProcessDemo = require('../fields');

BusinessProcessDemo.prototype.dataForms.map.define('companyInformation', {
	nested: true,
	type: FormSection
});

BusinessProcessDemo.prototype.dataForms.map.companyInformation.setProperties({
	label: _("Company Information"),
	actionUrl: 'company-information',
	propertyNames: ['businessName', 'expectedIncome',
		'address/country', 'address/city', 'address/street']
});

module.exports = BusinessProcessDemo;
