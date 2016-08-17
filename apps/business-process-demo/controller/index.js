// Controller for both server and client.

'use strict';

var assign = require('es5-ext/object/assign');

assign(exports, require('eregistrations/controller/registration'));

exports['company-information'] = true;
exports['representative-details'] = true;
exports.attorney = true;
