let XMLHttpRequest = require('xhr2')
const getUSDollar = () => {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "https://restcountries.com/v3.1/all", true);

  xhr.responseType = "json";

  xhr.onload = () => {
    const data = xhr.response;
    const datas = data
      .filter((item) => item?.currencies?.USD)
      .map((value) => value.name);
    console.log('datas', datas);
    
  }
  xhr.send()
}

getUSDollar();