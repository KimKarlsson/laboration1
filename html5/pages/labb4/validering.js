$(document).ready(function() {
   
    var myFirstname = "";
    var mySecname = "";
    var myZip = "";
    var myEmail = "";
    var myPricemodel = "";
   
   
   
    //förnamn
    // error vid blankt 
    $("#form_fname").on("input", function() {
        var input = $(this);
        //----------------------- få värde
       
        var varFName = $(this).val(); 
         myFirstname = $('#firstname');  
          myFirstname = varFName;
         console.log(myFirstname);
        
        //-------------------------
        var is_fname = input.val();
        if (is_fname) {
            input.removeClass("invalid").addClass("valid");
        }
        else {
            input.removeClass("valid").addClass("invalid");
        }
    });
    //efternamn
    $("#form_lname").on("input", function() {
        var input = $(this);
        //----------------------- få värde
       
        var varSName = $(this).val(); 
         mySecname = $('#secnamn');  
          mySecname = varSName;
         console.log(mySecname);
        
        //-------------------------
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
        //----------------------- få värde
       
        var varZip = $(this).val(); 
         myZip = $('#zipcode');  
          myZip = varZip;
         console.log(myZip);
        
        //-------------------------
        var re = /\b(\d{5}|\d{3}(-|\s)\d{2}|(SE|se)\d{5}|(SE|se)\d{3}(-|\s)\d{2}|(SE|se)\d{5}|(SE|se)\d{2}(-|\s)\d{3})\b/;
        var is_test = re.test(input.val());
        if (is_test) {
            this.value = this.value.replace(/SE|se|-|\s|/g, '');
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
        //----------------------- få värde
       
        var varEmail = $(this).val(); 
         myEmail = $('#email');  
          myEmail = varEmail;
         console.log(myEmail);
        
        //-------------------------
        var re = /^[a-zA-Z0-9.!#$%&"*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        var is_email = re.test(input.val());
        if (is_email) {
 //           console.log(is_email);
            input.removeClass("invalid").addClass("valid");
        }
        else {
            input.removeClass("valid").addClass("invalid");
        }
    });
    //prislista
    $("#form_price").on("blur", function() {
        var input = $(this);
        //----------------------- få värde
       
        var varPrice = $(this).val(); 
         myPricemodel = $('#pricemodel');  
          myPricemodel = varPrice;
         console.log(myPricemodel);
        
        //-------------------------
        var is_price = input.val();
 //       console.log(is_price);
        is_price = (input.value !== "");
//        console.log(is_price);
        if (is_price) {
//            console.log(is_price);
            input.removeClass("invalid").addClass("valid");
        }
        else {
            input.removeClass("valid").addClass("invalid");
        }
    });
    //submit
    $("#form_submit button").click(function(event) {
        var form_data = $("#form").serializeArray();
        var error_free = true;
        for (var input in form_data) {
            var element = $("#form_" + form_data[input]["name"]);
            var valid = element.hasClass("valid");
            var error_element = $("span", element.parent());
            if (!valid) {
                error_element.removeClass("error").addClass("error_show");
                error_free = false;
            }
            else {
                error_element.removeClass("error_show").addClass("error");
            }
        }
        if (!error_free) {
            event.preventDefault();
        }
        else {
            return ("No errors: Form will be submitted");
        }
    });


//----------------------popup---------------------------------------------------
 $("#contact").on('click', function() {
       $("#firstname").text(myFirstname);
        $("#secnamn").text(mySecname);
        $("#zipcode").text(myZip);
        $("#email").text(myEmail);
         $("#pricemodel").text(myPricemodel);
    }); 
    
});