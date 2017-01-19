'use strict';

var assign          = require('es5-ext/object/assign')
  , processingSteps = require('eregistrations/processing-steps-meta');

module.exports = assign(processingSteps, require('./meta'));

require('../apps/official-revision/business-processes/map');
require('../apps/official-processing/business-processes/map');
require('../apps/official-social-security/business-processes/map');
require('../apps/official-front-desk/business-processes/map');
