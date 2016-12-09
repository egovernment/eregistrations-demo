'use strict';

var getTable    = require('eregistrations/view/components/business-processes-table')
  , columns     = require('../components/business-processes-table-columns')
  , statusMap   = require('../../apps/official-processing/business-processes/map')
  , env         = require('../../apps-common/client/env')
  , getOrderIdx =
	require('../../apps/official-processing/business-processes/get-default-order-index');

module.exports = exports = require('eregistrations/view/business-processes-table');

exports._statusMap = function () {
	return statusMap;
};

exports._businessProcessTable = function () {
	return getTable({
		user: this.user,
		roleName: 'processing',
		statusMap: statusMap,
		getOrderIndex: getOrderIdx,
		itemsPerPage: env.objectsListItemsPerPage,
		columns: columns,
		class: 'submitted-user-data-table'
	});
};
