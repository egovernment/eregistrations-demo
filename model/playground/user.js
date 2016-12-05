'use strict';

var db         = require('../../db')
  , _          = require('../../i18n').bind("Section example")
  , StringLine = require('dbjs-ext/string/string-line')(db)
  , User       = require('eregistrations/model/user')(db);

module.exports = User;

db.Object.extend('SimpleAddress', {
	country: { type: StringLine, required: true, label: _("Country") },
	street: { type: StringLine, label: _("Street") }
});

User.prototype.defineProperties({
	name: { type: StringLine, required: true, label: _("Name") },
	isNice: { type: db.Boolean, value: true, required: true, label: _("Is the user nice") },
	explainWhyNotNice: { type: db.String, required: true, label: _("Why is user not nice?") },
	address: { type: db.SimpleAddress, nested: true }
});
