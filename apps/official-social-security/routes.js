/** Routes for the view.
 *  If a matcher is needed you can use this one:
 *   require('eregistrations/routes/utils/official-match-business-process')
 *  The parent routes for official accept step as string name or
 *  a function for a more complex step resolution See:
 *   require('eregistrations/routes/official')
 */
'use strict';

var assign = require('es5-ext/object/assign');

require('../../view/print-base');
require('../../view/user-base');

assign(exports, require('eregistrations/routes/official')('socialSecurity'));

exports['/'] = require('../../view/official-social-security/business-processes-table');
exports['print-business-processes-list'] =
	require('../../view/official-social-security/print-business-processes-table');

exports['[0-9][a-z0-9]*'].view =
	require('../../view/official-social-security/business-process-official-form');
