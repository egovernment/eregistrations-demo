// Common fields declaration for business processes.

'use strict';

var db                  = require('../../db')
  , _                   = require('../../i18n')
  , UsDollar            = require('dbjs-ext/number/currency/us-dollar')(db)
  , UInteger            = require('dbjs-ext/number/integer/u-integer')(db)
  , Address             = require('../lib/address')
  , StringLine          = require('dbjs-ext/string/string-line')(db)
  , BusinessProcessDemo = module.exports = require('./base');

require('eregistrations/model/business-process-new/representative')(db);

BusinessProcessDemo.prototype.representative.defineProperties({
	idNumber: {
		type: StringLine,
		label: _("Identification number"),
		inputHint: _("The required format is: 0000-0000-AA"),
		required: true,
		pattern: new RegExp('[0-9]{4}-[0-9]{3}-[A-Z]{2}'),
		inputPlaceholder: '8888-888-AA'
	}
});

BusinessProcessDemo.prototype.getOwnDescriptor('businessName').required = true;

BusinessProcessDemo.prototype.defineProperties({
	assets: {
		type: UsDollar,
		label: _("Assets"),
		min: 1000,
		step: 1,
		required: true
	},
	workers: {
		type: UInteger,
		label: _("Number of employees"),
		max: 100
	},
	address: {
		type: Address,
		nested: true
	},
	attorney: {
		type: db.Person,
		nested: true
	},
	expectedIncome: {
		type: UsDollar,
		label: _("Expected income"),
		inputHint: _("If your organization is non-profit, put '0'"),
		min: 0,
		step: 1,
		required: true
	}
});
