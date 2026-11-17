// console.log("start");

// setTimeout(() => {
//     console.log("setTimeout");
// }, 2000);


// setInterval(() => {
//     console.log("setInterval");
// }, 1000);
// console.log("end");
// API

// fetch('https://dog.ceo/api/breeds/image/random')
//     .then(res => res.json())
//     .then(data => console.log(data))
//     .catch(e => console.log(e))


fetch('https://pokeapi.co/api/v2/pokemon/ditto')
    .then(res => res.json())
    .then(data => console.log(data.name))
    .catch(e => console.log(e))