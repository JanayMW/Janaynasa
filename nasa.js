let baseURL = 'https://api.nasa.gov/planetary/apod';
const key = 'gkcNtRPzeVcSBvGjQB6N85lOvqGc4a4YyaJ6aedR';


const card = document.querySelector('.card');
const cardBody = document.querySelector('.card-body');
const moreInfoBtn = document.querySelector('.btn');
const modalBody = document.querySelector('.modal-body');
const modalTitle = document.querySelector('.modal-title');


fetch(`${baseURL}?api_key=${key}`)
  .then(response => response.json())
  .then(json => displayImage(json));

function displayImage(spaceObject) {
    console.log(spaceObject);

    let img = document.createElement('img');
    img.className = 'card-img-top';
    img.src = spaceObject.url;

   let title = document.createElement('h1');
   title.className = 'card-title';
   title.innerText = spaceObject.title;
   title.style = 'font-family: nasalization;';
    
   let date = document.createElement('p');
   date.className = 'card-text';
   date.innerText = spaceObject.date;
}
   
   
   








