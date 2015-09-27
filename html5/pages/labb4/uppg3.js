//Uppgift 3
console.log("test");

var datorGissning = Math.floor( Math.random() * 101)+1;
var anvGissning;
var antalGissningar = 0; 
var svar = false;

while(!svar){
    anvGissning = prompt("gissa ett nr 1-100");
    antalGissningar++;
if (anvGissning < datorGissning) {
    //meddela mitt nr är större
    alert("högre");
} else if (anvGissning > datorGissning){
    //meddela mitt nr är mindre
    alert("lägre");
} else {
    //rätt svar +antal gissningar
    //nåt som får slut på loopen
    alert("rätt"); //be till gudaran att allt inte kraschar
}
}

//Holy moses!! den funkade

















/*Spelet går ut på att datorn slumpar ett hemligt tal mellan 1 och 100 och låter sedan
användaren gissa sig till talet. Om talet användaren gissade på är lägre än det hemliga talet ska
en meddelanderuta visas som talar om för användaren att det hemliga numret är högre än
gissningen, likadant ska en meddelanderuta visas om gissningen var för hög. Användaren ska
få gissa på det hemliga numret till det att rätt nummer gissas. När spelet är slut ska en
meddelanderuta visas som innehåller det hemliga numret och det antal gissningar användaren
behövde för att hitta det hemliga numret*/