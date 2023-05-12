import { Typography } from '@mui/material';
import styled from 'styled-components';


export const TypographyNavLinkStl = styled(Typography)`
    font-weight : 500;
    font-size: 18px;   
    text-decoration: none;  
    ${props => {
        if (props.color2 === 'dark') return `            
            color: white;            
        `;
        if (props.color2 === 'light') return `            
            color: black;
        `;
      }} 
    :hover {
      color: #649f59;  
    }
`;

