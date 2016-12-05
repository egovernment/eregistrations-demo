// Routes for the views.

'use strict';

module.exports = {
	'/': require('../../view/playground/section-example-1'),
	'section-example-2': require('../../view/playground/section-example-2'),
	'section-example-3': require('../../view/playground/section-example-3'),
	'partner/[a-z0-9]+': {
		match: function (entity) {
			this.entity = this.user.partners.map.get(entity);
			return true;
		},
		view: require('../../view/playground/add-edit-entity')
	},
	profile: require('eregistrations/view/user-profile')
};
