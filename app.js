
const jokeEl = document.getElementById('joke');
const jokeBtn = document.getElementById('jokeBtn');

// Call api
async function generateJoke() {
    try {
      const res = await fetch('https://icanhazdadjoke.com/', {
        headers: {
          'Accept': 'application/json',
        },
      });
       
      if (!res.ok) { // error check
        throw new Error(`HTTP error! Status: ${res.status}`);
      }
  
      const data = await res.json();
      jokeEl.innerText = data.joke;
    } catch (error) { // error catching 
      jokeEl.innerText = 'Failed to fetch a joke. Please try again.';
      console.error('Fetch error:', error);
    }
  }
  

// joke button listener ( waiting to click on new joke )
jokeBtn.addEventListener('click', generateJoke);

// 
generateJoke();
