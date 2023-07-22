import styled from 'styled-components';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

const LinkStyled = styled(Link)`
 /* padding: 1rem 0.9rem; */
 text-decoration: none;
 cursor: pointer; 
`;  

export const NotFoundPage = () => {

    return (
        <>
            <h2>404 - страница не найдена</h2>
            <LinkStyled to="/">
                <Button sx={{ color: '#303891',
                            p: '7px 30px',
                            border: 2,
                            fontWeight: 500,
                            fontSize: 12, 
                        }}>Вернуться на главную
                </Button>
            </LinkStyled>
            
        </>
           
    );
};

