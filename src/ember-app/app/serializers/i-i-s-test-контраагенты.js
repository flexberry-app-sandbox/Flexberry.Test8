import { Serializer as КонтраагентыSerializer } from
  '../mixins/regenerated/serializers/i-i-s-test-контраагенты';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(КонтраагентыSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
