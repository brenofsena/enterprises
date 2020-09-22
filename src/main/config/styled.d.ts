import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string
      secondary: string
      background: string
      white: string
      black: string
      gray: string
      green: string
    }
    borderRadius: string
    font: {
      fontFamily: string
      regular: number
      medium: number
      bold: number
    }
    boxShadow: string
  }
}
