$(document).ready(function() {


    //------------------------TEST ta bort oönskade tecken----------------------
/*    $("#form_test").keyup("input", function() {
        var input = $(this);
        var re = /\b(\d{5}|\d{3}(-|\s)\d{2}|(SE|se)\d{5}|(SE|se)\d{3}(-|\s)\d{2}|(SE|se)\d{5}|(SE|se)\d{2}(-|\s)\d{3})\b/;
        var is_test = re.test(input.val());

        if (is_test) {
            input.removeClass("invalid").addClass("valid");
        }
        else {
            input.removeClass("valid").addClass("invalid");
        }
    });
*/

    $("#form_test").keyup("input", function() {
        var input = $(this),
        text = input.val().replace(/[^\b(\d{5}|\d{3}(-|\s)\d{2}|(SE|se)\d{5}|(SE|se)\d{3}(-|\s)\d{2}|(SE|se)\d{5}|(SE|se)\d{2}(-|\s)\d{3})\b]/g, "");
        if(/\b(\d{5}|\d{3}(-|\s)\d{2}|(SE|se)\d{5}|(SE|se)\d{3}(-|\s)\d{2}|(SE|se)\d{5}|(SE|se)\d{2}(-|\s)\d{3})\b/.test(text)) {
            text = text.replace(/SE|se|-|\s/g, "");
            // validera skiten 
            var is_test=input.val();
    	if(is_test){input.removeClass("invalid").addClass("valid");}
    	else{input.removeClass("valid").addClass("invalid");}
        }
        input.val(text);
    }); 

/*    
    $("#form_test").keyup("input", function() {
        var input = $(this),
        text = input.val().replace(/[^a-zA-Z0-9-_\s]/g, "");
        if(/SE|se|-|\s/.test(text)) {
            text = text.replace(/SE|se|-|\s/g, "");
            // validera skiten 
            var is_test=input.val();
    	if(is_test){input.removeClass("invalid").addClass("valid");}
    	else{input.removeClass("valid").addClass("invalid");}
        }
        input.val(text);
    }); 
/*    
    //----------------------Första version, funkis------------------------------
    /*
    $("#form_test").keyup("input", function() {
        var input = $(this),
        text = input.val().replace(/[^a-zA-Z0-9-_\s]/g, "");
        if(/SE|se|-|\s/.test(text)) {
            text = text.replace(/SE|se|-|\s/g, "");
            // validera skiten 
            var is_test=input.val();
    	if(is_test){input.removeClass("invalid").addClass("valid");}
    	else{input.removeClass("valid").addClass("invalid");}
        }
        input.val(text);
    }); 
    */
    //--------------------------------------------------------------------------
    /*
        function valid_postcode(postcode) {
        postcode = postcode.replace(/\s/g, "");
        var regex = /^[A-Z]{1,2}[0-9]{1,2} ?[0-9][A-Z]{2}$/i;
        return regex.test(postcode);
        
    //yourTextArea.value = yourTextArea.value.replace(/\$\$(.+?)\$\$/, "<i>$1</i>")
    //str.replace(/\${2}(.*?)\${2}/g, "<I>$1</I>");
     */
    //------------------------slut test-----------------------------------------    

    //förnamn
    // error vid blankt 
    $("#form_fname").on("input", function() {
        var input = $(this);
        var is_fname = input.val();
        if (is_fname) {
            input.removeClass("invalid").addClass("valid");
        }
        else {
            input.removeClass("valid").addClass("invalid");
        }
    });
    //efternamn
    // error blank
    $("#form_lname").on("input", function() {
        var input = $(this);
        var is_lname = input.val();
        if (is_lname) {
            input.removeClass("invalid").addClass("valid");
        }
        else {
            input.removeClass("valid").addClass("invalid");
        }
    });

    // postnummer
    $("#form_number").on("input", function() {
        var input = $(this);
        //  console.log(input); //#form_number
        //  if (input ="/\b(\d{5}|\d{3}(-|\s)\d{2}|(SE|se)\d{5}|(SE|se)\d{3}(-|\s)\d{2}|(SE|se)\d{5}|(SE|se)\d{2}(-|\s)\d{3})\b/"){
        //   input.replace(/\b(\d{5}|\d{3}(-|\s)\d{2}|(SE|se)\d{5}|(SE|se)\d{3}(-|\s)\d{2}|(SE|se)\d{5}|(SE|se)\d{2}(-|\s)\d{3})\b/g, /\b\d{5}\b/);
        // }
        //var re = /\b(\d{5}|\d{3}(-|\s)\d{2}|(SE|se)\d{5}|(SE|se)\d{3}(-|\s)\d{2}|(SE|se)\d{5}|(SE|se)\d{2}(-|\s)\d{3})\b/;
        var re = /\b(\d{5}|\d{3}(-|\s)\d{2}|(SE|se)\d{5}|(SE|se)\d{3}(-|\s)\d{2}|(SE|se)\d{5}|(SE|se)\d{2}(-|\s)\d{3})\b/;
        var is_number = re.test(input.val());
        if (is_number) {
            input.removeClass("invalid").addClass("valid");
        }
        else {
            input.removeClass("valid").addClass("invalid");
        }
    });

    //email
    // måste vara email
    $("#form_email").on("input", function() {
        var input = $(this);
        var re = /^[a-zA-Z0-9.!#$%&"*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        var is_email = re.test(input.val());
        if (is_email) {
            input.removeClass("invalid").addClass("valid");
        }
        else {
            input.removeClass("valid").addClass("invalid");
        }
    });
    //submit

    //för att inte godkänna fel
    $("#form_submit button").click(function(event) {});


});
