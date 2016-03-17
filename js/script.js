window.onload = function(){
    var fullName = document.getElementById("fullName");
    var email = document.getElementById("email");
    var phoneNumber = document.getElementById("phoneNumber");
    var streetAddress = document.getElementById("streetAddress");
    var city    = document.getElementById("city");
    var state   = document.getElementById("stateList");
    var zipCode = document.getElementById("zipCode");
    var htmlCheckbox = document.getElementById("htmlCheckbox");
    var cssCheckbox = document.getElementById("cssCheckbox");
    var jsCheckbox  =  document.getElementById("javascriptCheckbox");
    var all_inputs = [fullName, email, phoneNumber, streetAddress, city, state,zipCode, htmlCheckbox, cssCheckbox, jsCheckbox];
    for (var i = 0; i < all_inputs.length; i++) {
        all_inputs[i].onblur = validate_input;
    }
}// EOF

function validate_input(e) {
    var this_input = e.target;
    var message_div;
    var error = this_input.id + "Error";
    document.getElementById(error).style.display = "none";

    if(this_input.id == "fullName" && this_input.value == ""){
        document.getElementById(error).style.display = "inline";
        message_text = "Error: Fullname. Format: Firstname Lastname";
        document.getElementById(error).className = "error";
        message_div = document.getElementById(error);
        message_div.innerHTML = message_text;
        this_input.focus();
    } else if (this_input.id == "fullName" && this_input.value != ""){
        document.getElementById(this_input.id).style.backgroundColor = "green";
    }

    if(this_input.id == "email" && this_input.value == ""){
        document.getElementById(error).style.display = "inline";
        message_text = "Error: Email. Format: mail@example.com";
        document.getElementById(error).className = "error";
        message_div = document.getElementById(error);
        message_div.innerHTML = message_text.replace("{field}", this_input.id);
        this_input.focus();
    } else if (this_input.id == "email" && this_input.value != ""){
        document.getElementById(this_input.id).style.backgroundColor = "green";
    }

    if(this_input.id == "phoneNumber" && this_input.value != ""){
        document.getElementById(this_input.id).style.backgroundColor = "green";
    }

    if(this_input.id == "streetAddress" && this_input.value != ""){
        document.getElementById("streetAddress").style.backgroundColor = "green";
    }

    if(this_input.id == "city" && this_input.value != ""){
        document.getElementById("city").style.backgroundColor = "green";
    }

    var select = document.getElementById("stateList");
    select.onchange = function() {
        for(var i = 0; i < select.options.length; i++) {
            if(i == select.selectedIndex) {
                select.style.backgroundColor = 'green';
                select.blur();
            }
        }
    };

    if(this_input.id == "zipCode" && this_input.value != ""){
        document.getElementById("zipCode").style.backgroundColor = "green";
    }
    var select2 = document.getElementById("browser");
    select2.onchange = function () {
        for (var i = 0; i < select2.options.length; i++) {
            if (i == select2.selectedIndex) {
                select2.style.backgroundColor = 'green';
                select2.blur();
            }
        }
    };
}// EOF
