'use strict';

var statusMap     = require('../../apps/official-processing/business-processes/map')
  , columns       = require('../components/business-processes-table-columns')
  , getOrderIndex =
	require('../../apps/official-processing/business-processes/get-default-order-index');

module.exports = exports = require('eregistrations/view/print-business-processes-table');

exports._statusMap = function () { return statusMap; };
exports._getOrderIndex = function () { return getOrderIndex; };
exports._columns = function () { return columns; };
