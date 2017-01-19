'use strict';

var aFrom               = require('es5-ext/array/from')
  , configure           = require('eregistrations/server/configure-apps-access-rules')
  , mano                = require('mano')
  , db                  = require('../../../db')
  , FragmentGroup       = require('data-fragment/group')
  , getRecordsFragment     = require('eregistrations/server/data-fragments/get-records-fragment')

  , dbDriver = mano.dbDriver
  , globalFragment;

globalFragment = new FragmentGroup();
globalFragment.addFragment(getRecordsFragment(dbDriver.getStorage('object'), [
	'globalPrimitives/currentDate'
]));

module.exports = configure(db, dbDriver, {
	globalFragment: globalFragment,
	initializeView: require('../../db/views'),
	businessProcessListProperties:
		aFrom(require('../../../apps-common/business-process-list-properties'))
		.concat(aFrom(require('../../../apps-common/business-process-list-computed-properties')))
});
