'use strict';

var _  = require('../../i18n')
  , db = require('../../db');

module.exports =
	require('eregistrations/model/document')(db).extend('SocialSecurityCertificate', {}, {
		label: { value: _("Social security certificate") }
	});
