let XMLHttpRequest = require('xhr2')
let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://restcountries.com/v3.1/all' )
xhr.onload = function (){
let users = JSON.parse(xhr.responseText);

users.forEach((value)=>{
console.log('NAME OF THE COUNTRY '+Object.entries(value.name))

console.log('CAPITAL OF THE COUNTRY '+value.capital)
console.log('FLAG OF THE COUNTRY '+value.flag)
console.log()


})


}


xhr.send();