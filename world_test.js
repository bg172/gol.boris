var expect = chai.expect;

describe("World", function() {
    it("shall create a world with given size", function() {
        var expectedLength = 10;
        var world = new World(expectedLength, 3);
        expect(world.cells.length).to.equal(expectedLength);
        for (i = 0; i < expectedLength; i = i + 1){
            expect(world.cells[i].length).to.equal(expectedLength);
      }
    });
    it("shall create a world with at least one dead cell", function() {
        var size = 10,
            world = new World(size, 3),
            isAnyDead = false;
        for (x = 0; x < size; x = x + 1){
            for (y = 0; y < size; y = y + 1){
                isAnyDead = isAnyDead || !world.cells[x][y].isAlive;
            }
        }
        expect(isAnyDead).to.equal(true);
    });
    it("shall create a world with at least one alive cell", function() {
        var size = 10,
            world = new World(size, 3),
            isAnyAlive = false;
        for (x = 0; x < size; x = x + 1){
            for (y = 0; y < size; y = y + 1){
                isAnyAlive = isAnyAlive || world.cells[x][y].isAlive;
            }
        }
        expect(isAnyAlive).to.equal(true);
    });
    it("throw exception when world is instantiated with a fractional size in cells", function() {
      expect(function() {
        new World(0.1, 4);
      }).to.throw(Error);
    });
    it("get neighbour cells positions", function() {
        var size = 10,
            world = new World(size, 3);
        var neighboursPositions = world.getNeighboursPositions(1, 1);
        expect(neighboursPositions[0].x).to.equal(0);
        expect(neighboursPositions[0].y).to.equal(0);
        expect(neighboursPositions[1].x).to.equal(0);
        expect(neighboursPositions[1].y).to.equal(1);
        expect(neighboursPositions[2].x).to.equal(0);
        expect(neighboursPositions[2].y).to.equal(2);
        expect(neighboursPositions[3].x).to.equal(1);
        expect(neighboursPositions[3].y).to.equal(2);
        expect(neighboursPositions[4].x).to.equal(2);
        expect(neighboursPositions[4].y).to.equal(2);
        expect(neighboursPositions[5].x).to.equal(2);
        expect(neighboursPositions[5].y).to.equal(1);
        expect(neighboursPositions[6].x).to.equal(2);
        expect(neighboursPositions[6].y).to.equal(0);
        expect(neighboursPositions[7].x).to.equal(1);
        expect(neighboursPositions[7].y).to.equal(0);
    });
});


