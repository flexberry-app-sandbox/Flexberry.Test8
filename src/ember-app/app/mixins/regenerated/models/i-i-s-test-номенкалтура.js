import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  номенклатура: DS.attr('string'),
  контраагенты: DS.belongsTo('i-i-s-test-контраагенты', { inverse: null, async: false })
});

export let ValidationRules = {
  номенклатура: {
    descriptionKey: 'models.i-i-s-test-номенкалтура.validations.номенклатура.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  контраагенты: {
    descriptionKey: 'models.i-i-s-test-номенкалтура.validations.контраагенты.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('НоменкалтураE', 'i-i-s-test-номенкалтура', {
    номенклатура: attr('Номенклатура', { index: 0 }),
    контраагенты: belongsTo('i-i-s-test-контраагенты', 'Контраагенты', {
      контрагент: attr('Контрагент', { index: 2, hidden: true })
    }, { index: 1, displayMemberPath: 'контрагент' })
  });

  modelClass.defineProjection('НоменкалтураL', 'i-i-s-test-номенкалтура', {
    номенклатура: attr('Номенклатура', { index: 0 }),
    контраагенты: belongsTo('i-i-s-test-контраагенты', 'Контрагент', {
      контрагент: attr('Контрагент', { index: 1 })
    }, { index: -1, hidden: true })
  });
};
