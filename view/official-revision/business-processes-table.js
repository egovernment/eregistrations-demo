'use strict';

var getTable    = require('eregistrations/view/components/business-processes-table')
  , columns     = require('../components/business-processes-table-columns')
  , statusMap   = require('../../apps/official-revision/business-processes/map')
  , getOrderIdx = require('../../apps/official-revision/business-processes/get-default-order-index')
  , env         = require('../../apps-common/client/env');

module.exports = exports = require('eregistrations/view/business-processes-table');

exports._statusMap = function () {
	return statusMap;
};

exports._businessProcessTable = function () {
	return getTable({
		user: this.user,
		roleName: 'revision',
		statusMap: statusMap,
		getOrderIndex: getOrderIdx,
		itemsPerPage: env.objectsListItemsPerPage,
		columns: columns,
		class: 'submitted-user-data-table'
	});
};
