'use strict';

var deferred                   = require('deferred')
  , resolve                    = require('path').resolve
  , generateAppsClientModel    = require('mano/scripts/generate-apps-client-model')
  , generateAppsHtmlIndex      = require('mano/scripts/generate-apps-html-index')
  , generateAppsClientProgram  = require('mano/scripts/generate-apps-client-program')
  , generateAppsClientCss      = require('mano/scripts/generate-apps-client-css')
  , generateClientEnv          = require('eregistrations/scripts/generate-client-env')
  , dbRecompute                = require('../server/scripts/db-recompute-in-sandbox')
  , generateDemoLegacyDbjsMock = require('./generate-business-process-demo-legacy-dbjs-mock')
  , i18nScan                   = require('./i18n-scan')
  , env                        = require('../server/env')
  , appsList                   = require('../server/apps/list')

  , root = resolve(__dirname, '..');

require('debug-ext')('setup').color = 4;

module.exports = function () {
	return deferred.reduce([
		// 1. Generate map of all i18n messages used in a system
		i18nScan,
		// 2. Generate client-side dedicated env.json
		generateClientEnv.bind(null, env, root),
		// 3. Generate client-side fast model loading files
		generateAppsClientModel.bind(null, root, appsList),
		// 4. Generate client-side index.html entry files
		generateAppsHtmlIndex.bind(null, root, appsList),
		// 5. Generate client-side old browsers dedicated demo database mock
		generateDemoLegacyDbjsMock,
		// 6. Ensure to have actual state of indexes
		dbRecompute,
		// 7. Generate CSS bundles (clide-side stylesheets)
		!env.dev && generateAppsClientCss.bind(null, root, appsList),
		// 8. Generate JS bundles (client-side programs)
		!env.dev && generateAppsClientProgram.bind(null, root, appsList),
		// 9. Invalidate Cloudfront (if configured)
		env.cloudfront &&  require('eregistrations/server/scripts/cloudfront-invalidate')
			.bind(null, root, appsList, env.cloudfront)
	], function (ignore, next) { return next && next(); }, null);
};
