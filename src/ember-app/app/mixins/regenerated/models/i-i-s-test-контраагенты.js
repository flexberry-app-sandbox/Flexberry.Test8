import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  контрагент: DS.attr('string')
});

export let ValidationRules = {
  контрагент: {
    descriptionKey: 'models.i-i-s-test-контраагенты.validations.контрагент.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('КонтраагентыE', 'i-i-s-test-контраагенты', {
    контрагент: attr('Контрагент', { index: 0 })
  });

  modelClass.defineProjection('КонтраагентыL', 'i-i-s-test-контраагенты', {
    контрагент: attr('Контрагент', { index: 0 })
  });
};
