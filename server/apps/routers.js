// Map of server controllers

'use strict';

var ControllerRouter = require('controller-router');

module.exports = {
	'business-process-demo':
		new ControllerRouter(require('../../apps/business-process-demo/server/routes')),
	'business-process-submitted':
		new ControllerRouter(require('../../apps/business-process-submitted/server/routes')),
	'meta-admin': new ControllerRouter(require('../../apps/meta-admin/server/routes')),
	'official-revision': new ControllerRouter(require('../../apps/official-revision/server/routes')),
	'official-processing':
		new ControllerRouter(require('../../apps/official-processing/server/routes')),
	'official-social-security':
		new ControllerRouter(require('../../apps/official-social-security/server/routes')),
	'official-front-desk':
		new ControllerRouter(require('../../apps/official-front-desk/server/routes')),
	user: new ControllerRouter(require('../../apps/user/server/routes')),
	'users-admin': new ControllerRouter(require('../../apps/users-admin/server/routes'))
};
