import { Serializer as НоменкалтураSerializer } from
  '../mixins/regenerated/serializers/i-i-s-test-номенкалтура';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(НоменкалтураSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
