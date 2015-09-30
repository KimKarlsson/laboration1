//uppgift 8
var month = prompt("vilken månad fyller du år (1-12)?");
month = parseInt(month, 10);
var day = prompt("vilken dag fyller du år (1-31)?");
day = parseInt(day, 10);
var thisYear = new Date();
thisYear = thisYear.getFullYear();
var datum = [month, day, thisYear];

function countDown() {
    do {
        var birthday = new Date(datum);
        var now = new Date();
        var timeDiff = birthday.getTime() - now.getTime();
        var seconds = Math.floor(timeDiff / 1000);
        var minutes = Math.floor(seconds / 60);
        var hours = Math.floor(minutes / 60);
        var days = Math.floor((hours / 24) + 1);

        if (days <= -1) {
            datum = [month, day, thisYear + 1];
        }
        else {
            alert("Det är " + days + " dagar tills du fyller år");
            return days;
        }
    } while (days <= -1)
}

console.log(countDown());