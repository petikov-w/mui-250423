import React from 'react';
import {useNavigate, useLocation} from 'react-router-dom';
// import { Helmet } from 'react-helmet';

// import {PosterFilm, BackButton, InfoBoxLeft, InfoBoxRight,SingleFilmSection} from './styles/Single.styled';

export const Single = (props) => {
    
    const {film} = props;
    const navigate = useNavigate();
    const goBack = () => navigate(-1);   
    const preLoader = '';
    // const preLoader = <h3>Загрузка...</h3>;
    const loc = useLocation();
    // console.log('--single--> ', loc);
    // localStorage.setItem('isSingle', true);
    return (
        <>
            { film.length !== 0 ? 
            <>
                {/* <Helmet>
                    <title>Cinema Box - {film.nameRu}</title>
                </Helmet> */}
                <h1>{film.nameRu}</h1>

                {/* <SingleFilmSection>
                    <InfoBoxLeft>
                        <PosterFilm src={film.posterUrl}></PosterFilm>                                   
                        <BackButton onClick={goBack}>Назад</BackButton> 
                    </InfoBoxLeft>  
                    <InfoBoxRight>    
                        <h5>Краткое содержание: </h5> 
                        <p>{film.description}</p>
                        <h5>Год производства : <span style={{color:'blue'}}>{film.year}</span></h5>
                    </InfoBoxRight>
                </SingleFilmSection>  */}
            </> :  preLoader}         
        </>      
          
    );
};








            