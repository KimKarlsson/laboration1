//uppg6
function triangel() {
    //ange två sidor
    var a = prompt("längden på sida a");
    var b = prompt("längden på sida b");
    // var som räknar sida c
    var c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
    // skriv ut c, inuti funktionen
    console.log(Math.round(c));
}
//kör funktionen
triangel();
