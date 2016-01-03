var url = self.location.toString();
console.log(url);
var nex = url.search("=");
console.log(nex);
var str = url.substring(nex+1);
console.log(str);
console.log("Started a new game as " + str);
document.write("<p id='console'>Welcome to Akvanta.</p><table><tr><th id='map'></th><th id='stats'></th></tr></table><tr><th><button></button></th><th><button></button></th><th><button id='up'></button></th><th><button></button></th><th><button></button></th></tr><tr><th><button></button></th><th><button id='left'></button></th><th><button id='interact'></button></th><th><button id='right'></button></th><th><button></button></th></tr><tr><th><button></button></th><th><button></button></th><th><button id='down'></button></th><th><button></button></th><th><button></button></th></tr>");
var player = {
	name:str,
	health:10,
	energy:0,
	strength:3,
	defense:0,
	intellect:2,
	level:1,
	experience:0,
	x:20,
	y:25
};
document.getElementById("map").innerHTML = "XXXXXXXXXXXXXXX<br>XXXXXXXXXXXXXXX<br>XXXXXXXXXXXXXXX<br>XXXXXXXXXXXXXXX<br>XXXXXXXXXXXXXXX<br>XXXXXXXXXXXXXXX<br>XXXXXXXXXXXXXXX<br>XXXXXXXXXXXXXXX<br>XXXXXXXXXXXXXXX<br>XXXXXXXXXXXXXXX<br>XXXXXXXXXXXXXXX<br>XXXXXXXXXXXXXXX<br>XXXXXXXXXXXXXXX<br>XXXXXXXXXXXXXXX<br>XXXXXXXXXXXXXXX<br>";
document.getElementById("stats").innerHTML = player.name + "<br><br> Level: " + player.level + "<br> Experience: " + player.experience + "<br> Health: " + player.health + "<br> Energy: " + player.energy + "<br> Strength: " + player.strength + "<br> Defense: " + player.defense + "<br> Intellect: " + player.intellect;
