'use strict';

var db       = require('../../../../db')
  , _        = require('../../../../i18n')
  , UInteger = require('dbjs-ext/number/integer/u-integer')(db);

module.exports = require('eregistrations/model/processing-step')(db)
	.extend('EdcProcessingProcessingStep', {
		label: { value: _("EDC Processing") },
		previousSteps: { value: function () { return [this.owner.revision]; } },
		approvalProgress: { value: function (_observe) {
			var weight = 1, statusSum = 0;
			_observe(this.master.certificates.applicable).forEach(function (cert) {
				var certFormWeight = _observe(cert.dataForm._weight);
				weight += certFormWeight;
				statusSum += _observe(cert.dataForm._status) * certFormWeight;
			});
			statusSum += this.dataForm.status;
			return statusSum / weight;
		} },
		score: {
			type: UInteger,
			max: 3,
			label: _("Certificate score"),
			required: true
		}
	});
