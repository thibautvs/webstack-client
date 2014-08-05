var assert = chai.assert;
var foo = 3;

describe("assertTest", function() {
  it("will crash", function() {
    assert.typeOf(foo, 'string', 'foo is a number');
  });
});
