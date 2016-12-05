'use strict';

var User       = require('./../../user')
  , db         = require('../../../../db')
  , Partner    = require('./data-forms');

module.exports = User;

require('eregistrations/model/lib/nested-map')(db);

User.prototype.defineNestedMap('partners', {
	itemType: Partner,
	cardinalPropertyKey: 'name'
});
