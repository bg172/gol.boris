var expect = chai.expect;


describe("Cell", function() {
  describe("constructor", function() {
    it("can create an alive cell", function() {
        var cell = new Cell(true);
        expect(cell.isAlive).to.equal(true);
    });
    it("can create a dead cell", function() {
        var cell = new Cell(false);
        expect(cell.isAlive).to.equal(false);
    });
  });
});
