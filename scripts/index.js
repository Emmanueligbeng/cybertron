
  // Create the map and set its view to a chosen geographical point and zoom level
  var map = L.map('map').setView([6.5244, 3.3792], 13); // Example: Lagos, Nigeria

  // Add a tile layer (OpenStreetMap here)
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
  }).addTo(map);

  // Add a marker
  L.marker([6.5244, 3.3792])
    .addTo(map)
    .bindPopup('This is Lagos!')
    .openPopup();
