'use strict';

var from        = require('es5-ext/array/from')
  , getTable    = require('eregistrations/view/components/business-processes-table')
  , tableCols   = require('../components/business-process-table-columns')
  , statusMap   = require('../../apps/official-revision/business-processes/map')
  , getOrderIdx = require('../../apps/official-revision/business-processes/get-default-order-index')
  , env         = require('../../apps-common/client/env')

  , columns       = from(tableCols.columns);

module.exports = exports = require('eregistrations/view/business-processes-table');

columns.push(tableCols.archiverColumn);
columns.push(tableCols.goToColumn);

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
