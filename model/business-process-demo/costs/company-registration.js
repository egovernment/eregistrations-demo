'use strict';

var _ = require('../../../i18n')

  , BusinessProcessDemo = require('../base');

module.exports = BusinessProcessDemo;

BusinessProcessDemo.prototype.costs.map.define('companyRegistration', {
	nested: true
});

BusinessProcessDemo.prototype.costs.map.companyRegistration.setProperties({
	label: _("Company registration"),
	amount: function (_observe) {
		var businessProcess = this.master
		  , assets  = businessProcess._get ? _observe(businessProcess._assets) : businessProcess.assets
		  , isLocalInvestment = businessProcess._get ?
				_observe(businessProcess._isLocalInvestment) : businessProcess.isLocalInvestment;

		return Math.max(Math.ceil((assets || 0) * (isLocalInvestment ? 0.01 : 0.02)), 25);
	}
});
