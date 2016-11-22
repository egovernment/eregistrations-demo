'use strict';

var db                  = require('../../../../db')
  , _                   = require('../../../../i18n')
  , UInteger            = require('dbjs-ext/number/integer/u-integer')(db)
  , ProcessingStep      = require('eregistrations/model/processing-step')(db)
  , BusinessProcessFinalTest = require('../../base');

BusinessProcessFinalTest.prototype.processingSteps.map.defineProperties({
	edcProcessing: { type: ProcessingStep, nested: true }
});

var edcStep = BusinessProcessFinalTest.prototype.processingSteps.map.edcProcessing;

edcStep.defineProperties({
	score: {
		type: UInteger,
		max: 3,
		label: _("Certificate score"),
		required: true
	}
});

edcStep.setProperties({
	label: _("EDC Processing"),
	previousSteps: function () { return [this.owner.revision]; },
	approvalProgress: function (_observe) {
		var weight = 1, statusSum = 0;
		_observe(this.master.certificates.applicable).forEach(function (cert) {
			var certFormWeight = _observe(cert.dataForm._weight);
			weight += certFormWeight;
			statusSum += _observe(cert.dataForm._status) * certFormWeight;
		});
		statusSum += this.dataForm.status;
		return statusSum / weight;
	}
});

module.exports = BusinessProcessFinalTest;