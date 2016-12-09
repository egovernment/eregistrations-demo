// Meta data for business processes states applicable for this app

'use strict';

var forEach = require('es5-ext/object/for-each')
  , d       = require('d')
  , _       = require('../../../i18n')

  , meta;

module.exports = meta = Object.defineProperties({
	all: {
		label: _("All"),
		order: 3
	},
	pending: {
		label: _("Pending"),
		order: 1,
		default: true
	},
	approved: {
		label: _("Approved"),
		order: 2
	}
}, { _services: d(['demo']) });

forEach(meta, function (conf, name) {
	if (name === 'all') {
		conf.indexName = 'processingSteps/map/socialSecurity/isReady';
		conf.indexValue = true;
	} else {
		conf.indexName = 'processingSteps/map/socialSecurity/status';
		conf.indexValue = name;
	}
});
