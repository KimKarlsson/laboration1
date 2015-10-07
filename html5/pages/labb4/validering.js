$(document).ready(function() {
    //------------------------TEST ta bort oönskade tecken----------------------
/*    $("#form_test").keyup("input", function() {
        var input = $(this);
        var text = input.val().replace(/[^\b(\d{5}|\d{3}(-|\s)\d{2}|(SE|se)\d{5}|(SE|se)\d{3}(-|\s)\d{2}|(SE|se)\d{5}|(SE|se)\d{2}(-|\s)\d{3})\b]/g, "");
        if (/\b(\d{5}|\d{3}(-|\s)\d{2}|(SE|se)\d{5}|(SE|se)\d{3}(-|\s)\d{2}|(SE|se)\d{5}|(SE|se)\d{2}(-|\s)\d{3})\b/.test(text)) {
            text = text.replace(/SE|se|-|\s|/g, "");
            var is_test = input.val();
                    
            if (is_test) {
                input.removeClass("invalid").addClass("valid");
            }
            else {
                input.removeClass("valid").addClass("invalid");
            }
        }
        input.val(text);
    }); */
    
    //-----------------------------------super FUNKIS
    
      $("#form_test").on("input", function() {
        var input = $(this);
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
   
    //------------------------------- FUNKIS
   /*
    $("#form_test").on("input", function() {
        var input = $(this);
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
            console.log(is_email);
            input.removeClass("invalid").addClass("valid");
        }
        else {
            input.removeClass("valid").addClass("invalid");
        }
    });
    
//prislista

//---------------------------------------funky!!
$("#form_price").on("blur", function() {
        var input = $(this);
//    var is_price = (input.value !== "");
        var is_price = input.val();
        console.log(is_price);
        is_price = (input.value !== "");
        console.log(is_price);
        if (is_price) {
        console.log(is_price);    
            input.removeClass("invalid").addClass("valid");
        }
        else {
            input.removeClass("valid").addClass("invalid");
        }
    });

//------------------------------------Gör iaf så det händer nåt
/*
$("#price").on("blur", function() {
        var input = $(this);
        console.log(typeof input);
        var isValid = (input.value !== "");
        console.log(isValid);
        if (isValid) {
            input.removeClass("invalid").addClass("valid");
        }
    });
    */
//-----------------------------------slut
    
    //submit
$("#form_submit button").click(function(event){
	var form_data=$("#form").serializeArray();
	var error_free=true;
	for (var input in form_data){
		var element=$("#form_"+form_data[input]["name"]);
		var valid=element.hasClass("valid");
		var error_element=$("span", element.parent());
		if (!valid){error_element.removeClass("error").addClass("error_show"); error_free=false;}
		else{error_element.removeClass("error_show").addClass("error");}
	} 
	if (!error_free){
		event.preventDefault(); 
	}
	else{
	//	alert('No errors: Form will be submitted');
	}
});
    
});
