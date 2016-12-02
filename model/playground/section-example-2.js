'use strict';

var db                    = require('../../db')
  , _                     = require('../../i18n').bind("Section example")
  , FormSection           = require('eregistrations/model/form-section')(db)
  , FormSectionGroup      = require('eregistrations/model/form-section-group')(db)
  , getApplicablePropName = db.Object.getApplicablePropName
  , User                  = require('./user');

// We define section, so that it's usable in the context of User instance.
User.prototype.defineProperties({
	sectionGroup: {
		type: FormSectionGroup,
		nested: true
	}
});

User.prototype.sectionGroup.setProperties({
	actionUrl: 'section-example-2'
});

User.prototype.sectionGroup.sections.defineProperties({
	personalInformation: { type: FormSection, nested: true },
	addressDetails: { type: FormSection, nested: true }
});

var subSections = User.prototype.sectionGroup.sections;

subSections.personalInformation.setProperties({
	label: _("Personal Information"),
	propertyNames: ['name', 'isNice', 'explainWhyNotNice']
});

subSections.addressDetails.setProperties({
	label: _("Address Details"),
	propertyNames: ['address/country', 'address/street']
});

// As explainWhyNotNice field should be shown conditionally, we define a condition for it.
// This condition is a getter and it's name should follow convention.
// The convention to create such getter's name // is: is<CapitalizedNameOfProperty>Applicable, so
// in our example it's isExplainWhyNotNiceApplicable. If we wanted to show name field conditionally
// it would have been isNameApplicable.
// Here, we use helper method getApplicablePropName, which expects the name of the original property

User.prototype.set(getApplicablePropName('explainWhyNotNice'), function () {
	return !this.isNice;
});
