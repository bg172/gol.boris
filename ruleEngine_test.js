var expect = chai.expect;

describe("Rule engine", function() {
    it("Any live cell with fewer than two live neighbours dies, as if caused by under-population", function() {
        var cell = new Cell(true);
        expect(cell.isAlive).to.equal(true);
    });
    it("Any live cell with two or three live neighbours lives on to the next generation", function() {
        var cell = new Cell(true);
        expect(cell.isAlive).to.equal(true);
    });
    it("Any live cell with more than three live neighbours dies, as if by over-population", function() {
        var cell = new Cell(true);
        expect(cell.isAlive).to.equal(true);
    });
    it("Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction", function() {
        var cell = new Cell(true);
        expect(cell.isAlive).to.equal(true);
    });
});