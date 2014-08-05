var assert = chai.assert;
var foo = 3;

assert.typeOf(foo, 'string', 'foo is a number');

var expect = chai.expect;

describe("Cow", function() {
  describe("constructor", function() {
    it("should have a default name", function() {
      var cow;;
      expect(cow).to.equal("myName");
    });
  });
});
