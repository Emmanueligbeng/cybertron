// const response = await fetch('http://localhost:8000/api/alerts/create/', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//       // 'X-CSRFToken': csrftoken,  // Optional (see #4)
//     },
//     body: JSON.stringify({
//       target_group: targetGroup,
//       message: message
//     })
//   });
  

document.querySelector('form').addEventListener('submit', async (e) => {
    e.preventDefault(); // stop page reload
  
    const targetGroup = document.getElementById('target-group').value;
    const message = document.getElementById('Message').value;
  
    try {
      const response = await fetch('http://localhost:8000/api/alerts/create/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // 'X-CSRFToken': csrftoken  <-- only needed if CSRF is enforced
        },
        body: JSON.stringify({
          target_group: targetGroup,
          message: message
        })
      });
  
      const data = await response.json();
      console.log(data);
  
      alert("Alert submitted successfully!");
    } catch (error) {
      console.error('Error submitting alert:', error);
      alert("Error submitting alert");
    }
  });
  