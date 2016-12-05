'use strict';

var _                    = require('mano').i18n.bind('View: Add/Edit')
  , generateFormSections = require('eregistrations/view/components/generate-form-sections')
  , baseUrl              = url;

exports._parent = require('./main');
exports._match = 'entity';

exports['main-content']  = function () {
	var entity            = this.entity
	  , url               = baseUrl.bind(this.root)
	  , entitiesNestedMap = entity.owner.owner
	  , entitiesTableId   = entitiesNestedMap.owner.partnersTable.domId;

	section({ class: "section-primary" },
		h1(_if(eqSloppy(entity.getObservable(
			entity.owner.owner.cardinalPropertyKey
		), null),
			_("Add ${ entityLabel }", { entityLabel: entity.label }),
			_("Edit ${ entityName }", { entityName: entity._name }))),
		insert(generateFormSections(entity.dataForms.applicable,
			{ viewContext: this, url: url })),
		div({ class: 'user-next-step-button' },
			a({ href: ('/section-example-3/') + '#' + entitiesTableId },
				_("Back to form"))));
};
