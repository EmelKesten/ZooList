// Napraviti niz od 10 brojeva. Napraviti varijablu sum. U svakoj iteraciji uvecati sum za vrijednost trenutnog clana niza.
// Napraviti niz objekata footballClubs. Svaki club bi trebao da ima sljedece properties : const club = { name: "Manutd", playInFirstLeague: true, wonLeague: [1919, 1922, 1933, 1948, 1992, 2020]}. 
// Vazno je napomenuti da wonLeague kreirate od manje godine prema vecoj kao u primjeru.
// Postoje i klub koji nije nikad osvojio title const club1 = { name: "Everton", playInFirstLeague: false, wonLeague: []}. 
// Prvi zadatak je da kreirate novi niz klubova koji su osvoji ligu barem jednom. 
// Drugi zadatak je da kreirate niz klubova koji igraju prvu ligu 
// Uzeti prvi objekat samo kao ovaj sto sam ja kreirao const club = { name: "Manutd", playInFirstLeague: true, wonLeague: [1919, 1922, 1933, 1948, 1992, 2020]} i izracunati prije koliko je zadnji put
// Manutd osvojio ligu. Trenutna godina je 2022 :) 
// Uzeti prvi club const club = { name: "Manutd", playInFirstLeague: true, wonLeague: [1919, 1922, 1933, 1948, 1992, 2020]} i 
// drugi klub const club1 = { name: "Arsenal", playInFirstLeague: true, wonLeague: [1919, 1922, 1948, 1992, 2020]} i koristeci if else isprintati klub koji je osvojio vise titula

/*
// 1)
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
let sum = 0;
for(let i = 0; i<arr.length; i++){
    sum += arr[i]
}

// 2)
const footballClubs = [
    {
        name: "Manutd",
        playInFirstLeague: true, 
        wonLeague: [1919, 1922, 1933, 1948, 1992, 2020]
    },
    { 
        name: "Arsenal", 
        playInFirstLeague: true, 
        wonLeague: [1919, 1922, 1948, 1992, 2020]
    },
    { 
        name: "Everton", 
        playInFirstLeague: false, 
        wonLeague: []
    },
    {
        name: 'idk1',
        playInFirstLeague: false,
        wonLeague:[],
    },
    {
        name: 'BiH',
        playInFirstLeague: true,
        wonLeague:[2000]
    }
]

// 3)
const wonLeagueAtLeastOnce = []

for(let i = 0; i<footballClubs.length; i++){
    if(footballClubs[i].wonLeague.length>0){
        wonLeagueAtLeastOnce.push(footballClubs[i])
    }
}

// 4)
/*const playInFirstLeauge = []

for(let i = 0; i<footballClubs.length; i++){
    if(footballClubs[i].playInFirstLeague){
        playInFirstLeauge.push(footballClubs[i])
    }
}

// 5)
let wonBefore = 2022 - footballClubs[0].wonLeague[footballClubs[0].wonLeague.length-1]
console.log(wonBefore)

// 6)
for(let i = 0; i<footballClubs.length; i++){
    if(footballClubs[i].wonLeague.length > 1){
        console.log(footballClubs[i].name)
    }
}*/


/*
const btn = document.querySelector('#btn');
const div = document.querySelector('.container');



addEventListener('click', counter)

const colors = ['#e6194b', '#3cb44b', '#ffe119', '#4363d8', '#f58231', '#911eb4', '#46f0f0', '#f032e6', '#bcf60c', '#fabebe', '#008080', '#e6beff', '#9a6324', '#fffac8', '#800000', '#aaffc3', '#808000', '#ffd8b1', '#000075', '#808080', '#ffffff', '#000000']
let sec = 0;
div.innerHTML = sec
div.style.color = colors[0]

function counter() {
    btn.style.display = 'none'
    let i = 1; 
    const myInterval2 = setInterval(() => {
        i++
        sec++
        div.innerHTML= sec
        if(i<colors.length){
            div.style.color = colors[i]
        }
        if(sec > 20){
            div.style.color = colors[0]
            window.clearInterval(myInterval2)
            sec = 0
            div.innerHTML = 0
            btn.style.display = 'flex'
            div.style.color = colors[0]
        }
    }, 1000);
}


*/


