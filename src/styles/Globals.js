import { createGlobalStyle } from 'styled-components';

export const Global = createGlobalStyle`

* {
  box-sizing: border-box;
}

:root {
  /* Типографика */
  --family: Roboto, sans-serif;
  --fs-vsm: 12px;
  --fs-sm: 14px;
  --fs-md: 16px;
  --fw-light: 300;
  --fw-normal: 600;
  --fw-bold: 800;  
}

body {
  margin: 0;
  font-family: var(--family);
  color: var(--colors-text);
  font-weight: var(--fw-light);
  background-color: var(--colors-bg);
}


/* Тема */
body[data-theme='dark'] {
  --colors-text: hsl(0, 16%, 98%);
  /* --colors-text: hsl(0, 0%, 100%); */
  --colors-link: #cbceb7;
  --colors-active-nav: yellowgreen;
  --colors-bg: hsl(207, 26%, 17%);
  --colors-ui-base: hsl(209, 23%, 22%);
  --shadow: rgba(245, 245, 245, 0.2) 0 0 8px;
  --colors-card-link: #c3c3c3;
  --colors-card-link-hover:#ffffff ;
}

body[data-theme='light'] {
  --colors-text: hsl(200, 15%, 8%);
  --colors-link: #1f45b6;
  --colors-active-nav: rgb(12, 159, 29);
  --colors-bg: hsl(0, 0%, 98%);
  --colors-ui-base: hsl(0, 0%, 100%);
  --shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  --colors-card-link: #7d7d7d;
  --colors-card-link-hover: #000000;
}



/* Меню - подсветка активного пункта */
.active {
  color: var(--colors-active-nav);
}

a {
  color: var(--colors-link);
  text-decoration: none;
  font-weight: 500;
}

a:hover {
  text-decoration: underline;
}



`;