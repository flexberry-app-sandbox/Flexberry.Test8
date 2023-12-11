import {
  defineNamespace,
  defineProjections,
  Model as КонтраагентыMixin
} from '../mixins/regenerated/models/i-i-s-test-контраагенты';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(КонтраагентыMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
