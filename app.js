var url = self.location.toString();
console.log(url);
var nex = url.search("=");
console.log(nex);
var str = url.substring(nex+1);
console.log(str);
var name = str;
console.log("Started a new game as ") + name;
document.write("<h1>Akvanta</h1><p id='map'></p>");
var player = {
}