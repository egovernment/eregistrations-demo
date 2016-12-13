// Common fields declaration for business processes.

'use strict';

var db                  = require('../../db')
  , _                   = require('../../i18n')
  , UsDollar            = require('dbjs-ext/number/currency/us-dollar')(db)
  , UInteger            = require('dbjs-ext/number/integer/u-integer')(db)
  , Address             = require('../lib/address')
  , BusinessProcessDemo = module.exports = require('./base');

BusinessProcessDemo.prototype.getOwnDescriptor('businessName').required = true;

BusinessProcessDemo.prototype.defineProperties({
	expectedIncome: {
		type: UsDollar,
		label: _("Expected income"),
		step: 1,
		required: true,
		min: 0,
		inputHint: _("If your organization is non-profit, put ‘0’")
	},
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
	}
});
