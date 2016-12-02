'use strict';

var db = require('../db');
require('./base');

module.exports = exports = require('eregistrations/view/user-base');

exports._submittedMenuExtraItems = function () {
	return li(form({
		class: this.user._currentRoleResolved.map(function (role) {
			if (role === 'playground') return 'submitted-menu-item-active';
		}),
		method: 'post',
		action: '/set-role/'
	},
		input({ type: 'hidden', name: this.user.__id__ + '/currentRole', value: 'playground' }),
		button({ type: 'submit' }, db.Role.meta.playground.label)));
};
