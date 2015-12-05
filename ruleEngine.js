function RuleEngine() {
    'use strict';
    this.getAliveCellsCount = function(cells) {
        var i,
            livingNeigboursCount = 0;
        for (i = 0; i < cells.length; i = i + 1) {
            if (cells[i].isAlive){
                livingNeigboursCount = livingNeigboursCount + 1;
            }
        }
        return livingNeigboursCount;
    }
    
    this.willLive = function(cell, livingNeighboursCount) {
        if (cell.isAlive && livingNeighboursCount < 2){
            return false;
        }
        if (cell.isAlive && livingNeighboursCount == 2){
            return true;
        }
        if (cell.isAlive && livingNeighboursCount == 3){
            return true;
        }
        if (cell.isAlive && livingNeighboursCount > 3){
            return false;
        }
        if (!cell.isAlive && livingNeighboursCount == 3){
            return true;
        }
        return cell.isAlive;
    };
}