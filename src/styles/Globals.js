import { createGlobalStyle } from 'styled-components';

export const Global = createGlobalStyle`

* {
  box-sizing: border-box;
}


/* Меню - подсветка активного пункта */
.active {
  color: blue;
  cursor: default;
}



`;