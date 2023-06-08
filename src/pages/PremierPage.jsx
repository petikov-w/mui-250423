
// import { Helmet } from 'react-helmet';
import { ListCardsU } from '../components/ListCardsU';

export const PremierPage = (props) => { 

 const query = process.env.REACT_APP_API_PREMIERS;   
//  const pathPage='/?page=';
                
    
    return (
        <>
            {/* <Helmet>
                <title>Cinema Box - Главная</title>
            </Helmet> */}           
            {/* <h2>Премьеры этого месяца</h2>
            <p>Это страница премьер фильмов</p>   */}
            {/* <ListCardsNoPagination  />              */}
            <ListCardsU query={query} typePage="premier"/>                
        </>
           
    );
};
