var expect = chai.expect;

describe("Cow", function() {
  describe("constructor", function() {
    it("should have a default name", function() {
      var cow;;
      expect(cow).to.equal("myName");
    });
  });
});
