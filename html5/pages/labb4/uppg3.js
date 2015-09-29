//Uppgift 3
//console.log("test");

//värdet kan ge ett tal större än 100!! var datorGissning = Math.floor( Math.random() * 101)+1;
var datorGissning = Math.floor(Math.random() * 100) + 1;
var anvGissning;
var antalGissningar = 0;
var svar = false;
//för att se rätt svar i prompten
console.log(datorGissning);



while (!svar) {
    anvGissning = prompt("gissa ett nr 1-100");
    antalGissningar++;
    if (anvGissning < datorGissning) {
        //meddela mitt nr är större
        alert("högre");
    }
    else if (anvGissning > datorGissning) {
        //meddela mitt nr är mindre
        alert("lägre");
    }
    else {
        //rätt svar +antal gissningar
        //nåt som får slut på loopen hade nog varit bra!!
        alert("rätt! på antal försök:" + antalGissningar);
        svar = true;
    }
}
//för att se rätt svar i prompten
//   console.log(datorGissning);



//funktion för att kunna länka till annan js-fil uppg4 moment III
/*
function spelaNummer() {
     spel();
}
*/

/*Spelet går ut på att datorn slumpar ett hemligt tal mellan 1 och 100 och låter sedan
användaren gissa sig till talet. Om talet användaren gissade på är lägre än det hemliga talet ska
en meddelanderuta visas som talar om för användaren att det hemliga numret är högre än
gissningen, likadant ska en meddelanderuta visas om gissningen var för hög. Användaren ska
få gissa på det hemliga numret till det att rätt nummer gissas. När spelet är slut ska en
meddelanderuta visas som innehåller det hemliga numret och det antal gissningar användaren
behövde för att hitta det hemliga numret*/