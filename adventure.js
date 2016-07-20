window.onload = function () {
    console.log("Game starting.")
};

send_command = function(){
var command = document.getElementByID("comm").value;
document.getElementByID("game").value = command;
console.log(command);
}