// import { Helmet } from 'react-helmet';
import { ListCardsU } from '../components/ListCardsU';

export const TopPage = (props) => { 

 const query = process.env.REACT_APP_API_TOP_PAGE;   
 const pathPage='/films?page=';
                
    
    return (
        <>
            {/* <Helmet>
                <title>Cinema Box - Главная</title>
            </Helmet> */}           
            <ListCardsU query={query} path={pathPage} typePage="top"/>                      
        </>
           
    );
};

