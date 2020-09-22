import { createGlobalStyle, DefaultTheme } from 'styled-components'
import { rem } from 'polished'

const theme: DefaultTheme = {
  colors: {
    primary: '#5D0C09',
    secondary: '#C4974F',
    background: '#ebe9d7',
    white: '#fff',
    black: '#000',
    gray: '#383743',
    green: '#4caf50',
    greenyBlue: '#57bbbc',
    mediumPink: '#ee4c77',
    disabledBackground: '#748383',
    disabledColor:'#ccc',
    valid: '#4caf50',
    invalid: '#ef5350',
  },
  borderRadius: '3.6px',
  font: {
    fontFamily: 'Roboto',
    regular: 400,
    medium: 500,
    bold: 700,
  },
  boxShadow: 'rgba(0, 0, 0, 0.08) 0px 2px 4px 0px',
}

const GlobalStyle = createGlobalStyle`
  * {
    font-size: 16px;
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: ${theme.font.fontFamily}
  }

  html {
    font-size: 75.5%;
  }

  body {
    background: ${theme.colors.background};
  }

  input[type="password"],
  input[type="email"],
  input[type="text"] {
    border: none;
    outline: none;
  }

  button {
    background-color: ${theme.colors.greenyBlue};
    line-height: 50px;
    color: #fff;
    border-radius: ${theme.borderRadius};
    font-size: ${rem('18px')};
    border: none;
    padding: 0px 16px;
    outline: none;

    &:hover {
      opacity: 0.9;
    }

    &:disabled {
      background-color: ${theme.colors.disabledBackground};

      &:hover {
        opacity: 1;
      }
    }
  }

  img {
    max-width: 100%;
    height: auto;
  }
`

export { GlobalStyle, theme }
