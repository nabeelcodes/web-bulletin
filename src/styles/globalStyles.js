import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

export const GlobalStyles = createGlobalStyle`

  ${normalize}

  *,
  *::before,
  *::after {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    ::-webkit-scrollbar {
    width: 8px;
  }

  /* SCROLL-BAR CSS : START */
  ::-webkit-scrollbar-track {
    background: rgba(0, 0, 0, 0);
  }

  ::-webkit-scrollbar-thumb {
    background: #909090;
    border-radius: 8px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #606060;
  }
  /* SCROLL-BAR CSS : END */

  html {
    @media screen and (hover: none) and (pointer: coarse) {
      -webkit-tap-highlight-color: transparent; 
    }
  }
    
  body {
    font-family: ${({ theme }) => theme.fonts.main};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: 1.25rem;
    background: ${({ theme }) => theme.colors.background};
    color: #000;
  }

  h1,h2,h3,h4,h5,h6,button {
    font-family: ${({ theme }) => theme.fonts.main};
  }

  p{
    font-size: 1rem;
  }

  a {
    text-decoration: none;
    color: #000;
    cursor: pointer;
  }

  li{
    list-style: none;
  }
`;