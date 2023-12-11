import {
  defineNamespace,
  defineProjections,
  Model as ТестMixin
} from '../mixins/regenerated/models/i-i-s-test-тест';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ТестMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
