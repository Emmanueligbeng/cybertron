document.querySelector('form').addEventListener('submit', async function (e) {
    e.preventDefault();
  
    const phone = document.getElementById('number').value;
    const password = document.getElementById('password').value;
  
    try {
      const response = await fetch('http://localhost:8000/api/auth/user/login/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          phone: phone,
          password: password
        }),
      });
  
      if (response.ok) {
        const data = await response.json();
        console.log('Login successful:', data);
        alert('Login successful!');
        // Optional: save token to localStorage or redirect
        // localStorage.setItem('token', data.token);
        // window.location.href = '/dashboard.html';
      } else {
        const errorData = await response.json();
        alert('Login failed: ' + (errorData.detail || 'Invalid credentials'));
      }
    } catch (error) {
      console.error('Network error:', error);
      alert('Something went wrong. Please try again.');
    }
  });
  