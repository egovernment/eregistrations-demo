// Controller for both server and client.

'use strict';

var assign             = require('es5-ext/object/assign')
  , db                 = require('../../../db')
  , entitiesController = require('eregistrations/controller/generate-entities-controllers');

assign(exports, require('eregistrations/controller/user'));

exports['section-example-1'] = true;
exports['section-example-2'] = true;

entitiesController(exports, {
	name: 'partner',
	targetMap: function () { return this.user.partners; },
	pageUrl: '/section-example-3/',
	tableHtmlId: db.User.prototype.partnersTable.domId,
	targetEntityPrototype: db.Partner.prototype
});
