const pokedex = document.getElementById('pokedex');
const promises = [];
const fetchPokemon = () => {
    for(let i = 1; i<= 150; i++); {
    const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
    promise.push(fetch(url)
    .then((res) => res.json()));
    }
    promise.all(promises).then(results => {
        const pokemon = results.map((data) => ({
            name: data.name,
            id: data.id,
            image: data.sprites['front_default'],
            type: data.types
            .map((type) => type.type.name)
            .join(', ')

        }));
    });   
};

const displayPokemon = (pokemon => {
    const html = `<li>Bulbasaur</li>`;
    pokedex.innerHTML = html;
})

fetchPokemon();