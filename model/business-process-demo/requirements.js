'use strict';

var defineRequirements =
	require('eregistrations/model/business-process-new/utils/define-requirements');
var BusinessProcessDemo = require('./base');

module.exports = defineRequirements(BusinessProcessDemo, [
	require('../documents/business-plan'),
	require('../documents/company-registration'),
	require('../documents/inventory'),
	require('../documents/passport'),
	require('../documents/social-security-certificate')
]);
