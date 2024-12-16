const thoughts = [
    "Believe in yourself and all that you are.",
    "Act as if what you do makes a difference. It does.",
    "Success is not how high you have climbed, but how you make a positive difference to the world.",
    "Stay positive. Better days are on their way.",
    "Do what is right, not what is easy nor what is popular.",
  ];
  
  const thoughtElement = document.getElementById('thought');
  const newThoughtButton = document.getElementById('new-thought');
  const saveFavoriteButton = document.getElementById('save-favorite');
  
  // Load a random thought
  function loadThought() {
    const randomIndex = Math.floor(Math.random() * thoughts.length);
    thoughtElement.textContent = thoughts[randomIndex];
  }
  
  // Save favorite thought
 /* saveFavoriteButton.addEventListener('click', () => {
    const favorite = thoughtElement.textContent;
    chrome.storage.sync.get({ favorites: [] }, (data) => {
      const updatedFavorites = [...data.favorites, favorite];
      chrome.storage.sync.set({ favorites: updatedFavorites }, () => {
        alert('Saved to favorites!');
      });
    });
  });*/
  
  // Load a new thought on button click
  newThoughtButton.addEventListener('click', loadThought);
  
  // Initial thought load
  loadThought();
  