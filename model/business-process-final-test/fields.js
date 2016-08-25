// Common fields declaration for business processes.

'use strict';

var db                       = require('../../db')
  , _                        = require('../../i18n')
  , UInteger                 = require('dbjs-ext/number/integer/u-integer')(db)
  , StringLine               = require('dbjs-ext/string/string-line')(db)
  , Map                      = require('es6-map')
  , BusinessProcessFinalTest = module.exports = require('./base');

require('dbjs-ext/create-enum')(db);

var ProgrammingLanguage = StringLine.createEnum('ProgrammingLanguage',
	new Map([
		['c', {
			label: _("C")
		}],
		['java', {
			label: _("Java")
		}],
		['javaScript', {
			label: _("JavaScript")
		}],
		['php', {
			label: _("PHP")
		}],
		['python', {
			label: _("Python")
		}]
	]));

BusinessProcessFinalTest.prototype.defineProperties({
	hasDegreeInComputerScience: {
		type: db.Boolean,
		label: _("Do you have a degree in computer science?"),
		required: true
	},
	isTrainingAbroad: {
		type: db.Boolean,
		label: _("Is this training performed abroad, or in your country?"),
		inputHint: _("Choose yes for abroad"),
		required: true
	},
	yearsOfExperience: {
		type: UInteger,
		label: _("How many years of experience in IT do you have?"),
		required: true
	},
	programmingLanguage: {
		type: ProgrammingLanguage,
		label: _("What is your favourite programming language?"),
		required: true
	}
});
