const promises = [];
const fetchPokemon = () => {
    for(let i = 1; i <= 150; i++ );
    const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
    promises.push(fetch(url).then((res) => res.json()));

    
    promises.all(promises).then(data => {
        const pokemon = results.map((data) => ({
            name: data.name,
            id: data.id,
            image: data.sprits['front_default'],
            type: data.types.map(type => type.type.name).join(', ')
        })); 
        console.log(pokemon);
    })
}
fetchPokemon();