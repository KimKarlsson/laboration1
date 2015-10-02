$(document).ready(function($) {
    JQUERY4U.UTIL.setupFormValidation();
    console.log("");
});


var JQUERY4U = {};

JQUERY4U.UTIL = {
    setupFormValidation: function() {
        $.validator.addMethod(
            "regex",
            function(value, element, regexp) {
                var re = new RegExp(regexp);
                //lägger in nytt regexp obj för att kunna ta ur siffrorna 
                var nuSak = new RegExp("\\d{5}");
                console.log(value);
                //Hittar och ersätter värde postnummer till rätt
                value = nuSak.exec(value);
                return this.optional(element) || re.test(value);
            },
            "Please check your input."
        );
        //form validation rules
        $("#minform").validate({
            rules: {
                firstname: "required",
                lastname: "required",
                postnumber: {
                    regex: "\\b(\\d{5}|\\d{3}(-|\\s)\\d{2}|(SE|se)\\d{5}|(SE|se)\\d{3}(-|\\s)\\d{2}|(SE|se)\\d{5}|(SE|se)\\d{2}(-|\\s)\\d{3})\\b"
                },
                email: {
                    required: true,
                    email: true
                },
            },
            messages: {
                firstname: "Skriv in ditt förnamn",
                lastname: "Skriv in ditt efternamn",
                postnumber: "Skriv in ditt postnummer XXXXX",
                email: "Ange en korrekt mail-adress",
            },
            submitHandler: function(form) {
                form.submit();
            }
        });
    }
};

/* regex postnummer
\b(\d{5}|\d{3}(-|\s)\d{2}|(SE|se)\d{5}|(SE|se)\d{3}(-|\s)\d{2}|(SE|se)\d{5}|(SE|se)\d{2}(-|\s)\d{3})\b
\\b(\\d{5}|\\d{3}(-|\\s)\\d{2}|(SE|se)\\d{5}|(SE|se)\\d{3}(-|\\s)\\d{2}|(SE|se)\\d{5}|(SE|se)\\d{2}(-|\\s)\\d{3})\\b
*/