/*
let array =[];
for(let i = 0; i<products.length; i++){
    if(products[i].onStock){
        array.push(products[i])
    }
}
*/





//table


/*
const products = [
    {name: 'milk', price:'22', onStock:true},
    {name: 'apple', price:'12', onStock:false},
    {name: 'coffe', price:'5', onStock:true},
    {name: 'chocolate', price:'5', onStock:false},
    {name: 'oil', price:'18', onStock:true}
]



const div = document.querySelector('.container')
const table = document.createElement('table');

const head = document.createElement('tr');
const product = document.createElement('th');
const price = document.createElement('th');
const onStock = document.createElement('th');
product.innerHTML='Product'
price.innerHTML='Price'
onStock.innerHTML='On Stock'
head.appendChild(product)
head.appendChild(price)
head.appendChild(onStock)
table.appendChild(head)


products.forEach((product)=>{
    const row = document.createElement('tr');
    const coll=document.createElement('td');
    const coll2 = document.createElement('td');
    const coll3 = document.createElement('td');
    coll.innerHTML= product.name
    coll2.innerHTML= product.price
    coll3.innerHTML= product.onStock
    row.appendChild(coll)
    row.appendChild(coll2)
    row.appendChild(coll3)
    table.appendChild(row)
})
div.appendChild(table)






//2) return the square of array of numbers




const numbers = [1, 2, 4, 5, 10]

const square = numbers.map((number)=>{
    return Math.pow(number, 2)
})

console.log('2) return the square of array of numbers  ' + square)



//3) return name initial

const string = 'George Raymond Richard Martin'

const initials = string.split(' ').map((string)=>{
    return string[0]
}).join('')

console.log('3) return name initial  ' + initials)






//4) return the youngest, oldest and the age difference




const people = [
{
    name: 'John',
    age: 13
},
{
    name: 'Mark',
    age: 56,
},
{
    name: 'Rachel',
    age: 45,
},
{
    name: 'Nate',
    age: 67,
},
{
    name: 'Jeniffer',
    age: 65,
}
];

const age = people.map((person)=>{
    return person.age
})

const result = [Math.min(...age), Math.max(...age), Math.max(...age) - Math.min(...age)]

console.log('4) return the youngest, oldest and the age difference   '+ result)



*/
/*const artists = ['Drake',
    'Olivia Rodrigo',
    'the Weeknd',
    'Justin Bieber',
    'Doja Cat',
    'Ariana Grande',
    'DaBaby',
    'Lil Baby',
    'Lil Nas X',
    'Dua Lipa',
    'BTS',
    'Lil Durk',
    'SZA',
    'GIVEON',
    'Young Thug',
    'the Kid LAROI',
    'Bruno Mars/Anderson.Paak (Silk Sonic) (tie)',
    'Ed Sheeran',
    'Megan Thee Stallion',
    'Pop Smoke',
    'Billie Eilish',
    '24kGoldn/iann dior (tie)',
    'Cardi B',
    'J. Cole',
    'Daniel Caesar',
    'Polo G',
    'Jack Harlow',
    'Kanye West',
    'Chris Brown',
    'Taylor Swift'
]



const prev = document.querySelector('#prev');
const next = document.querySelector('#next');
const artist = document.querySelector('.artist');


prev.addEventListener('click', prevSong);
next.addEventListener('click', nextSong);

let currentIndex = 0;
artist.innerHTML = artists[currentIndex];
if(currentIndex === 0){
    prev.classList.add('disabled')
}
else{
    prev.classList.remove('disabled')
}
function prevSong(){
    if(currentIndex === 0){
        prev.classList.add('disabled')
    }
    else if(currentIndex  > 0){
        prev.classList.remove('disabled')
        artist.classList.add('slider')
        setTimeout(()=>{
            artist.classList.remove('slider')
        }, 2500)
        artist.innerHTML = artists[currentIndex];
        currentIndex--;
    }
}

function nextSong(){
    if(currentIndex === artists.length - 2){
        next.classList.add('disabled')
    }
    artist.classList.add('slider')
    setTimeout(()=>{
        artist.classList.remove('slider')
    }, 2500)
    currentIndex++;
    artist.innerHTML = artists[currentIndex];
}
*/

