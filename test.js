var mod = require('./lib');

exports['should return correct values'] = function(test) {
  test.expect(6);

  test.strictEqual(mod(255, 255), 0, 'should be correct value');
  test.strictEqual(mod(-127, 255), 128, 'should be correct value');
  test.strictEqual(mod(0, 255), 0, 'should be correct value');
  test.strictEqual(mod(1, 255), 1, 'should be correct value');
  test.strictEqual(mod(257, 255), 2, 'should be correct value');
  test.strictEqual(mod(512, 255), 2, 'should be correct value');

  test.done();
}

exports['should return dividend if divisor is zero'] = function(test) {
  test.expect(3);

  test.strictEqual(mod(1, 0), 1, 'should be correct value');
  test.strictEqual(mod(0, 0), 0, 'should be correct value');
  test.strictEqual(mod(-1, 0), -1, 'should be correct value');

  test.done();
}
