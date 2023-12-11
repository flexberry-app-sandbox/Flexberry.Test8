import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  цена: DS.attr('number'),
  номенкалтура: DS.belongsTo('i-i-s-test-номенкалтура', { inverse: null, async: false })
});

export let ValidationRules = {
  цена: {
    descriptionKey: 'models.i-i-s-test-тест.validations.цена.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  номенкалтура: {
    descriptionKey: 'models.i-i-s-test-тест.validations.номенкалтура.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ТестE', 'i-i-s-test-тест', {
    цена: attr('Цена', { index: 0 }),
    номенкалтура: belongsTo('i-i-s-test-номенкалтура', 'Номенкалтура', {
      номенклатура: attr('Номенклатура', { index: 2, hidden: true }),
      контраагенты: belongsTo('i-i-s-test-контраагенты', '', {
        контрагент: attr('Контраагенты', { index: 3 })
      }, { index: -1, hidden: true })
    }, { index: 1, displayMemberPath: 'номенклатура' })
  });

  modelClass.defineProjection('ТестL', 'i-i-s-test-тест', {
    цена: attr('Цена', { index: 0 }),
    номенкалтура: belongsTo('i-i-s-test-номенкалтура', 'Номенклатура', {
      номенклатура: attr('Номенклатура', { index: 1 })
    }, { index: -1, hidden: true })
  });
};
