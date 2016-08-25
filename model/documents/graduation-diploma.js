'use strict';

var _  = require('../../i18n')
  , db = require('../../db');

module.exports = require('eregistrations/model/document')(db).extend('GraduationDiploma', {}, {
	label: { value: _("Any School Graduation Diploma") }
});