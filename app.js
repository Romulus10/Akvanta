var player = { name: "", health: 0, energy: 0, strength: 0, defense: 0, intellect: 0, level: 0, experience: 0, x: 0, y: 0 };
var enemyOne = { health: 0, strength: 10, defense: 0 };
var enemyTwo = { health: 0, strength: 20, defense: 5 };
var enemyThree = { health: 0, strength: 30, defense: 10 };
var enemyFour = { health: 0, strength: 40, defense: 15 };
var enemyFive = { health: 0, strength: 50, defense: 20 };
var mapsChecked = 0;

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

var underMap = [["0", "^", "0", "1", "0", "0", "0", "0", "0", "0", "^", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
    ["0", "0", "0", "0", "^", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
    ["0", "0", "1", "0", "0", "1", "0", "0", "0", "0", "1", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
    ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
    ["0", "0", "0", "0", "0", "0", "0", "3", "0", "0", "2", "0", "0", "0", "0", "!", "0", "0", "0", "0", "0", "0", "0", "0"],
    ["0", "0", "^", "0", "0", "0", "0", "0", "0", "0", "0", "^", "0", "0", "1", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
    ["0", "0", "0", "^", "0", "!", "0", "^", "0", "!", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
    ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
    ["0", "0", "0", "0", "0", "0", "0", "0", "^", "0", "0", "0", "0", "0", "0", "0", "0", "0", "!", "0", "0", "0", "4", "0"],
    ["0", "0", "0", "0", "0", "0", "0", "^", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
    ["0", "0", "^", "0", "0", "0", "0", "0", "0", "0", "0", "^", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
    ["0", "0", "0", "^", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "!", "0", "0", "0", "0", "0", "0", "0", "0"],
    ["0", "0", "0", "0", "0", "0", "!", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "5", "0", "0", "0", "0", "0"],
    ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
    ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0"]];


function startAMap() {
    mapsChecked++;
    for (var x = 0; x < 15; x++) {
        for (var y = 0; y < 24; y++) {
            var contents = Math.random() * 1000;
            if (contents <= 25) {
                underMap[x][y] = "5";
            }
            else if (contents <= 100 && contents > 50) {
                underMap[x][y] = "4";
            }
            else if (contents <= 225 && contents > 125) {
                underMap[x][y] = "3";
            }
            else if (contents <= 350 && contents > 225) {
                underMap[x][y] = "2";
            }
            else if (contents <= 575 && contents > 375) {
                underMap[x][y] = "1";
            }
            else if (contents <= 700 && contents > 600) {
                underMap[x][y] = "!";
            }
            else if (contents <= 800 && contents > 700) {
                underMap[x][y] = "^";
            }
            else {
                underMap[x][y] = "0";
            }
        }
    }
    console.log("Map created.");
    console.log("Testing map viability...");
    var viability = 100;
    var bossCount = 0;
    var strongCount = 0;
    var medCount = 0;
    var nullSpace = 0;
    var immediateRiskOfDeath = 0;
    for (var x = 0; x < 15; x++) {
        for (var y = 0; y < 24; y++) {
            if (underMap[x][y] == "5") {
                bossCount++;
            }
        }
    }
    for (var x = 0; x < 15; x++) {
        for (var y = 0; y < 24; y++) {
            if (underMap[x][y] == "4") {
                strongCount++;
            }
        }
    }
    for (var x = 0; x < 15; x++) {
        for (var y = 0; y < 24; y++) {
            if (underMap[x][y] == "3") {
                medCount++;
            }
        }
    }
    for (var x = 0; x < 15; x++) {
        for (var y = 0; y < 24; y++) {
            if (underMap[x][y] == "0") {
                nullSpace++;
            }
        }
    }
    for (var x = 0; x < 7; x++) {
        for (var y = 0; y < 12; y++) {
            if (underMap[x][y] == "5" || underMap[x][y] == "4") {
                immediateRiskOfDeath += 2;
            }
            if (underMap[x][y] == "3") {
                immediateRiskOfDeath++;
            }
        }
    }
    if (bossCount >= 4 || bossCount <= 1) {
        viability -= 20;
    }
    if (strongCount >= 7 || strongCount <= 4) {
        viability -= 10;
    }
    if (medCount >= 10 || medCount <= 5) {
        viability -= 5;
    }
    if (nullSpace >= 240 || nullSpace <= 120) {
        viability -= 10;
    }
    if (immediateRiskOfDeath > 7) {
        viability -= 20;
    }
    if (viability < 60) {
        console.log("Map not viable.");
        console.log(viability + "%");
        startAMap();
    }
    else {
        console.log("Map ready.");
        console.log("Viability: " + viability + "%");
        console.log("Maps checked- " + mapsChecked);
    }
}

function createPlayer(str) {
    console.log("Player initializing.");
    player = {
        name: str,
        health: 100,
        energy: 0,
        strength: 10,
        defense: 5,
        intellect: 10,
        level: 1,
        experience: 0,
        x: 1,
        y: 1
    };
    map[player.x][player.y] = "X";
    console.log("Player is at 1,1.");
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
    startAMap();
    createPlayer(str);
    drawMap();
    writeStats();
    turnCheck();
    drawMap();
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
    writeStats();
}

function writeStats() {
    console.log("Stats updating.");
    document.getElementById("stats").innerHTML = player.name + "<br><br> Level: " + player.level + "<br> Experience: " + player.experience + "<br> Health: " + player.health + "<br> Energy: " + player.energy + "<br> Strength: " + player.strength + "<br> Defense: " + player.defense + "<br> Intellect: " + player.intellect;
    console.log(player);
    checkLevelUp();
    checkDead();
}

function checkDead() {
    if (player.health <= 0) {
        alert("You are dead!");
        window.location.assign("index.html");
    }
}

function updateConsole(text) {
    var textarea = document.getElementById("console");
    var current = textarea.value;
    current = current + "\n" + text;
    document.getElementById("console").value = current;
    console.log(text);
    textarea.scrollTop = 99999;
}

function moveUp() {
    map[player.x][player.y] = "x";
    player.x--;
    console.log("Player is now at " + player.x + "," + player.y);
    turnCheck();
    drawMap();
}

function moveDown() {
    map[player.x][player.y] = "x";
    player.x++;
    console.log("Player is now at " + player.x + "," + player.y);
    turnCheck();
    drawMap();
}

function moveLeft() {
    map[player.x][player.y] = "x";
    player.y--;
    console.log("Player is now at " + player.x + "," + player.y);
    turnCheck();
    drawMap();
}

function moveRight() {
    map[player.x][player.y] = "x";
    player.y++;
    console.log("Player is now at " + player.x + "," + player.y);
    turnCheck();
    drawMap();
}

function turnCheck() {
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
    else { }
    map[x][y] = "X"
    try {
        if (map[x - 1][y - 1] != "x" && map[x - 1][y - 1] == "0") {
            map[x - 1][y - 1] = underMap[x - 1][y - 1];
            findEnemy(x - 1, y - 1);
            console.log((x - 1) + "," + (y - 1));
        }
        if (map[x - 1][y] != "x" && map[x - 1][y] == "0") {
            map[x - 1][y] = underMap[x - 1][y];
            findEnemy(x - 1, y);
            console.log((x - 1) + "," + (y));
        }
        if (map[x - 1][y + 1] != "x" && map[x - 1][y + 1] == "0") {
            map[x - 1][y + 1] = underMap[x - 1][y + 1];
            findEnemy(x - 1, y + 1);
            console.log((x - 1) + "," + (y + 1));
        }
        if (map[x][y - 1] != "x" && map[x][y - 1] == "0") {
            map[x][y - 1] = underMap[x][y - 1];
            findEnemy(x, y - 1);
            console.log((x) + "," + (y - 1));
        }
        if (map[x][y + 1] != "x" && map[x][y + 1] == "0") {
            map[x][y + 1] = underMap[x][y + 1];
            findEnemy(x, y + 1);
            console.log((x) + "," + (y + 1));
        }
        if (map[x + 1][y - 1] != "x" && map[x + 1][y - 1] == "0") {
            map[x + 1][y - 1] = underMap[x + 1][y - 1];
            findEnemy(x + 1, y - 1);
            console.log((x + 1) + "," + (y - 1));
        }
        if (map[x + 1][y] != "x" && map[x + 1][y] == "0") {
            map[x + 1][y] = underMap[x + 1][y];
            findEnemy(x + 1, y);
            console.log((x + 1) + "," + (y));
        }
        if (map[x + 1][y + 1] != "x" && map[x + 1][y + 1] == "0") {
            map[x + 1][y + 1] = underMap[x + 1][y + 1];
            findEnemy(x + 1, y + 1);
            console.log((x + 1) + "," + (y + 1));
            console.log("It fired that time.");
        }
        if (map[x - 1][y - 1] == "!") {
            updateConsole("A trap!");
            player.health--;
            map[x - 1][y - 1] = "x";
        }
        if (map[x - 1][y] == "!") {
            updateConsole("A trap!");
            player.health--;
            map[x - 1][y] = "x";
        }
        if (map[x - 1][y + 1] == "!") {
            updateConsole("A trap!");
            player.health--;
            map[x - 1][y + 1] = "x";
        }
        if (map[x][y - 1] == "!") {
            updateConsole("A trap!");
            player.health--;
            map[x][y - 1] = "x";
        }
        if (map[x][y + 1] == "!") {
            updateConsole("A trap!");
            player.health--;
            map[x][y + 1] = "x";
        }
        if (map[x + 1][y - 1] == "!") {
            updateConsole("A trap!");
            player.health--;
            map[x + 1][y - 1] = "x";
        }
        if (map[x + 1][y] == "!") {
            updateConsole("A trap!");
            player.health--;
            map[x + 1][y] = "x";
        }
        if (map[x + 1][y + 1] == "!") {
            updateConsole("A trap!");
            player.health--;
            map[x + 1][y + 1] = "x";
        }
        if (player.health < 3) {
            updateConsole("Your health is low!");
        }
        enemiesCheck();
        writeStats();
    }
    catch (TypeError) {
        console.log("On an edge, should still reveal spots on the board.");
    }
}

function heal() {
    if (player.energy > 0) {
        player.energy--;
        player.health += 50;
        updateConsole("Used a healing spell.");
        turnCheck();
    }
    else {
        updateConsole("Not enough energy!");
        turnCheck();
    }
}

function attack() {
    var x = player.x;
    var y = player.y;
    console.log("Attacking.");
    if (map[x - 1][y - 1] == "1") {
        console.log(enemyOne.defense);
        console.log(player.strength);
        if (enemyOne.defense < player.strength) enemyOne.health = enemyOne.health - (player.strength - enemyOne.defense);
        updateConsole("Hit an enemy at " + x + "," + y);
    }
    if (map[x][y - 1] == "1") {
        console.log(enemyOne.defense);
        console.log(player.strength);
        if (enemyOne.defense < player.strength) enemyOne.health = enemyOne.health - (player.strength - enemyOne.defense);
        updateConsole("Hit an enemy at " + x + "," + y);
    }
    if (map[x + 1][y - 1] == "1") {
        console.log(enemyOne.defense);
        console.log(player.strength);
        if (enemyOne.defense < player.strength) enemyOne.health = enemyOne.health - (player.strength - enemyOne.defense);
        updateConsole("Hit an enemy at " + x + "," + y);
    }
    if (map[x - 1][y] == "1") {
        console.log(enemyOne.defense);
        console.log(player.strength);
        if (enemyOne.defense < player.strength) enemyOne.health = enemyOne.health - (player.strength - enemyOne.defense);
        updateConsole("Hit an enemy at " + x + "," + y);
    }
    if (map[x + 1][y] == "1") {
        console.log(enemyOne.defense);
        console.log(player.strength);
        if (enemyOne.defense < player.strength) enemyOne.health = enemyOne.health - (player.strength - enemyOne.defense);
        updateConsole("Hit an enemy at " + x + "," + y);
    }
    if (map[x - 1][y + 1] == "1") {
        console.log(enemyOne.defense);
        console.log(player.strength);
        if (enemyOne.defense < player.strength) enemyOne.health = enemyOne.health - (player.strength - enemyOne.defense);
        updateConsole("Hit an enemy at " + x + "," + y);
    }
    if (map[x][y + 1] == "1") {
        console.log(enemyOne.defense);
        console.log(player.strength);
        if (enemyOne.defense < player.strength) enemyOne.health = enemyOne.health - (player.strength - enemyOne.defense);
        updateConsole("Hit an enemy at " + x + "," + y);
    }
    if (map[x + 1][y + 1] == "1") {
        //console.log("Here we go.");
        console.log(enemyOne);
        console.log(enemyOne.defense);
        console.log(player.strength);
        if (enemyOne.defense < player.strength) enemyOne.health = enemyOne.health - (player.strength - enemyOne.defense);
        updateConsole("Hit an enemy at " + x + "," + y);
    }
    if (map[x - 1][y - 1] == "2") {
        if (enemyTwo.defense < player.strength) enemyTwo.health = enemyTwo.health - (player.strength - enemyTwo.defense);
        updateConsole("Hit an enemy at " + x + "," + y);
    }
    if (map[x][y - 1] == "2") {
        if (enemyTwo.defense < player.strength) enemyTwo.health = enemyTwo.health - (player.strength - enemyTwo.defense);
        updateConsole("Hit an enemy at " + x + "," + y);
    }
    if (map[x + 1][y - 1] == "2") {
        if (enemyTwo.defense < player.strength) enemyTwo.health = enemyTwo.health - (player.strength - enemyTwo.defense);
        updateConsole("Hit an enemy at " + x + "," + y);
    }
    if (map[x - 1][y] == "2") {
        if (player.defense < player.strength) enemyTwo.health = enemyTwo.health - (player.strength - enemyTwo.defense);
        updateConsole("Hit an enemy at " + x + "," + y);
    }
    if (map[x + 1][y] == "2") {
        if (enemyTwo.defense < player.strength) enemyTwo.health = enemyTwo.health - (player.strength - enemyTwo.defense);
        updateConsole("Hit an enemy at " + x + "," + y);
    }
    if (map[x - 1][y + 1] == "2") {
        if (enemyTwo.defense < player.strength) enemyTwo.health = enemyTwo.health - (player.strength - enemyTwo.defense);
        updateConsole("Hit an enemy at " + x + "," + y);
    }
    if (map[x][y + 1] == "2") {
        if (enemyTwo.defense < player.strength) enemyTwo.health = enemyTwo.health - (player.strength - enemyTwo.defense);
        updateConsole("Hit an enemy at " + x + "," + y);
    }
    if (map[x + 1][y + 1] == "2") {
        if (enemyTwo.defense < player.strength) enemyTwo.health = enemyTwo.health - (player.strength - enemyTwo.defense);
        updateConsole("Hit an enemy at " + x + "," + y);
    }
    if (map[x - 1][y - 1] == "3") {
        if (enemyThree.defense < player.strength) enemyThree.health = enemyThree.health - (player.strength - enemyThree.defense);
        updateConsole("Hit an enemy at " + x + "," + y);
    }
    if (map[x][y - 1] == "3") {
        if (enemyThree.defense < player.strength) enemyThree.health = enemyThree.health - (player.strength - enemyThree.defense);
        updateConsole("Hit an enemy at " + x + "," + y);
    }
    if (map[x + 1][y - 1] == "3") {
        console.log("That one.");
        if (enemyThree.defense < player.strength) enemyThree.health = enemyThree.health - (player.strength - enemyThree.defense);
        updateConsole("Hit an enemy at " + x + "," + y);
    }
    if (map[x - 1][y] == "3") {
        if (enemyThree.defense < player.strength) enemyThree.health = enemyThree.health - (player.strength - enemyThree.defense);
        updateConsole("Hit an enemy at " + x + "," + y);
    }
    if (map[x + 1][y] == "3") {
        if (enemyThree.defense < player.strength) enemyThree.health = enemyThree.health - (player.strength - enemyThree.defense);
        updateConsole("Hit an enemy at " + x + "," + y);
    }
    if (map[x - 1][y + 1] == "3") {
        console.log("This one.");
        if (enemyThree.defense < player.strength) enemyThree.health = enemyThree.health - (player.strength - enemyThree.defense);
        updateConsole("Hit an enemy at " + x + "," + y);
    }
    if (map[x][y + 1] == "3") {
        if (enemyThree.defense < player.strength) enemyThree.health = enemyThree.health - (player.strength - enemyThree.defense);
        updateConsole("Hit an enemy at " + x + "," + y);
    }
    if (map[x + 1][y + 1] == "3") {
        if (enemyThree.defense < player.strength) enemyThree.health = enemyThree.health - (player.strength - enemyThree.defense);
        updateConsole("Hit an enemy at " + x + "," + y);
    }
    if (map[x - 1][y - 1] == "4") {
        if (enemyFour.defenseh < player.strength) enemyFour.health = enemyFour.health - (player.strength - enemyFour.defense);
        updateConsole("Hit an enemy at " + x + "," + y);
    }
    if (map[x][y - 1] == "4") {
        if (enemyFour.defense < player.strength) enemyFour.health = enemyFour.health - (player.strength - enemyFour.defense);
        updateConsole("Hit an enemy at " + x + "," + y);
    }
    if (map[x + 1][y - 1] == "4") {
        if (enemyFour.defense < player.strength) enemyFour.health = enemyFour.health - (player.strength - enemyFour.defense);
        updateConsole("Hit an enemy at " + x + "," + y);
    }
    if (map[x - 1][y] == "4") {
        if (enemyFour.defense < player.strength) enemyFour.health = enemyFour.health - (player.strength - enemyFour.defense);
        updateConsole("Hit an enemy at " + x + "," + y);
    }
    if (map[x + 1][y] == "4") {
        if (enemyFour.defense < player.strength) enemyFour.health = enemyFour.health - (player.strength - enemyFour.defense);
        updateConsole("Hit an enemy at " + x + "," + y);
    }
    if (map[x - 1][y + 1] == "4") {
        if (enemyFour.defense < player.strength) enemyFour.health = enemyFour.health - (player.strength - enemyFour.defense);
        updateConsole("Hit an enemy at " + x + "," + y);
    }
    if (map[x][y + 1] == "4") {
        if (enemyFour.defense < player.strength) enemyFour.health = enemyFour.health - (player.strength - enemyFour.defense);
        updateConsole("Hit an enemy at " + x + "," + y);
    }
    if (map[x + 1][y + 1] == "4") {
        if (enemyFour.defense < player.strength) enemyFour.health = enemyFour.health - (player.strength - enemyFour.defense);
        updateConsole("Hit an enemy at " + x + "," + y);
    }
    if (map[x - 1][y - 1] == "5") {
        if (enemyFive.defense < player.strength) enemyFive.health = enemyFive.health - (player.strength - enemyFive.defense);
        updateConsole("Hit an enemy at " + x + "," + y);
    }
    if (map[x][y - 1] == "5") {
        if (enemyFive.defense < player.strength) enemyFive.health = enemyFive.health - (player.strength - enemyFive.defense);
        updateConsole("Hit an enemy at " + x + "," + y);
    }
    if (map[x + 1][y - 1] == "5") {
        if (enemyFive.defense < player.strength) enemyFive.health = enemyFive.health - (player.strength - enemyFive.defense);
        updateConsole("Hit an enemy at " + x + "," + y);
    }
    if (map[x - 1][y] == "5") {
        if (enemyFive.defense < player.strength) enemyFive.health = enemyFive.health - (player.strength - enemyFive.defense);
        updateConsole("Hit an enemy at " + x + "," + y);
    }
    if (map[x + 1][y] == "5") {
        if (enemyFive.defense < player.strength) enemyFive.health = enemyFive.health - (player.strength - enemyFive.defense);
        updateConsole("Hit an enemy at " + x + "," + y);
    }
    if (map[x - 1][y + 1] == "5") {
        if (enemyFive.defense < player.strength) enemyFive.health = enemyFive.health - (player.strength - enemyFive.defense);
        updateConsole("Hit an enemy at " + x + "," + y);
    }
    if (map[x][y + 1] == "5") {
        if (enemyFive.defense < player.strength) enemyFive.health = enemyFive.health - (player.strength - enemyFive.defense);
        updateConsole("Hit an enemy at " + x + "," + y);
    }
    if (map[x + 1][y + 1] == "5") {
        if (enemyFive.defense < player.strength) enemyFive.health = enemyFive.health - (player.strength - enemyFive.defense);
        updateConsole("Hit an enemy at " + x + "," + y);
    }
    turnCheck();
}

function enemiesCheck() {
    console.log(enemyOne.health);
    console.log(enemyTwo.health);
    console.log(enemyThree.health);
    console.log(enemyFour.health);
    console.log(enemyFive.health);
    for (var x = 0; x < 15; x++) {
        for (var y = 0; y < 24; y++) {
            if (enemyOne.health == 0 && map[x][y] == "1") {
                map[x][y] = "x";
                updateConsole("Enemy defeated at " + x + "," + y);
                player.experience += 1;
            }
            if (enemyTwo.health == 0 && map[x][y] == "2") {
                map[x][y] = "x";
                updateConsole("Enemy defeated at " + x + "," + y);
                player.experience += 2;
            }
            if (enemyThree.health == 0 && map[x][y] == "3") {
                map[x][y] = "x";
                updateConsole("Enemy defeated at " + x + "," + y);
                player.experience += 3;
            }
            if (enemyFour.health == 0 && map[x][y] == "4") {
                map[x][y] = "x";
                updateConsole("Enemy defeated at " + x + "," + y);
                player.experience += 4;
            }
            if (enemyFive.health == 0 && map[x][y] == "5") {
                map[x][y] = "x";
                updateConsole("Enemy defeated at " + x + "," + y);
                player.experience += 5;
            }
        }
    }
    console.log("Ended dead check loop.");
    if (enemyOne.health > 0) {
        console.log("Enemy One attack.");
        console.log(player.defense);
        console.log(enemyOne.strength);
        if (player.defense < enemyOne.strength) player.health = player.health - (enemyOne.strength - player.defense);
        updateConsole("Hit by an enemy.");
    }
    if (enemyTwo.health > 0) {
        if (player.defense < enemyOne.strength) player.health = player.health - (enemyTwo.strength - player.defense);
        updateConsole("Hit by an enemy.");
    }
    if (enemyThree.health > 0) {
        if (player.defense < enemyOne.strength) player.health = player.health - (enemyThree.strength - player.defense);
        updateConsole("Hit by an enemy.");
    }
    if (enemyFour.health > 0) {
        if (player.defense < enemyOne.strength) player.health = player.health - (enemyFour.strength - player.defense);
        updateConsole("Hit by an enemy.");
    }
    if (enemyFive.health > 0) {
        if (player.defense < enemyOne.strength) player.health = player.health - (enemyFive.strength - player.defense);
        updateConsole("Hit by an enemy.");
    }
}

function checkLevelUp() {
    if (player.experience == player.level * 5) {
        player.experience -= player.level * 5;
        player.level++;
        player.strength++;
        player.intellect++;
        player.defense++;
        player.energy = player.level;
        player.health = 10 + (player.level * 5);
        updateConsole("Level up! Your skills have increased and your energy and health have been reset and increased.");
    }
}

function findEnemy(x, y) {
    switch (map[x][y]) {
        case "1": enemyOne.health = enemyOne.health + 20; updateConsole("Encountered an enemy at " + x + "," + y + "!"); break;
        case "2": enemyTwo.health = enemyTwo.health + 40; updateConsole("Encountered an enemy at " + x + "," + y + "!"); break;
        case "3": enemyThree.health = enemyThree.health + 60; updateConsole("Encountered an enemy at " + x + "," + y + "!"); break;
        case "4": enemyFour.health = enemyFour.health + 80; updateConsole("Encountered an enemy at " + x + "," + y + "!"); break;
        case "5": enemyFive.health = enemyFive.health + 100; updateConsole("Encountered an enemy at " + x + "," + y + "!"); break;
    }
}

window.onbeforeunload = function () {
    console.log(document.getElementById.value);
}

function interact() {
    console.log("Looking...");
    switch (underMap[player.x][player.y]) {
        case "^": player.health += 20; updateConsole("Found a healing potion."); break;
        default: updateConsole("There's nothing here.");
    }
    console.log(player);
    writeStats();
    turnCheck();
}