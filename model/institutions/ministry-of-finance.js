'use strict';

var db = require('../../db')
  , _  = require('../../i18n').bind('Model: Institutions');

module.exports = require('eregistrations/model/institution')(db).newNamed('ministryOfFinance', {
	name: _("Ministry of Finance"),
	abbr: "MF"
});
