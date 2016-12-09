'use strict';

var processingDisabler = require('eregistrations/view/components/disable-processing-step')
  , _                  = require('../../i18n');

module.exports = exports = require('eregistrations/view/business-process-official-form');

exports._officialForm = function () {
	return section({ class: 'section-primary' }, processingDisabler(
		this.processingStep,
		[
			this.processingStep.dataForm.toDOMForm(document),
			_if(eq(this.processingStep._approvalProgress, 1),
				p(postButton({ buttonClass: 'button-main button-main-success',
					action: url(this.businessProcess.__id__, 'validate'),
					value: span(_("Approve")) })))
		]
	));
};
