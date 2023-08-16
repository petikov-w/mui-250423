import { useEffect } from 'react';
import { useParams} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Container } from '@mui/material';

import { Single } from '../components/single/Single';


const SinglePage = () => {
    const dispatch = useDispatch();
    const { id } = useParams();    
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => {  dispatch({type:'SINGLE', payload: {id}});
                    }, [id]);
    
   return (
        <>
            <Container maxWidth="lg">
                <Single />    
            </Container>    
        </>
    );
};

export {SinglePage};