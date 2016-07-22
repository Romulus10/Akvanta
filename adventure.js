window.onload = function () {
    console.log("Game starting.")
};

send_command = function(){
    var comm = document.getElementById("comm");
    var game = document.getElementById("game");
    console.log(comm.value);
    game.value = comm.value;
};