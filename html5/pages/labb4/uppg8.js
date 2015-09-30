//uppgift 8

//var month = prompt ("vilken månad fyller du år (1-12)?");

//var day = prompt ("vilken dag fyller du år (1-31)?");


function countDown(){
    //datum till nedräkning. en minut efter den dagen startar
    var birthday = new Date("9 30 2015 12:54:14");
    var now = new Date();
    var timeDiff = birthday.getTime() - now.getTime();
    console.log(birthday);
   
    //sekunders tidsdiff, millisekunder. avrunda 
    var seconds = Math.floor(timeDiff / 1000);
    //minuter tidsdiff. avrunda
    var minutes = Math.floor(seconds / 60);
    //timmar 
    var hours = Math.floor(minutes / 60);
    //dagar 
    var days = Math.floor((hours / 24)+1);
    
    
    return days;
}
console.log(countDown());




// dagens datum
var date = new Date();
console.log(date);


/*
var dagsDato;
printTime(dagsDato);

function printTime(dagsDato){
var dateObj = new Date();
var month = dateObj.getMonth() + 1; //months from 1-12
var day = dateObj.getDate();
//var year = dateObj.getFullYear();
//skriver ut månad och dag
dagsDato =/* year + ":" +*//* month + ":" + day;
return dagsDato;
}
console.log(printTime(dagsDato));
*/


/*
var knas = printTime(dagsDato);
//mixtra med dagsdato
function paja(knas){
    return knas +"add text";
}
console.log(paja(knas));
*/


