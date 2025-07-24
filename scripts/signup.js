const form = document.querySelector('form');
form.addEventListener('submit', function (e) {
  const password = document.getElementById('password').value;
  const confirm = document.getElementById('confirm-password').value;
  const message = document.getElementById("pass-message");

  if (password !== confirm) {
    message.innerHTML = "Passwords do not match";
    e.preventDefault();
  } else {
    message.innerHTML = "";
  }
});
