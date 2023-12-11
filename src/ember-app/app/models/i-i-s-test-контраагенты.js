import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as КонтраагентыMixin
} from '../mixins/regenerated/models/i-i-s-test-контраагенты';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(КонтраагентыMixin, Validations, {
});

defineProjections(Model);

export default Model;
