import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string

    iconArrow: string
    iconSwitch: string
    colors: {
      backgroundColor: string
      text: string
      headerColor: string
      icon: string
      input: string
      back: string
    }
  }
}