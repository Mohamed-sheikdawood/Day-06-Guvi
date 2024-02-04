class Movie {
    constructor(title, studio, rating = "PG") {
      this.title = title;
      this.studio = studio;
      this.rating = rating;
    }
  
    static getPG(movies) {
      return movies.filter(movie => movie.rating === "PG");
    }
  }
  
 
  var moviesArray = [
    new Movie("Movie1", "Studio1", "PG"),
    new Movie("Movie2", "Studio2", "R"),
    new Movie("Movie3", "Studio3", "PG-13"),
    new Movie("Movie4", "Studio4", "PG")
  ];
  
  var pgMoviesArray = Movie.getPG(moviesArray);
  console.log(pgMoviesArray);

  var casinoRoyale = new Movie("Casino Royale", "Eon Productions", "PG-13");
  
  