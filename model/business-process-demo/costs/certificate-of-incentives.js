'use strict';

var _                   = require('../../../i18n')
  , BusinessProcessDemo = require('../base');

module.exports = BusinessProcessDemo;

BusinessProcessDemo.prototype.costs.map.define('certificateOfIncentives', {
	nested: true
});

BusinessProcessDemo.prototype.costs.map.certificateOfIncentives.setProperties({
	label: _("Certificate of incentives"),
	amount: 100
});
