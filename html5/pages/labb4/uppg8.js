//uppgift 8


var month = prompt("vilken månad fyller du år (1-12)?");
//    console.log(/*typeof*/ month); //string
month = parseInt(month);
//    console.log(/*typeof*/ month); //number
var day = prompt("vilken dag fyller du år (1-31)?");
day = parseInt(day);


//dagens år
var thisYear = new Date();     //+1
thisYear = thisYear.getFullYear() ;
//console.log(thisYear);
//    console.log(typeof thisYear);

var datum = [month, day, thisYear];
//   console.log(datum);
//    console.log(typeof datum); //object

//dagens datum
//    var date = new Date();
//    console.log(date);


function countDown(){
  do{
    //datum till nedräkning. en minut efter den dagen startar /*00:01:00*//*
    var birthday = new Date(datum);
//    console.log(datum);
    //    console.log(typeof birthday); //object
    //  birthday = parseInt(birthday); //fuckar up var timeDiff
    //  console.log(typeof birthday);

    var now = new Date();
    var timeDiff = birthday.getTime() - now.getTime();
    //    console.log(birthday);

    //sekunders tidsdiff, millisekunder. avrunda 
    var seconds = Math.floor(timeDiff / 1000);
    //minuter tidsdiff. avrunda
    var minutes = Math.floor(seconds / 60);
    //timmar 
    var hours = Math.floor(minutes / 60);
    //    console.log(typeof hours); //number
    //dagar 
    var days = Math.floor((hours / 24) + 1);
    //    console.log(typeof days); //number


    if (days <= -1) {
        console.log("true");
       
        datum = [month, day, thisYear+1];
       // console.log(datum);
        //countDown();
        }
        else {
        //alert("det är "+days +" tills du fyller år");
        alert("Det är "+days +" dagar tills du fyller år");
        return days;
        
    }
}
   
  while (days <= -1)
}

console.log(countDown());



/*
// dagens datum
var date = new Date();
console.log(date);
*/

/*
var dagsDato;
printTime(dagsDato);

function printTime(dagsDato){
var dateObj = new Date();
var month = dateObj.getMonth() + 1; //months from 1-12
var day = dateObj.getDate();
//var year = dateObj.getFullYear();
//skriver ut månad och dag
dagsDato =/* year + ":" +*/
/* month + ":" + day;
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


/*  mitt hax ist för getFullYear
  // dagens datum
  var date = new Date();
 // date = parseInt(date);
  var firstYear = date[0];
  console.log(date);
  console.log(typeof date);
  console.log(firstYear);
  console.log(typeof firstYear);
  //plocka ut första i dags dato*/