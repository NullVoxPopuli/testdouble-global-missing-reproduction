import { module, test } from 'qunit';
import td from 'testdouble';

module('Unit | Utility | testdouble-global', function() {

  test('testdouble usage', function(assert) {
    const hitCounter = td.func()
    td.when(hitCounter()).thenReturn(1, 2, 3, 4)

    assert.equal(hitCounter(), 1);
    assert.equal(hitCounter(), 2);
    assert.equal(hitCounter(), 3);
    assert.equal(hitCounter(), 4);
  });
});
