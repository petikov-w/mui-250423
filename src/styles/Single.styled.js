import styled from 'styled-components';

export const PosterFilm = styled.img`
   height: 600px; 
  object-fit: cover;
  border-radius: 0.5rem;
  object-position: center top; 
  box-shadow: var(--shadow); 
  margin-bottom: 2rem;  
`;

export const BackButton = styled.button`
    padding: 0.8rem 5rem;
    background-color: #88a4c3;
    color: #2a2c2e;
    margin-bottom: 2rem; 
    border-radius: 5px;
    border: none;
`;
export const SingleFilmSection = styled.div`
    display: flex;
    justify-self: flex-start;
    
`;
export const InfoBoxLeft = styled.div`
border: none;
`;

export const InfoBoxRight = styled.div`
    margin-left: 3rem;
`;