'use strict';

var statusMap = require('../../apps/official-front-desk/business-processes/map')
  , columns   = require('../components/business-process-table-columns').columns;

var getOrderIndex =
	require('../../apps/official-front-desk/business-processes/get-default-order-index');

module.exports = exports = require('eregistrations/view/print-business-processes-table');

exports._statusMap = function () { return statusMap; };
exports._getOrderIndex = function () { return getOrderIndex; };
exports._columns = function () { return columns; };
