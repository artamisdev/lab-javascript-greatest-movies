// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {

 const directors = moviesArray.map((element) => {
          return element.director;
    })
    return directors;
};

// PARTE BONUS 

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    const spielberg = moviesArray.filter((element) => {
        return element.director === 'Steven Spielberg' && element.genre.includes('Drama');
      });
     
   return spielberg.length; 
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {

    const avrmovies = moviesArray.reduce((accumulator, element) => {
        return (accumulator + element.score) / moviesArray.length ; 
      },0)

      return avrmovies.round(2);
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {

    let dramaprin = moviesArray.map((element) => {
      return element.genre.includes('Drama');
    })

    const dramaqueen = moviesArray.reduce((accumulator, element) => {
        return (accumulator + element.genre) / dramaprin.length ; 
      },0)    

      return dramaqueen;
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
