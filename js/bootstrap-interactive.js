const pokemonArray = [];



document.querySelector('#saveNewPokemon').addEventListener('click', (e) => {
    e.preventDefault();
    let pokemonName = document.querySelector('#pokemonName').value;
    let number = document.querySelector('#pokemonNumber').value;
    let feet = document.querySelector('#pokemonFeet').value;
    let inches = document.querySelector('#pokemonInches').value;
    let weight = document.querySelector('#pokemonWeight').value;
    let description = document.querySelector('#pokemonDescription').value;

    let form = document.getElementById("addPokemonForm");
    let inputs = form.getElementsByClassName("form-check-input");
    let typeArray = [];

    for (let i = 0; i < inputs.length; i++) {
        if (inputs[i].type === "checkbox" && inputs[i].checked) {
            typeArray.push(inputs[i].value);
        }
    }
    let typeString = typeArray.join(', ');

    const pokemon = {
        name: `${pokemonName}`,
        number: `${number}`,
        description: `${description}`,
        feet: `${feet}`,
        inches: `${inches}`,
        weight: `${weight}`,
        type: `${typeString}`
    }

    const newCard = `<!-- New Pokemon -->
            <div id="${pokemonName}-card" class="col-md-6 col-lg-3 col-xxl-2">
                <div class="card container mb-4" style="width: 18rem;">
                    <div class="pokemon-name-number d-flex justify-content-between mt-2">
                        <h4 class="card-title">${pokemonName}</h4>
                        <h4 class="card-title">#${number}</h4>
                    </div>
                    <div class="img-container">
                        <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/${number}.png"
                            class="card-img-top" alt="Photo of ${pokemonName}">
                    </div>

                    <div class="card-content">
                        <div class="description-container mb-3">
                            <p class="card-text">
                                ${description}
                            </p>
                        </div>

                        <div id="${pokemonName}-stats" class="row mb-3">
                            <div id="${pokemonName}-height-container" class="col-6 mb-3">
                                <div class="height-title me-2">
                                    Height:
                                </div>
                                <div class="height-content">
                                    ${feet}' ${inches}"
                                </div>
                            </div>

                            <div id="${pokemonName}-weight-container" class="col-6 mb-3">
                                <div class="weight-title me-2">
                                    Weight:
                                </div>
                                <div class="weight-content">
                                    ${weight} lbs
                                </div>
                            </div>

                            <div id="${pokemonName}-type-container" class="col-12 mb-3">
                                <div class="type-title">
                                    Type:
                                </div>
                                <div class="type-content">
                                    ${typeString}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="container mb-3 d-flex justify-content-end">
                            <button id="update-${pokemonName} type="button" class="btn btn-warning" data-bs-toggle="modal"
                                data-bs-target="#updateModal">Update</button>
                            <button id="release-${pokemonName}" class="release btn btn-success ms-2">Release</button>
                        </div>
                </div>
            </div>`;

    window.localStorage.setItem(`pokemon${number}`, JSON.stringify(pokemon));
    document.querySelector('.row').insertAdjacentHTML("beforeend", newCard);
    document.querySelector('#addPokemonForm').reset();
});

// takes data from local storage and puts it into an array
document.addEventListener('DOMContentLoaded', event => {
    event.preventDefault();


    for (let i = 0; i < localStorage.length; i++) {
        pokemonArray.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
    }

    pokemonArray.forEach(pokemon => {
        const card = `<!-- New Pokemon -->
        <div id="${pokemon.name}-card" class="col-md-6 col-lg-3 col-xxl-2">
            <div class="card container mb-4" style="width: 18rem;">
                <div class="pokemon-name-number d-flex justify-content-between mt-2">
                    <h4 class="card-title">${pokemon.name}</h4>
                    <h4 class="card-title">#${pokemon.number}</h4>
                </div>
                <div class="img-container">
                    <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/${pokemon.number}.png"
                        class="card-img-top" alt="Photo of ${pokemon.name}">
                </div>

                <div class="card-content">
                    <div class="description-container mb-3">
                        <p class="card-text">
                            ${pokemon.description}
                        </p>
                    </div>

                    <div id="${pokemon.name}-stats" class="row mb-3">
                        <div id="${pokemon.name}-height-container" class="col-6 mb-3">
                            <div class="height-title me-2">
                                Height:
                            </div>
                            <div class="height-content">
                                ${pokemon.feet}' ${pokemon.inches}"
                            </div>
                        </div>

                        <div id="${pokemon.name}-weight-container" class="col-6 mb-3">
                            <div class="weight-title me-2">
                                Weight:
                            </div>
                            <div class="weight-content">
                                ${pokemon.weight} lbs
                            </div>
                        </div>

                        <div id="${pokemon.name}-type-container" class="col-12 mb-3">
                            <div class="type-title">
                                Type:
                            </div>
                            <div class="type-content">
                                ${pokemon.type}
                            </div>
                        </div>
                    </div>
                </div>

                <div class="container mb-3 d-flex justify-content-end">
                        <button id="update-${pokemon.name}" type="button" class="btn btn-warning" data-bs-toggle="modal"
                            data-bs-target="#updateModal">Update</button>
                        <button id="release-${pokemon.name}" class="release btn btn-success ms-2">Release</button>
                    </div>
            </div>
        </div>`;

        document.querySelector('.row').insertAdjacentHTML("beforeend", card);

        document.querySelector(`#release-${pokemon.name}`).addEventListener('click', e => {
            e.preventDefault();

            let releasePokemon = document.querySelector(`#${pokemon.name}-card`);
            releasePokemon.remove();
            localStorage.removeItem(`pokemon${pokemon.number}`);
        });

        document.querySelector(`#update-${pokemon.name}`).addEventListener('click', e => {
            e.preventDefault();
            let data = JSON.parse(localStorage.getItem(`pokemon${pokemon.number}`));

            let form = document.getElementById("updatePokemonForm");
            let inputs = form.getElementsByClassName("form-check-input");
            let typeArray = [];

            for (let i = 0; i < inputs.length; i++) {
                if (inputs[i].type === "checkbox" && inputs[i].checked) {
                    typeArray.push(inputs[i].value);
                }
            }
            let types = typeArray.join(', ');
            document.querySelector('#update-pokemon-name').setAttribute('value', `${data.name}`);
            document.querySelector('#update-pokemon-number').setAttribute('value', `${data.number}`);
            document.querySelector('#update-pokemon-feet').setAttribute('value', `${data.feet}`);
            document.querySelector('#update-pokemon-inches').setAttribute('value', `${data.inches}`);
            document.querySelector('#update-pokemon-weight').setAttribute('value', `${data.weight}`);
            document.querySelector('#update-pokemon-description').innerText = `${data.description}`;


            document.querySelector('#updatePokemonForm').innerHTML = updateCard;
            const updatePokemon = {
                name: .value,
                number: .value,
                description: document.querySelector('#update-pokemon-description').value,
                feet: document.querySelector('#update-pokemon-feet').value,
                inches: document.querySelector('#update-pokemon-inches').value,
                weight: document.querySelector('#update-pokemon-weight').value,
                type: types
            }
            
            let localKey = localStorage.getItem(`pokemon${data.number}`);
             localKey = localStorage.setItem(`pokemon${data.number}`, JSON.stringify(updatePokemon));
         
        });



    });
});
