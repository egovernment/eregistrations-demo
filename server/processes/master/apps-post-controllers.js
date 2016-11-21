// Map of all apllication controllers

'use strict';

var copy            = require('es5-ext/object/copy')
  , joinControllers = require('mano/utils/join-controllers')
  , globalRoutes    = require('mano/controller/server');

var publicGlobalRoutes = copy(globalRoutes);
delete publicGlobalRoutes.dbupdate;

var publicRoutes = joinControllers(
	require("../../../apps/public/controller"),
	require("../../../apps/public/controller/server-master"),
	{ extendedOnly: true, globalRoutes: publicGlobalRoutes }
);

var nonPublicGlobalRoutes = copy(globalRoutes);
nonPublicGlobalRoutes.login = publicRoutes.login;

var joinOptions = { extendedOnly: true, globalRoutes: nonPublicGlobalRoutes };

module.exports = {
	"apps/business-process-demo": joinControllers(
		require("../../../apps/business-process-demo/controller"),
		null,
		joinOptions
	),
	"apps/business-process-submitted": joinControllers(
		require("../../../apps/business-process-submitted/controller"),
		null,
		joinOptions
	),
	"apps/meta-admin": joinControllers(
		require("../../../apps/meta-admin/controller"),
		null,
		joinOptions
	),
	"apps/official-revision": joinControllers(
		require("../../../apps/official-revision/controller"),
		null,
		joinOptions
	),
	"apps/official-processing": joinControllers(
		require("../../../apps/official-processing/controller"),
		null,
		joinOptions
	),
	"apps/official-social-security": joinControllers(
		require("../../../apps/official-social-security/controller"),
		null,
		joinOptions
	),
	"apps/official-front-desk": joinControllers(
		require("../../../apps/official-front-desk/controller"),
		null,
		joinOptions
	),
	"apps/public": publicRoutes,
	"apps/user": joinControllers(
		require("../../../apps/user/controller"),
		null,
		joinOptions
	),
	"apps/users-admin": joinControllers(
		require("../../../apps/users-admin/controller"),
		null,
		joinOptions
	)
};