/*const arr = ['damir', 'sandi', 'ivan', 'mak', 'nidal']

function upperCase(array){
    let newArray = [];
    for(let i = 0; i<array.length; i++){
        newArray.push(array[i].charAt(0).toUpperCase() + array[i].slice(1))
    }
    return newArray
}

console.log(upperCase(arr))*/



/*function isValueSame(num1, num2){
    let newValue
    let num
    if(num1 === num2){
        num = num1+num2
    }
    return num * 3
}

console.log(isValueSame(10, 10))*/



/*function py(string){
    if(string.startsWith('Py')){
        return string
    }
    else{
        return 'Py'+string
    }
}

console.log(py('ohdH'))*/

/*
function start(string){
    return string.charAt(0) + string + string.charAt(0)
}*/


/*function getDate(){
    const date = new Date();
    const day = date.getDay();
    const days = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];
    console.log("Today is : " + days[day] + ".");
    const hour = date.getHours();
    const minute = date.getMinutes();
    const second = date.getSeconds();
    console.log('Current time is: ' + hour + ' : ' + minute + ' : ' + second)
}
*/



/*
const btn1 = document.querySelector('#button1')
const div1 = document.querySelector('.div1')
const btn2 = document.querySelector('#button2')
const div2 = document.querySelector('.div2')
const btn3 = document.querySelector('#button3')
const div3 = document.querySelector('.div3')

const randomColor = () =>  {
    return "#" + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0').toUpperCase();
}
const randomFontSize = () => {
    return Math.floor(Math.random()*40) + 'px'
}

btn1.addEventListener('click', ()=>{changeColor(div1)})
btn2.addEventListener('click', ()=>{changeColor(div2)})
btn3.addEventListener('click', ()=>{changeColor(div3)})

function changeColor(div){
    const color = randomColor()
    div.style.backgroundColor = color;
    div.style.fontSize = randomFontSize();
    if(color === '#000000'){
        div.style.color = 'white'
    }
}
*/
/*
/*function arrayplusone(array) {
  const newArray = [];
  for(let i = 0; i<array.length; i++){
    newArray.push(array[i] + 1);
  }
  return newArray;
}

console.log(arrayplusone([2, 4, 7,]))*/




/*function sumtrue(x, y){
  if(x + y <= 10){
    return true;
  }
  else{
    return false;
  }
}

console.log(sumtrue(1, 11))*/


/*function returnlength(string){
  return string.length;
}*/



/*function parameter(text){
  if(text === undefined){
    return false;
  }
  if(typeof(text) !== "string"){
    return false;
  }
  if(text.length<=4){
    return false;
  }
  return true
}

console.log(parameter("ja sam emel"))*/


/*function smthn(array){
  const newArray = [];
  if(array === undefined){
    return false;
  }
  if(array.length<3){
    return false;
  }
  for(let i = 0; i<array.length; i++){
    newArray.push(array[i].toUpperCase())
  }
  return newArray
}

console.log(smthn([]))*/





