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
    ["Förnamn", " Efternamn", " Telefon"],
    ["Haris", "Kljajic", "7716"],
    ["Mats", "Loock", "7714"]
];

/*var arr = [["","",""],["","",""],["","",""]];*/

//document.write(myArray);
tableCreate(myArray);

function tableCreate(table){
//var result += ;  
document.write("<table>");
document.write("<th>");
document.write("<tr>");
for (var i = 0; i < myArray.length; i++){
//document.write(myArray[0]);
    for (var j = 0; j < myArray[i].length; j++){
    if( i === 0){
        document.write( myArray[i][j]);
        console.log(myArray[i][j]);
    }else{
  //      document.write("<tbody>"+"</tr>"+(myArray[j][j])+"</th>"+"</tbody>");
    }
    document.write("</tr>");
    document.write("</th>");
    document.write("</theader>");
document.write("</table>");

}}}
