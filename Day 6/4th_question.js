
 
let baseFee = 17
let cities = ["Chennai", "Vellore", "Villupuram", ]
let distance = [5, 10, 15]
let customerName = "Balaji"
let customerCity = "Vellore"

console.log("Hello", customerName+'!')
console.log("welcome to the Uber Price calculator")

function getRate(customerCity) {
  function distance(customerCity, index) {
    let finalRate = (distance[index]) * baseFee
    return finalRate
  }
 
  console.log('Current location to '+ customerCity, "rate is:", distance(customerCity, cities.indexOf(customerCity)))
}

getRate(customerCity)
