var nameError = document.getElementById('name-error');
var phoneError = document.getElementById('phone-error');
var emailError = document.getElementById('email-error');
var messageError = document.getElementById('message-error');
var submitError = document.getElementById('submit-error');


function validateName(){

    var nameError = document.getElementById('name-error');
    var name = document.getElementById('contact-name').value;

  if(name.length == 0){

    nameError.innerHTML = 'Name is required';
    return false;
    
  }
  if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){

    nameError.innerHTML = 'Write full name';
    return false;

  }

  nameError.innerHTML = '<i class="fas fa-check-circle"></i>';
  return true;

}

function validateNumber(){

    var phoneError = document.getElementById('phone-error');
    var number = document.getElementById('contact-phone').value;
 
  if(number.length == 0){

    phoneError.innerHTML = 'Phone number is required';
    return false;
    
  }
  if(number.length != 12){

    phoneError.innerHTML = 'Phone number should be 12 digits';
    return false;

  }
  if(!number.match(/[0-9]{10}$/)){

    phoneError.innerHTML = 'Phone number should be in digits';
    return false;

  }


  phoneError.innerHTML = '<i class="fas fa-check-circle"></i>';
  return true;

}

function validateEmail(){

    var emailError = document.getElementById('email-error');
    var email = document.getElementById('contact-email').value;
 
  if(email.length == 0){

    emailError.innerHTML = 'Email is required';
    return false;
    
  }
  if (!email.includes("@") && !email.includes(".com")) {

    emailError.innerHTML = 'Email is invalid';
    return false;

  }

  emailError.innerHTML = '<i class="fas fa-check-circle"></i>';
  return true;

}

function validateMssg(){

    var messageError = document.getElementById('message-error');
    var message = document.getElementById('contact-message').value;

    var required = 30;
    var left = required - message.length;

    if(left > 0){

        messageError.innerHTML = 'message must be longer than 30 characters'
        return false
    }

    messageError.innerHTML = '<i class="fas fa-check-circle"></i>';
    return true;

}


function validateForm(){

    var submitError = document.getElementById('submit-error');

    if(!validateName()||!validateNumber()||!validateEmail()||!validateMssg()){

        submitError.style.display = 'block';
        submitError.innerHTML = 'Please fix error to submit form';
        setTimeout(function(){

            submitError.style.display = 'none';
        
        }, 3000);

        return false
    }


}


