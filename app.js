var url = self.location.toString();
console.log(url);
var nex = url.search("=");
console.log(nex);
var str = url.substring(nex+1);
console.log(str);
var name = str;
