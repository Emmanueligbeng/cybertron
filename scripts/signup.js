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

document.getElementById('signup-form').addEventListener('submit', async (e) => {
  e.preventDefault();

  const fullname = document.getElementById('fullname').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirm-password').value;
  const location = document.getElementById('Address').value;

  const messageEl = document.getElementById('pass-message');
  messageEl.textContent = '';

  if (password !== confirmPassword) {
    messageEl.textContent = 'Passwords do not match!';
    return;
  }

  try {
    const response = await fetch('http://localhost:8000/api/auth/register/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        full_name: fullname,
        email: email,
        phone: phone,
        password: password,
        location: location
      })
    });

    if (response.ok) {
      alert('Account created successfully!');
      window.location.href = 'login.html';
    } else {
      const data = await response.json();
      alert('Error: ' + (data.message || 'Something went wrong.'));
    }
  } catch (error) {
    console.error('Network error:', error);
    alert('Could not connect to the server.');
  }
});