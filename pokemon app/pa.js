const pokemonContainer = document.getElementById("pokemonContainer");
const searchBox = document.getElementById("searchBox");

let allPokemon = []; 
async function loadPokemon() {
  const url = "https://pokeapi.co/api/v2/pokemon?limit=200";
  const response = await fetch(url);
  const data = await fetch(url);
  const result = await response.json();

  result.results.forEach(pokemon => {
    fetchPokemonData(pokemon);
  });
}
async function fetchPokemonData(pokemon) {
  const res = await fetch(pokemon.url);
  const data = await res.json();

  const pokemonObj = {
    name: data.name,
    image: data.sprites.front_default
  };

  allPokemon.push(pokemonObj);
  displayPokemon(allPokemon);
}
function displayPokemon(pokemonList) {
  pokemonContainer.innerHTML = "";

  pokemonList.forEach(p => {
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
      <img src="${p.image}" alt="${p.name}">
      <h3>${p.name.toUpperCase()}</h3>
    `;

    pokemonContainer.appendChild(card);
  });
}
searchBox.addEventListener("input", () => {
  const text = searchBox.value.toLowerCase();

  const filtered = allPokemon.filter(p =>
    p.name.toLowerCase().includes(text)
  );

  displayPokemon(filtered);
});
loadPokemon();
