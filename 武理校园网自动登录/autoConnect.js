function autoConnect(username, password) {
  let uname = document.querySelector("#username");
  let pswd = document.querySelector("#password");

  uname.value = username;
  pswd.value = password;

  checkForm();
}

