function GolProgram(canvasName, worldSizeCells, worldCellSizePixels) {
    'use strict';
    var canvas = document.getElementById(canvasName),
        ctx1 = canvas.getContext("2d"),
        world,
        worldSizeCells,
        worldCellSizePixels;

    this.run = function () {
        worldSizeCells = parseInt(document.getElementById("worldSizeCells").value);
        worldCellSizePixels = parseInt(document.getElementById("worldCellSizePixels").value);
        world = new World(worldSizeCells
                        , worldCellSizePixels
                        , window.getComputedStyle(canvas).color);
        world.paint(ctx1);
    };

    this.repaintWithCurrentCellSize = function () {
        worldCellSizePixels = parseInt(document.getElementById("worldCellSizePixels").value);
        world.setNewCellSizePixels(worldCellSizePixels);
        world.paint(ctx1, worldCellSizePixels);
    };
    
    this.createAndShowNextGeneration = function () {
        var newWorld = new World(worldSizeCells
                                , worldCellSizePixels
                                , window.getComputedStyle(canvas).color);
        world.makeNewGeneration(newWorld);
        world = newWorld;
        world.paint(ctx1);
    };
}