//test
//console.log("test");



var string;
var newString;
//var till att kunna byta ut a.
var hitA = "";
string = prompt("skriv en text");

//console.log(string.toUpperCase());
//console.log(string.toLowerCase());


for (var i = 0; i < string.length; i++) {
    console.log(string[i]);

    if (string[i] === "a") {
        //console.log("funk");
        string = string.replace("a", "#");
        //console.log(hitA);
        /*
        // If we find it, add characters up to
        // the length of my name to the array
		for(var j = i; j < (string.length + i); j++) {
			hitA.push(string[j]); 
		*/
    }
    if (string[i] === "A") {
        string = string.replace("A", "#");

    }
}


console.log(string.toLowerCase());
console.log(string.toUpperCase());
// alert(string);
//function myFunk(){
//}

//ändra alla versaler i argumentet till gemener och alla gemener i
//argumentet till versaler

/*
----------------------------------------------------------------------------
Skriv funktionen konvertera i JavaScript. Denna funktion ska ta en textsträng som argument.
Vidare ska funktionen ändra alla versaler i argumentet till gemener och alla gemener i
argumentet till versaler. Slutligen ska alla ”a” och ”A” ändras till ”#”.
Exempel på indata: “Jag tycker JAVASCRIPT är KUL!” skall alltså bli utdata: “j#G
TYCKER j#v#script ÄR kul!”.
När allt är ändrat ska resultatet returneras som en ny textsträng och sedan skrivas ut i
konsolen.
---------------------------------------------------------------------------

*/
