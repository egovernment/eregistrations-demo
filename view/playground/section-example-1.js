'use strict';

var _ = require('../../i18n').bind("Views: playground");

exports['section-example-1'] = { class: { 'submitted-menu-item-active': true } };

exports._parent = require('./main');

exports['main-content'] = {
	content: function () {
		section({ class: "section-primary" },
			h1(_("Section Example 1")),
			this.user.section.toDOMForm(document));
	}
};
