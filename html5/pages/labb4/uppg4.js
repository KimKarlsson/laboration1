//Uppgift 4
//function myMenu() {
var menu = "0. Exit\n\n" +
    "1. Fahrenheit to Celsius\n" +
    "2. Celsius to Fahrenheit\n" +
    "3. Guess number\n";

//prompt(menu);

var anvVal;
var celsius;
var fahrenheit;



anvVal = +prompt(menu);
console.log(anvVal);
switch (anvVal) {
    case 0:
        console.log("case0");
        break;
    case 1:
        console.log("case1");
        //prompta fråga
        fahrenheit = prompt("Fahrenheit:");
        //formel för att konventera 
        celsius = Math.round(fahrenheit - 32) * (5 / 9);
        //ge tillbaka värdet 
        alert(fahrenheit + " Fahrenheit is " + Math.round(celsius) + " Celsius");
        break;
    case 2:
        console.log("case2");
        celsius = prompt("Celsius:");
        fahrenheit = Math.round(celsius * 9) / (5) + (32);
        alert(celsius + " Celsius i " + Math.round(fahrenheit) + " Fahrenheit");
        break;
    case 3:
        // spela guess the number
        //spelaNummer();
        console.log("case3");
        var datorGissning = Math.floor(Math.random() * 100) + 1;
        var anvGissning;
        var antalGissningar = 0;
        var svar = false;
        console.log(datorGissning);

        while (!svar) {
            anvGissning = prompt("gissa ett nr 1-100");
            antalGissningar++;
            if (anvGissning < datorGissning) {
                alert("högre");
            }
            else if (anvGissning > datorGissning) {
                alert("lägre");
            }
            else {
                alert("rätt! på antal försök:" + antalGissningar);
                svar = true;
            }
        }

        break;
    default:

}