/*function prosjekOcjena(array){
  let sum = 0
  for(let i = 0; i<array.length; i++){
    sum += array[i]
  }
  let prosjek = sum / array.length
  return prosjek;
}

const matematika = [1, 2, 3, 4, 5, ];
const bosanski = [3, 4, 5, 4, 5, 5,];
const engleski = [5, 4, 5, 3,];

function suma(array1, array2, array3){
  let prosjek = 0;
  let prosjek1 = prosjekOcjena(array1);
  let prosjek2 = prosjekOcjena(array2);
  let prosjek3 = prosjekOcjena(array3);

  const Prosjeksum = prosjek1+prosjek2+prosjek3;
  return Math.round(Prosjeksum/3)
}





function changeImageSource(){
  const randomNumber = Math.floor(Math.random()*4)+1;
  const img = document.getElementById("img1");
  img.src = "/img/img"+randomNumber+".jpg"
}*/

/*console.log("for calculating the pythagorean theroem in centimeters type pitagorinaTeoremaCM");
console.log("for calculating the pythagorean theroem in meters type pitagorinaTeoremaM");
console.log("for calculating the pythagorean theroem in milimeters type pitagorinaTeoremaMM");
function pitagorinaTeoremCM(x, y){
  return Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2))+" "+"cm2";
}

function pitagorinaTeoremM(x, y){
  return Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2))+" "+"m2";
}

function pitagorinaTeoremMM(x, y){
  return Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2))+" "+"mm2";
}*/




/*const mat = [5, 5, 4, 2, 5];
const fiz = [4, 4, 5, 4];
const hem = [5, 5, 3, 2, 5, 4]
const eng = [5, 5, 5, 5, 4, 5, 4, 4]
  function prosjekPredmeta(predmet){
      let sum = 0;
      for(let i = 0; i<predmet.length; i++){
          sum += predmet[i];
      }
      const prosjek = sum / predmet.length;
      return prosjek;
  }
  function fullProsjek(predmet1, predmet2, predmet3, predmet4){
      const predmetprosjek1 = prosjekPredmeta(predmet1);
      const predmetprosjek2 = prosjekPredmeta(predmet2);
      const predmetprosjek3 = prosjekPredmeta(predmet3);
      const predmetprosjek4 = prosjekPredmeta(predmet4);
    const zbirProsjeka = predmetprosjek1+predmetprosjek2+predmetprosjek3+predmetprosjek4;
    return zbirProsjeka / 4;
  }*/

/*const obj = {
  ime: "Emel",
  prezime: "Kesten",
  razred: "VIII-2",
  daLiUci: () => {
    console.log(false);
  }
}*/





/*const days = ["monday", "tuesday", "wensday", "thursday", "friday", "saturday", "sunday"];


function printDays(days){
  const randomNumber = Math.floor(Math.random()*days.length)
  console.log(days[randomNumber])
  if(days[randomNumber]===days[5] || days[randomNumber]===days[6]){
    console.log("ok")
  }
}

printDays(days)*/


/*function shuffle(array) {
  let currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}

// Used like so
var arr = [2, 11, 37, 42];
shuffle(arr);
console.log(arr);*/
/*const timer = document.getElementById('hi');

let hr = 0;
let min = 0;
let sec = 0;
let stoptime = true;

function startTimer() {
  if (stoptime == true) {
        stoptime = false;
        timerCycle();
    }
}
function stopTimer() {
  if (stoptime == false) {
    stoptime = true;
  }
}

function timerCycle() {
    if (stoptime == false) {
    sec = parseInt(sec);
    min = parseInt(min);
    hr = parseInt(hr);

    sec = sec + 1;

    if (sec == 60) {
      min = min + 1;
      sec = 0;
    }
    if (min == 60) {
      hr = hr + 1;
      min = 0;
      sec = 0;
    }

    if (sec < 10 || sec == 0) {
      sec = '0' + sec;
    }
    if (min < 10 || min == 0) {
      min = '0' + min;
    }
    if (hr < 10 || hr == 0) {
      hr = '0' + hr;
    }

    timer.innerHTML = hr + ':' + min + ':' + sec;

    setTimeout("timerCycle()", 1000);
  }
}

function resetTimer() {
    timer.innerHTML = '00:00:00';
    stoptime = true;
    hr = 0;
    sec = 0;
    min = 0;
}*/




