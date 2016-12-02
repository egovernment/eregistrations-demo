'use strict';

var _ = require('../../i18n').bind("Views: playground");

exports._parent = require('../user-base');

exports['sub-main'] = {
	content: function () {
		nav(ul({ class: 'pills-nav' },
			li({ id: 'section-example-1', class: 'pills-nav-pill' },
				a({ href: '/' }, _("Section example 1"))),
			li({ id: 'section-example-2', class: 'pills-nav-pill' },
				a({ href: '/section-example-2/' }, _("Section example 2")))
			));
		div({ id: 'main-content' });
	}
};
