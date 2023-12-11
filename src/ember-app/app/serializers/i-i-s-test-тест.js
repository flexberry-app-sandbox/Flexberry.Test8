import { Serializer as ТестSerializer } from
  '../mixins/regenerated/serializers/i-i-s-test-тест';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ТестSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
