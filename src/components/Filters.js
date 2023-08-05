
// Функция добавляющяя ноль впереди изображения часа или минуты, если они содержат только один знак
export const filmsToCountry = (films, country) => { 
  let result=[];
  for ( const film of films) {
    for (const item of film.countries) {
      if(item.country === country) result.push(film);
    }    

  };
  return result;
};  

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
