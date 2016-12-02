'use strict';

var db          = require('../../db')
  , FormSection = require('eregistrations/model/form-section')(db)
  , User        = require('./user');

// Define a Type that would represent a specific section
FormSection.extend('GeneralInfoFormSection', {
	// Section label
	label: { value: "User information" },
	// Form POST url
	actionUrl: { value: 'section-example-1' },
	// Property names of all involved fields (order is significant)
	propertyNames: { value: ['name', 'isNice', 'explainWhyNotNice',
		'address/country', 'address/street'] }
});

// We define section, so that it's usable in the context of User instance.
User.prototype.defineProperties({
	section: {
		type: db.GeneralInfoFormSection,
		nested: true
	}
});

// As explainWhyNotNice field should be shown conditionally, we define a condition for it.
// This condition is a getter and it's name should follow convention.
// The convention to create such getter's name // is: is<CapitalizedNameOfProperty>Applicable, so
// in our example it's isExplainWhyNotNiceApplicable. If we wanted to show name field conditionally
// it would have been isNameApplicable.
User.prototype.define('isExplainWhyNotNiceApplicable', {
	value: function () {
		return !this.isNice;
	}
});