//FACTORY FUNCTION
/*
function pieMaker(weight, color){
  return{
    weight,
    color,
    print(){
      console.log('pie')
    }
  }
}



const pie = pieMaker('2kg', 'blue')

console.log(pie)





//constructor function


function PieMaker(weight, color){
  this.weight = weight;
  this.color = color
  this.print = function(){
    console.log('pie')
  }
}

const pie2 = new PieMaker('2kg', 'blue')
console.log(pie2)*/

/*

const btn = document.querySelector('.btn');
const p = document.querySelector('.errorSpot');



const pc = {
  brand: 'Apple',
  model: 'Macbook Pro',
  get fullNameAndModel(){
    return `${pc.brand} ${pc.model}`
  },
  set fullNameAndModel(value){
    if(!value){
      throw new Error('value is required')
    }
    if(value.length < 2){
      throw new Error('must have name and model')
    }
    const parts = value.split(' ')
    this.brand = parts[0]
    this.model = parts[1]
  }
}
btn.addEventListener('click', tryString)

function tryString(){
  try{
    pc.fullNameAndModel = 'AppleMacBookPro'
  }
  catch(e){
    p.innerHTML = e
  }
}



*/



//const laptop = pc.fullNameAndModel

//console.log(laptop)


/*
function sumNumbers(...numbers){
  let sum = 0;
  for(let i = 0; i<numbers.length; i++){
    sum += numbers[i];
  }
  return sum;
}

console.log(sumNumbers(1,2,3,4,5,6,7,8,9,10))	
*/



/*const video = {
  title: 'Play One',
  tags: ['action', 'adventure', 'comedy'],
  playVideo: function(){
    this.tags.forEach((tag)=>{
      console.log(this.title, tag)
    })
  }
}

video.playVideo()
*/






/*
const div = document.querySelector('.div');
let input = document.getElementById("myInput");
const toDoList = [];

let index = localStorage.getItem('index') || 0;




if(localStorage.getItem('toDoList')){
  const localToDo = JSON.parse(localStorage.getItem('toDoList'));
  toDoList.push(...localToDo);
  toDoList.forEach((item)=>{
    const miniDiv = document.createElement('div');
    miniDiv.className = 'miniDiv';
    const p = document.createElement('p');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.classList.add('checkbox');
    checkbox.value = item.index
    p.innerHTML = item.text;
    if(item.done){
      miniDiv.classList.add('done');
      checkbox.checked = true;
    }
    miniDiv.appendChild(checkbox)
    miniDiv.appendChild(p);
    div.appendChild(miniDiv);
})
}






function createToDo(input){
  toDoList.push({
    text: input.value,
    done: false,
    index: index
  });
  localStorage.setItem('toDoList', JSON.stringify(toDoList));
  div.innerHTML = "";
  index++;
  localStorage.setItem('index', index);
  toDoList.forEach((item)=>{
    const miniDiv = document.createElement('div');
    miniDiv.className = 'miniDiv';
    const p = document.createElement('p');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.classList.add('checkbox');
    checkbox.value = item.index
    p.innerHTML = item.text;
    miniDiv.appendChild(checkbox)
    miniDiv.appendChild(p);
    div.appendChild(miniDiv);

})
}



input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    if(input.value){
      createToDo(input);
      input.value = "";
    }

  }
})


const checkbox = document.querySelectorAll(".checkbox");

checkbox.forEach((item)=>{
  item.addEventListener('click', (e)=>{
    isChecked(e);
})
})

function isChecked(e){
  const index = e.target.value;
  const item = toDoList.find((item)=>{
    return item.index == index
  })
  item.done = !item.done;
  localStorage.setItem('toDoList', JSON.stringify(toDoList));
  if(item.done){
    e.target.parentElement.classList.add('done');
  }
  else{
    e.target.parentElement.classList.remove('done');
  }
}
console.log(checkbox)
*/