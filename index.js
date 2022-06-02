/*let posts = [
    {title: 'Post One', body: 'This is post one', author:'Mike'},
    {title: 'Post Two', body: 'This is post two', author:'Mike'}
];


function getPosts() {
    setTimeout(() => {
        let output = '';
        posts.forEach(post => {
            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output;
    }, 2000);
}


function createPost(post){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post);
            const error = false;
            if(!error){
                resolve();
            }
            else{
                reject('Error: Something went wrong');
            }
        }, 2000);
    });
}
*/

//createPost({title: 'Post Three', body: 'This is post three', author:'Mike'}).then(getPosts).catch(err => console.log(err));
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