import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-test-контраагенты', 'Unit | Serializer | i-i-s-test-контраагенты', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-test-контраагенты',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'model:i-i-s-test-контраагенты',
    'model:i-i-s-test-номенкалтура',
    'model:i-i-s-test-тест',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
