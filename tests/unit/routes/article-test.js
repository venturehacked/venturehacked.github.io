import { moduleFor, test } from 'ember-qunit';

moduleFor('route:article', 'Unit | Route | article', {
  // Specify the other units that are required for this test.
  // needs: ['component:md-crd']
});

test('it exists', function(assert) {
  var route = this.subject();
  assert.ok(route);
});
