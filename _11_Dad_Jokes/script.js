const jokeEl = document.getElementById('joke');
const jokeBtn = document.getElementById('jokeBtn');

jokeBtn.addEventListener('click', generateJoke);

generateJoke();

async function generateJoke (){
  //llama a la API
  const jokeRes = await fetch('https://icanhazdadjoke.com/', {
    headers: {
			'Accept': 'application/json'
		}
  });

  const joke = await jokeRes.json();

  console.log(joke)
  
  // equipo de la nuevo chiste
  jokeEl.innerHTML = joke.joke;
}