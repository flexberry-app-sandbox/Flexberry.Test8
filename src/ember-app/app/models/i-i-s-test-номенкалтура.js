import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as НоменкалтураMixin
} from '../mixins/regenerated/models/i-i-s-test-номенкалтура';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(НоменкалтураMixin, Validations, {
});

defineProjections(Model);

export default Model;
