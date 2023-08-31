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
  
  }
  
  let CasinoRoyale = new film('Casino Royale','Eon Productions',13)
  CasinoRoyale.movieinfo()
  console.log();
  console.log();
  
  
  //to check casinoroyale is instanceof film
  console.log(CasinoRoyale instanceof film)