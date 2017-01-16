'use strict';

var _                 = require('../../../i18n')
  , businessProcesses = require('../../../apps-common/business-processes/submitted/demo');

module.exports = [{
	preTrigger: businessProcesses.filterByKeyPath('processingSteps/map/processing/isPending', true),
	trigger: businessProcesses.filterByKeyPath('processingSteps/map/processing/isApproved', true),
	official: 'processingSteps/map/processing/processor',
	label: _("Processing"),
	text: _("Certificates issued")
}];
