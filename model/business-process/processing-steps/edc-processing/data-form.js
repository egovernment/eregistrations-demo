'use strict';

var db            = require('../../../../db')
  , _             = require('../../../../i18n')
  , FormSection   = require('eregistrations/model/form-section')(db)
  , EdcProcessing  = require('./base');

EdcProcessing.prototype.getOwnDescriptor('dataForm').type = FormSection;

EdcProcessing.prototype.dataForm.setProperties({
	label: _("EDC approval"),
	actionUrl: function () {
		return this.master.__id__ + '/edc-processing-form';
	},
	propertyMasterType: EdcProcessing,
	propertyNames: ['score']
});
