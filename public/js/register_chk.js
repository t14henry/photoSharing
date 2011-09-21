function check_psw_equal() {
  var first = document.getElementById("password").value;
  var second = document.getElementById("c_password").value;

  if (first == second) {
    return true;  
  } else {
    document.getElementById("c_password_msg").innerHTML = "* Does not match";
    return false;
  }
}

function check_psw_length() {
  var psw = document.getElementById("password").value;

  if (psw.length < 6 || psw.length > 32) {
    document.getElementById("password_msg").innerHTML = "* Must have 6-32 charaters";
  }
}

function check_email() {
  var email = document.getElementById("email").value;
  
  if (email.match(/\w+@(\w+.)+\w+/) == null) {
    document.getElementById("email_msg").InnerHTML = "* Wrong Email address";
  }
}