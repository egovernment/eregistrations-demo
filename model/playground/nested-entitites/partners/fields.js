'use strict';

var db         = require('../../../../db')
  , _          = require('../../../../i18n').bind("Section example")
  , StringLine = require('dbjs-ext/string/string-line')(db);

module.exports = db.Object.extend('Partner', {
	name: { type: StringLine, label: _("Name") },
	isShareholder: { type: db.Boolean, label: _("Is the partner shareholder?") }
});
