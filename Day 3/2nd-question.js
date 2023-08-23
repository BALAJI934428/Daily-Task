

let XMLHttpRequest = require('xhr2');

let xhr = new XMLHttpRequest();

xhr.open('GET', 'https://restcountries.com/v3.1/all' );

xhr.onload = function(){
  let data = JSON.parse(xhr.responseText);

let allflags = [];

  for (let user of data){
    allflags.push(user['flags'])
  }
  console.log(allflags)
}
xhr.send();


