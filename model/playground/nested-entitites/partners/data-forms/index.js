'use strict';

var Partner               = require('../fields')
  , _                     = require('../../../../../i18n').bind("Model: Partner")
  , db                    = require('../../../../../db')
  , FormSection           = require('eregistrations/model/form-section')(db)
  , PropertyGroupsProcess = require('eregistrations/model/lib/property-groups-process')(db);

module.exports = Partner;

Partner.prototype.defineProperties({
	dataForms: {
		type: PropertyGroupsProcess,
		nested: true
	}
});

Partner.prototype.dataForms.map.define('main', {
	nested: true,
	type: FormSection
});

Partner.prototype.dataForms.map.main.setProperties({
	label: _("Personal information"),
	actionUrl: function () { return 'partner/' + this.propertyMaster.key; },
	propertyMasterType: Partner,
	propertyNames: ["name", "isShareholder"]
});
