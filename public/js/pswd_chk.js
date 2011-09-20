// pswd_chk.js
//   An example of input password checking, using the submit 
//   event

// The event handler function for password checking

function chkPasswords() { 
  var first = document.getElementById("password");
  var second = document.getElementById("c_password");
  if (first.value == "") {
    first.focus();
    document.getElementById("password_msg");
    return false;
  }
  if (init.value != sec.value) {
    first.focus();
    first.select();
    return false;
  } else
    return true;
}
