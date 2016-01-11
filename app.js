// Romulus10's AKVANTA core.
// Current iteration - 0.3.0
// January 10, 2016
// Contributors please comment their names below this line.


var player = { name: "", health: 20, energy: 0, strength: 3, intellect: 1, level: 1, experience: 0, gold: 0, x: 1, y: 1 };
var enemyOne = { health: 0, strength: 1, modifier: 2 };
var enemyTwo = { health: 0, strength: 2, modifier: 4 };
var enemyThree = { health: 0, strength: 3, modifier: 6 };
var enemyFour = { health: 0, strength: 4, modifier: 8 };
var enemyFive = { health: 0, strength: 5, modifier: 10 };
// Stores the number of randomly-generated maps that have already been tested. 
var mapsChecked = 0;
// The number of maps the player has beaten. 
var mapLevel = 0;

// map holds the currently-displayed map with 0's representing fog of war. 
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

// underMap is the final randomly-generated map with object placements. 
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


// Function for random generation of game maps. 
// TAG This function is CPU and memory inefficient. In later versions of the game, address that.
function startAMap() {
    try {
        mapsChecked++;
        for (var x = 0; x < 15; x++) {
            for (var y = 0; y < 24; y++) {
                var contents = Math.random() * 1000;
                if (contents <= 225 && contents > 125) {
                    underMap[x][y] = "3";
                }
                else if (contents <= 350 && contents > 225) {
                    underMap[x][y] = "2";
                }
                else if (contents <= 575 && contents > 375 || contents < 100) {
                    underMap[x][y] = "1";
                }
                else if (contents <= 700 && contents > 600) {
                    underMap[x][y] = "!";
                }
                else if (contents <= 800 && contents > 750) {
                    underMap[x][y] = "^";
                }
                else if (contents <= 750 && contents > 700) {
                    underMap[x][y] = "$";
                }
                else {
                    underMap[x][y] = "0";
                }
            }
        }
        console.log("Map created.");
        console.log("Testing map viability...");
        // If the map is considered winnable.
        var viability = 100;
        // How many level 5 enemies there are.
        var bossCount = 0;
        // How many level 4 enemies there are.
        var strongCount = 0;
        // How many level 3 enemies there are.
        var medCount = 0;
        // How many spots on the map are unoccupied.
        var nullSpace = 0;
        // Uses a conditional to determine how likely the player is to die on the map.
        var immediateRiskOfDeath = 0;
        // How much damage will occur to the player on the first turn, as soon as the map loads.
        var damageOnLoad = 0;
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
        for (var x = 0; x < 3; x++) {
            for (var y = 0; y < 3; y++) {
                if (underMap[x][y] == "5" || underMap[x][y] == "4" || underMap[x][y] == "3" || underMap[x][y] == "2" || underMap[x][y] == "1") {
                    damageOnLoad = damageOnLoad + parseInt(underMap[x][y]);
                }
            }
        }
        // Set of actions that checks the above variables and creates a map viability score.
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
        if (damageOnLoad > 5) {
            viability -= 10;
        }
        if (damageOnLoad >= 10) {
            console.log("Player loses half of health or more immediately. Map discarded.");
            viability = 0;
        }
        if (damageOnLoad >= 20) {
            console.log("Player death occurs immediately. Map discarded.");
            viability = 0;
        }
        if (viability < 65) {
            console.log("Map not viable.");
            console.log(viability + "%");
            startAMap();
        }
        else {
            console.log("Map ready.");
            console.log("Viability: " + viability + "%");
            console.log("Maps checked: " + mapsChecked);
        }
    }
    catch (TypeError) {
        // Stops the game from crashing if the startAMap function passes the number of allowable recursions, at the cost of CPU time.
        console.log("Map creation is taking a little longer than usual, going through again...");
        startAMap();
    }
}

// Takes the player's chosen character name as an argument. Proceeds to initialize the 'player' structure to game start stats. 
function createPlayer(str) {
    console.log("Player initializing.");
    player = {
        name: str,
        health: 20,
        energy: 0,
        strength: 3,
        intellect: 1,
        level: 1,
        experience: 0,
        gold: 0,
        x: 1,
        y: 1
    };
    map[player.x][player.y] = "X";
    console.log("Player is at 1,1.");
    document.cookie = ("name=" + player.name + "; level=" + player.level + "; experience=" + player.experience + "; Health=" + player.health + "; energy=" + player.energy + "; strength=" + player.strength + "; intellect=" + player.intellect + "; gold= " + player.gold + "; mapsbeaten=" + mapLevel);
    console.log(document.cookie);
}

