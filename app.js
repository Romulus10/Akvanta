var player = { name: "", health: 0, energy: 0, strength: 0, defense: 0, intellect: 0, level: 0, experience: 0, x: 0, y: 0 };
var map = [["0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
    ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
    ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
    ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
    ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
    ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
    ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
    ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
    ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
    ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
    ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
    ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
    ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
    ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
    ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0"]];

var underMap = [["0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
    ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
    ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
    ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
    ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
    ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
    ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
    ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
    ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
    ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
    ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
    ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
    ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
    ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
    ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0"]];

function createPlayer(str) {
    console.log("Player initializing.");
    map[player.x][player.y] = "X";
    player = {
        name: str,
        health: 10,
        energy: 0,
        strength: 3,
        defense: 0,
        intellect: 2,
        level: 1,
        experience: 0,
        x: 1,
        y: 1
    };
}

window.onload = function () {
    var url = self.location.toString();
    console.log(url);
    var nex = url.search("=");
    console.log(nex);
    var str = url.substring(nex + 1);
    console.log(str);
    console.log("Started a new game as " + str);
    updateConsole("Welcome to Akvanta.");
    createPlayer(str);
    drawMap();
    writeStats();
}

function drawMap() {
    console.log("Drawing map...");
    var mapString = "";
    for (var x = 0; x < 15; x++) {
        for (var y = 0; y < 24; y++) {
            try {
                mapString = mapString + map[x][y];
            }
            catch (TypeError) {
                console.log("TypeError occurred on line 53:");
                console.log(x);
                console.log(y);
                console.log(map[x][y]);
            }
        }
        mapString = mapString + "&#13;&#10;"
    }
    document.getElementById("map").innerHTML = mapString;
}

function writeStats() {
    console.log("Stats updating.");
    document.getElementById("stats").innerHTML = player.name + "<br><br> Level: " + player.level + "<br> Experience: " + player.experience + "<br> Health: " + player.health + "<br> Energy: " + player.energy + "<br> Strength: " + player.strength + "<br> Defense: " + player.defense + "<br> Intellect: " + player.intellect;
}

function updateConsole(text) {
    document.getElementById("console").value = text;
    console.log(text);
}

// Button functions.

function moveUp() {
    map[player.x][player.y] = "x";
    player.x--;
    console.log("Player is now at " + player.x + "," + player.y);
    moveCheck();
    drawMap();
}

function moveDown() {
    map[player.x][player.y] = "x";
    player.x++;
    console.log("Player is now at " + player.x + "," + player.y);
    moveCheck();
    drawMap();
}

function moveLeft() {
    map[player.x][player.y] = "x";
    player.y--;
    console.log("Player is now at " + player.x + "," + player.y);
    moveCheck();
    drawMap();
}

function moveRight() {
    map[player.x][player.y] = "x";
    player.y++;
    console.log("Player is now at " + player.x + "," + player.y);
    moveCheck();
    drawMap();
}

// Logic functions.

function moveCheck() {
    var x = player.x;
    var y = player.y;
    if (x <= 0) {
        console.log("On the edge. Don't move any further over.");
        updateConsole("There is a wall here. ");
    }
    else if (y <= 0) {
        console.log("On the edge. Don't move any further over.");
        updateConsole("There is a wall here. ");
    }
    else if (x >= 15) {
        console.log("On the edge. Don't move any further over.");
        updateConsole("There is a wall here. ");
    }
    else if (y >= 23) {
        console.log("On the edge. Don't move any further over.");
        updateConsole("There is a wall here. ");
    }
    else{
        updateConsole("");
    }
    map[x][y] = "X"
    try {
        if (map[x - 1][y - 1] != "x") {
            map[x - 1][y - 1] = underMap[x - 1][y - 1];
        }
        if (map[x - 1][y] != "x") {
            map[x - 1][y] = underMap[x - 1][y];
        }
        if (map[x - 1][y + 1] != "x") {
            map[x - 1][y + 1] = underMap[x - 1][y + 1];
        }
        if (map[x][y - 1] != "x") {
            map[x][y - 1] = underMap[x][y - 1];
        }
        if (map[x][y + 1] != "x") {
            map[x][y + 1] = underMap[x][y + 1];
        }
        if (map[x + 1][y - 1] != "x") {
            map[x + 1][y - 1] = underMap[x + 1][y - 1];
        }
        if (map[x + 1][y] != "x") {
            map[x + 1][y] = underMap[x + 1][y];
        }
        if (map[x + 1][y + 1] != "x") {
            map[x + 1][y + 1] = underMap[x + 1][y + 1];
        }
    }
    catch (TypeError) {
        console.log("On an edge, should still reveal spots on the board.");
    }
}