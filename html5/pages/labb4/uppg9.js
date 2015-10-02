//uppg9

var myArray = [
    ["Förnamn", " Efternamn", " Telefon", " Dynamic"],
    ["Haris", "Kljajic", "7716", "As"],
    ["Mats", "Loock", "7714", "Frakking"],
    ["Dynamic", "As", "Frakking", "Hell"]
];

/*var arr = [["","",""],["","",""],["","",""]];*/

tableCreate(myArray);

function tableCreate(table) {
    //concatenate-- concat()
    var result = "<table><thead><tr>";
    // "identifiera" första raden i arrayen
    for (var i = 0; i < myArray.length; i++) {
        //varannan rad med modulus. Gör den grå
        if (i % 2) {
            result += "<tr bgcolor = #d3d3d3>";
        }
        //"identifiera"" resterande av array
        for (var j = 0; j < myArray[i].length; j++) {
            //sortera object med första värde 0
            if (i === 0) {
                //Gör första raden till huvud.
                result += ("<th>" + myArray[i][j] + "</th>");
            }
            else {
                //Skriv ut resten av array.
                result += ("<td>" + myArray[i][j] + "</td>");
            }
        }
        result += ("</tr>");
    }
    result += "</tbody></table>";
    //Skriv ut var resultat
    document.write(result);
}


//var myVarTest = "Test";
//document.getElementById("test").innerHTML = myVarTest;
/*
Funktionen genereateTable
cell[0][0] = ”Förnamn:”;
cell[0][1] = ”Efternamn:”;
cell[0][2] = ”Telefon:”;
cell[1][0] = ”Haris”;
cell[1][1] = ”Kljajic”;
cell[1][2] = ”7716”;
cell[2][0] = ”Mats”;
cell[2][1] = ”Loock”;
cell[2][2] = ”7714”;
*/