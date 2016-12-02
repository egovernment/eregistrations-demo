'use strict';

var _ = require('../../i18n').bind("Views: playground");

exports._parent = require('../user-base');

exports['sub-main'] = {
	content: function () {
		section({ class: "section-primary" },
			h1(_("Sections playground")),
			this.user.section.toDOMForm(document)
			);
	}
};
