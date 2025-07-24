document.getElementById('caseReportForm').addEventListener('submit', async function (e) {
    e.preventDefault(); // Stop form from reloading the page

    // Grab the values
    const symptoms = document.getElementById('symptoms').value;
    const date = document.getElementById('date').value;
    const cases = document.getElementById('cases').value;

    try {
      const response = await fetch('http://localhost:8000/api/case-reports/create/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          symptoms: symptoms,
          date: date,
          cases: parseInt(cases)
        })
      });

      if (response.ok) {
        const data = await response.json();
        alert('Report submitted successfully!');
        document.getElementById('caseReportForm').reset();
      } else {
        const error = await response.json();
        alert('Submission failed: ' + (error.detail || 'Please check your input.'));
      }
    } catch (err) {
      console.error(err);
      alert('Error submitting form. Please try again later.');
    }
  });