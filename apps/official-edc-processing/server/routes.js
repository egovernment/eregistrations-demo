// Server-only GET router

'use strict';

module.exports = require('eregistrations/server/routes/official')({
	roleName: 'edcProcessing',
	statusMap: require('../business-processes/map'),
	listProperties: require('../../../apps-common/business-process-list-properties'),
	listComputedProperties: require('../../../apps-common/business-process-list-computed-properties'),
	itemsPerPage: require('../../../server/env').objectsListItemsPerPage,
	statusIndexName: 'processingSteps/map/edcProcessing/status'
}, {
	processingStepsMeta: require('../../../apps-common/processing-steps')
});
