//uppg9
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

var myArray = [
    ["förnamn ", "efternamn ", "telefon "],
    ["Haris", "Kljajic", "7716"],
    ["Mats", "Loock", "7714"]
];

//document.write(myArray);
tableCreate(myArray);


function tableCreate(myArray){

document.write("<table>");
document.write("<th>" + myArray[0][0]+ "</th>");
document.write("<th><tr>"+ myArray[1][0] +"</tr></th>");
document.write("</table>");
}