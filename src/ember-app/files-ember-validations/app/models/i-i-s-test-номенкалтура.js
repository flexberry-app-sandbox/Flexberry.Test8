import {
  defineNamespace,
  defineProjections,
  Model as НоменкалтураMixin
} from '../mixins/regenerated/models/i-i-s-test-номенкалтура';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(НоменкалтураMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
