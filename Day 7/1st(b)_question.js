let XMLHttpRequest = require('xhr2')
let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://restcountries.com/v3.1/all' )
xhr.onload = function (){

  let users = JSON.parse(xhr.responseText);
  

  let val =Object.entries(users)
  let result =val.filter((value) =>{
   return value[1]['population'] <200000
  })
  console.log(result.filter((val)=>{
    return val[0],val[1]

  }))






  


}

xhr.send();