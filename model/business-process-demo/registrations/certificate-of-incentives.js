'use strict';

var BusinessProcessDemo = require('../base');

BusinessProcessDemo.prototype.registrations.map.defineProperties({
	certificateOfIncentives: { nested: true }
});

BusinessProcessDemo.prototype.registrations.map.certificateOfIncentives.setProperties({
	Document: require('../../documents/certificate-of-incentives'),
	isApplicable: function (_observe) {
		var businessProcess = this.master
		  , assets  = businessProcess._get ? _observe(businessProcess._assets) : businessProcess.assets;

		return assets >= 5000;
	},
	costs: function (_observe) {
		return [
			this.master.costs.map.certificateOfIncentives
		];
	},
	requirements: function () {
		var requirementsMap = this.master.requirements.map;
		return [requirementsMap.companyRegistration, requirementsMap.businessPlan];
	}
});
