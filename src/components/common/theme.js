import React from 'react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

//project imports
import RobotoThin from 'assets/fonts/Roboto-Thin.ttf';
import RobotoLight from 'assets/fonts/Roboto-Light.ttf';
import RobotoRegular from 'assets/fonts/Roboto-Regular.ttf';
import RobotoMedium from 'assets/fonts/Roboto-Medium.ttf';
import RobotoBold from 'assets/fonts/Roboto-Bold.ttf';
import RobotoBlack from 'assets/fonts/Roboto-Black.ttf';

/*
Container for ThemeProvider and GlobalStyles
*/
const Theme = (props) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {props.children}
    </ThemeProvider>
  );
};

/*
  Context Value for ThemeProvider
*/
const theme = {
  fontFamily: {
    roboto: "'Roboto', sans-serif;",
  },
  space: {
    small: '0.5rem',
    medium: '1rem',
    large: '2rem',
    extraLarge: '4rem',
  },
  breakpoint: {
    small: '640px',
    medium: '960px',
    large: '1280px',
    tablet: '768px',
    desktop: '1280px',
  },
  color: {
    secondary: '#130f40',
    primary: '#4834d4',
    tertiary: '#be2edd',
    accent: '#22a6b3',
    green: '#6ab04c',
    red: '#eb4d4b',
    orange: '#f0932b',
    yellow: '#f9ca24',
    ice: '#c7ecee',
    grey: '#535c68',
  },
  color2: {
    secondary: 'rgba(255,255,255,.05)',
    primary: '#686de0',
    tertiary: '#e056fd',
    accent: '#7ed6df',
    green: '#badc58',
    red: '#ff7979',
    orange: '#ffbe76',
    yellow: '#f6e58d',
    ice: '#dff9fb',
    grey: '#95afc0',
  },
};

// styled component to inject Global Css Styles based on theme
const GlobalStyles = createGlobalStyle`

  /* css reset styles */
  ${normalize}

  /* font styles */
  @font-face {
    font-family: 'Roboto';
    src: local('Roboto'), url(${RobotoThin}) format('truetype');
    font-weight: 100;
  }
  @font-face {
    font-family: 'Roboto';
    src: local('Roboto'), url(${RobotoLight}) format('truetype');
    font-weight: 300;
  }
  @font-face {
    font-family: 'Roboto';
    src: local('Roboto'), url(${RobotoRegular}) format('truetype');
    font-weight: 400;
  }
  @font-face {
    font-family: 'Roboto';
    src: local('Roboto'), url(${RobotoMedium}) format('truetype');
    font-weight: 500;
  }
  @font-face {
    font-family: 'Roboto';
    src: local('Roboto'), url(${RobotoBold}) format('truetype');
    font-weight: 700;
  }
  @font-face {
    font-family: 'Roboto';
    src: local('Roboto'), url(${RobotoBlack}) format('truetype');
    font-weight: 900;
  }

  /* page styles */
  * {
    box-sizing: border-box;
  }
  */ html {
    font-size: calc(14px + (26-14) * ((100vw - 320px) / (2560 - 320)));
  }
  body {
    background-color: ${(props) => props.theme.color.secondary}; /*fallback*/
    font-family: ${(props) => props.theme.fontFamily.roboto};
    color: ${(props) => props.theme.color.secondary};
    font-weight: normal;
    line-height: normal;
    font-weight: 300;
  }
  a {
    text-decoration: none;  
    color: ${(props) => props.theme.color.accent};
    text-shadow:  0px 1px 10px rgba(34, 166, 179, .33);
    font-weight: 900;
    letter-spacing: .5px;
  }
  a:hover {
    text-decoration: none;
  }
  h1,h2,h3,h4,h5,h6 {
    font-weight: 500;
    margin: 0;
  }
`;

export default Theme;
