// Assuming the surf spot data is stored in a JSON file called "surfSpotsData.json"
fetch('jobs-data.json')
  .then(response => response.json())
  .then(data => {
    // Access the surf spots array
    const surfSpots = data.surfSpots;

    // Get the surf spots container element
    const surfSpotsContainer = document.getElementById('surfSpotsContainer');

    // Loop through the surf spots and create the HTML for each spot
    surfSpots.forEach(spot => {
      // Create a div for each surf spot
      const spotDiv = document.createElement('div');
      spotDiv.classList.add('spot');

      // Create the heading for the spot name
      const spotHeading = document.createElement('h3');
      spotHeading.textContent = spot.name;

      // Create the paragraph for the spot description
      const spotDescription = document.createElement('p');
      spotDescription.textContent = spot.description;

      // Create the image element for the spot
      const spotImage = document.createElement('img');
      spotImage.src = spot.image;
      spotImage.alt = spot.name;

      // Append the elements to the surf spots container
      spotDiv.appendChild(spotHeading);
      spotDiv.appendChild(spotDescription);
      spotDiv.appendChild(spotImage);
      surfSpotsContainer.appendChild(spotDiv);
    });
  })
  .catch(error => {
    console.log('Error fetching surf spot data:', error);
  });

  