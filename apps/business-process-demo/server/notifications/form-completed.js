'use strict';

var _                 = require('mano').i18n.bind('User: Notifications')
  , db                = require('../../../../db')
  , businessProcesses = db.BusinessProcessDemo.instances;

exports.preTrigger    = businessProcesses.filterByKeyPath('guideProgress', 1);
exports.trigger    = businessProcesses.filterByKeyPath('dataForms/progress', 1);

exports.resolveGetters = true;

exports.variables = {
	fullName: function () {
		return this.businessProcess.user.fullName;
	},
	registrations: function () {
		var result = [];
		this.businessProcess.registrations.requested.forEach(function (registration) {
			result.push('\n- ' + registration.label);
		});

		return result.join('');
	}
};

exports.subject = _("Form completion");
exports.text = _("Congratulations ${ fullName }.\n\n" +
	"You have completed the form. " +
	"You are one step closer to complete following requests: ${ registrations }");
