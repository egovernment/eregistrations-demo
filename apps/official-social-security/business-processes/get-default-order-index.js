// Returns default order index (in context of this app) for provided business process

'use strict';

module.exports = function (businessProcess) {
	return businessProcess.processingSteps.map.socialSecurity._isReady.lastModified;
};
