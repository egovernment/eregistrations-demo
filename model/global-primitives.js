'use strict';

var db                = require('../db')
  , globalPrimitives  = require('eregistrations/model/global-primitives/base')(db)
  , DateType          = require('dbjs-ext/date-time/date')(db);

globalPrimitives.defineProperties({
	currentDate: {
		type: DateType
	}
});

module.exports = globalPrimitives;
