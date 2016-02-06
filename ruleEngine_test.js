var expect = chai.expect;

describe("Rule engine", function() {
    it("Any live cell with fewer than two live neighbours dies, as if caused by under-population", function() {
        var ruleEngine = new RuleEngine();
        for (i = 0; i < 2; i = i + 1){
            var willLive = ruleEngine.willLive(new Cell(true), i);
            expect(willLive).to.equal(false);
        }
    });
    it("Any live cell with two or three live neighbours lives on to the next generation", function() {
        var ruleEngine = new RuleEngine();
        for (i = 2; i <= 3; i = i + 1){
            var willLive = ruleEngine.willLive(new Cell(true), i);
            expect(willLive).to.equal(true);
        }
    });
    it("Any live cell with more than three live neighbours dies, as if by over-population", function() {
        var ruleEngine = new RuleEngine();
        for (i = 4; i <= 8; i = i + 1){
            var willLive = ruleEngine.willLive(new Cell(true), i);
            expect(willLive).to.equal(false);
        }
    });
    it("Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction", function() {
        var ruleEngine = new RuleEngine();
        var willLive = ruleEngine.willLive(new Cell(false), 3);
        expect(willLive).to.equal(true);
    });
    it("RuleEngine can count number of live cells", function() {
        var ruleEngine = new RuleEngine();
        for (i = 0; i <= 8; i = i + 1){
            var cells = [i];
            for (c = 0; c < i; c = c + 1){
                cells[c] = new Cell(true);
            }
            var count = ruleEngine.getAliveCellsCount(cells);
            expect(count).to.equal(i);
        }
    });
});