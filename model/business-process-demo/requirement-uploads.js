'use strict';

var BusinessProcessDemo = require('./base');
var defineRequirementUploads =
	require('eregistrations/model/business-process-new/utils/define-requirement-uploads');

module.exports = defineRequirementUploads(BusinessProcessDemo, [
	require('../documents/business-plan'),
	require('../documents/company-registration'),
	require('../documents/inventory'),
	require('../documents/passport'),
	require('../documents/social-security-certificate')
]);
