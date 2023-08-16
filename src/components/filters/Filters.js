
// Функция фильтрующая список фильмов по году выхода на экраны
const filmsToData = (films, year) => { 
  let result=[];
  for ( const film of films) {
    if(film.year <= year) result.push(film);
  };
  return result;
};  



// Функция фильтрующая список фильмов по стране
export const filmsToCountry = (films, country) => { 
  let result=[];
  for ( const film of films) {
    for (const item of film.countries) {
      if(item.country === country) result.push(film);
    }    

  };
  return result;
};  

// Функция фильтрующая список фильмов по стране и по жанру
export const filmsToCountryAndGenre = (films, country, genre) => { 
  let result=[];
 
  for ( const film of films) {
     let isCountry = false;
     let isGenre = false;
    for (const item of film.countries) {
      if(item.country === country) isCountry=true;
    }    
    for (const item of film.genres) {
      if(item.genre === genre) isGenre=true;
    }     
    if (isCountry && isGenre) result.push(film);     
  };
  return result;
};  


