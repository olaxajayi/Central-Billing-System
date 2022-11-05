var signInButton = document.querySelector('.sign-in-button');

signInButton.addEventListener('click', function(){
  var usernameInputValue = document.querySelector('.username-input').value;
  var passwordInputValue = document.querySelector('.password-input').value;
  var usernameError = document.querySelector('.username-error');
  var passwordError = document.querySelector('.password-error');
  var linkToDashboard = document.querySelector('.link-to-dashboard');

  if (usernameInputValue.trim().length > 0 && passwordInputValue.trim().length < 6) {
    usernameError.style.display = "none";
    passwordError.style.display = "block";
  }

  else if (usernameInputValue.trim().length === 0 && passwordInputValue.trim().length >= 6) {
    usernameError.style.display = "block";
    passwordError.style.display = "none";
  }

  else if (usernameInputValue.trim().length === 0 && passwordInputValue.trim().length < 6) {
    usernameError.style.display = "block";
    passwordError.style.display = "block";
  }

  else if (usernameInputValue.trim().length > 0 && passwordInputValue.trim().length >= 6) {
    linkToDashboard.href = "dashboard.html";
    usernameError.style.display = "none";
    passwordError.style.display = "none";
  }

  else{
    console.log("shh");
  }
});