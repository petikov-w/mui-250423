import styled from 'styled-components';
import { Link } from 'react-router-dom';


export const LogoLink = styled(Link)`
  color: var(--colors-text);
   font-size: var(--fs-sm);
   font-weight: var(--fw-bold);
   text-decoration: none;
`;

export const CardLink = styled(Link)`
 /* padding: 1rem 1.5rem;
 color: var(--colors-card-link); 
 font-size: 0.8rem;
 font-weight: var(--fw-light);
 text-decoration: none; */
 cursor: pointer;
 /* &:hover {
      color: var(--colors-card-link-hover);      
    } */
`;  