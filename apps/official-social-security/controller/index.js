// Controller for both server and client.

'use strict';

var assign          = require('es5-ext/object/assign')
  , officialMatcher = require('eregistrations/controller/utils/official-matcher')
  , socialSecurityMatcher;

socialSecurityMatcher = function (businessProcessId) {
	return officialMatcher.call(this, businessProcessId, 'socialSecurity');
};

assign(exports, require('eregistrations/controller/user'));

exports['[0-9][a-z0-9]+/social-security-form'] = {
	match: socialSecurityMatcher
};

exports['[0-9][a-z0-9]+/validate'] = {
	match: function (businessProcessId) {
		if (!socialSecurityMatcher.call(this, businessProcessId)) return false;

		return this.processingStep.approvalProgress === 1;
	},
	validate: Function.prototype,
	submit: function () {
		this.processingStep.processor = this.user;
		this.processingStep.officialStatus = 'approved';
	},
	redirectUrl: '/'
};
