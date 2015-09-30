//uppg9
var myVarTest = "Test";
document.getElementById("test").innerHTML = myVarTest;
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

var myArray = [["förnamn ","efternamn ","telefon "],
              ["Haris","Kljajic","7716"],
              ["Mats","Look","7714"]];


document.write(myArray);

function tableCreate(Table){
    document.write("<table>");
    document.write("<th>"+[0][0]+"</th>"+"</br>");
    document.write("</table>");
}