// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(movies) {
  let directors = movies.map((elem) => {
    return elem.director
  });
  return directors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
  let dramaSSFilms = movies.filter((elem) => {
    if (elem.director === 'Steven Spielberg' && elem.genre.includes('Drama')) {
      return true;
    }
  // instead lines 14 and 15, why just this one: return elem.director === 'Steven Spielberg' && elem.genre.includes('drama'); doesn't run
  });
  return dramaSSFilms.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) {
  if (movies.length === 0) {
    return 0;
  }
  let average = movies.reduce ((sum, elem) => {
    if (!elem.score) {
      return sum;
    }
    else {
      return sum + elem.score;
    }
  }, 0)
  return Number((average/movies.length).toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movies) {
  let dramaMovies = movies.filter((elem) => {
    return elem.genre.includes('Drama')
    });
  if (dramaMovies.length === 0) {
    return 0;
  }
  let dramaScore = dramaMovies.reduce((sum, elem) => {
    if (!elem.score){
      return sum;
    }
    else {
      return sum + elem.score;
    }
  }, 0);
  return Number((dramaScore / dramaMovies.length).toFixed(2));
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
  let clone = JSON.parse(JSON.stringify(movies));
  let sortedArray = clone.sort((elem1, elem2) => {
    if (elem1.year > elem2.year) {
      return 1;
    }
    else if (elem1.year < elem2.year) {
      return -1;
    }
    else {
        if (elem1.title > elem2.title) {
          return 1;
        }
        else if (elem1.title < elem2.title) {
          return -1;
        }
        else {
          return 0;
        }
    }
  });
return sortedArray;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {
  let arrTitles = movies.map ((elem) => {
    return elem.title;
  });

  arrTitles.sort();

  return arrTitles.slice(0,20);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(movies) {
  let movieMins = movies.map ((elem) => {
    let hours = 0;
    let mins = 0;
    if (elem.duration.infexOf('h') !== -1) {
      hours = elem.duration[0] * 60;
    }
  });
  return
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg() {}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg,
  };
}
