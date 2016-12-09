'use strict';

var from         = require('es5-ext/array/from')
  , tableColumns = require('./table-columns')
  , columns      = from(require('eregistrations/view/components/business-processes-table-columns'));

columns.push(tableColumns.businessProcessArchiverColumn);
columns.push(tableColumns.businessProcessGoToColumn);

module.exports = columns;
