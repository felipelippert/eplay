import { createGlobalStyle } from 'styled-components'

const colors = {
  white: '#EEEEEE',
  black: '#333333',
  gray: '#A3A3A3',
  green: '#10AC84'
}

export const GlobalCss = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
  }

  body {
    background-color: ${colors.black};
    color: ${colors.white};
  }
`
