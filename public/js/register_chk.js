function check_psw_equal() {
  var first = document.getElementById("password").value;
  var second = document.getElementById("c_password").value;

  if (first == second) {
    return true;  
  } else {
    document.getElementById("c_password_msg").innerHTML = "* The password does not match the first one!";
    return false;
  }
}

function check_psw_length() {
  var psw = document.getElementById("password").value;

  if (psw.length < 6 || psw.length > 32) {
    document.getElementById("password_msg").innerHTML = "* must have 6-32 charaters";
  }
}
