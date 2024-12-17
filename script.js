const thoughtElement = document.getElementById('thought');
const newThoughtButton = document.getElementById('new-thought');

let thoughts = []; 

// Fetch JSON data
fetch('thought.json')
  .then(response => {
    if (!response.ok) {
      throw new Error('Error fetching data');
    }
    return response.json();
  })
  .then(data => {
    thoughts = data; // Store the thoughts array

    // Load an initial random thought
    loadThought();
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });

// Function to load a random thought with author
function loadThought() {
  const randomIndex = Math.floor(Math.random() * thoughts.length);
  const thought = thoughts[randomIndex];

  thoughtElement.textContent = `${thought[1]} - ${thought[0]}`;
}

// Event listener for the 'New Thought' button
newThoughtButton.addEventListener('click', loadThought);

