var expect = chai.expect;

describe("Cow", function() {
  describe("constructor", function() {
    it("should have a default name", function() {
      var cow;
      expect(cow).to.equal("myName");
    });

    it("bla", function() {
      var cow = "a";
      expect(cow).to.equal("b");
    });
  });
});
