'use strict';

var db                = require('../../db')
  , _                 = require('../../i18n').bind("Model: Partners")
  , TabularEntity     = require('eregistrations/model/form-tabular-entity')(db)
  , FormEntitiesTable = require('eregistrations/model/form-entities-table')(db)
  , User              = require('./nested-entitites/partners');

User.prototype.defineProperties({
	partnersTable: {
		type: FormEntitiesTable,
		nested: true
	}
});

User.prototype.partnersTable.setProperties({
	label: _("Partners"),
	min: 1,
	baseUrl: 'partner',
	propertyName: 'partners',
	sectionProperty: 'dataForms',
	entityTitleProperty: 'name'
});

['name', 'isShareholder'].forEach(function (prop) {
	User.prototype.partnersTable.entities.add(new TabularEntity({
		propertyName: prop
	}));
});
