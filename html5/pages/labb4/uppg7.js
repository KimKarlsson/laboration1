
//uppg7
//moment I
var medeltal = [10, 2, 89, 9, 65, 13, 3];
//medeltal.sort();
//console.log(medeltal);

function compareNumbers(a, b) {
    return a - b;
}

function tentamen(medeltal) {
    var godis = 0;
    for (var i = 0; i < medeltal.length; i++) {
        //console.log(medeltal[i]);
        godis += medeltal[i];
        //alert(medeltal[i]);
    }
    var mat = (godis / medeltal.length);
    var mySak = medeltal.sort(compareNumbers);
    var vadsom = mySak[0];
    var myVadsom = mySak[mySak.length - 1];
    var svar = [Math.round(mat), myVadsom, vadsom];
    return svar;

}
console.log(tentamen(medeltal));



/*
För att kontrollera att allt är som det ska kan du testa att skicka in följande array:
[10,2,89,9,65,13,3]

Resultatet här bör bli en array enligt:
[27,89,2]

Moment III
Presentera resultatet i konsolen.

Moment II
//Math.round
returnera tre resultat, medelvärde, max och min
Medelvärdet ska heltalsavrundas nedåt

Moment I
Skriv funktionen tentamen.
Testa funktionen och verifiera att den fungerar
*/
