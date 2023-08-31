
class person{
  constructor(name,age,city,email,phnum){
  this.name = name
  this.age = age
  this.city = city
  this.email = email
  this.phnum = phnum
}
personinfo(){
  console.log(`Name: ${this.name}\nAge: ${this.age}\nCity: ${this.city}\nEmail: ${this.email}\nPhone Number: ${this.phnum}`)
}
Name(){
  console.log(`Name: ${this.name}`)
  
}
Age(){
  console.log(`Age: ${this.age}`)
}
City(){
  console.log(`City: ${this.city}`)
}
Email(){
  console.log(`Email: ${this.email}`)
}
Phnum(){
  console.log(`Phone: ${this.phnum}`)
}

}

let person1= new person('Balaji',21,'Tirupattur','massbalaji000@gmail.com',9344285363)

person1.personinfo();
console.log();
console.log();



person1.Name();
person1.Age();
person1.City();
person1.Email();
person1.Phnum();
