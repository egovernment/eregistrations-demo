// Legacy function implementations

'use strict';

require('mano-legacy/html5');
require('mano-legacy/ie8-font-visibility-fix');

window.$ = require('mano-legacy');
$.legacyDb = require('./business-process-demo-legacy-proto');

require('mano-legacy/element#/class');
require('mano-legacy/live/input-mask');
require('eregistrations/client/legacy/refresh-guide');
require('eregistrations/client/legacy/date-controls');
require('eregistrations/client/legacy/form-section-state-helper');
require('mano-legacy/dbjs-observe-mock');
require('mano-legacy/hash-nav-modal');
