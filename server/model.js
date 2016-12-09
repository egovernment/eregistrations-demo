// Loads model required for main server process

'use strict';

var db = module.exports = require('../db');

require('dbjs-ext/string/string-line/password')(db);

require('../model/user/roles');
require('../model/user/recently-visited/business-processes');
require('../model/institutions');
require('../model/global-primitives');

require('../model/business-process-demo');

// Ensure domId property on sections
require('eregistrations/view/dbjs/form-section-base-dom-id');

require('../model/views');
