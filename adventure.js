var con = "";
var day;
var player = {
    "name": "",
    "health": 10,
    "max_health": 10,
    "magic": 0,
    "max_magic": 0,
    "stamina": 5,
    "max_stamina": 5,
    "strength": 1,
    "intellect": 1,
    "dexterity": 1
};

window.onload = function () {
    console.log("Game starting.");
    day = Math.floor((Math.random() * 5000) + 1);
    console.log("Day number set as " + day);
    push_console_update("Prison.\n");
    push_console_update("Day " + day + ".\n");
    push_console_update("A crime you did not commit.\n");
};

send_command = function(){
    var comm = document.getElementById("comm");
    var game = document.getElementById("game");
    console.log(comm.value);
    con = con + comm.value;
    game.value = con;
};

push_console_update = function (message) {
    con = con + message;
    console.log(message);
    pull_console_update();
};

pull_console_update = function () {
    document.getElementById("game").value = con;
};