'use strict';

var processingDisabler = require('eregistrations/view/components/disable-processing-step')
  , db                 = require('../../db')
  , _                  = require('../../i18n');

module.exports = exports = require('eregistrations/view/business-process-official-form');

exports._officialForm = function () {
	return section({ class: 'section-primary official-form' }, processingDisabler(
		this.processingStep,
		[
			div({ class: 'section-primary-legend' },
				_("I, ${ officialFullName }, verify that, after making the relevant " +
					"legal controls, have issued:", { officialFullName: this.user._fullName })),
			ul(list(this.businessProcess.certificates.applicable, function (certificate) {
				if (certificate.dataForm.constructor === db.FormSectionBase) return;
				return certificate.dataForm.toDOMForm(document);
			})),
			_if(eq(this.processingStep._approvalProgress, 1),
				p(postButton({ buttonClass: 'button-main button-main-success',
					action: url(this.businessProcess.__id__, 'validate'),
					value: span(_("Validate registration")) })))
		]
	));
};
