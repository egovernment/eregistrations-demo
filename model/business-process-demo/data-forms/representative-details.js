'use strict';

var db                  = require('../../../db')
  , _                   = require('../../../i18n')
  , FormSection         = require('eregistrations/model/form-section')(db)
  , BusinessProcessDemo = require('../fields');

BusinessProcessDemo.prototype.dataForms.map.define('representativeDetails', {
	nested: true,
	type: FormSection
});

BusinessProcessDemo.prototype.dataForms.map.representativeDetails.setProperties({
	label: _("Representative details"),
	actionUrl: 'representative-details',
	propertyNames: [
		'representative/firstName',
		'representative/lastName',
		'representative/email',
		'representative/idNumber'
	],
	legend: _("The data of the contact person")
});

module.exports = BusinessProcessDemo;
