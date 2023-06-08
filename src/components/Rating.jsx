import {Typography, Box} from '@mui/material';
import styled from 'styled-components';


const RatingStl = styled(Box)`
     ${props => {
        if (props.rating >= 8 && props.rating <= 10) return `            
        background-color: #17b70e;            
        `;
        if (props.rating >= 6 && props.rating < 8) return `            
        background-color: #ada8a8;
        `;
        if (props.rating < 6) return `            
        background-color: #d71717;
        `;
      }} 
    padding: 0 10px;
    position: absolute;
    border-radius: 15px;
    z-index: 10;
    top: 10px;
    left: -10px;    
`;


export const Rating = (props) => {
 
  return (
      <RatingStl rating={props.rating}>
        <Typography variant="rating">{props.rating}</Typography>
      </RatingStl>
  );
};

