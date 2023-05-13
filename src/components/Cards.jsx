import styled from 'styled-components';

import { Card } from './Card';


const CardsWrapper = styled.div`          
    display: grid;
    grid-template-columns: repeat(auto-fill, 200px);
    grid-gap: 0.8rem;
    justify-content: space-between;
    margin-left: -25px;

    @media (max-width: 500px) {
        justify-content: center;
    }
`;

export const Cards = (props) => {
  const { films } = props;
  return (
      <CardsWrapper>
        {films.map((film) => (
          <Card key={film.filmId} {...film} />
        ))}
      </CardsWrapper>
  );
};