// Run as soon as a new instance of the app is started.
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
    turnCheck();
    drawMap();
}

// Print out the GUI representation of the map.
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


// Check the player's stats and write them to the stats pane.
function writeStats() {
    console.log("Stats updating.");
    document.getElementById("stats").innerHTML = player.name + "<br><br> Level: " + player.level + "<br> Experience: " + player.experience + "<br> Health: " + player.health + "<br> Energy: " + player.energy + "<br> Strength: " + player.strength + "<br> Intellect: " + player.intellect + "<br> Gold: " + player.gold + "<br> Maps Beaten: " + mapLevel;
    document.cookie = "name=" + player.name + "; level=" + player.level + "; experience=" + player.experience + "; Health=" + player.health + "; energy=" + player.energy + "; strength=" + player.strength + "; intellect=" + player.intellect + "; gold= " + player.gold + "; mapsbeaten=" + mapLevel;
    console.log(document.cookie);
    console.log(player);
    checkLevelUp();
    checkDead();
}


// Check if the player is dead.
function checkDead() {
    if (player.health <= 0) {
        alert("You are dead!");
        // Restart the game clean.
        location.reload();
    }
}


// Update the readout at the top of the UI and write the same information to the debug console.
function updateConsole(text) {
    // Get the 'console' element as a javascript object.
    var textarea = document.getElementById("console");
    // Read the text currently occupying the textarea.
    var current = textarea.value;
    // Concatenate the argumet to the current value of the console.
    current = current + "\n" + text;
    // Repopulate the console with the new text.
    document.getElementById("console").value = current;
    // Print the event to the debug console.
    console.log(text);
    // Force the console to scroll to the bottom of its contents.
    textarea.scrollTop = 99999;
}

// Functions to move the player one tile in four directions.
// X and Y axes are not configured as you might expect- be aware.
// TAG Refactor for x and y axes to actually make sense.
// Each function follows the same pattern as the initial commented function.
function moveUp() {
    // Check if the player's current position is shared with an enemy or a health potion..
    if (underMap[player.x][player.y] != "1" && underMap[player.x][player.y] != "2" && underMap[player.x][player.y] != "3" && underMap[player.x][player.y] != "4" && underMap[player.x][player.y] != "5" && underMap[player.x][player.y] != "^") {
        // If not, mark the player's current location as visited.
        map[player.x][player.y] = "x";
    }
    else {
        // Otherwise, revert to what the space was before the player got there.
        map[player.x][player.y] = underMap[player.x][player.y];
    }
    // Decrement the player's x axis position.
    player.x--;
    console.log("Player is now at " + player.x + "," + player.y);
    turnCheck();
}
function moveDown() {
    if (underMap[player.x][player.y] != "1" && underMap[player.x][player.y] != "2" && underMap[player.x][player.y] != "3" && underMap[player.x][player.y] != "4" && underMap[player.x][player.y] != "5" && underMap[player.x][player.y] != "^") {
        map[player.x][player.y] = "x";
    }
    else {
        map[player.x][player.y] = underMap[player.x][player.y];
    }
    player.x++;
    console.log("Player is now at " + player.x + "," + player.y);
    turnCheck();
}
function moveLeft() {
    if (underMap[player.x][player.y] != "1" && underMap[player.x][player.y] != "2" && underMap[player.x][player.y] != "3" && underMap[player.x][player.y] != "4" && underMap[player.x][player.y] != "5" && underMap[player.x][player.y] != "^") {
        map[player.x][player.y] = "x";
    }
    else {
        map[player.x][player.y] = underMap[player.x][player.y];
    }
    player.y--;
    console.log("Player is now at " + player.x + "," + player.y);
    turnCheck();
}
function moveRight() {
    if (underMap[player.x][player.y] != "1" && underMap[player.x][player.y] != "2" && underMap[player.x][player.y] != "3" && underMap[player.x][player.y] != "4" && underMap[player.x][player.y] != "5" && underMap[player.x][player.y] != "^") {
        map[player.x][player.y] = "x";
    }
    else {
        map[player.x][player.y] = underMap[player.x][player.y];
    }
    player.y++;
    console.log("Player is now at " + player.x + "," + player.y);
    turnCheck();
}


