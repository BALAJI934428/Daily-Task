class film{
  constructor(title,studio,rating){
    this.title = title
    this.studio = studio
    if (rating==null){
      this.rating= 'PG'
    }
    else{
      this.rating='PG'+rating
    }
  }
  movieinfo(){
    console.log(`Movie Name: ${this.title}\nStudio: ${this.studio}\nRating: ${this.rating}`)
  }
  getPG(movies){
    return movies.filter((movie)=>movie.rating === 'PG')

  }

}

let CasinoRoyale = new film('Casino Royale','Eon Productions',13)

CasinoRoyale.movieinfo()
console.log();
console.log();


//to get movies with rating PG
let movie1 = new film('Jailer','SunPictures',18)
let movie2 = new film('Beast','SunPictures',)
let movie3 = new film('Leo','7screen',25)
let movie4 = new film('Naaisekar','Lyca',)
let movie5 = new film('KGF','HombaleFilms',33)
//to print the result
console.log('Movies with the Rating PG are:')
let value =movie3.getPG([movie1,movie2,movie3,movie4,movie5])
let result = value.map((e)=>e.title).join(', ')
console.log(result)
console.log()
console.log()



//to check casinoroyale is instanceof film
console.log(CasinoRoyale instanceof film)
