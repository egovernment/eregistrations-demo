// Configuration of attorney details section.

'use strict';

var db                  = require('../../../db')
  , _                   = require('../../../i18n')
  , FormSection         = require('eregistrations/model/form-section')(db)
  , BusinessProcessDemo = require('../base');

BusinessProcessDemo.prototype.dataForms.map.define('attorney', {
	nested: true,
	type: FormSection
});

BusinessProcessDemo.prototype.dataForms.map.attorney.setProperties({
	label: _("Attorney"),
	actionUrl: 'attorney',
	isApplicable: function (_observe) {
		var hasCertificateOfIncentives = _observe(this.master.registrations.requested)
			.has(this.master.registrations.map.certificateOfIncentives);
		if (!hasCertificateOfIncentives) return;
		return _observe(this.master._assets) > 100000;
	},
	propertyNames: ['attorney/firstName', 'attorney/lastName', 'attorney/email']
});

module.exports = BusinessProcessDemo;
