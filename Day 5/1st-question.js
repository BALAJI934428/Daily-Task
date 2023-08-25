let books = [{
    author: 'sathish',
    pages: 300,
    price: 2000,
    isAvailable: true,
    title: 'dsa'
}, {
    author: 'krish',
    pages: 300,
    price: 2000,
    isAvailable: true,
    title: 'dsa'
},
{
    author: 'sathish',
    pages: 300,
    price: 2000,
    isAvailable: true,
    title: 'dsa'
}];

//for loop

for (i=0;i<books.length;i++){
    console.log(books[i])
}

// for in loop


for (i in books){
    console.log(books[i])
}


// for  of loop


for (book of books){
    console.log(book)
}


// for each loop


books.forEach((element)=>console.log(element))