// Not the most efficient funtion. Deals with player movement and fog of war system, as well as trap triggers.
function turnCheck() {
    console.log("Checking results of last action.");
    winCheck();
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
    // Version 0.3.0 added the map[foo][bar] == "o" statements in order to comply with the newly-added enemy-finding power.
    try {
        if (map[x - 1][y - 1] != "x" && (map[x - 1][y - 1] == "0" || map[x - 1][y - 1] == "o")) {
            map[x - 1][y - 1] = underMap[x - 1][y - 1];
            findEnemy(x - 1, y - 1);
            console.log((x - 1) + "," + (y - 1));
        }
        if (map[x - 1][y] != "x" && (map[x - 1][y] == "0" || map[x - 1][y] == "o")) {
            map[x - 1][y] = underMap[x - 1][y];
            findEnemy(x - 1, y);
            console.log((x - 1) + "," + (y));
        }
        if (map[x - 1][y + 1] != "x" && (map[x - 1][y + 1] == "0" || map[x - 1][y + 1] == "o")) {
            map[x - 1][y + 1] = underMap[x - 1][y + 1];
            findEnemy(x - 1, y + 1);
            console.log((x - 1) + "," + (y + 1));
        }
        if (map[x][y - 1] != "x" && (map[x][y - 1] == "0" || map[x][y - 1] == "o")) {
            map[x][y - 1] = underMap[x][y - 1];
            findEnemy(x, y - 1);
            console.log((x) + "," + (y - 1));
        }
        if (map[x][y + 1] != "x" && (map[x][y + 1] == "0" || map[x][y + 1] == "o")) {
            map[x][y + 1] = underMap[x][y + 1];
            findEnemy(x, y + 1);
            console.log((x) + "," + (y + 1));
        }
        if (map[x + 1][y - 1] != "x" && (map[x + 1][y - 1] == "0" || map[x + 1][y - 1] == "o")) {
            map[x + 1][y - 1] = underMap[x + 1][y - 1];
            findEnemy(x + 1, y - 1);
            console.log((x + 1) + "," + (y - 1));
        }
        if (map[x + 1][y] != "x" && (map[x + 1][y] == "0" || map[x + 1][y] == "o")) {
            map[x + 1][y] = underMap[x + 1][y];
            findEnemy(x + 1, y);
            console.log((x + 1) + "," + (y));
        }
        if (map[x + 1][y + 1] != "x" && (map[x + 1][y + 1] == "0" || map[x + 1][y + 1] == "o")) {
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
    }
    catch (TypeError) {
        // Addresses an array index error that caused the player to appear to not be moving even when they were moving perfectly.
        console.log("On an edge, should still reveal spots on the board.");
        drawMap();
    }
}


// Healing spell method. Uses one point of the player's energy to increase the player's health by a value equal to their intellect value.
// TAG Determine whether we want to keep allowing health overcharging.
function heal() {
    if (player.energy > 0) {
        player.energy--;
        player.health += (player.intellect);
        updateConsole("Used a healing spell.");
        turnCheck();
    }
    else {
        updateConsole("Not enough energy!");
        turnCheck();
    }
}


// Checks all spots around the player for enemies and reduces their respective health values by a value equal to the player's strength.
function attack() {
    var x = player.x;
    var y = player.y;
    console.log("Attacking.");
    console.log(enemyOne);
    console.log(enemyOne.health);
    if (map[x - 1][y - 1] == "1") {
        console.log(player.strength);
        enemyOne.health = enemyOne.health - player.strength;
        updateConsole("Hit an enemy!");
    }
    if (map[x][y - 1] == "1") {
        console.log(player.strength);
        enemyOne.health = enemyOne.health - player.strength;
        updateConsole("Hit an enemy!");
    }
    if (map[x + 1][y - 1] == "1") {
        console.log(player.strength);
        enemyOne.health = enemyOne.health - player.strength;
        updateConsole("Hit an enemy!");
    }
    if (map[x - 1][y] == "1") {
        console.log(player.strength);
        enemyOne.health = enemyOne.health - player.strength;
        updateConsole("Hit an enemy!");
    }
    if (map[x + 1][y] == "1") {
        console.log(player.strength);
        enemyOne.health = enemyOne.health - player.strength;
        updateConsole("Hit an enemy!");
    }
    if (map[x - 1][y + 1] == "1") {
        console.log(player.strength);
        enemyOne.health = enemyOne.health - player.strength;
        updateConsole("Hit an enemy!");
    }
    if (map[x][y + 1] == "1") {
        console.log(player.strength);
        enemyOne.health = enemyOne.health - player.strength;
        updateConsole("Hit an enemy!");
    }
    if (map[x + 1][y + 1] == "1") {
        //console.log("Here we go.");
        console.log(enemyOne);
        console.log(player.strength);
        enemyOne.health = enemyOne.health - player.strength;
        updateConsole("Hit an enemy!");
    }
    if (map[x - 1][y - 1] == "2") {
        enemyTwo.health = enemyTwo.health - player.strength;
        updateConsole("Hit an enemy!");
    }
    if (map[x][y - 1] == "2") {
        enemyTwo.health = enemyTwo.health - player.strength;
        updateConsole("Hit an enemy!");
    }
    if (map[x + 1][y - 1] == "2") {
        enemyTwo.health = enemyTwo.health - player.strength;
        updateConsole("Hit an enemy!");
    }
    if (map[x - 1][y] == "2") {
        enemyTwo.health = enemyTwo.health - player.strength;
        updateConsole("Hit an enemy!");
    }
    if (map[x + 1][y] == "2") {
        enemyTwo.health = enemyTwo.health - player.strength;
        updateConsole("Hit an enemy!");
    }
    if (map[x - 1][y + 1] == "2") {
        enemyTwo.health = enemyTwo.health - player.strength;
        updateConsole("Hit an enemy!");
    }
    if (map[x][y + 1] == "2") {
        enemyTwo.health = enemyTwo.health - player.strength;
        updateConsole("Hit an enemy!");
    }
    if (map[x + 1][y + 1] == "2") {
        enemyTwo.health = enemyTwo.health - player.strength;
        updateConsole("Hit an enemy!");
    }
    if (map[x - 1][y - 1] == "3") {
        enemyThree.health = enemyThree.health - player.strength;
        updateConsole("Hit an enemy!");
    }
    if (map[x][y - 1] == "3") {
        enemyThree.health = enemyThree.health - player.strength;
        updateConsole("Hit an enemy!");
    }
    if (map[x + 1][y - 1] == "3") {
        console.log("That one.");
        enemyThree.health = enemyThree.health - player.strength;
        updateConsole("Hit an enemy!");
    }
    if (map[x - 1][y] == "3") {
        enemyThree.health = enemyThree.health - player.strength;
        updateConsole("Hit an enemy!");
    }
    if (map[x + 1][y] == "3") {
        enemyThree.health = enemyThree.health - player.strength;
        updateConsole("Hit an enemy!");
    }
    if (map[x - 1][y + 1] == "3") {
        console.log("This one.");
        enemyThree.health = enemyThree.health - player.strength;
        updateConsole("Hit an enemy!");
    }
    if (map[x][y + 1] == "3") {
        enemyThree.health = enemyThree.health - player.strength;
        updateConsole("Hit an enemy!");
    }
    if (map[x + 1][y + 1] == "3") {
        enemyThree.health = enemyThree.health - player.strength;
        updateConsole("Hit an enemy!");
    }
    if (map[x - 1][y - 1] == "4") {
        enemyFour.health = enemyFour.health - player.strength;
        updateConsole("Hit an enemy!");
    }
    if (map[x][y - 1] == "4") {
        enemyFour.health = enemyFour.health - player.strength;
        updateConsole("Hit an enemy!");
    }
    if (map[x + 1][y - 1] == "4") {
        enemyFour.health = enemyFour.health - player.strength;
        updateConsole("Hit an enemy!");
    }
    if (map[x - 1][y] == "4") {
        enemyFour.health = enemyFour.health - player.strength;
        updateConsole("Hit an enemy!");
    }
    if (map[x + 1][y] == "4") {
        enemyFour.health = enemyFour.health - player.strength;
        updateConsole("Hit an enemy!");
    }
    if (map[x - 1][y + 1] == "4") {
        enemyFour.health = enemyFour.health - player.strength;
        updateConsole("Hit an enemy!");
    }
    if (map[x][y + 1] == "4") {
        enemyFour.health = enemyFour.health - player.strength;
        updateConsole("Hit an enemy!");
    }
    if (map[x + 1][y + 1] == "4") {
        enemyFour.health = enemyFour.health - player.strength;
        updateConsole("Hit an enemy!");
    }
    if (map[x - 1][y - 1] == "5") {
        enemyFive.health = enemyFive.health - player.strength;
        updateConsole("Hit an enemy!");
    }
    if (map[x][y - 1] == "5") {
        enemyFive.health = enemyFive.health - player.strength;
        updateConsole("Hit an enemy!");
    }
    if (map[x + 1][y - 1] == "5") {
        enemyFive.health = enemyFive.health - player.strength;
        updateConsole("Hit an enemy!");
    }
    if (map[x - 1][y] == "5") {
        enemyFive.health = enemyFive.health - player.strength;
        updateConsole("Hit an enemy!");
    }
    if (map[x + 1][y] == "5") {
        enemyFive.health = enemyFive.health - player.strength;
        updateConsole("Hit an enemy!");
    }
    if (map[x - 1][y + 1] == "5") {
        enemyFive.health = enemyFive.health - player.strength;
        updateConsole("Hit an enemy!");
    }
    if (map[x][y + 1] == "5") {
        enemyFive.health = enemyFive.health - player.strength;
        updateConsole("Hit an enemy!");
    }
    if (map[x + 1][y + 1] == "5") {
        enemyFive.health = enemyFive.health - player.strength;
        updateConsole("Hit an enemy!");
    }
    console.log("Attack reached the end.");
    enemiesCheck();
    turnCheck();
}


// Check if any enemies are dead, award experience accordingly.
function enemiesCheck() {
    console.log("Checking if anybody died.");
    console.log(enemyOne.health);
    console.log(enemyTwo.health);
    console.log(enemyThree.health);
    console.log(enemyFour.health);
    console.log(enemyFive.health);
    for (var x = 0; x < 15; x++) {
        for (var y = 0; y < 24; y++) {
            //console.log(map[x][y]);
            if (enemyOne.health <= 0 && map[x][y] == "1") {
                map[x][y] = "x";
                underMap[x][y] = "x";
                updateConsole("Enemy defeated at " + x + "," + y);
                enemyOne.health = 0; // This patches a bug where enemies were dying immediately as they were revealed because player attacks were putting their communal health pool below zero.
                player.experience += 1;
            }
            if (enemyTwo.health <= 0 && map[x][y] == "2") {
                map[x][y] = "x";
                underMap[x][y] = "x";
                updateConsole("Enemy defeated at " + x + "," + y);
                enemyTwo.health = 0; // This patches a bug where enemies were dying immediately as they were revealed because player attacks were putting their communal health pool below zero.
                player.experience += 2;
            }
            if (enemyThree.health <= 0 && map[x][y] == "3") {
                map[x][y] = "x";
                underMap[x][y] = "x";
                updateConsole("Enemy defeated at " + x + "," + y);
                enemyThree.health = 0; // This patches a bug where enemies were dying immediately as they were revealed because player attacks were putting their communal health pool below zero.
                player.experience += 3;
            }
            if (enemyFour.health <= 0 && map[x][y] == "4") {
                map[x][y] = "x";
                underMap[x][y] = "x";
                updateConsole("Enemy defeated at " + x + "," + y);
                enemyFour.health = 0; // This patches a bug where enemies were dying immediately as they were revealed because player attacks were putting their communal health pool below zero.
                player.experience += 4;
            }
            if (enemyFive.health <= 0 && map[x][y] == "5") {
                map[x][y] = "x";
                underMap[x][y] = "x";
                updateConsole("Enemy defeated at " + x + "," + y);
                enemyFive.health = 0; // This patches a bug where enemies were dying immediately as they were revealed because player attacks were putting their communal health pool below zero.
                player.experience += 5;
            }
        }
    }
    console.log("Ended dead check loop.");
    // Any surviving enemies attack.
    if (enemyOne.health > 0) {
        console.log("Enemy One attack.");
        console.log(enemyOne.strength);
        player.health = player.health - enemyOne.strength
        updateConsole("Hit by an enemy.");
    }
    if (enemyTwo.health > 0) {
        player.health = player.health - enemyTwo.strength;
        updateConsole("Hit by an enemy.");
    }
    if (enemyThree.health > 0) {
        player.health = player.health - enemyThree.strength;
        updateConsole("Hit by an enemy.");
    }
    if (enemyFour.health > 0) {
        player.health = player.health - enemyFour.strength;
        updateConsole("Hit by an enemy.");
    }
    if (enemyFive.health > 0) {
        player.health = player.health - enemyFive.strength;
        updateConsole("Hit by an enemy.");
    }
    // Re-draw the map with the results of this method.
    drawMap();
}


// Check if the player's experience is high enough to earn a new level.
function checkLevelUp() {
    console.log("Checking experience for a new level...");
    if (player.experience >= player.level * 5) {
        player.experience -= player.level * 5;
        player.level++;
        player.strength++;
        player.intellect++;
        player.energy = player.level;
        player.health = 20 + (player.level * 5);
        updateConsole("Level up! Your skills have increased and your energy and health have been reset and increased.");
    }
}


// Check if the latest check to clear the fog of war revealed an enemy.
function findEnemy(x, y) {
    switch (map[x][y]) {
        case "1": enemyOne.health = enemyOne.health + enemyOne.modifier; updateConsole("Encountered an enemy at " + x + "," + y + "!"); break;
        case "2": enemyTwo.health = enemyTwo.health + enemyTwo.modifier; updateConsole("Encountered an enemy at " + x + "," + y + "!"); break;
        case "3": enemyThree.health = enemyThree.health + enemyThree.modifier; updateConsole("Encountered an enemy at " + x + "," + y + "!"); break;
        case "4": enemyFour.health = enemyFour.health + enemyFour.modifier; updateConsole("Encountered an enemy at " + x + "," + y + "!"); break;
        case "5": enemyFive.health = enemyFive.health + enemyFive.modifier; updateConsole("Encountered an enemy at " + x + "," + y + "!"); break;
    }
}


// When the window/application is closed, the entire contents of the scrolling console is dumped to the debug console.
window.onbeforeunload = function () {
    console.log(document.getElementById('console').value);
}


// Interact with any object on the same tile as the player.
function interact() {
    console.log("Looking...");
    switch (underMap[player.x][player.y]) {
        case "^": player.health += (2 + mapLevel); updateConsole("Found a healing potion."); underMap[player.x][player.y] = "x"; break; // Addition made to address a bug that could be exploited to gain unlimited health potions.
        case "$": player.gold++; updateConsole("Found a coin."); underMap[player.x][player.y] = "x"; break;
        default: updateConsole("There's nothing here."); break;
    }
    console.log(player);
    turnCheck();
}


// Check if the player has cleared the entire map.
function winCheck() {
    console.log("Checking for a win.");
    var enemyCount = 0;
    // Count the number of enemies remaining on the map.
    for (var x = 0; x < 15; x++) {
        for (var y = 0; y < 23; y++) {
            if (underMap[x][y] == "1" || underMap[x][y] == "2" || underMap[x][y] == "3" || underMap[x][y] == "4" || underMap[x][y] == "5") {
                enemyCount++;
            }
        }
    }
    console.log(enemyCount);
    if (enemyCount == 0) {
        alert("Map cleared!");
        enemyOne.modifier++;
        enemyTwo.modifer++;
        enemyThree.modifier++;
        enemyFour.modifier++;
        enemyFive.modifier++;
        mapLevel++;
        player.level++;
        // Reset the player's health.
        player.health = 20 + (player.level * 5);
        // Generate a new map.
        startAMap();
        // Reset the fog of war.
        map = [["0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
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
        // Redraw the map, replacing it with the new level.
        drawMap();
    }
}

function killAll() {
    //Debug function. Should not connected to ANY UI elements.
    console.log("cleaning map...");
    for (var x = 0; x < 15; x++) {
        for (var y = 0; y < 23; y++) {
            if (underMap[x][y] == "1" || underMap[x][y] == "2" || underMap[x][y] == "3") {
                underMap[x][y] = "x";
                map[x][y] = "x";
            }
        }
    }
}

function tagEnemies() {
    if (player.energy < 10) {
        updateConsole("You don't have enough energy.");
    }
    else {
        player.energy -= 10;
        updateConsole("Finding threats...");
        for (var x = 0; x < 15; x++) {
            for (var y = 0; y < 23; y++) {
                if (underMap[x][y] == "1" || underMap[x][y] == "2" || underMap[x][y] == "3") {
                    map[x][y] = "o";
                }
            }
        }
        drawMap();
    }
}

function parseCookie(){
    var cookie = document.cookie;
    console.log(cookie);
}