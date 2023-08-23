

let XMLHttpRequest = require('xhr2');

let xhr = new XMLHttpRequest();

xhr.open('GET', 'https://restcountries.com/v3.1/all' );

xhr.onload = function(){
  let data = JSON.parse(xhr.responseText);

let names = [];
let regions = [];
let subregions = [];
let population = [];


  for (let user of data){
    names.push(user['name'])

  }
  for (let user of data){
    regions.push(user['region'])
  }
  for (let user of data){
    subregions.push(user['subregion'])
  }
  for (let user of data){
    population.push(user['population'])
  }
  





  console.log(names)
  console.log();
  console.log();
  console.log();
  console.log();
  console.log('COUNTRY REGIONS ='+ regions)
  console.log();
  console.log();
  console.log();
  console.log();
  console.log('COUNTRY SUBREGIONS ='+ subregions)
  console.log();
  console.log();
  console.log();
  console.log();
  console.log('COUNTRY POPULATION ='+ population)

}
xhr.send();


