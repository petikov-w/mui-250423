// import { Helmet } from 'react-helmet';
import { ListCardsU } from '../components/ListCardsU';

export const MultPage = () => { 

const query = process.env.REACT_APP_API_MULTS;
const pathPage='/mults?page=';

return (
    <>
        {/* <Helmet>
            <title>Cinema Box - Главная</title>
        </Helmet> */}
        {/* <h2>Мультфильмы</h2>
        <p>Это страница мультфильмов</p>    */}

           <ListCardsU query={query} path={pathPage} typePage="mult"/>      
    </>
           
    );
};

