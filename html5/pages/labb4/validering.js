$(document).ready(function() {
    //förnamn
    $('#form_fname').on('input', function() {});
    // error vid blankt 
    $('#form_fname').on('input', function() {
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
    $('#form_lname').on('input', function() {});
    // error blank
    $('#form_lname').on('input', function() {
        var input = $(this);
        var is_lname = input.val();
        if (is_lname) {
            input.removeClass("invalid").addClass("valid");
        }
        else {
            input.removeClass("valid").addClass("invalid");
        }
    });

    /*    function valid_postcode(postcode) {
        postcode = postcode.replace(/\s/g, "");
        var regex = /^[A-Z]{1,2}[0-9]{1,2} ?[0-9][A-Z]{2}$/i;
        return regex.test(postcode);
    */
    //yourTextArea.value = yourTextArea.value.replace(/\$\$(.+?)\$\$/, '<i>$1</i>')
    //str.replace(/\${2}(.*?)\${2}/g, "<I>$1</I>");

    // error vid blank
    $('#form_number').on('input', function() {
        var input = $(this);
      //  console.log(input); //#form_number
    //  if (input ="/\b(\d{5}|\d{3}(-|\s)\d{2}|(SE|se)\d{5}|(SE|se)\d{3}(-|\s)\d{2}|(SE|se)\d{5}|(SE|se)\d{2}(-|\s)\d{3})\b/"){
    //  input.replace(/\b(\d{5}|\d{3}(-|\s)\d{2}|(SE|se)\d{5}|(SE|se)\d{3}(-|\s)\d{2}|(SE|se)\d{5}|(SE|se)\d{2}(-|\s)\d{3})\b/, /\b\d{5}\b/);
     // }
        //var re = /\b(\d{5}|\d{3}(-|\s)\d{2}|(SE|se)\d{5}|(SE|se)\d{3}(-|\s)\d{2}|(SE|se)\d{5}|(SE|se)\d{2}(-|\s)\d{3})\b/;
        var re = /\b\d{5}\b/;
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
    $('#form_email').on('input', function() {
        var input = $(this);
        var re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        var is_email = re.test(input.val());
        if (is_email) {
            input.removeClass("invalid").addClass("valid");
        }
        else {
            input.removeClass("valid").addClass("invalid");
        }
    });
    //submit
  $("#form_submit button").click(function(event) {});
   
   
    });

