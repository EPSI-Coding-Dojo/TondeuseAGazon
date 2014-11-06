var map = [];
var colonnes = 0;
var lignes = 0;

function isInWorld(x, y) {
    return (x >= 0 && x < colonnes && y >= 0 && y < lignes);
}

function isColliding(walls, position) {
    return (position.x + ' ' + position.y) in walls;
}

function tondeuse(input) {
    var inputed = input.split('\n');

    for (var i = 0; i < inputed.length; i++) {
        var tmp = inputed[i].split('\r');
        inputed[i] = tmp[0];
    }
    var dimgrille = inputed[0].split(' ');
    colonnes = parseInt(dimgrille[0]);
    lignes = parseInt(dimgrille[1]);

    var tmp = inputed[1].split(' ');
    var positionTond = {x: parseInt(tmp[0]), y: parseInt(tmp[1])};
    tmp = inputed[2].split('');
    var directionTond = getOrientation(tmp[0]);


    var numberOfWalls = parseInt(inputed[3]);
    var tmpWalls = {};
    for (i = 0; i < numberOfWalls; i++) {
        var tp = inputed[4 + i].split(' ');
        tmpWalls[tp[0] + ' ' + tp[1]] = 1;
    }
    var actions = inputed[inputed.length - 1];
    for (i = 0; i < actions.length; i++) {
        var lettre = actions[i];
        if (lettre === 'A') {
            var newPosition = getPositionAfterMovingForward(directionTond, positionTond);
            if (!isColliding(tmpWalls, newPosition) && isInWorld(newPosition.x, newPosition.y)) {
                positionTond = newPosition;
            }
        } else if (lettre === "D") {
            directionTond++;
        } else if (lettre === "G") {
            directionTond--;
        }
    }
    return {
        x: positionTond.x,
        y: positionTond.y,
        dir: getTextualOrientation(directionTond)
    };
}

var getOrientation = function(orientation) {
    return ["H", "D", "B", "G"].indexOf(orientation);
};

var getTextualOrientation = function(index) {
    while(index <= 0) index += 4;
    var number = (index % 4);
    return ["H", "D", "B", "G"][number];
};

function moduloBetween0and3included(direction) {
    return ((direction % 4) + 4) % 4;
}
function getPositionAfterMovingForward(direction, position) {
    var newPosition = {x: position.x, y: position.y};
    direction = moduloBetween0and3included(direction);
    if (direction === getOrientation("D")) {
        newPosition.x++;
    } else if (direction === getOrientation("G")) {
        newPosition.x--;
    } else if (direction === getOrientation("H")) {
        newPosition.y--;
    } else if (direction === getOrientation("B")) {
        newPosition.y++;
    } else console.log("coucou: " + direction);

    return newPosition;
}
