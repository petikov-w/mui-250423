// import { Helmet } from 'react-helmet';


import { ListCardsU } from '../components/ListCardsU';

export const SerialPage = () => { 
    const query = process.env.REACT_APP_API_SERIALS;
    const pathPage='/serials?page=';   
    
    return (
        <>
            {/* <Helmet>
                <title>Cinema Box - Главная</title>
            </Helmet> */}
             
            <ListCardsU query={query} path={pathPage} typePage="serial"/>      
        </>
           
    );
};

