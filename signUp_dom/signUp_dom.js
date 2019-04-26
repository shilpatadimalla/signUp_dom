function validateForm(form) {

    //creating a "p" node and other variables
    var p = document.createElement("p");
    p.id = "para";
    var node = document.createTextNode("Please fill this field");
    p.appendChild(node);

    var element = document.getElementById("fieldset");
    var fname = form.fname;
    var lname = form.lname;
    var email = form.email;
    var phone = form.phone;
    var pass = form.pass;
    var devGroup = form.developer;
    var re = /\S+@\S+.+\S/;
    var num = /^\d{10}$/;
    var chosen = "";
    var text = "";
        

    //first name
    if(!fname.value) {
        element.insertBefore(p, fname);
        fname.focus();
        return false;
    }
    
    var removeP = document.getElementById("para");
    fieldset.removeChild(removeP);
    
    //last name
    if(!lname.value) {
        element.insertBefore(p, lname);
        lname.focus();
        return false;
    }
    
    //email
    if (!re.test(email.value)){
        element.insertBefore(p, email);
        email.focus();
        return false;
    }

    //phone number
    if(!num.test(phone.value)) {
        element.insertBefore(p, phone);
        phone.focus();
        return false;
    }

    //password
    if(pass.value.length!== 4) {
        p.innerHTML = "password should be of 4 characters."
        element.insertBefore(p, pass);
        pass.focus();
        return false;
    }

    //radio buttons
    if(devGroup) {
        for(var i = 0; i < devGroup.length; i++) {
            if(devGroup[i].checked) {
                chosen = devGroup[i].value;        
            }  
        }
        if (chosen == "") {
            element.insertBefore(p, devGroup[0]);
            devGroup[0].focus();
            return false;    
        }
    }
            
}
/*function preventEnter(event) {
    if(event.keyCode == 13) {
        return false;
    }
}*/