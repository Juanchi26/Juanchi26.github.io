let input = document.getElementById("input");
let button = document.getElementById("boton");
let pokemoncontainer = document.getElementById("contenedor");
let remover = document.getElementById("remover")
let quitar = document.getElementById("quitar")

button.addEventListener("click", function (e) {
    e.preventDefault()
    function TraerPokemon(pokemon) {
        fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}/`)
            .then(res => res.json())
            .then(data => CrearPokemon(data))
            .catch(error => alert("No se encontro el pokemon"))
    }
    TraerPokemon(input.value.toLowerCase());
})

quitar.addEventListener("click", function(){
    pokemoncontainer.innerHTML = ""
})


function CrearPokemon(pokemon) {
    pokemoncontainer.innerHTML = ""
    let img = document.createElement("img");
    img.src = pokemon.sprites.front_default;

    let h3 = document.createElement("h3");
    h3.textContent = pokemon.name;


    let div = document.createElement("div");
    div.appendChild(img);
    div.appendChild(h3);

    pokemoncontainer.appendChild(div);

}
