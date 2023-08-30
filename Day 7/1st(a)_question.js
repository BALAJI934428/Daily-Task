let XMLHttpRequest = require('xhr2')
let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://restcountries.com/v3.1/all' )
xhr.onload = function (){

  let users = JSON.parse(xhr.responseText);
  

  let val =Object.entries(users)
  let result =val.filter((value) =>{
   return value[1]['region'] == 'Asia'
  })
 console.log(result)





  


}

xhr.send();