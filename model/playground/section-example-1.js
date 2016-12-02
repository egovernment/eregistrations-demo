'use strict';

var db          = require('../../db')
  , _           = require('../../i18n').bind("Section example")
  , StringLine  = require('dbjs-ext/string/string-line')(db)
  , FormSection = require('eregistrations/model/form-section')(db)
  , User        = require('eregistrations/model/user')(db);

db.Object.extend('SimpleAddress', {
	country: { type: StringLine, required: true, label: _("Country") },
	street: { type: StringLine, label: _("Street") }
});

db.Object.extend('Partner', {
	name: { type: StringLine, label: _("Name") },
	isShareholder: { type: db.Boolean, label: _("Is the partner shareholder?") }
});

User.prototype.defineProperties({
	name: { type: StringLine, required: true, label: _("Name") },
	isNice: { type: db.Boolean, value: true, required: true, label: _("Is the user nice") },
	explainWhyNotNice: { type: db.String, required: true, label: _("Why is user not nice?") },
	address: { type: db.SimpleAddress, nested: true },
	partners: { type: db.Partner, multiple: true }
});

// Define a Type that would represent a specific section
FormSection.extend('GeneralInfoFormSection', {
	// Section label
	label: { value: "User information" },
	// Form POST url
	actionUrl: { value: 'general' },
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
