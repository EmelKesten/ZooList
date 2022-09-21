const baseUrl = 'https://zoo-animal-api.herokuapp.com/animals/rand/10';
const div = document.querySelector('.div');
const container = document.querySelector('.container');

function getAnimals() {
    fetch(baseUrl).then(response => response.json()).then(data => {
            console.log(data);
            let output = '';
            data.forEach(animal => {
                const minidiv = document.createElement('div');
                minidiv.classList.add('animal');
                minidiv.innerHTML = `<p>${animal.name}</p> <p>Type: ${animal.animal_type}</p> <p>Habitat: ${animal.habitat}</p> <p>Place: ${animal.geo_range}</p> <p>Lifespan: ${animal.lifespan} years</p> <br><img class="image" src="${animal.image_link}">`;
                div.appendChild(minidiv);
            });
            if(data){
                container.classList.add('noshow');
            }
        })
        .catch(err => console.log(err));
}



function timeoutFunction() {
    setTimeout(function(){
        getAnimals();
    }, 2000);
}

timeoutFunction()