function World(newSizeCells, newCellSizePixels, newCellsColor) {
    'use strict';
    var sizeCells = newSizeCells,
        cellSizePixels = newCellSizePixels,
        ctx,
        cells = [sizeCells],
        ruleEngine = new RuleEngine(),
        cellsColor = newCellsColor;
    this.cells = cells;
    createWorld();
    
    function createWorld() {
        var x,
            y,
            isAlive;
        if (sizeCells < 1 || cellSizePixels < 1) {
            throw new Error("unfeasible world");
        }
        for (x = 0; x < sizeCells; x = x + 1) {
            cells[x] = [sizeCells];
            for (y = 0; y < sizeCells; y = y + 1) {
                isAlive = randomBoolean();
                cells[x][y] = new Cell(isAlive);
            }
        }
    }

    function randomBoolean() {
        return Math.random() < 0.5;
    }

    this.setNewCellSizePixels = function (newCellSizePixels) {
        cellSizePixels = newCellSizePixels;
    }
        
    this.paint = function (ctx1) {
        var x,
            y;
        ctx = ctx1;
        ctx.canvas.width = sizeCells * cellSizePixels;
        ctx.canvas.height = sizeCells * cellSizePixels;
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        
        for (x = 0; x < sizeCells; x = x + 1) {
            for (y = 0; y < sizeCells; y = y + 1) {
                paintPoint(this.cells[x][y], x, y);
            }
        }
    };

    function paintPoint(cell, x, y) {
        if (cell.isAlive) {
            ctx.fillStyle = cellsColor;
            ctx.fillRect(x * cellSizePixels, y * cellSizePixels, cellSizePixels - 1, cellSizePixels - 1);
        }
    }
    
    function wrappedValue(value) {
        if (value < 0) {
            return sizeCells + value;
        }
        else if (value >= sizeCells){
            return value - sizeCells;
        }
        else {
            return value;
        }
        
    }
    
    this.getNeighboursPositions = function (x, y) {
        var positions = [8];
        positions[0] = { x: wrappedValue(x - 1),    y: wrappedValue(y - 1) };
        positions[1] = { x: wrappedValue(x - 1),    y: y };
        positions[2] = { x: wrappedValue(x - 1),    y: wrappedValue(y + 1)};
        positions[3] = { x: x,                      y: wrappedValue(y + 1)};
        positions[4] = { x: wrappedValue(x + 1),    y: wrappedValue(y + 1)};
        positions[5] = { x: wrappedValue(x + 1),    y: y};
        positions[6] = { x: wrappedValue(x + 1),    y: wrappedValue(y - 1)};
        positions[7] = { x: x,                      y: wrappedValue(y - 1)};
        return positions;
    }
    
    function getCellsByPositions(positions) {
        var gotCells = [positions.length],
            i;
        for(i = 0; i < positions.length; i = i + 1) {
            gotCells[i] = cells[positions[i].x][positions[i].y];
        }
        return gotCells;
    }
    
    this.makeNewGeneration = function(newWorld) {
        var x,
            y;
        
        for (x = 0; x < sizeCells; x = x + 1) {
            for (y = 0; y < sizeCells; y = y + 1) {
                var neighboursPositions = this.getNeighboursPositions(x, y),
                    neighbours = getCellsByPositions(neighboursPositions),
                    liveNeighboursCount = ruleEngine.getAliveCellsCount(neighbours),
                    willLive = ruleEngine.willLive(cells[x][y], liveNeighboursCount);
                newWorld.cells[x][y] = new Cell(willLive);
            }
        }
    };
}
